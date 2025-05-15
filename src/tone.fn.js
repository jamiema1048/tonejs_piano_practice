import * as Tone from "tone";

export function playC3() {
  const PolySynth = new Tone.PolySynth().toDestination();
  PolySynth.triggerAttackRelease("C3", "8n");
}
export function playDb3() {
  const PolySynth = new Tone.PolySynth().toDestination();
  PolySynth.triggerAttackRelease("Db3", "8n");
}
export function playD3() {
  const PolySynth = new Tone.PolySynth().toDestination();
  PolySynth.triggerAttackRelease("D3", "8n");
}
export function playEb3() {
  const PolySynth = new Tone.PolySynth().toDestination();
  PolySynth.triggerAttackRelease("Eb3", "8n");
}
export function playE3() {
  const PolySynth = new Tone.PolySynth().toDestination();
  PolySynth.triggerAttackRelease("E3", "8n");
}
export function playF3() {
  const PolySynth = new Tone.PolySynth().toDestination();
  PolySynth.triggerAttackRelease("F3", "8n");
}
export function playGb3() {
  const PolySynth = new Tone.PolySynth().toDestination();
  PolySynth.triggerAttackRelease("Gb3", "8n");
}
export function playG3() {
  const PolySynth = new Tone.PolySynth().toDestination();
  PolySynth.triggerAttackRelease("G3", "8n");
}
export function playAb3() {
  const PolySynth = new Tone.PolySynth().toDestination();
  PolySynth.triggerAttackRelease("Ab3", "8n");
}
export function playA3() {
  const PolySynth = new Tone.PolySynth().toDestination();
  PolySynth.triggerAttackRelease("A3", "8n");
}
export function playBb3() {
  const PolySynth = new Tone.PolySynth().toDestination();
  PolySynth.triggerAttackRelease("Bb3", "8n");
}
export function playB3() {
  const PolySynth = new Tone.PolySynth().toDestination();
  PolySynth.triggerAttackRelease("B3", "8n");
}
export function playC4() {
  const PolySynth = new Tone.PolySynth().toDestination();
  PolySynth.triggerAttackRelease("C4", "8n");
}
export function playDb4() {
  const PolySynth = new Tone.PolySynth().toDestination();
  PolySynth.triggerAttackRelease("Db4", "8n");
}
export function playD4() {
  const PolySynth = new Tone.PolySynth().toDestination();
  PolySynth.triggerAttackRelease("D4", "8n");
}
export function playEb4() {
  const PolySynth = new Tone.PolySynth().toDestination();
  PolySynth.triggerAttackRelease("Eb4", "8n");
}
export function playE4() {
  const PolySynth = new Tone.PolySynth().toDestination();
  PolySynth.triggerAttackRelease("E4", "8n");
}
export function playF4() {
  const PolySynth = new Tone.PolySynth().toDestination();
  PolySynth.triggerAttackRelease("F4", "8n");
}
export function playGb4() {
  const PolySynth = new Tone.PolySynth().toDestination();
  PolySynth.triggerAttackRelease("Gb4", "8n");
}
export function playG4() {
  const PolySynth = new Tone.PolySynth().toDestination();
  PolySynth.triggerAttackRelease("G4", "8n");
}
export function playAb4() {
  const PolySynth = new Tone.PolySynth().toDestination();
  PolySynth.triggerAttackRelease("Ab4", "8n");
}
export function playA4() {
  const PolySynth = new Tone.PolySynth().toDestination();
  PolySynth.triggerAttackRelease("A4", "8n");
}
export function playBb4() {
  const PolySynth = new Tone.PolySynth().toDestination();
  PolySynth.triggerAttackRelease("Bb4", "8n");
}
export function playB4() {
  const PolySynth = new Tone.PolySynth().toDestination();
  PolySynth.triggerAttackRelease("B4", "8n");
}
export function playC5() {
  const PolySynth = new Tone.PolySynth().toDestination();
  PolySynth.triggerAttackRelease("C5", "8n");
}

export function playNote(event) {
  if (event.keyCode === 65) {
    playC4();
  }
  if (event.keyCode === 87) {
    playDb4();
  }
  if (event.keyCode === 83) {
    playD4();
  }
  if (event.keyCode === 69) {
    playEb4();
  }
  if (event.keyCode === 68) {
    playE4();
  }
  if (event.keyCode === 70) {
    playF4();
  }
  if (event.keyCode === 84) {
    playGb4();
  }
  if (event.keyCode === 71) {
    playG4();
  }
  if (event.keyCode === 89) {
    playAb4();
  }
  if (event.keyCode === 72) {
    playA4();
  }
  if (event.keyCode === 85) {
    playBb4();
  }
  if (event.keyCode === 74) {
    playB4();
  }
  if (event.keyCode === 75) {
    playC5();
  }
}
