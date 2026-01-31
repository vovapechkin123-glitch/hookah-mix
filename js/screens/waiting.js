import { api } from "../api.js";
import { CONFIG } from "../config.js";
import { go, qs, formatClock } from "../ui.js";
import { getGuestMomentIds } from "../storage.js";

let timerInt = null;

export function initWaitingScreen() {
  qs("#btnWaitingHome")?.addEventListener("click", () => go("cabinet"));
  qs("#btnEpilogueHome")?.addEventListener("click", () => go("cabinet"));
}

export async function renderWaiting() {
  const ids = getGuestMomentIds();
  const hint = qs("#guestHint");
  const fill = qs("#timeProgressFill");

  clearInterval(timerInt);

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
        if (hint) hint.textContent = "Время начнётся, когда кухня подтвердит.";
        if (fill) fill.style.width = "0%";
        return;
      }

      // acceptedAt есть -> идёт песок
      qs("#waitTitle").textContent = "Процесс начался.";
      qs("#waitText").textContent = "Не торопите момент.";

      const left = (active.acceptedAt + CONFIG.DURATION_MS) - Date.now();
      const progress = 1 - (left / CONFIG.DURATION_MS);

      if (fill) fill.style.width = `${Math.max(0, Math.min(100, progress * 100))}%`;

      if (left <= 0 || active.status === "finished") {
        go("epilogue");
        return;
      }

      if (hint) hint.textContent = `Песок идёт. Осталось ~${formatClock(left)}.`;
    } catch (e) {
      console.error(e);
      if (hint) hint.textContent = "Нет связи.";
    }
  }

  await tick();
  timerInt = setInterval(tick, 2500);
}