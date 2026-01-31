import { CONFIG } from "./config.js";
import { go } from "./ui.js";
import { initMusic } from "./music.js";

import { initHomeScreen, routeGuestStart } from "./screens/home.js";
import { initDoorScreen } from "./screens/door.js";
import { initSoundGateScreen } from "./screens/soundGate.js";
import { initCabinetScreen, renderCabinet } from "./screens/cabinet.js";
import { initArchiveScreen, renderArchive } from "./screens/archive.js";
import { initMomentScreen, renderMoment } from "./screens/moment.js";
import { initCourseScreen } from "./screens/course.js";
import { initWaitingScreen, renderWaiting } from "./screens/waiting.js";
import { initMasterScreen, refreshMaster } from "./screens/master.js";

function getTg() {
  return window.Telegram?.WebApp || null;
}

function getTgUser() {
  const tg = getTg();
  return tg?.initDataUnsafe?.user || null;
}

function isMasterUser(user) {
  return user && user.id === CONFIG.MASTER_ID;
}

function hookScreenRenders(tgUser) {
  // при каждом go(...) можно вызывать нужный render
  // мы сделаем простой watcher через MutationObserver
  const root = document.body;

  const renderByActive = async () => {
    const active = document.querySelector(".screen.active")?.id;

    if (active === "cabinet") await renderCabinet(tgUser);
    if (active === "archive") await renderArchive();
    if (active === "moment") await renderMoment();
    if (active === "waiting") await renderWaiting();
    if (active === "master") await refreshMaster();
  };

  const obs = new MutationObserver(() => renderByActive());
  obs.observe(root, { attributes: true, subtree: true, attributeFilter: ["class"] });

  // первый рендер
  renderByActive();
}

document.addEventListener("DOMContentLoaded", async () => {
  const tg = getTg();
  if (tg) {
    try {
      tg.ready();
      tg.expand();
    } catch {}
  }

  initMusic();

  const user = getTgUser();
  const master = isMasterUser(user);

  initHomeScreen();
  initDoorScreen();
  initSoundGateScreen();
  initCabinetScreen();
  initArchiveScreen();
  initMomentScreen();
  initCourseScreen();
  initWaitingScreen();
  initMasterScreen();

  hookScreenRenders(user);

  if (master) {
    go("master");
    return;
  }

  routeGuestStart();
});