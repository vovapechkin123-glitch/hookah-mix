import { go } from "../ui.js";
import { hasGeoAccessNow, getGuestMomentIds } from "../storage.js";

export function initHomeScreen() {}

export function routeGuestStart() {
  const ids = getGuestMomentIds();

  // если уже есть история — сразу кабинет
  if (ids.length) {
    go("cabinet");
    return;
  }

  // если уже был допуск по гео — сразу в зал
  if (hasGeoAccessNow()) {
    go("soundGate");
    return;
  }

  go("door");
}