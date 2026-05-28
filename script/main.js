let audioCtx = null;
const scheduleAheadTime = 0.1;
const lookahead = 25;
const columns = document.querySelectorAll(".column");
let hide1 = false;
let hide2 = false;

let pattern = {
  Duration: [Array(8).fill(0.1), Array(8).fill(0.1), Array(8).fill(0.1)],
  Velocity: [Array(8).fill(0.0), Array(8).fill(0.0), Array(8).fill(0.0)],
  Pitch:    [Array(8).fill(0.5), Array(8).fill(0.5), Array(8).fill(0.5)],
  Scale:    [0,0,0],
  Key:      [0,0,0]
};

let sounds = [[
  {Type: "Click", Envelope: {Attack: 0, Duration: 0.1}},
  {Type: "Snare", Envelope: {Attack: 0, Duration: 0.2}},
  {Type: "Kick", Envelope: {Attack: null, Duration: 0.1}}
],[
  {Type: "Click", Envelope: {Attack: 0, Duration: 0.1}},
  {Type: "Snare", Envelope: {Attack: 0, Duration: 0.2}},
  {Type: "Kick", Envelope: {Attack: null, Duration: 0.1}}
]];

initScaleUI();
initSequencerUI();

ctl1Btn.addEventListener("click",() => {
  if (hide1) {
    columns[0].classList.remove("hidden");
    columns[1].classList.remove("hidden");
  } else {
    columns[0].classList.add("hidden");
    columns[1].classList.add("hidden");
  }
  hide1 = !hide1;
  ctl1Btn.classList.toggle("playing", !hide1);
});

ctl2Btn.addEventListener("click",() => {
  if (hide2) {
    columns[2].classList.remove("hidden");
    columns[3].classList.remove("hidden");
  } else {
    columns[2].classList.add("hidden");
    columns[3].classList.add("hidden");
  }
  hide2 = !hide2;
  ctl2Btn.classList.toggle("playing", !hide2);
});
