const scaleOptions = document.querySelectorAll(".scaleOption");
const keyOptions = document.querySelectorAll(".keyOption");

function createScaleDiv(div, trackIndex) {
  scaleTypes.forEach((mode, i) => {
    const label = document.createElement("label");
    const radio = document.createElement("input");
    const text = document.createElement("span");

    label.classList.add("radio-label");
    text.textContent = mode;
    text.classList.add("radio-span");
    radio.type = "radio";
    radio.name = "scaleType"+trackIndex;
    radio.value = i;
    radio.addEventListener("change", () => {
      if (radio.checked) {
        pattern.Scale[trackIndex] = parseInt(radio.value);
        pattern.Pitch[trackIndex].forEach((step, stepIndex) => {
          const freq = quantizeFreq(step, pattern.Scale[trackIndex], pattern.Key[trackIndex]);
          pattern.Pitch[trackIndex][stepIndex] = pitchDiv[trackIndex][stepIndex].value = freqToPitch(freq);
          stepDiv[trackIndex][stepIndex].textContent = freqToNote(freq);
        });
      }
    });

    if (i === pattern.Scale[trackIndex]) radio.checked = true;

    label.appendChild(radio);
    label.appendChild(text);
    div.appendChild(label);
  });
}

function createKeyDiv(div, trackIndex) {
  noteNames.forEach((mode, i) => {
    const label = document.createElement("label");
    const radio = document.createElement("input");
    const text = document.createElement("span");

    label.classList.add("radio-label");
    text.textContent = mode;
    text.classList.add("radio-span");
    radio.type = "radio";
    radio.name = "keyType"+trackIndex;
    radio.value = i;
    radio.addEventListener("change", () => {
      if (radio.checked) {
        pattern.Key[trackIndex] = parseInt(radio.value);
        pattern.Pitch[trackIndex].forEach((step, stepIndex) => {
          const freq = quantizeFreq(step, pattern.Scale[trackIndex], pattern.Key[trackIndex]);
          pattern.Pitch[trackIndex][stepIndex] = pitchDiv[trackIndex][stepIndex].value = freqToPitch(freq);
          stepDiv[trackIndex][stepIndex].textContent = freqToNote(freq);
        });
      }
    });

    if (i === pattern.Key[trackIndex]) radio.checked = true;

    label.appendChild(radio);
    label.appendChild(text);
    div.appendChild(label);
  });
}

function initScaleUI() {
  createScaleDiv(scaleOptions[0], 0);
  createKeyDiv(keyOptions[0], 0);
  createScaleDiv(scaleOptions[1], 1);
  createKeyDiv(keyOptions[1], 1);
  createScaleDiv(scaleOptions[2], 2);
  createKeyDiv(keyOptions[2], 2);
}
