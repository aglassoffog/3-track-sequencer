let audioCtx = null;
const scheduleAheadTime = 0.1;
const lookahead = 25;

let pattern = {
  Duration: [Array(16).fill(0.1), Array(16).fill(0.1), Array(16).fill(0.1)],
  Velocity: [Array(16).fill(0), Array(16).fill(0), Array(16).fill(0)],
  Pitch:    [Array(16).fill(0.5), Array(16).fill(0.5), Array(16).fill(0.5)],
  Scale:    [0,0],
  Key:      [0,0]
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
