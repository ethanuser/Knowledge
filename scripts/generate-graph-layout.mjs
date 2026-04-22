import { readFile, writeFile } from "node:fs/promises"
import { forceCenter, forceCollide, forceLink, forceManyBody, forceSimulation } from "d3"
import { globby } from "globby"
import matter from "gray-matter"

const OUTPUT_PATH = "quartz/static/graph-layout.json"
const IGNORE = [
  "node_modules/**",
  ".quartz-public/**",
  ".obsidian/**",
  "quartz/**",
  "legacy/**",
  "templates/**",
  "Templates/**",
  "private/**",
]

function createSeededRandom(seed = 42) {
  let state = seed >>> 0
  return () => {
    state = (1664525 * state + 1013904223) >>> 0
    return state / 0x100000000
  }
}

function jitter(random, scale = 80) {
  return (random() - 0.5) * scale
}

function slugifySegment(segment) {
  return segment
    .trim()
    .replace(/\.[^.]+$/, "")
    .replace(/\s+/g, "-")
    .replace(/&/g, "-and-")
    .replace(/[^\w\-(),']/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "")
}

function fileToSlug(filePath) {
  const normalized = filePath.replace(/\\/g, "/")
  const parts = normalized.split("/")
  const slugParts = parts.map((p) => slugifySegment(p))
  const slug = slugParts.join("/")
  return slug.replace(/\/index$/i, "")
}

const markdownFiles = await globby(["**/*.md"], { gitignore: true, ignore: IGNORE })
const valid = new Set()
const fileBySlug = new Map()
const fileByName = new Map()

for (const file of markdownFiles) {
  const slug = fileToSlug(file)
  valid.add(slug)
  fileBySlug.set(slug.toLowerCase(), slug)
  const base = slug.split("/").at(-1)?.toLowerCase()
  if (base && !fileByName.has(base)) fileByName.set(base, slug)
}

const nodes = []
const nodeMap = new Map()
const links = []
const tags = new Set()

function resolveTarget(rawTarget) {
  const noAlias = rawTarget.split("|")[0].split("#")[0].trim()
  if (!noAlias) return undefined
  const candidate = fileToSlug(noAlias)
  const byPath = fileBySlug.get(candidate.toLowerCase())
  if (byPath) return byPath
  const byBase = fileByName.get(candidate.split("/").at(-1)?.toLowerCase())
  return byBase
}

for (const file of markdownFiles) {
  const slug = fileToSlug(file)
  const raw = await readFile(file, "utf8")
  const parsed = matter(raw)
  const body = parsed.content
  const node = { id: slug, x: 0, y: 0 }
  nodes.push(node)
  nodeMap.set(slug, node)

  const wikiLinks = [...body.matchAll(/\[\[([^\]]+)\]\]/g)].map((m) => m[1])
  for (const wk of wikiLinks) {
    const dest = resolveTarget(wk)
    if (dest && valid.has(dest)) {
      links.push({ source: slug, target: dest })
    }
  }

  const fmTags = parsed.data?.tags
  const tagsArray = Array.isArray(fmTags) ? fmTags : typeof fmTags === "string" ? [fmTags] : []
  for (const rawTag of tagsArray) {
    const tag = String(rawTag).replace(/^#/, "").trim().toLowerCase()
    if (!tag) continue
    tags.add(`tags/${tag}`)
    links.push({ source: slug, target: `tags/${tag}` })
  }
}

for (const tag of tags) {
  if (!nodeMap.has(tag)) {
    const tagNode = { id: tag, x: 0, y: 0 }
    nodes.push(tagNode)
    nodeMap.set(tag, tagNode)
  }
}

const random = createSeededRandom(1337)
for (const node of nodes) {
  node.x = jitter(random, 600)
  node.y = jitter(random, 600)
}

const simulation = forceSimulation(nodes)
  .force("charge", forceManyBody().strength(-45))
  .force("center", forceCenter(0, 0).strength(1.4))
  .force("link", forceLink(links).id((d) => d.id).distance(18).strength(1))
  .force("collide", forceCollide().radius(3.2).iterations(2))
  .velocityDecay(0.18)
  .alphaDecay(0.01)
  .alphaMin(0.001)
  .randomSource(random)

for (let i = 0; i < 700; i++) simulation.tick()
simulation.stop()

const out = {}
for (const n of nodes) {
  out[n.id] = {
    x: Number((n.x ?? 0).toFixed(3)),
    y: Number((n.y ?? 0).toFixed(3)),
  }
}

await writeFile(OUTPUT_PATH, `${JSON.stringify(out)}\n`, "utf8")
console.log(`wrote ${Object.keys(out).length} node positions to ${OUTPUT_PATH}`)
