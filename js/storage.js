const LS = {
  MOMENT_IDS: "hm_moment_ids",
  GEO_ACCESS_UNTIL: "hm_geo_until",
  MUSIC_ON: "hm_music_on"
};

export function getGuestMomentIds() {
  try {
    return JSON.parse(localStorage.getItem(LS.MOMENT_IDS) || "[]");
  } catch {
    return [];
  }
}

export function addGuestMomentId(id) {
  const ids = getGuestMomentIds();
  if (!ids.includes(id)) ids.push(id);
  localStorage.setItem(LS.MOMENT_IDS, JSON.stringify(ids));
  return ids;
}

export function resetGuestMomentIds() {
  localStorage.removeItem(LS.MOMENT_IDS);
}

export function setGeoAccessUntil(ts) {
  localStorage.setItem(LS.GEO_ACCESS_UNTIL, String(ts));
}

export function getGeoAccessUntil() {
  const v = Number(localStorage.getItem(LS.GEO_ACCESS_UNTIL) || 0);
  return Number.isFinite(v) ? v : 0;
}

export function hasGeoAccessNow() {
  return Date.now() < getGeoAccessUntil();
}

export function setMusicOnState(on) {
  localStorage.setItem(LS.MUSIC_ON, on ? "1" : "0");
}

export function getMusicOnState() {
  return localStorage.getItem(LS.MUSIC_ON) === "1";
}