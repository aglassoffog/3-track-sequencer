const soundBase = 110;
const soundOct = 4;

function playSine(dest, time, duration, pitch) {
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();

  osc.frequency.value = soundBase * Math.pow(2, pitch * soundOct);

  gain.gain.setValueAtTime(0, time);
  gain.gain.linearRampToValueAtTime(0.3, time + 0.05);
  gain.gain.exponentialRampToValueAtTime(0.001, time + duration);

  osc.connect(gain).connect(dest);

  osc.start(time);
  osc.stop(time + duration);
}

function playSquire(dest, time, duration, pitch) {
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();

  osc.type = "square";
  osc.frequency.value = soundBase * Math.pow(2, pitch * soundOct);

  gain.gain.setValueAtTime(0, time);
  gain.gain.linearRampToValueAtTime(0.3, time + 0.05);
  gain.gain.exponentialRampToValueAtTime(0.001, time + duration);

  osc.connect(gain).connect(dest);

  osc.start(time);
  osc.stop(time + duration);
}

function playSawtooth(dest, time, duration, pitch) {
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();

  osc.type = "sawtooth";
  osc.frequency.value = soundBase * Math.pow(2, pitch * soundOct);

  gain.gain.setValueAtTime(0, time);
  gain.gain.linearRampToValueAtTime(0.3, time + 0.05);
  gain.gain.exponentialRampToValueAtTime(0.001, time + duration);

  osc.connect(gain).connect(dest);

  osc.start(time);
  osc.stop(time + duration);
}

function playTriangle(dest, time, duration, pitch) {
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();

  osc.type = "triangle";
  osc.frequency.value = soundBase * Math.pow(2, pitch * soundOct);

  gain.gain.setValueAtTime(0, time);
  gain.gain.linearRampToValueAtTime(0.3, time + 0.05);
  gain.gain.exponentialRampToValueAtTime(0.001, time + duration);

  osc.connect(gain).connect(dest);

  osc.start(time);
  osc.stop(time + duration);
}
