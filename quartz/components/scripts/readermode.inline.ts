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
    const newMode = isReaderMode ? "on" : "off"
    document.documentElement.setAttribute("reader-mode", newMode)
    emitReaderModeChangeEvent(newMode)
  }

  for (const readerModeButton of document.getElementsByClassName("readermode")) {
    readerModeButton.addEventListener("click", switchReaderMode)
    window.addCleanup(() => readerModeButton.removeEventListener("click", switchReaderMode))
  }

  // Default reader mode to on for blog routes, but allow manual toggling afterwards.
  isReaderMode = isBlogRoute() ? true : isReaderMode
  const initialMode = isReaderMode ? "on" : "off"
  document.documentElement.setAttribute("reader-mode", initialMode)
  emitReaderModeChangeEvent(initialMode)
})
