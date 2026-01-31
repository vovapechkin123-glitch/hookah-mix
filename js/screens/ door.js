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

      // допуск на время
      setGeoAccessUntil(Date.now() + CONFIG.GEO_TTL_MS);

      // дальше — включить зал (sound gate)
      go("soundGate");
    } catch (e) {
      // iOS часто даёт:
      // - permission denied
      // - timeout
      // - position unavailable
      const code = e?.code;

      // 1 = PERMISSION_DENIED
      if (code === 1) {
        go("no-permission");
        return;
      }

      // 2 = POSITION_UNAVAILABLE
      // 3 = TIMEOUT
      go("geo-error");
    }
  }

  function openTelegramLocationHint() {
    // Это заглушка: ты уже используешь кнопку "Отправить геопозицию" в Telegram.
    // Тут можно просто показать текст/подсказку.
    alert("Отправьте геопозицию в чат бота кнопкой Telegram «📍 Отправить геопозицию».");
  }

  if (btnDoor) btnDoor.addEventListener("click", openDoorFlow);
  if (btnDoorBot) btnDoorBot.addEventListener("click", openTelegramLocationHint);

  if (btnOutsideRetry) btnOutsideRetry.addEventListener("click", openDoorFlow);
  if (btnOutsideBack) btnOutsideBack.addEventListener("click", () => go("welcome"));

  if (btnNoPermRetry) btnNoPermRetry.addEventListener("click", openDoorFlow);
  if (btnNoPermBack) btnNoPermBack.addEventListener("click", () => go("welcome"));

  if (btnGeoErrRetry) btnGeoErrRetry.addEventListener("click", openDoorFlow);
  if (btnGeoErrBot) btnGeoErrBot.addEventListener("click", openTelegramLocationHint);
  if (btnGeoErrBack) btnGeoErrBack.addEventListener("click", () => go("welcome"));
}