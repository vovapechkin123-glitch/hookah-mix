import { api } from "../api.js";
import { qs, escapeHtml } from "../ui.js";

export function initMasterScreen() {
  qs("#btnMasterRefresh")?.addEventListener("click", refreshMaster);
}

export async function refreshMaster() {
  const list = qs("#masterList");
  const status = qs("#masterStatus");

  try {
    const data = await api.getMoments(200);
    const moments = (data.moments || []).slice().sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0));

    if (status) status.textContent = String(moments.length);

    if (!list) return;
    list.innerHTML = "";

    if (!moments.length) {
      list.innerHTML = `<p class="small">Пока пусто.</p>`;
      return;
    }

    moments.forEach(m => {
      list.innerHTML += `
        <div class="kitchenCard ${m.status === "new" ? "new" : ""}">
          <div class="kitchenName">${escapeHtml(m.guest?.name || "Гость")}</div>
          <div class="kitchenMeta">${new Date(m.createdAt || Date.now()).toLocaleString("ru-RU")}</div>

          <div class="kitchenBtns">
            <button class="btn" data-s="accepted" data-id="${escapeHtml(m.id)}">Кухня услышала</button>
            <button class="btn" data-s="in_progress" data-id="${escapeHtml(m.id)}">Печь работает</button>
            <button class="btn" data-s="serving" data-id="${escapeHtml(m.id)}">Подача</button>
            <button class="btn primary" data-s="finished" data-id="${escapeHtml(m.id)}">Момент случился</button>
          </div>
        </div>
      `;
    });

    list.querySelectorAll("[data-s]").forEach(btn => {
      btn.addEventListener("click", async () => {
        const id = btn.getAttribute("data-id");
        const status = btn.getAttribute("data-s");
        await api.setMomentStatus(id, status);
        refreshMaster();
      });
    });
  } catch (e) {
    console.error(e);
    if (status) status.textContent = "нет связи";
    if (list) list.innerHTML = `<p class="small">Нет связи.</p>`;
  }
}