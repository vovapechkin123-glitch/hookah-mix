import { CONFIG } from "../config.js";
import { go, qs } from "../ui.js";
import { requestLocation, isInsideFence } from "../geo.js";
import { setGeoAccessUntil } from "../storage.js";

export function initDoorScreen() {
  const btnDoor = qs("#btnDoor");
  const btnDoorBot = qs("#btnDoorBot");

  const btnOutsideRetry = qs("#btnOutsideRetry");
  const btnOutsideBack = qs("#btnOutsideBack");

  const btnNoPermRetry = qs("#btnNoPermRetry");
  const btnNoPermBack = qs("#btnNoPermBack");

  const btnGeoErrRetry = qs("#btnGeoErrRetry");
  const btnGeoErrBot = qs("#btnGeoErrBot");
  const btnGeoErrBack = qs("#btnGeoErrBack");

  async function openDoorFlow() {
    try {
      const pos = await requestLocation();
      const ok = isInsideFence(pos.lat, pos.lon);

      if (!ok) {
        go("outside");
        return;
      }

      setGeoAccessUntil(Date.now() + CONFIG.GEO_TTL_MS);

      go("soundGate");
    } catch (e) {
      const code = e?.code;
      if (code === 1) {
        go("no-permission");
        return;
      }
      go("geo-error");
    }
  }

  function openTelegramLocationHint() {
    alert("Отправьте геопозицию в чат бота кнопкой Telegram «📍 Отправить геопозицию».");
  }

  if (btnDoor) btnDoor.addEventListener("click", openDoorFlow);
  if (btnDoorBot) btnDoorBot.addEventListener("click", openTelegramLocationHint);

  if (btnOutsideRetry) btnOutsideRetry.addEventListener("click", openDoorFlow);
  if (btnOutsideBack) btnOutsideBack.addEventListener("click", () => go("door"));

  if (btnNoPermRetry) btnNoPermRetry.addEventListener("click", openDoorFlow);
  if (btnNoPermBack) btnNoPermBack.addEventListener("click", () => go("door"));

  if (btnGeoErrRetry) btnGeoErrRetry.addEventListener("click", openDoorFlow);
  if (btnGeoErrBot) btnGeoErrBot.addEventListener("click", openTelegramLocationHint);
  if (btnGeoErrBack) btnGeoErrBack.addEventListener("click", () => go("door"));
}