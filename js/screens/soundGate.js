import { go, qs } from "../ui.js";
import { ensureMusicStartedByUserGesture } from "../music.js";

export function initSoundGateScreen() {
  const gateLogo = qs("#gateLogo");
  const gateWrap = qs("#gateWrap");

  async function enterHall() {
    await ensureMusicStartedByUserGesture();

    if (gateWrap) gateWrap.classList.add("gateOut");

    setTimeout(() => {
      go("welcome");
    }, 520);
  }

  if (gateLogo) gateLogo.addEventListener("click", enterHall);
}