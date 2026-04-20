(function () {
  function readNumber(id) {
    var el = document.getElementById(id)
    if (!el) return 0
    var value = Number(el.value)
    return Number.isFinite(value) ? value : 0
  }

  function kinematicsStep(initialHeight, initialVelocity, acceleration, time) {
    var position = initialHeight + initialVelocity * time + 0.5 * acceleration * time * time
    var velocity = initialVelocity + acceleration * time
    return { position: position, velocity: velocity }
  }

  function drawScene(ctx, state) {
    var canvas = state.canvas
    var width = canvas.width
    var height = canvas.height
    var groundY = height - 28
    var leftPad = 42
    var rightPad = 24
    var pathHeight = groundY - 24
    var maxHeight = Math.max(state.maxVisualHeight, 0.5)
    var pxPerMeter = pathHeight / maxHeight
    var ballRadius = 12

    ctx.clearRect(0, 0, width, height)

    ctx.strokeStyle = "rgba(50, 50, 50, 0.55)"
    ctx.lineWidth = 2
    ctx.beginPath()
    ctx.moveTo(leftPad, groundY)
    ctx.lineTo(width - rightPad, groundY)
    ctx.stroke()

    ctx.fillStyle = "rgba(80, 80, 80, 0.7)"
    ctx.fillText("ground", leftPad + 6, groundY - 8)

    var tRatio = state.duration > 0 ? state.currentTime / state.duration : 0
    var x = leftPad + tRatio * (width - leftPad - rightPad)
    var yMeters = Math.max(state.currentPosition, 0)
    var y = groundY - yMeters * pxPerMeter
    y = Math.min(y, groundY - ballRadius)

    ctx.strokeStyle = "rgba(39, 110, 241, 0.35)"
    ctx.lineWidth = 2
    ctx.beginPath()
    for (var i = 0; i <= 80; i += 1) {
      var s = (i / 80) * state.duration
      var p = kinematicsStep(state.y0, state.v0, state.a, s).position
      var pClamped = Math.max(p, 0)
      var tx = leftPad + (i / 80) * (width - leftPad - rightPad)
      var ty = groundY - pClamped * pxPerMeter
      if (i === 0) ctx.moveTo(tx, ty)
      else ctx.lineTo(tx, ty)
    }
    ctx.stroke()

    ctx.fillStyle = "#f97316"
    ctx.beginPath()
    ctx.arc(x, y, ballRadius, 0, Math.PI * 2)
    ctx.fill()

    ctx.fillStyle = "rgba(20, 20, 20, 0.72)"
    ctx.fillText("t = " + state.currentTime.toFixed(2) + " s", width - 120, 20)
  }

  function updateReadout(state) {
    var outputEl = document.getElementById("kinematics-output")
    var statusEl = document.getElementById("kinematics-status")
    if (!outputEl || !statusEl) return

    var result = kinematicsStep(state.y0, state.v0, state.a, state.currentTime)
    state.currentPosition = Math.max(result.position, 0)
    state.currentVelocity = result.velocity

    var output =
      "Inputs\n" +
      "y0 = " + state.y0.toFixed(3) + " m\n" +
      "v0 = " + state.v0.toFixed(3) + " m/s\n" +
      "a  = " + state.a.toFixed(3) + " m/s^2\n" +
      "t  = " + state.currentTime.toFixed(3) + " s\n\n" +
      "Results\n" +
      "y(t) = " + state.currentPosition.toFixed(3) + " m\n" +
      "v(t) = " + state.currentVelocity.toFixed(3) + " m/s"

    outputEl.textContent = output
    statusEl.textContent = state.isPlaying ? "Playing..." : "Paused."
  }

  function computeVisualScale(y0, v0, a, duration) {
    var maxHeight = Math.max(y0, 0)
    for (var i = 0; i <= 120; i += 1) {
      var t = (i / 120) * duration
      var p = kinematicsStep(y0, v0, a, t).position
      if (p > maxHeight) maxHeight = p
    }
    return Math.max(maxHeight * 1.15, 2)
  }

  function initKinematicsSimulation() {
    var root = document.getElementById("kinematics-sim")
    if (!root) return
    if (root.dataset.kinematicsBound === "true") return

    var playButton = document.getElementById("k-play")
    var pauseButton = document.getElementById("k-pause")
    var resetButton = document.getElementById("k-reset")
    var applyButton = document.getElementById("k-apply")
    var slider = document.getElementById("k-time-slider")
    var canvas = document.getElementById("kinematics-canvas")
    if (!playButton || !pauseButton || !resetButton || !applyButton || !slider || !canvas) return

    var ctx = canvas.getContext("2d")
    if (!ctx) return

    var state = {
      y0: readNumber("k-y0"),
      v0: readNumber("k-v0"),
      a: readNumber("k-a"),
      duration: Math.max(readNumber("k-duration"), 0.5),
      currentTime: 0,
      currentPosition: 0,
      currentVelocity: 0,
      maxVisualHeight: 2,
      isPlaying: false,
      rafId: 0,
      canvas: canvas,
      lastStamp: 0,
    }

    function syncSlider() {
      slider.min = "0"
      slider.max = String(state.duration)
      slider.step = "0.01"
      slider.value = String(state.currentTime)
    }

    function renderFrame() {
      updateReadout(state)
      drawScene(ctx, state)
      syncSlider()
    }

    function stopAnimation() {
      state.isPlaying = false
      state.lastStamp = 0
      if (state.rafId) {
        cancelAnimationFrame(state.rafId)
        state.rafId = 0
      }
      renderFrame()
    }

    function tick(stamp) {
      if (!state.isPlaying) return
      if (!state.lastStamp) state.lastStamp = stamp
      var dt = (stamp - state.lastStamp) / 1000
      state.lastStamp = stamp
      state.currentTime = Math.min(state.currentTime + dt, state.duration)
      renderFrame()
      if (state.currentTime >= state.duration) {
        stopAnimation()
        return
      }
      state.rafId = requestAnimationFrame(tick)
    }

    function applyInputs() {
      state.y0 = readNumber("k-y0")
      state.v0 = readNumber("k-v0")
      state.a = readNumber("k-a")
      state.duration = Math.max(readNumber("k-duration"), 0.5)
      state.maxVisualHeight = computeVisualScale(state.y0, state.v0, state.a, state.duration)
      state.currentTime = Math.min(state.currentTime, state.duration)
      renderFrame()
    }

    playButton.addEventListener("click", function () {
      if (state.isPlaying) return
      state.isPlaying = true
      state.lastStamp = 0
      state.rafId = requestAnimationFrame(tick)
      renderFrame()
    })

    pauseButton.addEventListener("click", function () {
      stopAnimation()
    })

    resetButton.addEventListener("click", function () {
      stopAnimation()
      state.currentTime = 0
      renderFrame()
    })

    applyButton.addEventListener("click", function () {
      stopAnimation()
      state.currentTime = 0
      applyInputs()
    })

    slider.addEventListener("input", function () {
      stopAnimation()
      state.currentTime = Number(slider.value)
      renderFrame()
    })

    root.dataset.kinematicsBound = "true"
    state.maxVisualHeight = computeVisualScale(state.y0, state.v0, state.a, state.duration)
    renderFrame()
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initKinematicsSimulation, { once: true })
  } else {
    initKinematicsSimulation()
  }

  // Quartz SPA navigation morphs page content without full reload.
  document.addEventListener("nav", initKinematicsSimulation)
})()
