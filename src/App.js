import React, { useState } from "react";
import "./App.css";
import {
  playC3,
  playDb3,
  playD3,
  playEb3,
  playE3,
  playF3,
  playGb3,
  playG3,
  playAb3,
  playA3,
  playBb3,
  playB3,
  playC4,
  playDb4,
  playD4,
  playEb4,
  playE4,
  playF4,
  playGb4,
  playG4,
  playAb4,
  playA4,
  playBb4,
  playB4,
  playC5,
  playNote,
} from "./tone.fn.js";
import {
  playEb,
  playFm,
  playGm,
  playAb,
  playBb,
  playCm,
  playDo,
  playEbaug,
  playG,
  playBo,
  playEbmaj7,
  playFm7,
  playGm7,
  playAbmaj7,
  playBb7,
  playCm7,
  playDHalfDim7,
  playEbaugMaj7,
  playG7,
  playBo7,
  playCmMaj7,
} from "./chord.fn.js";

window.addEventListener("keydown", playNote);

function App() {
  const [activeNotes, setActiveNotes] = useState([]);

  return (
    <div className="pianoPage">
      <h1>Piano</h1>
      <div className="piano">
        <div
          className={`white-key ${activeNotes.includes("C3") ? "active" : ""}`}
          onClick={playC3}
        >
          C
        </div>
        <div
          className={`black-key ${activeNotes.includes("Db3") ? "active" : ""}`}
          onClick={playDb3}
        >
          C#/D♭
        </div>
        <div
          className={`white-key ${activeNotes.includes("D3") ? "active" : ""}`}
          onClick={playD3}
        >
          D
        </div>
        <div
          className={`black-key ${activeNotes.includes("Eb3") ? "active" : ""}`}
          onClick={playEb3}
        >
          D#/E♭
        </div>
        <div
          className={`white-key ${activeNotes.includes("E3") ? "active" : ""}`}
          onClick={playE3}
        >
          E/F♭
        </div>
        <div
          className={`white-key ${activeNotes.includes("F3") ? "active" : ""}`}
          onClick={playF3}
        >
          F/E#
        </div>
        <div
          className={`black-key ${activeNotes.includes("Gb3") ? "active" : ""}`}
          onClick={playGb3}
        >
          F#/G♭
        </div>
        <div
          className={`white-key ${activeNotes.includes("G3") ? "active" : ""}`}
          onClick={playG3}
        >
          G
        </div>
        <div
          className={`black-key ${activeNotes.includes("Ab3") ? "active" : ""}`}
          onClick={playAb3}
        >
          G#/A♭
        </div>
        <div
          className={`white-key ${activeNotes.includes("A3") ? "active" : ""}`}
          onClick={playA3}
        >
          A
        </div>
        <div
          className={`black-key ${activeNotes.includes("Bb3") ? "active" : ""}`}
          onClick={playBb3}
        >
          A#/B♭
        </div>
        <div
          className={`white-key ${activeNotes.includes("B3") ? "active" : ""}`}
          onClick={playB3}
        >
          B/C♭
        </div>
        <div
          className={`white-key ${activeNotes.includes("C4") ? "active" : ""}`}
          onClick={playC4}
        >
          C/B#
        </div>
        <div
          className={`black-key ${activeNotes.includes("Db4") ? "active" : ""}`}
          onClick={playDb4}
        >
          C#/D♭
        </div>
        <div
          className={`white-key ${activeNotes.includes("D4") ? "active" : ""}`}
          onClick={playD4}
        >
          D
        </div>
        <div
          className={`black-key ${activeNotes.includes("Eb4") ? "active" : ""}`}
          onClick={playEb4}
        >
          D#/E♭
        </div>
        <div
          className={`white-key ${activeNotes.includes("E4") ? "active" : ""}`}
          onClick={playE4}
        >
          E/F♭
        </div>
        <div
          className={`white-key ${activeNotes.includes("F4") ? "active" : ""}`}
          onClick={playF4}
        >
          F/E#
        </div>
        <div
          className={`black-key ${activeNotes.includes("Gb4") ? "active" : ""}`}
          onClick={playGb4}
        >
          F#/G♭
        </div>
        <div
          className={`white-key ${activeNotes.includes("G4") ? "active" : ""}`}
          onClick={playG4}
        >
          G
        </div>
        <div
          className={`black-key ${activeNotes.includes("Ab4") ? "active" : ""}`}
          onClick={playAb4}
        >
          G#/A♭
        </div>
        <div
          className={`white-key ${activeNotes.includes("A4") ? "active" : ""}`}
          onClick={playA4}
        >
          A
        </div>
        <div
          className={`black-key ${activeNotes.includes("Bb4") ? "active" : ""}`}
          onClick={playBb4}
        >
          A#/B♭
        </div>
        <div
          className={`white-key ${activeNotes.includes("B4") ? "active" : ""}`}
          onClick={playB4}
        >
          B/C♭
        </div>
        <div
          className={`white-key ${activeNotes.includes("C5") ? "active" : ""}`}
          onClick={playC5}
        >
          C/B#
        </div>
      </div>
      <div className="chord">
        <div className="nature">
          <h1>Nature</h1>
          <div className="nature-chords">
            <div className="nature-triad">
              <h2>Triad</h2>
              <button
                className="chord-btn"
                id="Eb"
                onClick={() => playEb(activeNotes, setActiveNotes)}
              >
                E♭
              </button>
              <button
                className="chord-btn"
                id="Fm"
                onClick={() => playFm(activeNotes, setActiveNotes)}
              >
                Fm
              </button>
              <button
                className="chord-btn"
                id="Gm"
                onClick={() => playGm(activeNotes, setActiveNotes)}
              >
                Gm
              </button>
              <button
                className="chord-btn"
                id="Ab"
                onClick={() => playAb(activeNotes, setActiveNotes)}
              >
                A♭
              </button>
              <button
                className="chord-btn"
                id="Bb"
                onClick={() => playBb(activeNotes, setActiveNotes)}
              >
                B♭
              </button>
              <button
                className="chord-btn"
                id="Cm"
                onClick={() => playCm(activeNotes, setActiveNotes)}
              >
                Cm
              </button>
              <button
                className="chord-btn"
                id="Do"
                onClick={() => playDo(activeNotes, setActiveNotes)}
              >
                D°
              </button>
            </div>
            <div className="nature-seventh">
              <h2>7th</h2>
              <button
                className="chord-btn"
                id="Ebmaj7"
                onClick={() => playEbmaj7(activeNotes, setActiveNotes)}
              >
                E♭Δ7
              </button>
              <button
                className="chord-btn"
                id="Fm7"
                onClick={() => playFm7(activeNotes, setActiveNotes)}
              >
                Fm7
              </button>
              <button
                className="chord-btn"
                id="Gm7"
                onClick={() => playGm7(activeNotes, setActiveNotes)}
              >
                Gm7
              </button>
              <button
                className="chord-btn"
                id="Abmaj7"
                onClick={() => playAbmaj7(activeNotes, setActiveNotes)}
              >
                A♭Δ7
              </button>
              <button
                className="chord-btn"
                id="Bb7"
                onClick={() => playBb7(activeNotes, setActiveNotes)}
              >
                B♭7
              </button>
              <button
                className="chord-btn"
                id="Cm7"
                onClick={() => playCm7(activeNotes, setActiveNotes)}
              >
                Cm7
              </button>
              <button
                className="chord-btn"
                id="DHalfDim7"
                onClick={() => playDHalfDim7(activeNotes, setActiveNotes)}
              >
                Dø7
              </button>
            </div>
          </div>
        </div>
        <div className="harmony">
          <h1>Harmony</h1>
          <div className="harmony-chords">
            <div className="harmony-triad">
              <h2>Triad</h2>
              <button
                className="chord-btn"
                id="Ebaug"
                onClick={() => playEbaug(activeNotes, setActiveNotes)}
              >
                E♭+
              </button>
              <button
                className="chord-btn"
                id="Fm"
                onClick={() => playFm(activeNotes, setActiveNotes)}
              >
                Fm
              </button>
              <button
                className="chord-btn"
                id="G"
                onClick={() => playG(activeNotes, setActiveNotes)}
              >
                G
              </button>
              <button
                className="chord-btn"
                id="Ab"
                onClick={() => playAb(activeNotes, setActiveNotes)}
              >
                A♭
              </button>
              <button
                className="chord-btn"
                id="Bo"
                onClick={() => playBo(activeNotes, setActiveNotes)}
              >
                B°
              </button>
              <button
                className="chord-btn"
                id="Cm"
                onClick={() => playCm(activeNotes, setActiveNotes)}
              >
                Cm
              </button>
              <button
                className="chord-btn"
                id="Do"
                onClick={() => playDo(activeNotes, setActiveNotes)}
              >
                D°
              </button>
            </div>
            <div className="harmony-seventh">
              <h2>7th</h2>
              <button
                className="chord-btn"
                id="Ebaugmaj7"
                onClick={() => playEbaugMaj7(activeNotes, setActiveNotes)}
              >
                E♭+Δ7
              </button>
              <button
                className="chord-btn"
                id="Fm7"
                onClick={() => playFm7(activeNotes, setActiveNotes)}
              >
                Fm7
              </button>
              <button
                className="chord-btn"
                id="G7"
                onClick={() => playG7(activeNotes, setActiveNotes)}
              >
                G7
              </button>
              <button
                className="chord-btn"
                id="Abmaj7"
                onClick={() => playAbmaj7(activeNotes, setActiveNotes)}
              >
                A♭Δ7
              </button>
              <button
                className="chord-btn"
                id="Bo7"
                onClick={() => playBo7(activeNotes, setActiveNotes)}
              >
                B°7
              </button>
              <button
                className="chord-btn"
                id="Cmmaj7"
                onClick={() => playCmMaj7(activeNotes, setActiveNotes)}
              >
                CmΔ7
              </button>
              <button
                className="chord-btn"
                id="Do"
                onClick={() => playDHalfDim7(activeNotes, setActiveNotes)}
              >
                Dø7
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
