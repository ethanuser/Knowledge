import readingTime from "reading-time"

type ReadingTimeBreakdown = {
  minutes: number
  words: number
  plainWords: number
  codeWords: number
  mathWords: number
}

const DEFAULT_WPM = 200
const DEFAULT_MATH_WEIGHT = 3
const DEFAULT_CODE_WEIGHT = 1.35

const BLOCK_MATH_RE = /\$\$[\s\S]*?\$\$|\\\[[\s\S]*?\\\]/g
const INLINE_MATH_RE = /\$(?!\$)(?:\\.|[^\\$\n])+\$|\\\((?:\\.|[^\\)\n])+\\\)/g
const FENCED_CODE_RE = /```[\s\S]*?```/g
const INLINE_CODE_RE = /`[^`\n]+`/g

function countWords(text: string): number {
  const normalized = text.trim()
  if (!normalized) return 0
  return normalized.split(/\s+/).filter(Boolean).length
}

function stripDelimiters(text: string): string {
  return text
    .replace(/^\$\$?/, "")
    .replace(/\$\$?$/, "")
    .replace(/^\\\[/, "")
    .replace(/\\\]$/, "")
    .replace(/^\\\(/, "")
    .replace(/\\\)$/, "")
    .replace(/^```[\w-]*/, "")
    .replace(/```$/, "")
    .replace(/^`/, "")
    .replace(/`$/, "")
}

function extractAndBlank(source: string, regex: RegExp) {
  const matches = source.match(regex) ?? []
  const blanked = source.replace(regex, " ")
  return { matches, blanked }
}

export function estimateReadingTime(text: string): ReadingTimeBreakdown {
  const { matches: blockMathMatches, blanked: noBlockMath } = extractAndBlank(text, BLOCK_MATH_RE)
  const { matches: inlineMathMatches, blanked: noMath } = extractAndBlank(noBlockMath, INLINE_MATH_RE)
  const { matches: fencedCodeMatches, blanked: noFencedCode } = extractAndBlank(noMath, FENCED_CODE_RE)
  const { matches: inlineCodeMatches, blanked: plainText } = extractAndBlank(noFencedCode, INLINE_CODE_RE)

  const mathWords = [...blockMathMatches, ...inlineMathMatches]
    .map(stripDelimiters)
    .reduce((sum, segment) => sum + countWords(segment), 0)

  const codeWords = [...fencedCodeMatches, ...inlineCodeMatches]
    .map(stripDelimiters)
    .reduce((sum, segment) => sum + countWords(segment), 0)

  const plainWords = readingTime(plainText).words
  const words = Math.ceil(plainWords + mathWords * DEFAULT_MATH_WEIGHT + codeWords * DEFAULT_CODE_WEIGHT)
  const minutes = words / DEFAULT_WPM

  return {
    minutes,
    words,
    plainWords,
    codeWords,
    mathWords,
  }
}
