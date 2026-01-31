import { api } from "../api.js";
import { go, qs, escapeHtml, formatDateTime } from "../ui.js";
import { getGuestMomentIds } from "../storage.js";

let filter = "all";

function ratingBadge(r) {
  if (!r) return `<span class="badge">Без оценки</span>`;
  if (r === "empty") return `<span class="badge">Пусто</span>`;
  if (r === "exact") return `<span class="badge">Точно</span>`;
  if (r === "strong") return `<span class="badge">Сильно</span>`;
  if (r === "perfect") return `<span class="badge good">Идеально</span>`;
  return `<span class="badge">${escapeHtml(r)}</span>`;
}

export function initArchiveScreen() {
  const btnBack = qs("#btnBackCabinet");
  const fltAll = qs("#fltAll");
  const fltNoRate = qs("#fltNoRate");

  if (btnBack) btnBack.addEventListener("click", () => go("cabinet"));

  if (fltAll) fltAll.addEventListener("click", () => setFilter("all"));
  if (fltNoRate) fltNoRate.addEventListener("click", () => setFilter("norate"));
}

function setFilter(f) {
  filter = f;
  qs("#fltAll")?.classList.toggle("active", f === "all");
  qs("#fltNoRate")?.classList.toggle("active", f === "norate");
  renderArchive();
}

export async function renderArchive() {
  const ids = getGuestMomentIds();
  const box = qs("#archiveList");
  const count = qs("#archiveCount");

  if (!box) return;

  try {
    const data = await api.getMoments(200);
    let mine = (data.moments || []).filter(m => ids.includes(m.id));
    mine.sort((a, b) => (b.createdAt || b.start || 0) - (a.createdAt || a.start || 0));

    if (filter === "norate") mine = mine.filter(m => !m.rating);

    if (count) count.textContent = String(mine.length);

    box.innerHTML = "";

    if (!mine.length) {
      box.innerHTML = `<p class="small muted" style="margin-top:12px">Пусто.</p>`;
      return;
    }

    mine.forEach(m => {
      const title = escapeHtml(m.epithet || "Момент");
      const time = formatDateTime(m.createdAt || m.start || Date.now());

      box.innerHTML += `
        <div class="momentCard">
          <div class="momentTop">
            <div class="momentName">${title}</div>
            <div class="momentBadges">
              ${ratingBadge(m.rating)}
            </div>
          </div>
          <div class="small muted">${escapeHtml(time)}</div>
          <button class="btn" style="margin-top:10px" data-open="${escapeHtml(m.id)}">Открыть</button>
        </div>
      `;
    });

    box.querySelectorAll("[data-open]").forEach(btn => {
      btn.addEventListener("click", () => {
        const id = btn.getAttribute("data-open");
        window.__OPEN_MOMENT_ID__ = id;
        go("moment");
      });
    });
  } catch (e) {
    console.error(e);
    box.innerHTML = `<p class="small muted">Нет связи.</p>`;
  }
}