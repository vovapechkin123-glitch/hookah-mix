import { go } from "../ui.js";
import { hasGeoAccessNow, getGuestMomentIds } from "../storage.js";

export function initHomeScreen() {}

export function routeGuestStart() {
  const ids = getGuestMomentIds();

  // Если гость уже делал моменты -> сразу в кабинет
  if (ids.length) {
    go("cabinet");
    return;
  }

  // Иначе — дверь
  if (hasGeoAccessNow()) {
    go("soundGate");
    return;
  }

  go("door");
}