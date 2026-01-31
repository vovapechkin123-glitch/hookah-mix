import { api } from "../api.js";
import { CONFIG } from "../config.js";
import { go, qs, escapeHtml, formatDateTime } from "../ui.js";
import { getGuestMomentIds } from "../storage.js";

function ratingText(r) {
  if (!r) return "";
  if (r === "empty") return "Пусто";
  if (r === "exact") return "Точно";
  if (r === "strong") return "Сильно";
  if (r === "perfect") return "Идеально";
  return r;
}

export function initMomentScreen() {
  const btnBackArchive = qs("#btnBackArchive");
  if (btnBackArchive) btnBackArchive.addEventListener("click", () => go("archive"));

  qs("#btnRateEmpty")?.addEventListener("click", () => setRating("empty"));
  qs("#btnRateExact")?.addEventListener("click", () => setRating("exact"));
  qs("#btnRateStrong")?.addEventListener("click", () => setRating("strong"));
  qs("#btnRatePerfect")?.addEventListener("click", () => setRating("perfect"));
}

async function setRating(rating) {
  const id = window.__OPEN_MOMENT_ID__;
  if (!id) return;

  try {
    await api.setMomentRating(id, rating);

    // показываем жест
    const tipBox = qs("#tipBox");
    const tipLink = qs("#tipLink");
    const tipHint = qs("#tipHint");
    const rateHint = qs("#rateHint");

    if (rateHint) rateHint.textContent = `Вы сказали: “${ratingText(rating)}”.`;

    if (tipLink) tipLink.href = CONFIG.TIP_URL;
    if (tipBox) tipBox.style.display = "block";
    if (tipHint) tipHint.textContent = "Жест не обязателен. Но он закрепляет.";
  } catch (e) {
    console.error(e);
  }
}

export async function renderMoment() {
  const id = window.__OPEN_MOMENT_ID__;
  const ids = getGuestMomentIds();

  const titleEl = qs("#momentTitle");
  const timeEl = qs("#momentTime");
  const statusEl = qs("#momentStatus");
  const rateHint = qs("#rateHint");
  const tipBox = qs("#tipBox");

  if (!id || !ids.includes(id)) {
    if (titleEl) titleEl.textContent = "Недоступно";
    if (timeEl) timeEl.textContent = "";
    if (statusEl) statusEl.textContent = "…";
    return;
  }

  try {
    const data = await api.getMoments(200);
    const mine = (data.moments || []).find(m => m.id === id);
    if (!mine) return;

    if (titleEl) titleEl.textContent = mine.epithet || "Момент";
    if (timeEl) timeEl.textContent = formatDateTime(mine.createdAt || mine.start || Date.now());
    if (statusEl) statusEl.textContent = mine.status || "…";

    if (rateHint) {
      rateHint.textContent = mine.rating ? `Вы сказали: “${ratingText(mine.rating)}”.` : "";
    }

    if (tipBox) tipBox.style.display = mine.rating ? "block" : "none";
    qs("#tipLink")?.setAttribute("href", CONFIG.TIP_URL);
  } catch (e) {
    console.error(e);
  }
}