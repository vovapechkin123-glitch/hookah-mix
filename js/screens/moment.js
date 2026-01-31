import { api } from "../api.js";
import { CONFIG } from "../config.js";
import { go, qs, escapeHtml } from "../ui.js";
import { getGuestMomentIds } from "../storage.js";

export function initMomentScreen() {
  qs("#btnMomentBack")?.addEventListener("click", () => go("archive"));

  qs("#rateBad")?.addEventListener("click", () => setRating("bad"));
  qs("#rateOk")?.addEventListener("click", () => setRating("ok"));
  qs("#ratePerfect")?.addEventListener("click", () => setRating("perfect"));

  qs("#btnTip")?.addEventListener("click", () => {
    window.open(CONFIG.TIP_URL, "_blank");
  });
}

async function setRating(rating) {
  const id = window.__OPEN_MOMENT_ID__;
  if (!id) return;

  try {
    await api.setMomentRating(id, rating);
    alert("Запомнил.");
  } catch (e) {
    console.error(e);
  }
}

export async function renderMoment() {
  const id = window.__OPEN_MOMENT_ID__;
  const ids = getGuestMomentIds();

  const titleEl = qs("#momentTitle");
  const timeEl = qs("#momentTime");
  const answersEl = qs("#momentAnswers");

  if (!id || !ids.includes(id)) {
    if (titleEl) titleEl.textContent = "Недоступно";
    if (timeEl) timeEl.textContent = "";
    if (answersEl) answersEl.innerHTML = "";
    return;
  }

  try {
    const data = await api.getMoments(200);
    const m = (data.moments || []).find(x => x.id === id);
    if (!m) return;

    if (titleEl) titleEl.textContent = m.epithet || "Момент";
    if (timeEl) timeEl.textContent = new Date(m.createdAt || Date.now()).toLocaleString("ru-RU");

    if (answersEl) {
      answersEl.innerHTML = `<b>Условия</b><br><br>` +
        Object.entries(m.answers || {}).map(([k, v]) => {
          return `<div class="small">${escapeHtml(String(v))}</div>`;
        }).join("");
    }
  } catch (e) {
    console.error(e);
  }
}