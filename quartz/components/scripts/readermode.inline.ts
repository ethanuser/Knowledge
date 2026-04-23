let isReaderMode = false

const isBlogRoute = () => /^\/blog\//i.test(window.location.pathname) || /^\/Blog\//.test(window.location.pathname)

const emitReaderModeChangeEvent = (mode: "on" | "off") => {
  const event: CustomEventMap["readermodechange"] = new CustomEvent("readermodechange", {
    detail: { mode },
  })
  document.dispatchEvent(event)
}

document.addEventListener("nav", () => {
  const switchReaderMode = () => {
    isReaderMode = !isReaderMode
    const newMode = isReaderMode || isBlogRoute() ? "on" : "off"
    document.documentElement.setAttribute("reader-mode", newMode)
    emitReaderModeChangeEvent(newMode)
  }

  for (const readerModeButton of document.getElementsByClassName("readermode")) {
    readerModeButton.addEventListener("click", switchReaderMode)
    window.addCleanup(() => readerModeButton.removeEventListener("click", switchReaderMode))
  }

  // Force reader mode on blog pages while preserving manual toggle elsewhere.
  const initialMode = isReaderMode || isBlogRoute() ? "on" : "off"
  document.documentElement.setAttribute("reader-mode", initialMode)
  emitReaderModeChangeEvent(initialMode)
})
