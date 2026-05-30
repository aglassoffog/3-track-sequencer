const soundOptions = document.querySelectorAll(".soundOption");
const soundTypes = {
  Sine:     {Play: playSine},
  Squire:   {Play: playSquire},
  Sawtooth: {Play: playSawtooth},
  Triangl:  {Play: playTriangle}
};

function createSoundDiv(div, trackIndex) {
  for (const [type, sound] of Object.entries(soundTypes)) {
  //soundTypes.forEach((name, i) => {
    const label = document.createElement("label");
    const radio = document.createElement("input");
    const text = document.createElement("span");

    label.classList.add("radio-label");
    text.textContent = type;
    text.classList.add("radio-span");
    radio.type = "radio";
    radio.name = "soundType"+trackIndex;
    radio.value = type;
    radio.addEventListener("change", () => {
      if (radio.checked) {
        pattern.Sound[trackIndex] = radio.value;
      }
    });

    if (type === pattern.Sound[trackIndex]) radio.checked = true;

    label.appendChild(radio);
    label.appendChild(text);
    div.appendChild(label);
  }
}

function initSoundUI() {
  createSoundDiv(soundOptions[0], 0);
  createSoundDiv(soundOptions[1], 1);
  createSoundDiv(soundOptions[2], 2);
}
