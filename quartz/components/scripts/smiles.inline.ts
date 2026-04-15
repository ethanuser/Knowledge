type SmilesDrawerApi = {
  parse: (
    smiles: string,
    success: (tree: unknown) => void,
    error?: (err: unknown) => void,
  ) => void
  Drawer: new (options?: Record<string, unknown>) => DrawerWithSvg
}

/** Internal shape of smiles-drawer v2.1.7 Drawer + SvgDrawer (not fully typed upstream). */
type DrawerWithSvg = {
  svgDrawer: {
    opts: { width: number; height: number }
    draw: (
      data: unknown,
      target: SVGSVGElement,
      themeName: string,
      weights: null,
      infoOnly: boolean,
      highlight_atoms: unknown[],
    ) => void
    svgWrapper: { toCanvas: (canvas: HTMLCanvasElement, w: number, h: number) => void }
  }
}

declare global {
  interface Window {
    SmilesDrawer?: SmilesDrawerApi
  }
}

const SMILES_DRAWER_CDN = "https://cdn.jsdelivr.net/npm/smiles-drawer@2.1.7/dist/smiles-drawer.min.js"
let smilesDrawerPromise: Promise<SmilesDrawerApi> | null = null

function loadSmilesDrawer(): Promise<SmilesDrawerApi> {
  if (window.SmilesDrawer) {
    return Promise.resolve(window.SmilesDrawer)
  }

  if (smilesDrawerPromise) {
    return smilesDrawerPromise
  }

  smilesDrawerPromise = new Promise((resolve, reject) => {
    const script = document.createElement("script")
    script.src = SMILES_DRAWER_CDN
    script.async = true
    script.onload = () => {
      if (window.SmilesDrawer) {
        resolve(window.SmilesDrawer)
      } else {
        reject(new Error("SmilesDrawer loaded but API was unavailable"))
      }
    }
    script.onerror = () => reject(new Error("Failed to load SmilesDrawer"))
    document.head.appendChild(script)
  })

  return smilesDrawerPromise
}

function extractSmilesFromCodeBlock(code: HTMLElement): string {
  const lineNodes = code.querySelectorAll("span[data-line]")
  let raw = ""

  if (lineNodes.length > 0) {
    const lines = Array.from(lineNodes).map((line) => line.textContent ?? "")
    raw = lines.join("\n")
  } else {
    raw = code.textContent ?? ""
  }

  return raw
    .replace(/\u200b/g, "") // strip zero-width spaces
    .replace(/\r\n/g, "\n")
    .split("\n")
    .map((line) => line.replace(/^\s*\d+\s+/, "").trim()) // guard against line-number text
    .filter((line) => line.length > 0)
    .join("\n")
}

/**
 * smiles-drawer@2.1.7 `Drawer.draw` / `SmilesDrawer.apply` pass wrong args into `SvgDrawer.draw`
 * (it forwards `infoOnly` as `weights`), so `svgWrapper` is never created and drawing throws.
 * Call `svgDrawer.draw(..., null, false, [])` explicitly — same as upstream Drawer intended.
 */
function drawSmilesToCanvas(
  api: SmilesDrawerApi,
  tree: unknown,
  canvas: HTMLCanvasElement,
  themeName: string,
): void {
  const drawer = new api.Drawer({
    width: canvas.width,
    height: canvas.height,
  })
  const { svgDrawer } = drawer
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg")
  svg.setAttribute("xmlns", "http://www.w3.org/2000/svg")
  svg.setAttributeNS(null, "viewBox", `0 0 ${svgDrawer.opts.width} ${svgDrawer.opts.height}`)
  svg.setAttributeNS(null, "width", String(svgDrawer.opts.width))
  svg.setAttributeNS(null, "height", String(svgDrawer.opts.height))
  svgDrawer.draw(tree, svg, themeName, null, false, [])
  svgDrawer.svgWrapper.toCanvas(canvas, svgDrawer.opts.width, svgDrawer.opts.height)
}

function renderSmilesBlocks(api: SmilesDrawerApi) {
  const center = document.querySelector(".center")
  if (!center) return

  const smilesBlocks = center.querySelectorAll('pre[data-language="smiles"]')
  if (smilesBlocks.length === 0) return

  const darkMode = document.documentElement.getAttribute("saved-theme") === "dark"
  const themeName = darkMode ? "dark" : "light"

  smilesBlocks.forEach((pre, index) => {
    const code = pre.querySelector("code")
    if (!code) return

    const smiles = extractSmilesFromCodeBlock(code)
    if (!smiles) return

    const figure = pre.closest("figure")
    if (!figure) return

    const existingOutput = figure.querySelector(".smiles-render")
    if (existingOutput) {
      existingOutput.remove()
    }

    const output = document.createElement("div")
    output.className = "smiles-render"

    const canvas = document.createElement("canvas")
    canvas.id = `smiles-canvas-${index}-${Math.random().toString(36).slice(2, 8)}`
    canvas.width = 420
    canvas.height = 220
    output.appendChild(canvas)
    figure.appendChild(output)

    const showError = (err: unknown) => {
      output.innerHTML = ""
      const fallback = document.createElement("div")
      fallback.className = "smiles-render-error"
      fallback.textContent = `Unable to render SMILES: ${smiles}`
      output.appendChild(fallback)
      console.warn("[SMILES] render failed for input:", smiles, err)
    }

    try {
      api.parse(
        smiles,
        (tree) => {
          try {
            drawSmilesToCanvas(api, tree, canvas, themeName)
          } catch (err) {
            showError(err)
          }
        },
        (err) => showError(err),
      )
    } catch (err) {
      showError(err)
    }
  })
}

async function initializeSmilesRendering() {
  try {
    const api = await loadSmilesDrawer()
    renderSmilesBlocks(api)
  } catch {
    // Keep code fences visible when rendering fails.
  }
}

document.addEventListener("nav", initializeSmilesRendering)
document.addEventListener("themechange", initializeSmilesRendering)
