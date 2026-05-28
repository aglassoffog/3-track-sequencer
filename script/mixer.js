let masterGain;
let mixGains;
let trackGains;

async function initAudio() {

  audioCtx = new (window.AudioContext || window.webkitAudioContext)();

  masterGain = audioCtx.createGain();
  masterGain.gain.value = 0.8;
  const destination = audioCtx.createMediaStreamDestination();
  audioEl.srcObject = destination.stream;
  audioEl.play();
  masterGain.connect(destination);

  trackGains = [audioCtx.createGain(),audioCtx.createGain()];
  trackGains.forEach(g => {
    g.gain.value = 1.0;
    g.connect(masterGain);
  });

  await audioCtx.resume();
}
