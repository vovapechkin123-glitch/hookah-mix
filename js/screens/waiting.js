import { api } from "../api.js";
import { CONFIG } from "../config.js";
import { go, qs, formatClock } from "../ui.js";
import { getGuestMomentIds } from "../storage.js";

let timerInt = null;

export function initWaitingScreen() {
  qs("#btnWaitingToCabinet")?.addEventListener("click", () => go("cabinet"));
  qs("#btnEpilogueToCabinet")?.addEventListener("click", () => go("cabinet"));
}

export async function renderWaiting() {
  const ids = getGuestMomentIds();

  const timerEl = qs("#guestTimer");
  const hintEl = qs("#guestHint");

  const sandTop = qs("#sandTop");
  const sandBottom = qs("#sandBottom");

  clearInterval(timerInt);

  function setSand(progress01) {
    // progress: 0..1
    const p = Math.max(0, Math.min(1, progress01));

    // верх уменьшается, низ растёт
    if (sandTop) sandTop.style.height = `${Math.max(0, 48 - (48 * p))}%`;
    if (sandBottom) sandBottom.style.height = `${Math.max(0, 48 * p)}%`;
  }

  async function tick() {
    try {
      const data = await api.getMoments(200);
      const mine = (data.moments || []).filter(m => ids.includes(m.id));
      const active = mine.find(m => m.status !== "finished") || null;

      if (!active) {
        go("cabinet");
        return;
      }

      if (!active.acceptedAt) {
        qs("#waitTitle").textContent = "Тишина.";
        qs("#waitText").textContent = "Кухня ещё не ответила.";
        if (timerEl) timerEl.textContent = "—:—";
        if (hintEl) hintEl.textContent = "Время начнётся, когда кухня подтвердит.";
        setSand(0);
        return;
      }

      const left = (active.acceptedAt + CONFIG.DURATION_MS) - Date.now();
      const progress = 1 - (left / CONFIG.DURATION_MS);

      if (left <= 0 || active.status === "finished") {
        go("epilogue");
        return;
      }

      if (timerEl) timerEl.textContent = formatClock(left);
      if (hintEl) hintEl.textContent = "Песок идёт. Не вмешивайтесь.";
      setSand(progress);
    } catch (e) {
      console.error(e);
      if (hintEl) hintEl.textContent = "Нет связи.";
    }
  }

  await tick();
  timerInt = setInterval(tick, 2000);
}