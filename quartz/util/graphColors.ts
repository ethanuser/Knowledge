export const OBSIDIAN_TAG_COLORS: Record<string, string> = {
  math: "#7f1e17",
  physics: "#bc975f",
  chemistry: "#71afe1",
  biology: "#306025",
  biochemistry: "#874073",
  computers: "#7b80d0",
  engineering: "#d8f669",
  economics: "#90bf57",
  people: "#d989d9",
  psychology: "#4f746f",
}

export const OBSIDIAN_PATH_COLORS: { prefix: string; color: string }[] = [
  { prefix: "personal/", color: "#f9e358" },
]

export function getObsidianTagColor(tag: string): string | undefined {
  return OBSIDIAN_TAG_COLORS[tag.toLowerCase()]
}
