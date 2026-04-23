type SortKey = "created" | "title" | "tag"
type SortDirection = "asc" | "desc"

function compareStrings(a: string, b: string): number {
  return a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" })
}

function sortFolderList(container: HTMLElement, key: SortKey, direction: SortDirection) {
  const list = container.querySelector("ul.section-ul")
  if (!list) return

  const items = Array.from(list.querySelectorAll(":scope > li.section-li")) as HTMLElement[]
  if (items.length === 0) return

  items.sort((a, b) => {
    let result = 0
    if (key === "title") {
      result = compareStrings(a.dataset.sortTitle ?? "", b.dataset.sortTitle ?? "")
    } else if (key === "tag") {
      const tagA = a.dataset.sortTag ?? "~"
      const tagB = b.dataset.sortTag ?? "~"
      const byTag = compareStrings(tagA || "~", tagB || "~")
      result = byTag !== 0 ? byTag : compareStrings(a.dataset.sortTitle ?? "", b.dataset.sortTitle ?? "")
    } else {
      const aCreated = Number(a.dataset.sortCreated ?? "0")
      const bCreated = Number(b.dataset.sortCreated ?? "0")
      result = aCreated - bCreated
    }
    return direction === "asc" ? result : -result
  })

  for (const item of items) {
    list.appendChild(item)
  }
}

function setSortIndicators(container: HTMLElement, activeKey: SortKey, direction: SortDirection) {
  const buttons = Array.from(container.querySelectorAll(".folder-sort-btn")) as HTMLButtonElement[]
  for (const btn of buttons) {
    const key = btn.dataset.sortKey as SortKey | undefined
    btn.classList.remove("sort-active", "sort-asc", "sort-desc")
    if (key === activeKey) {
      btn.classList.add("sort-active", direction === "asc" ? "sort-asc" : "sort-desc")
      btn.setAttribute("aria-pressed", "true")
    } else {
      btn.setAttribute("aria-pressed", "false")
    }
  }
}

document.addEventListener("nav", () => {
  const sortableContainers = Array.from(
    document.querySelectorAll('.page-listing[data-folder-sortable="true"]'),
  ) as HTMLElement[]

  for (const container of sortableContainers) {
    let activeKey: SortKey = "created"
    let direction: SortDirection = "desc"
    sortFolderList(container, activeKey, direction)
    setSortIndicators(container, activeKey, direction)

    const buttons = Array.from(container.querySelectorAll(".folder-sort-btn")) as HTMLButtonElement[]
    for (const btn of buttons) {
      const handleClick = () => {
        const key = btn.dataset.sortKey as SortKey | undefined
        if (!key) return
        if (key === activeKey) {
          direction = direction === "asc" ? "desc" : "asc"
        } else {
          activeKey = key
          direction = key === "created" ? "desc" : "asc"
        }
        sortFolderList(container, activeKey, direction)
        setSortIndicators(container, activeKey, direction)
      }
      btn.addEventListener("click", handleClick)
      window.addCleanup(() => btn.removeEventListener("click", handleClick))
    }
  }
})
