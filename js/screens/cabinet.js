import { api } from "../api.js";
import { CONFIG } from "../config.js";
import { go, qs, escapeHtml } from "../ui.js";
import { getGuestMomentIds } from "../storage.js";

function calcAchievements(moments) {
  const sessions = moments.length;
  const rated = moments.filter(m => !!m.rating).length;

  return [
    { title: "Первый момент", desc: "Вы вошли.", unlocked: sessions >= 1 },
    { title: "Возвращение", desc: "Вы вернулись.", unlocked: sessions >= 2 },
    { title: "Честность", desc: "Вы оценили три.", unlocked: rated >= 3 },
  ];
}

function findActiveMoment(moments) {
  return moments.find(m => m.status !== "finished") || null;
}

export function initCabinetScreen() {
  qs("#btnArchive")?.addEventListener("click", () => go("archive"));
  qs("#btnNewMoment")?.addEventListener("click", () => go("welcome"));

  qs("#btnBackToWaiting")?.addEventListener("click", () => go("waiting"));
}

export async function renderCabinet(tgUser) {
  const ids = getGuestMomentIds();

  const nameEl = qs("#cabinetName");
  const metaEl = qs("#cabinetMeta");

  const momentsBox = qs("#cabinetMoments");
  const achBox = qs("#cabinetAchievements");

  const nowStatus = qs("#cabinetNowStatus");
  const nowPanel = nowStatus?.closest(".panel");

  if (nameEl) nameEl.textContent = tgUser?.first_name || "Гость";

  try {
    const data = await api.getMoments(200);
    const all = data.moments || [];
    const mine = all.filter(m => ids.includes(m.id)).sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0));

    const rated = mine.filter(m => !!m.rating).length;
    if (metaEl) metaEl.textContent = `Сеансов: ${mine.length} · Оценок: ${rated}`;

    // активный
    const active = findActiveMoment(mine);
    if (nowPanel) nowPanel.style.display = active ? "block" : "none";
    if (nowStatus) nowStatus.textContent = active ? "В процессе" : "Пусто";

    // последние 3
    if (momentsBox) {
      momentsBox.innerHTML = "";
      const last = mine.slice(0, 3);

      if (!last.length) {
        momentsBox.innerHTML = `<p class="small">Пока пусто. Но зал уже здесь.</p>`;
      } else {
        last.forEach(m => {
          momentsBox.innerHTML += `
            <div class="momentCard">
              <div class="momentTitleRow">
                <div>
                  <div class="momentTitle">${escapeHtml(m.epithet || "Момент")}</div>
                  <div class="momentTime">${new Date(m.createdAt || Date.now()).toLocaleString("ru-RU")}</div>
                </div>
                <span class="pill brass">${escapeHtml(m.status || "…")}</span>
              </div>

              <button class="btn" style="margin-top:12px" data-open="${escapeHtml(m.id)}">Открыть</button>
            </div>
          `;
        });

        momentsBox.querySelectorAll("[data-open]").forEach(btn => {
          btn.addEventListener("click", () => {
            window.__OPEN_MOMENT_ID__ = btn.getAttribute("data-open");
            go("moment");
          });
        });
      }
    }

    // ачивки
    if (achBox) {
      const ach = calcAchievements(mine);
      achBox.innerHTML = "";
      ach.forEach(a => {
        achBox.innerHTML += `
          <div class="achCard ${a.unlocked ? "" : "locked"}">
            <div class="achTitle">${escapeHtml(a.title)}</div>
            <div class="achDesc">${escapeHtml(a.desc)}</div>
          </div>
        `;
      });
    }
  } catch (e) {
    console.error(e);
    if (momentsBox) momentsBox.innerHTML = `<p class="small">Нет связи.</p>`;
  }
}