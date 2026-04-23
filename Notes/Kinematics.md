---
created: 2023-08-20
modified: 2026-04-15
---
# Kinematics Simulator Test

This is a visual vertical-motion simulator. Press play to watch a ball rise and fall under constant acceleration.

## Live visual simulator (runs in page)

<style>
  #kinematics-sim {
    border: 1px solid var(--lightgray);
    border-radius: 10px;
    padding: 1rem;
    margin: 1rem 0;
  }
  #kinematics-sim .row {
    display: grid;
    grid-template-columns: 180px 1fr;
    gap: 0.75rem;
    align-items: center;
    margin-bottom: 0.6rem;
  }
  #kinematics-sim input {
    width: 100%;
    padding: 0.35rem 0.5rem;
  }
  #kinematics-sim button {
    margin-top: 0.4rem;
    padding: 0.45rem 0.8rem;
    cursor: pointer;
  }
  #kinematics-canvas-wrap {
    margin: 0.8rem 0 0.6rem;
    border: 1px solid var(--lightgray);
    border-radius: 8px;
    overflow: hidden;
  }
  #kinematics-canvas {
    width: 100%;
    height: auto;
    display: block;
    background: linear-gradient(to bottom, #d9efff 0%, #f7fbff 70%, #f5f3ef 100%);
  }
  #kinematics-sim .controls {
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
    margin-top: 0.3rem;
  }
  #kinematics-sim .time-row {
    display: grid;
    grid-template-columns: 180px 1fr;
    gap: 0.75rem;
    align-items: center;
    margin-top: 0.65rem;
  }
  #k-time-slider {
    width: 100%;
  }
  #kinematics-status {
    margin-top: 0.7rem;
    font-size: 0.95rem;
    color: var(--darkgray);
  }
  #kinematics-output {
    margin-top: 0.9rem;
    padding: 0.7rem;
    border-radius: 8px;
    background: var(--light);
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
    white-space: pre-wrap;
  }
</style>

<div id="kinematics-sim">
  <div class="row">
    <label for="k-y0">Initial Height y0 (m)</label>
    <input id="k-y0" type="number" step="0.1" value="0" />
  </div>
  <div class="row">
    <label for="k-v0">Initial Vertical Velocity v0 (m/s)</label>
    <input id="k-v0" type="number" step="0.1" value="14" />
  </div>
  <div class="row">
    <label for="k-a">Acceleration a (m/s²)</label>
    <input id="k-a" type="number" step="0.1" value="-9.81" />
  </div>
  <div class="row">
    <label for="k-duration">Simulation Duration (s)</label>
    <input id="k-duration" type="number" step="0.1" min="0.5" value="4.0" />
  </div>
  <div id="kinematics-canvas-wrap">
    <canvas id="kinematics-canvas" width="860" height="320"></canvas>
  </div>
  <div class="controls">
    <button id="k-play" type="button">Play</button>
    <button id="k-pause" type="button">Pause</button>
    <button id="k-reset" type="button">Reset</button>
    <button id="k-apply" type="button">Apply Inputs</button>
  </div>
  <div class="time-row">
    <label for="k-time-slider">Time Scrubber</label>
    <input id="k-time-slider" type="range" min="0" max="4" value="0" step="0.01" />
  </div>
  <div id="kinematics-status">Ready.</div>
  <div id="kinematics-output">Set inputs and press Play.</div>
</div>

<script src="/static/kinematics-sim.js"></script>

If this section does not run, Quartz in your current config is blocking scripts.