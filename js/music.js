import { CONFIG } from "./config.js";
import { qs } from "./ui.js";
import { getMusicOnState, setMusicOnState } from "./storage.js";

let audioEl = null;
let btnFloating = null;
let btnInline = null;

function setBtnState(on) {
  const list = [btnFloating, btnInline].filter(Boolean);
  list.forEach(b => {
    b.classList.toggle("off", !on);
    b.classList.toggle("on", on);
  });
}

async function play() {
  if (!audioEl) return;
  audioEl.volume = CONFIG.MUSIC_VOLUME;
  try {
    await audioEl.play();
    setMusicOnState(true);
    setBtnState(true);
  } catch (e) {
    // iOS может блокировать, если не было клика
    console.warn("Music play blocked:", e);
    setMusicOnState(false);
    setBtnState(false);
  }
}

function pause() {
  if (!audioEl) return;
  audioEl.pause();
  setMusicOnState(false);
  setBtnState(false);
}

export function initMusic() {
  audioEl = qs("#bgMusic");
  btnFloating = qs("#soundBtnFloating");
  btnInline = qs("#soundBtnInline");

  if (audioEl) audioEl.volume = CONFIG.MUSIC_VOLUME;

  // восстановим состояние
  const on = getMusicOnState();
  setBtnState(on);

  if (btnFloating) {
    btnFloating.addEventListener("click", () => {
      if (!audioEl) return;
      if (audioEl.paused) play();
      else pause();
    });
  }

  if (btnInline) {
    btnInline.addEventListener("click", () => {
      if (!audioEl) return;
      if (audioEl.paused) play();
      else pause();
    });
  }
}

export async function ensureMusicStartedByUserGesture() {
  // вызывается из soundGate при клике по знаку
  await play();
}

export function stopMusic() {
  pause();
}