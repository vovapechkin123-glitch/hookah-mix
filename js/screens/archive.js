import { api } from "../api.js";
import { go, qs, escapeHtml } from "../ui.js";
import { getGuestMomentIds } from "../storage.js";

export function initArchiveScreen() {
  qs("#btnArchiveBack")?.addEventListener("click", () => go("cabinet"));
}

export async function renderArchive() {
  const ids = getGuestMomentIds();
  const box = qs("#archiveList");
  const count = qs("#archiveCount");

  if (!box) return;

  try {
    const data = await api.getMoments(200);
    const mine = (data.moments || [])
      .filter(m => ids.includes(m.id))
      .sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0));

    if (count) count.textContent = String(mine.length);

    box.innerHTML = "";

    if (!mine.length) {
      box.innerHTML = `<p class="small">Архив пуст.</p>`;
      return;
    }

    mine.forEach(m => {
      box.innerHTML += `
        <div class="momentCard">
          <div class="momentTitleRow">
            <div>
              <div class="momentTitle">${escapeHtml(m.epithet || "Момент")}</div>
              <div class="momentTime">${new Date(m.createdAt || Date.now()).toLocaleString("ru-RU")}</div>
            </div>
            <span class="pill brass">${escapeHtml(m.rating ? "Оценено" : "Без оценки")}</span>
          </div>

          <button class="btn" style="margin-top:12px" data-open="${escapeHtml(m.id)}">Открыть</button>
        </div>
      `;
    });

    box.querySelectorAll("[data-open]").forEach(btn => {
      btn.addEventListener("click", () => {
        window.__OPEN_MOMENT_ID__ = btn.getAttribute("data-open");
        go("moment");
      });
    });
  } catch (e) {
    console.error(e);
    box.innerHTML = `<p class="small">Нет связи.</p>`;
  }
}