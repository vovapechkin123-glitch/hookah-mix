import { api } from "../api.js";
import { go, qs, escapeHtml, formatDateTime } from "../ui.js";

function statusLabel(status) {
  if (status === "new") return "Новый";
  if (status === "accepted") return "Кухня услышала";
  if (status === "in_progress") return "Печь работает";
  if (status === "serving") return "Подача";
  if (status === "finished") return "Момент случился";
  return status || "…";
}

export function initMasterScreen() {
  const btn = qs("#btnMasterRefresh");
  if (btn) btn.addEventListener("click", refreshMaster);
}

export async function refreshMaster() {
  const badge = qs("#masterBadge");
  const box = qs("#masterList");

  try {
    if (badge) badge.textContent = "…";
    const data = await api.getMoments(200);
    const list = (data.moments || [])
      .slice()
      .sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0));

    if (badge) badge.textContent = String(list.length);

    if (!box) return;
    box.innerHTML = "";

    if (!list.length) {
      box.innerHTML = `<p class="small muted" style="margin-top:12px">Нет активных моментов.</p>`;
      return;
    }

    list.forEach(m => {
      box.innerHTML += `
        <div class="momentCard">
          <div class="momentTop">
            <div class="momentName">${escapeHtml(m.guest?.name || "Гость")}</div>
            <div class="momentBadges">
              <span class="badge warn">${escapeHtml(statusLabel(m.status))}</span>
            </div>
          </div>

          <div class="small muted">${escapeHtml(formatDateTime(m.createdAt || Date.now()))}</div>
          <div class="small muted" style="margin-top:6px">Песок ещё не запущен.</div>

          <div class="btnRow" style="margin-top:10px">
            <button class="btn" data-act="accepted" data-id="${escapeHtml(m.id)}">Кухня услышала</button>
            <button class="btn" data-act="in_progress" data-id="${escapeHtml(m.id)}">Печь работает</button>
          </div>
          <div class="btnRow">
            <button class="btn" data-act="serving" data-id="${escapeHtml(m.id)}">Подача</button>
            <button class="btn primary" data-act="finished" data-id="${escapeHtml(m.id)}">Момент случился</button>
          </div>
        </div>
      `;
    });

    box.querySelectorAll("[data-act]").forEach(btn => {
      btn.addEventListener("click", async () => {
        const id = btn.getAttribute("data-id");
        const status = btn.getAttribute("data-act");
        await api.setMomentStatus(id, status);
        refreshMaster();
      });
    });
  } catch (e) {
    console.error(e);
    if (badge) badge.textContent = "нет связи";
    if (box) box.innerHTML = `<p class="small muted" style="margin-top:12px">Нет связи.</p>`;
  }
}