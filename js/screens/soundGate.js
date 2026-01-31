import { go, qs } from "../ui.js";
import { ensureMusicStartedByUserGesture } from "../music.js";

export function initSoundGateScreen() {
  const gateLogo = qs("#gateLogo");
  const gateWrap = qs("#gateWrap");

  async function enterHall() {
    // важный момент: iOS разрешит play() только после user gesture
    await ensureMusicStartedByUserGesture();

    // лёгкая анимация входа (без жести)
    if (gateWrap) gateWrap.classList.add("gateOut");

    setTimeout(() => {
      go("welcome");
    }, 450);
  }

  if (gateLogo) {
    gateLogo.addEventListener("click", enterHall);
  }
}