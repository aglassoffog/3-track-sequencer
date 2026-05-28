let isRunning = false;
let isPlaying = false;
let tempo = 120;
let steps = 16;
let timerID = [0,0,0];
let currentStep =[0,0,0];
let nextNoteTime = [0,0,0];
let length = [8,8,8];


// let actualSteps = [0,0,0];
// let sequenceMode = [0,0,0];
// let patternMode = 0;
// let currentSequence = 0;
// let currentPattern = 0;
// let isFirst = false;
// let currentRepeatShift = 0;

function scheduleStep(trackIndex) {
  const time = nextNoteTime[trackIndex];
  const step = currentStep[trackIndex];
  if (pattern.Velocity[trackIndex][step] > 0) {
    playSine(trackGains[trackIndex], time, pattern.Duration[trackIndex][step], pattern.Pitch[trackIndex][step]);
  }
  highlightStep(trackIndex, step);
}

function stepDuration(trackIndex) {
  // return (60 / tempo) / 4;
  return pattern.Duration[trackIndex][currentStep[trackIndex]];
}

function nextStep(trackIndex) {
  return (currentStep[trackIndex] + 1) % length[trackIndex];
}

function nextStepTime(trackIndex) {
  nextNoteTime[trackIndex] += stepDuration(trackIndex);
  currentStep[trackIndex] = nextStep(trackIndex);
}

async function scheduler(trackIndex) {
  while (nextNoteTime[trackIndex] < audioCtx.currentTime + scheduleAheadTime) {
    await scheduleStep(trackIndex);
    nextStepTime(trackIndex);
  }
}

playBtn.addEventListener("click", async () => {
  if (!isRunning) {
    await initAudio();
    isRunning = true;
  }
  if (!isPlaying) {
    currentStep = [0, 0];
    nextNoteTime = [audioCtx.currentTime, audioCtx.currentTime];
    timerID[0] = setInterval(scheduler, lookahead, 0);
    timerID[1] = setInterval(scheduler, lookahead, 1);
  } else {
    clearInterval(timerID[0]);
    clearInterval(timerID[1]);
  }
  isPlaying = !isPlaying;
  playBtn.classList.toggle("playing", isPlaying);
  playBtn.textContent = isPlaying ? "Stop" : "Start";
});
