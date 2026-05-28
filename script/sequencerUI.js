const lengthOptions = document.querySelectorAll(".lengthOption");
const rows1 = document.querySelectorAll(".row1");
const rows2 = document.querySelectorAll(".row2");
const rows3 = document.querySelectorAll(".row3");
const stepDiv = [[],[],[]];
const pitchDiv = [[],[],[]];
const lengthTypes = [
  1, 2, 3, 4, 5, 6, 7, 8
  // 9, 10, 11, 12, 13, 14, 15, 16
];


function highlightStep(trackIndex, step) {
  rows1[trackIndex].querySelectorAll(":scope > .step").forEach((cell, s) => {
    cell.classList.toggle("playing", s === step);
  });
}

function updateStepUI(el, trackIndex, stepIndex) {
  const velocity = pattern.Velocity[trackIndex][stepIndex];
  if (velocity > 0) {
    el.classList.toggle("active", true);
    el.style.opacity = velocity;
    if (stepIndex > length[trackIndex] - 1) {
      el.style.background = "hsl(80, 60%, 20%)";
    } else {
      el.style.background = "hsl(220, 100%, 50%)";
    }
  } else {
    el.classList.toggle("active", false);
    el.style.background = "#333";
    if (stepIndex > length[trackIndex] - 1) {
      el.style.opacity = 0.5;
    } else {
      el.style.opacity = 1;
    }
  }
}

function updateUI(trackIndex) {
  rows1[trackIndex].querySelectorAll(":scope > .step").forEach((cell, s) => {
    updateStepUI(cell, trackIndex, s);
  });
}

function createDurationDiv(row, trackIndex) {
  pattern.Duration[trackIndex].forEach((step, stepIndex) => {
    const div = document.createElement("div");
    const span = document.createElement("span");
    const input = document.createElement("input");
    div.className = "step-slide";
    input.type = "range";
    input.min = 0.1;
    input.max = 1;
    input.step = 0.1;
    input.value = step;
    span.textContent = step;

    if ((stepIndex + 1) % 4 === 0) {
      div.classList.add("group-end");
    }

    input.addEventListener("input", () => {
      pattern.Duration[trackIndex][stepIndex] = parseFloat(input.value);
      span.textContent = parseFloat(input.value);
    });

    div.appendChild(input);
    div.appendChild(span);
    row.appendChild(div);
  });
}

function createStepDiv(row, trackIndex) {
  pattern.Velocity[trackIndex].forEach((step, stepIndex) => {
    const div = document.createElement("div");
    // const span = document.createElement("span");
    div.className = "step";
    updateStepUI(div, trackIndex, stepIndex);

    if ((stepIndex + 1) % 4 === 0) {
      div.classList.add("group-end");
    }

    div.addEventListener("click", () => {
      if (pattern.Velocity[trackIndex][stepIndex] > 0) {
        pattern.Velocity[trackIndex][stepIndex] = 0;
        updateStepUI(div, trackIndex, stepIndex);
      } else {
        pattern.Velocity[trackIndex][stepIndex] = 1;
        updateStepUI(div, trackIndex, stepIndex);
      }
    });

    // div.appendChild(span);
    row.appendChild(div);
    stepDiv[trackIndex].push(div);
  });
}

function createPitchDiv(row, trackIndex) {
  pattern.Pitch[trackIndex].forEach((step, stepIndex) => {
    const div = document.createElement("div");
    // const span = document.createElement("span");
    const input = document.createElement("input");
    div.className = "step-slide";
    input.type = "range";
    input.min = 0;
    input.max = 1;
    input.step = 0.01;
    input.value = step;
    const freq = quantizeFreq(step, pattern.Scale[trackIndex], pattern.Key[trackIndex]);
    stepDiv[trackIndex][stepIndex].textContent = freqToNote(freq);

    if ((stepIndex + 1) % 4 === 0) {
      div.classList.add("group-end");
    }

    input.addEventListener("input", () => {
      const freq = quantizeFreq(parseFloat(input.value), pattern.Scale[trackIndex], pattern.Key[trackIndex]);
      pattern.Pitch[trackIndex][stepIndex] = input.value = freqToPitch(freq);
      stepDiv[trackIndex][stepIndex].textContent = freqToNote(freq);
    });

    div.appendChild(input);
    // div.appendChild(span);
    row.appendChild(div);
    pitchDiv[trackIndex].push(input);
  });
}

function createLengthDiv(row, trackIndex) {
  const select = document.createElement("select");
  lengthTypes.forEach(len => {
    const option = document.createElement("option");
    option.value = len;
    option.textContent = len;
    select.appendChild(option);
  });
  select.value = length[trackIndex];
  select.addEventListener("change", () => {
    length[trackIndex] = parseInt(select.value);
    updateUI(trackIndex);
  });
  row.appendChild(select);
}

function initSequencerUI() {
  createLengthDiv(lengthOptions[0], 0);
  createDurationDiv(rows1[0], 0);
  createStepDiv(rows2[0], 0);
  createPitchDiv(rows3[0], 0);
  createLengthDiv(lengthOptions[1], 1);
  createDurationDiv(rows1[1], 1);
  createStepDiv(rows2[1], 1);
  createPitchDiv(rows3[1], 1);
  createLengthDiv(lengthOptions[2], 2);
  createDurationDiv(rows1[2], 2);
  createStepDiv(rows2[2], 2);
  createPitchDiv(rows3[2], 2);
}
