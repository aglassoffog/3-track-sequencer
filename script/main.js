let audioCtx = null;
const scheduleAheadTime = 0.1;
const lookahead = 25;
const tracks = document.querySelectorAll(".track");
let hide1 = false;
let hide2 = false;

let pattern = {
  Duration: [Array(8).fill(0.1), Array(8).fill(0.1), Array(8).fill(0.1)],
  Velocity: [Array(8).fill(0.0), Array(8).fill(0.0), Array(8).fill(0.0)],
  Pitch:    [Array(8).fill(0.5), Array(8).fill(0.5), Array(8).fill(0.5)],
  Scale:    [0,0,0],
  Key:      [0,0,0],
  Sound:    ["Sine", "Sine", "Sine"]
};

initScaleUI();
initSequencerUI();
initSoundUI();

ctl1Btn.addEventListener("click",() => {
  if (hide1) {
    tracks[0].classList.remove("hidden");
  } else {
    tracks[0].classList.add("hidden");
  }
  hide1 = !hide1;
  ctl1Btn.classList.toggle("playing", !hide1);
});

ctl2Btn.addEventListener("click",() => {
  if (hide2) {
    tracks[1].classList.remove("hidden");
  } else {
    tracks[1].classList.add("hidden");
  }
  hide2 = !hide2;
  ctl2Btn.classList.toggle("playing", !hide2);
});
