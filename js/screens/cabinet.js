import { api } from "../api.js";
import { CONFIG } from "../config.js";
import { go, qs, escapeHtml, formatDateTime } from "../ui.js";
import { getGuestMomentIds } from "../storage.js";

let cacheMoments = [];

function calcRank(stats) {
  // простой ранк-заглушка (потом усложним)
  if (stats.sessions >= 10) return "Шеф";
  if (stats.sessions >= 5) return "Постоянный";
  if (stats.sessions >= 2) return "Гость";
  return "Первый раз";
}

function calcStats(moments) {
  const sessions = moments.length;
  const rated = moments.filter(m => !!m.rating).length;
  return { sessions, rated };
}

function buildAchievements(moments) {
  const sessions = moments.length;
  const rated = moments.filter(m => !!m.rating).length;
  const tipped = moments.filter(m => !!m.tipped).length;

  return [
    { key: "first", title: "Первый момент", desc: "Вы вошли.", unlocked: sessions >= 1 },
    { key: "return", title: "Возвращение", desc: "Вы вернулись.", unlocked: sessions >= 2 },
    { key: "honesty", title: "Честность", desc: "Вы оценили три.", unlocked: rated >= 3 },
    { key: "thanks", title: "Благодарность", desc: "Вы оставили жест.", unlocked: tipped >= 1 },
  ];
}

function findActiveMoment(moments) {
  // активный — где ещё не finished
  return moments.find(m => m.status !== "finished") || null;
}

function badgeForStatus(status) {
  if (status === "new") return `<span class="badge warn">Новый</span>`;
  if (status === "accepted") return `<span class="badge warn">Принят</span>`;
  if (status === "in_progress") return `<span class="badge warn">В процессе</span>`;
  if (status === "serving") return `<span class="badge warn">Подача</span>`;
  if (status === "finished") return `<span class="badge good">Случился</span>`;
  return `<span class="badge">…</span>`;
}

function ratingBadge(r) {
  if (!r) return `<span class="badge">Без оценки</span>`;
  if (r === "empty") return `<span class="badge">Пусто</span>`;
  if (r === "exact") return `<span class="badge">Точно</span>`;
  if (r === "strong") return `<span class="badge">Сильно</span>`;
  if (r === "perfect") return `<span class="badge good">Идеально</span>`;
  return `<span class="badge">${escapeHtml(r)}</span>`;
}

export function initCabinetScreen() {
  const btnArchive = qs("#btnArchive");
  const btnNewMoment = qs("#btnNewMoment");
  const cabMainBtn = qs("#cabMainBtn");
  const btnResumeActive = qs("#btnResumeActive");

  if (btnArchive) btnArchive.addEventListener("click", () => go("archive"));

  if (btnNewMoment) {
    btnNewMoment.addEventListener("click", () => {
      // Новый момент = сразу в пролог (без двери повторно)
      go("s0");
    });
  }

  if (cabMainBtn) {
    cabMainBtn.addEventListener("click", () => {
      go("s0");
    });
  }

  if (btnResumeActive) {
    btnResumeActive.addEventListener("click", () => {
      go("waiting");
    });
  }
}

export async function renderCabinet(tgUser) {
  const ids = getGuestMomentIds();
  const cabTitle = qs("#cabTitle");
  const cabSubtitle = qs("#cabSubtitle");
  const cabRank = qs("#cabRank");
  const cabLastList = qs("#cabLastList");
  const cabNowBox = qs("#cabNowBox");
  const cabMainBtn = qs("#cabMainBtn");

  if (cabTitle) cabTitle.textContent = tgUser?.first_name || "Гость";

  try {
    const data = await api.getMoments(200);
    const all = data.moments || [];

    const mine = all.filter(m => ids.includes(m.id));
    mine.sort((a, b) => (b.createdAt || b.start || 0) - (a.createdAt || a.start || 0));
    cacheMoments = mine;

    const stats = calcStats(mine);
    const rank = calcRank(stats);

    if (cabSubtitle) cabSubtitle.textContent = `Сеансов: ${stats.sessions} · Оценок: ${stats.rated}`;
    if (cabRank) cabRank.textContent = rank;

    // Активный момент
    const active = findActiveMoment(mine);
    if (active) {
      if (cabNowBox) cabNowBox.style.display = "block";
      if (cabMainBtn) cabMainBtn.textContent = "Вернуться к процессу";
    } else {
      if (cabNowBox) cabNowBox.style.display = "none";
      if (cabMainBtn) cabMainBtn.textContent = "Создать момент";
    }

    // Последние моменты (3)
    if (cabLastList) {
      cabLastList.innerHTML = "";
      const last = mine.slice(0, 3);

      if (!last.length) {
        cabLastList.innerHTML = `<p class="small muted">Пока пусто. Это нормально.</p>`;
      } else {
        last.forEach(m => {
          const title = escapeHtml(m.epithet || "Момент");
          const time = formatDateTime(m.createdAt || m.start || Date.now());

          cabLastList.innerHTML += `
            <div class="momentCard" data-id="${escapeHtml(m.id)}">
              <div class="momentTop">
                <div class="momentName">${title}</div>
                <div class="momentBadges">
                  ${badgeForStatus(m.status)}
                  ${ratingBadge(m.rating)}
                </div>
              </div>
              <div class="small muted">${escapeHtml(time)}</div>
              <button class="btn" style="margin-top:10px" data-open="${escapeHtml(m.id)}">Открыть</button>
            </div>
          `;
        });

        cabLastList.querySelectorAll("[data-open]").forEach(btn => {
          btn.addEventListener("click", () => {
            const id = btn.getAttribute("data-open");
            window.__OPEN_MOMENT_ID__ = id;
            go("moment");
          });
        });
      }
    }

    // Знаки
    const grid = qs("#achGrid");
    if (grid) {
      const ach = buildAchievements(mine);
      grid.innerHTML = "";
      ach.forEach(a => {
        grid.innerHTML += `
          <div class="achTile ${a.unlocked ? "" : "locked"}">
            <div class="achTitle">${escapeHtml(a.title)}</div>
            <div class="achDesc">${escapeHtml(a.desc)}</div>
          </div>
        `;
      });
    }
  } catch (e) {
    console.error(e);
    if (cabLastList) cabLastList.innerHTML = `<p class="small muted">Нет связи.</p>`;
  }
}

export function getCabinetCache() {
  return cacheMoments;
}