<!DOCTYPE html>
<html lang="ru">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>THE MENU</title>
<script src="https://telegram.org/js/telegram-web-app.js"></script>

<style>
:root { color-scheme: dark; }

body{
  margin:0;
  font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Arial;
  background: radial-gradient(1200px 800px at 30% 20%, #2b2b38 0%, #0b0b12 55%, #05050a 100%);
  color:#fff;
  min-height:100vh;
  display:flex;
  align-items:center;
  justify-content:center;
  padding:24px;
}

.card{
  width:min(620px,100%);
  background:rgba(255,255,255,.06);
  border:1px solid rgba(255,255,255,.12);
  border-radius:18px;
  padding:22px;
  backdrop-filter: blur(10px);
  box-shadow:0 20px 60px rgba(0,0,0,.45);
  position:relative;
}

/* ===== FLOATING SOUND BUTTON (FOR MOST SCREENS) ===== */
.soundBtn{
  position:absolute;
  top:14px;
  right:14px;
  width:40px;
  height:40px;
  border-radius:999px;
  display:flex;
  align-items:center;
  justify-content:center;
  cursor:pointer;
  user-select:none;
  z-index:10;

  background:rgba(255,255,255,.06);
  border:1px solid rgba(255,255,255,.14);
  box-shadow:0 10px 30px rgba(0,0,0,.35);
  backdrop-filter: blur(10px);

  transition: transform .12s ease, box-shadow .12s ease, background .12s ease, border-color .12s ease, opacity .12s ease;
}
.soundBtn:active{ transform: scale(.96); }
.soundBtn .icon{ font-weight:900; font-size:15px; opacity:.85; }
.soundBtn.off{ opacity:.55; background:rgba(255,255,255,.05); border-color:rgba(255,255,255,.12); }
.soundBtn.off .icon{ opacity:.65; }
.soundBtn.on{
  opacity:1;
  background:linear-gradient(135deg, rgba(255,122,24,.95), rgba(255,61,119,.90));
  border-color:rgba(255,255,255,.22);
  box-shadow:0 12px 40px rgba(255,61,119,.16), 0 12px 40px rgba(255,122,24,.12);
}
.soundBtn.on .icon{ opacity:1; }

/* ===== INLINE SOUND BUTTON (FOR CABINET HEADER) ===== */
.soundInline{
  width:34px;
  height:34px;
  border-radius:999px;
  display:flex;
  align-items:center;
  justify-content:center;
  cursor:pointer;
  user-select:none;

  background:rgba(255,255,255,.06);
  border:1px solid rgba(255,255,255,.14);
  box-shadow:0 8px 20px rgba(0,0,0,.25);
  backdrop-filter: blur(10px);

  transition: transform .12s ease, box-shadow .12s ease, background .12s ease, border-color .12s ease, opacity .12s ease;
}
.soundInline:active{ transform: scale(.96); }
.soundInline .icon{ font-weight:900; font-size:14px; opacity:.85; }
.soundInline.off{ opacity:.55; background:rgba(255,255,255,.05); border-color:rgba(255,255,255,.12); }
.soundInline.off .icon{ opacity:.65; }
.soundInline.on{
  opacity:1;
  background:linear-gradient(135deg, rgba(255,122,24,.95), rgba(255,61,119,.90));
  border-color:rgba(255,255,255,.22);
  box-shadow:0 10px 28px rgba(255,61,119,.14), 0 10px 28px rgba(255,122,24,.10);
}
.soundInline.on .icon{ opacity:1; }

.screen{display:none}
.screen.active{display:block}

h1{margin:0 0 12px;font-size:24px}
h2{margin:14px 0 8px;font-size:14px;letter-spacing:.6px;text-transform:uppercase;opacity:.7}

p{opacity:.85;line-height:1.5;margin:0 0 10px}

.btn{
  width:100%;
  margin-top:14px;
  padding:14px;
  border-radius:14px;
  border:0;
  font-size:16px;
  font-weight:700;
  cursor:pointer;
  background:rgba(255,255,255,.10);
  border:1px solid rgba(255,255,255,.14);
  color:#fff;
}
.btn:disabled{opacity:.5;cursor:not-allowed}

.btn.primary{
  background:rgba(237,230,214,.12);
  border:1px solid rgba(237,230,214,.22);
}

.btnRow{
  display:flex;
  gap:10px;
  margin-top:12px;
}
.btnRow .btn{margin-top:0;width:100%}

.option{
  padding:14px;
  border-radius:14px;
  background:rgba(255,255,255,.08);
  margin-top:10px;
  cursor:pointer;
  border:1px solid rgba(255,255,255,.10);
}
.option:hover{background:rgba(255,255,255,.14)}
.option.selected{
  background:rgba(237,230,214,.12);
  border:1px solid rgba(237,230,214,.28);
}

.small{font-size:13px;opacity:.7}
.muted{opacity:.72}

.timer{
  font-size:30px;
  text-align:center;
  letter-spacing:2px;
  margin:14px 0
}

.cardBox{
  background:rgba(255,255,255,.08);
  border-radius:14px;
  padding:14px;
  margin-top:12px;
  border:1px solid rgba(255,255,255,.10);
}

.fadeIn{ animation:fadeIn .18s ease-out; }
@keyframes fadeIn{
  from{opacity:0; transform:translateY(6px)}
  to{opacity:1; transform:translateY(0)}
}

.badge{
  font-size:12px;
  padding:6px 10px;
  border-radius:999px;
  background:rgba(255,255,255,.12);
  display:inline-block;
}
.badge.warn{background:rgba(255,140,0,.15)}
.badge.done{background:rgba(255,255,255,.15)}
.badge.good{background:rgba(0,255,140,.12)}

.listLine{
  display:flex;
  justify-content:space-between;
  gap:10px;
  align-items:flex-start;
  padding:8px 0;
  border-top:1px solid rgba(255,255,255,.10);
}
.listLine:first-child{border-top:0}

.row{
  display:flex;
  justify-content:space-between;
  gap:12px;
  flex-wrap:wrap;
  align-items:center
}

.headerRight{
  display:flex;
  align-items:center;
  gap:10px;
}

.pills{
  display:flex;
  gap:8px;
  flex-wrap:wrap;
  margin-top:10px;
}

.pill{
  padding:10px 12px;
  border-radius:999px;
  border:1px solid rgba(255,255,255,.14);
  background:rgba(255,255,255,.08);
  cursor:pointer;
  font-size:13px;
  opacity:.9;
}
.pill.active{
  background:rgba(237,230,214,.12);
  border:1px solid rgba(237,230,214,.22);
}

.gridBadges{
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:10px;
  margin-top:10px;
}
.ach{
  border-radius:14px;
  padding:12px;
  border:1px solid rgba(255,255,255,.10);
  background:rgba(255,255,255,.06);
}
.ach.locked{opacity:.45}
.ach .t{font-weight:800}
.ach .d{font-size:12px;opacity:.75;margin-top:6px}

.linkBtn{
  text-decoration:none;
  display:block;
  text-align:center;
}

/* ===== SOUND GATE (AFTER GEO) ===== */
.gateWrap{
  min-height:340px;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  gap:16px;
}
.gateLogo{
  width:110px;
  height:110px;
  border-radius:999px;
  display:flex;
  align-items:center;
  justify-content:center;
  cursor:pointer;
  user-select:none;
  position:relative;

  background:linear-gradient(135deg, rgba(255,122,24,.95), rgba(255,61,119,.90));
  border:1px solid rgba(255,255,255,.25);
  box-shadow:0 18px 70px rgba(255,61,119,.18), 0 18px 70px rgba(255,122,24,.14);
}
.gateLogo .ic{
  font-weight:900;
  font-size:44px;
  opacity:1;
}
.gateHint{
  text-align:center;
  max-width:360px;
}
.gatePulse{
  animation: gatePulse 3.2s ease-in-out infinite;
}
@keyframes gatePulse{
  0%{ transform:scale(1); filter:saturate(1); }
  50%{ transform:scale(1.05); filter:saturate(1.15); }
  100%{ transform:scale(1); filter:saturate(1); }
}

.gatePlaying .gateLogo{
  animation: gatePlay 2.8s ease-in-out 1 forwards;
}
@keyframes gatePlay{
  0%{ transform:scale(1); opacity:1; }
  45%{ transform:scale(1.10); opacity:1; }
  100%{ transform:scale(2.20); opacity:0; }
}
.gatePlaying .gateHint{
  animation: gateFade 2.8s ease-in-out 1 forwards;
}
@keyframes gateFade{
  0%{ opacity:.85; transform:translateY(0); }
  100%{ opacity:0; transform:translateY(12px); }
}
</style>
</head>

<body>
<div class="card">

  <!-- FLOATING SOUND BUTTON (DEFAULT) -->
  <div class="soundBtn off" id="soundBtnFloating" onclick="toggleMusic()" title="Мелодия">
    <div class="icon">♪</div>
  </div>

  <!-- BACKGROUND MUSIC -->
  <audio id="bgMusic" src="7441574b62bac5e.mp3" loop preload="auto"></audio>

  <!-- =========================
       SOUND GATE (AFTER GEO CONFIRMED)
  ========================= -->
  <div class="screen" id="soundGate">
    <div class="gateWrap" id="gateWrap">
      <div class="gateLogo gatePulse" id="gateLogo" onclick="gateStart()">
        <div class="ic">♪</div>
      </div>
      <div class="gateHint" id="gateHint">
        <h1 style="margin:0 0 8px;">Включите зал.</h1>
        <p class="small muted" style="margin:0;">
          Нажмите на знак.<br>
          Дальше — без лишних слов.
        </p>
      </div>
    </div>
  </div>

<!-- =========================
     WELCOME (ТОЛЬКО ДЛЯ НОВЫХ)
========================= -->
<div class="screen" id="welcome">
  <h1 id="welcomeTitle">Добро пожаловать.</h1>
  <p>
    <b>Это не заказ.</b><br>
    <b>Это момент.</b>
  </p>
  <p class="small muted">25 минут. Один раз. Без повторов.</p>

  <h2>Процедура</h2>
  <div class="listLine">
    <div class="small">7 вопросов</div>
    <div class="small muted">без объяснений</div>
  </div>
  <div class="listLine">
    <div class="small">1 решение</div>
    <div class="small muted">без выбора вкуса</div>
  </div>
  <div class="listLine">
    <div class="small">1 исполнение</div>
    <div class="small muted">без повторов</div>
  </div>

  <h2>Правила</h2>
  <div class="listLine">
    <div class="small">Дверь открывается только внутри</div>
    <div class="small muted">гео-допуск</div>
  </div>
  <div class="listLine">
    <div class="small">После подтверждения — назад нельзя</div>
    <div class="small muted">строго</div>
  </div>
  <div class="listLine">
    <div class="small">Уникальность не обсуждается</div>
    <div class="small muted">всегда</div>
  </div>

  <button class="btn primary" onclick="go('s0')">Создать момент</button>

  <p class="small muted" style="text-align:center;margin-top:16px">
    Вы не выбираете вкус.<br>
    Вы выбираете условия.
  </p>
</div>

<!-- =========================
     КАБИНЕТ (ДЛЯ ТЕХ, КТО УЖЕ БЫЛ)
========================= -->
<div class="screen" id="cabinet">
  <div class="row">
    <div>
      <h1 style="margin:0" id="cabTitle">…</h1>
      <div class="small muted" id="cabSubtitle">…</div>
    </div>

    <div class="headerRight">
      <span class="badge" id="cabRank">…</span>
      <div class="soundInline off" id="soundBtnInline" onclick="toggleMusic()" title="Мелодия">
        <div class="icon">♪</div>
      </div>
    </div>
  </div>

  <button class="btn primary" id="cabMainBtn" onclick="cabinetMainAction()">…</button>

  <div class="cardBox" id="cabNowBox" style="display:none">
    <div class="row">
      <b>Сейчас</b>
      <span class="badge warn">В процессе</span>
    </div>
    <p class="small muted" style="margin-top:8px">
      Процесс уже начался. Не вмешивайтесь.
    </p>
    <button class="btn" onclick="resumeActiveMoment()">Вернуться</button>
  </div>

  <h2>Последние моменты</h2>
  <div id="cabLastList"></div>

  <div class="btnRow">
    <button class="btn" onclick="openArchive()">Архив</button>
    <button class="btn" onclick="go('s0')">Новый момент</button>
  </div>

  <h2>Знаки</h2>
  <div class="gridBadges" id="achGrid"></div>

  <p class="small muted" style="text-align:center;margin-top:16px">
    Вы возвращаетесь — значит, это работает.
  </p>
</div>

<!-- =========================
     АРХИВ
========================= -->
<div class="screen" id="archive">
  <div class="row">
    <h1 style="margin:0">Архив</h1>
    <span class="badge" id="archiveCount">…</span>
  </div>

  <div class="pills">
    <div class="pill active" id="fltAll" onclick="setArchiveFilter('all')">Все</div>
    <div class="pill" id="fltNoRate" onclick="setArchiveFilter('no_rate')">Без оценки</div>
  </div>

  <div id="archiveList"></div>

  <button class="btn" onclick="goHome()">В кабинет</button>
</div>

<!-- =========================
     МОМЕНТ (ДЕТАЛИ + ОЦЕНКА + ЖЕСТ)
========================= -->
<div class="screen" id="moment">
  <div class="row">
    <h1 style="margin:0" id="momentTitle">…</h1>
    <span class="badge" id="momentStatus">…</span>
  </div>
  <p class="small muted" id="momentTime">…</p>

  <div class="cardBox" id="rateBox">
    <b>Оценка</b>
    <p class="small muted" style="margin-top:6px">Как это осталось в вас?</p>

    <div class="btnRow">
      <button class="btn" onclick="rateMoment('Пусто')">Пусто</button>
      <button class="btn" onclick="rateMoment('Точно')">Точно</button>
    </div>
    <div class="btnRow">
      <button class="btn" onclick="rateMoment('Сильно')">Сильно</button>
      <button class="btn" onclick="rateMoment('Идеально')">Идеально</button>
    </div>

    <p class="small muted" id="rateHint" style="margin-top:10px"></p>
  </div>

  <div class="cardBox" id="tipBox" style="display:none">
    <b>Жест</b>
    <p class="small muted" style="margin-top:6px">
      Если вы хотите закрепить этот момент.
    </p>

    <a class="btn primary linkBtn" id="tipLink" href="#" target="_blank" onclick="tipClicked()">
      Оставить жест
    </a>

    <p class="small muted" id="tipHint" style="margin-top:10px"></p>
  </div>

  <button class="btn" onclick="go('archive')">Назад</button>
</div>

<!-- =========================
     ПРОЛОГ
========================= -->
<div class="screen" id="s0">
  <h1>Прежде чем мы начнём.</h1>
  <p>
    Здесь не выбирают вкус.<br><br>
    Здесь фиксируют момент.<br><br>
    То, что вы получите,<br>
    не существует заранее.
  </p>

  <button class="btn primary" onclick="prologueContinue()">Продолжить</button>
  <button class="btn" onclick="goHome()">Назад</button>
</div>

<!-- =========================
     ДВЕРЬ (ГЕО)
========================= -->
<div class="screen" id="door">
  <h1>Открыть дверь.</h1>
  <p id="doorText">
    Начало для всех одно.<br><br>
    Дверь открывается только внутри.<br>
    Разрешите местоположение.
  </p>

  <button class="btn primary" id="btnDoor" onclick="doorCheck()">Открыть дверь</button>
  <button class="btn" onclick="openBot()">Передать координаты через Telegram</button>
</div>

<!-- ===== СНАРУЖИ ===== -->
<div class="screen" id="outside">
  <h1>Снаружи это не готовят.</h1>
  <p id="outsideText">Вы слишком далеко.</p>
  <div class="btnRow">
    <button class="btn primary" onclick="doorCheck()">Проверить снова</button>
    <button class="btn" onclick="goHome()">Вернуться</button>
  </div>
</div>

<!-- ===== БЕЗ ДОПУСКА ===== -->
<div class="screen" id="no-permission">
  <h1>Без допуска нельзя.</h1>
  <p>
    Это не просьба.<br>
    Это правило.
  </p>
  <div class="btnRow">
    <button class="btn primary" onclick="doorCheck()">Попробовать снова</button>
    <button class="btn" onclick="goHome()">Вернуться</button>
  </div>
</div>

<!-- ===== ОШИБКА ГЕО ===== -->
<div class="screen" id="geo-error">
  <h1>Устройство молчит.</h1>
  <p>
    Оно не отдаёт местоположение.<br>
    Значит, сегодня — без этого.
  </p>
  <div class="btnRow">
    <button class="btn primary" onclick="doorCheck()">Попробовать снова</button>
    <button class="btn" onclick="openBot()">Передать координаты через Telegram</button>
  </div>
  <button class="btn" onclick="goHome()">Вернуться</button>
</div>

<!-- =========================
     КУРС (7 ВОПРОСОВ)
========================= -->
<div class="screen" id="course">
  <h1 id="qTitle">…</h1>
  <p id="qText">…</p>
  <div id="qOptions"></div>
  <div id="qFooter" style="margin-top:12px"></div>
</div>

<!-- =========================
     ПОДТВЕРЖДЕНИЕ
========================= -->
<div class="screen" id="confirm">
  <h1>Я услышал.</h1>
  <p>
    Вы выбрали условия.<br>
    Остальное — моя работа.
  </p>
  <button class="btn primary" id="btnConfirm" onclick="confirmMoment()">Подтвердить</button>
  <button class="btn" onclick="backToLastQuestion()">Вернуться</button>
  <p class="small" id="confirmHint" style="margin-top:10px"></p>
</div>

<!-- =========================
     ОЖИДАНИЕ
========================= -->
<div class="screen" id="waiting">
  <h1>Процесс начался.</h1>
  <p>Не торопите момент.</p>
  <div class="timer" id="guestTimer">25:00</div>
  <p class="small" id="guestHint"></p>
  <button class="btn" onclick="goHome()">В кабинет</button>
</div>

<!-- =========================
     ЭПИЛОГ
========================= -->
<div class="screen" id="epilogue">
  <h1>Это было сделано</h1>
  <p>
    именно для этого момента.<br><br>
    Дальше — без интерфейса.
  </p>
  <button class="btn primary" onclick="goHome()">В кабинет</button>
</div>

</div>

<script>
/* ===== НАСТРОЙКИ ===== */
const BACKEND_BASE = "https://hookah-mix-bot-56x5.onrender.com";
const DURATION_MS = 25 * 60 * 1000;

const BOT_USERNAME = "@hookah_mixPanda_bot";
const TIP_URL = "https://netmonet.co/qr/192937/tip?o=6";

/* Геозона (дом для теста) */
const VENUE = { lat: 56.519963, lng: 84.933527, radius: 40 };

/* TTL допусков: 6 часов (можно увеличить/уменьшить) */
const GEO_TTL_MS = 6 * 60 * 60 * 1000;

/* LocalStorage keys */
const LS_MOMENTS = "tm_moments";
const LS_ACTIVE = "tm_active_moment";
const LS_ARCHIVE_FILTER = "tm_archive_filter";
const LS_MUSIC = "tm_music_enabled";
const LS_GEO_OK_UNTIL = "tm_geo_ok_until";

/* Telegram */
const tg = window.Telegram?.WebApp;
tg?.expand?.();

const tgUser = tg?.initDataUnsafe?.user;
const guest = {
  id: tgUser?.id || null,
  name: tgUser?.first_name || "Гость",
  username: tgUser?.username || null
};

let guestTimerInt = null;

/* ===== MUSIC ===== */
function isMusicEnabled(){
  return localStorage.getItem(LS_MUSIC) === "1";
}
function setMusicEnabled(v){
  localStorage.setItem(LS_MUSIC, v ? "1" : "0");
  updateMusicUI();
}
function updateMusicUI(){
  const f = document.getElementById("soundBtnFloating");
  const i = document.getElementById("soundBtnInline");

  const on = isMusicEnabled();

  if(f){ f.classList.toggle("on", on); f.classList.toggle("off", !on); }
  if(i){ i.classList.toggle("on", on); i.classList.toggle("off", !on); }
}
function getMusicEl(){ return document.getElementById("bgMusic"); }
function applyMusicDefaults(){
  const a = getMusicEl();
  if(!a) return;
  a.volume = 0.30; // 30%
}
async function playMusic(){
  const a = getMusicEl();
  if(!a) return;
  applyMusicDefaults();
  try{ await a.play(); }catch(e){}
}
function pauseMusic(){
  const a = getMusicEl();
  if(!a) return;
  try{ a.pause(); }catch(e){}
}
async function toggleMusic(){
  haptic("light");
  if(isMusicEnabled()){
    setMusicEnabled(false);
    pauseMusic();
  }else{
    setMusicEnabled(true);
    await playMusic();
  }
}

/* ===== GEO SESSION (LOCAL) ===== */
function setGeoOkNow(){
  const until = Date.now() + GEO_TTL_MS;
  localStorage.setItem(LS_GEO_OK_UNTIL, String(until));
}
function isGeoOk(){
  const until = Number(localStorage.getItem(LS_GEO_OK_UNTIL) || "0");
  return until > Date.now();
}

/* ===== SOUND GATE FLOW ===== */
async function gateStart(){
  // Включаем музыку строго по клику (iPhone-safe)
  setMusicEnabled(true);
  await playMusic();

  const wrap = document.getElementById("gateWrap");
  if(wrap) wrap.classList.add("gatePlaying");

  // Делаем “побольше” атмосферу: 2.8s + небольшой хвост
  setTimeout(()=>{
    // После интро показываем “всё как есть”
    goHome();
  }, 3200);
}

/* ===== ВОПРОСЫ ===== */
const QUESTIONS = [
  { id:"q1", title:"Не думайте долго.", text:"Что ближе прямо сейчас?", type:"single", options:["Тепло","Холод","Тень","Свет"] },
  { id:"q2", title:"Близость.", text:"Насколько близко подойти?", type:"single", options:["На расстоянии","Ближе","Почти вплотную","Без шагов назад"] },
  { id:"q3", title:"Источник.", text:"Откуда это должно прийти?", type:"single", options:["Из земли","С веток","Из печи","Из дыма"] },
  { id:"q4", title:"Материал.", text:"Если бы это можно было потрогать — оно было бы…", type:"single", options:["Бархат","Стекло","Дерево","Камень"] },
  { id:"q5", title:"Касание.", text:"Это должно коснуться вас как…", type:"single", options:["Шерсть","Хлопок","Металл","Лёд"] },
  { id:"q6", title:"Сегодня нельзя.", text:"Выберите то, что разрушит момент.", type:"multi", max:3, options:["Детская сладость","Кислая агрессия","Парфюм","Компот","Медицинская свежесть","Тяжёлые специи"] },
  { id:"q7", title:"Контроль.", text:"Сколько контроля вы оставляете себе?", type:"single", options:["Весь","Почти весь","Меньше половины","Ничего"] }
];

let currentQIndex = 0;
let answers = {};
let selectedMomentId = null;

/* ===== UI ===== */
function go(id){
  document.querySelectorAll(".screen").forEach(s=>s.classList.remove("active","fadeIn"));
  const el = document.getElementById(id);
  if(el){
    el.classList.add("active","fadeIn");
  }
}

function haptic(type="light"){
  try{ tg?.HapticFeedback?.impactOccurred?.(type); }catch(e){}
}

/* ===== STORAGE ===== */
function loadMoments(){
  try{ return JSON.parse(localStorage.getItem(LS_MOMENTS)||"[]"); }catch(e){ return []; }
}
function saveMoments(list){ localStorage.setItem(LS_MOMENTS, JSON.stringify(list)); }

function getActiveMoment(){
  try{ return JSON.parse(localStorage.getItem(LS_ACTIVE)||"null"); }catch(e){ return null; }
}
function setActiveMoment(m){ localStorage.setItem(LS_ACTIVE, JSON.stringify(m)); }
function clearActiveMoment(){ localStorage.removeItem(LS_ACTIVE); }

function getArchiveFilter(){
  return localStorage.getItem(LS_ARCHIVE_FILTER) || "all";
}
function setArchiveFilterValue(v){
  localStorage.setItem(LS_ARCHIVE_FILTER, v);
}

/* ===== EPITHETS ===== */
const EPITHET_ADJ = ["Тёплая","Холодная","Тёмная","Светлая","Тихая","Резкая","Сухая","Мягкая","Плотная","Чистая","Строгая","Нервная","Тяжёлая","Лёгкая"];
const EPITHET_NOUN = ["Пауза","Точность","Тишина","Сцена","Линия","Грань","Комната","Ночь","Ясность","Тень","Привычка","Воля","Траектория","Память"];

function lastEpithets(n=5){
  const list = loadMoments();
  return list.slice(-n).map(m=>m.epithet).filter(Boolean);
}
function generateEpithet(){
  const recent = new Set(lastEpithets(5));
  for(let i=0;i<30;i++){
    const a = EPITHET_ADJ[Math.floor(Math.random()*EPITHET_ADJ.length)];
    const b = EPITHET_NOUN[Math.floor(Math.random()*EPITHET_NOUN.length)];
    const e = `${a} ${b}`;
    if(!recent.has(e)) return e;
  }
  return `${EPITHET_ADJ[0]} ${EPITHET_NOUN[0]}`;
}

/* ===== BOT FALLBACK ===== */
function openBot(){
  tg?.openTelegramLink?.(`https://t.me/${BOT_USERNAME.replace("@","")}?start=geo`);
}

/* ===== GEO ===== */
function getGeolocation(){
  return new Promise((resolve,reject)=>{
    if(!navigator.geolocation){
      reject({ code: "not_supported" });
      return;
    }

    const tryGet = (opts) => new Promise((res, rej) => {
      navigator.geolocation.getCurrentPosition(
        pos => res({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
          accuracy: pos.coords.accuracy
        }),
        err => rej(err),
        opts
      );
    });

    tryGet({ enableHighAccuracy:true, timeout:20000, maximumAge:0 })
      .then(resolve)
      .catch(async (err)=>{
        try{
          const pos = await tryGet({ enableHighAccuracy:false, timeout:20000, maximumAge:60000 });
          resolve(pos);
        }catch(err2){
          reject(err2 || err);
        }
      });
  });
}

async function apiGeoCheck(lat,lng){
  const r = await fetch(`${BACKEND_BASE}/geo/check`,{
    method:"POST",
    headers:{'Content-Type':'application/json'},
    body: JSON.stringify({ lat, lng, venue: VENUE })
  });
  return r.json();
}

async function apiGeoSession(){
  if(!guest.id) return { ok:true, allowed:false };
  const r = await fetch(`${BACKEND_BASE}/geo/session?userId=${guest.id}`);
  return r.json();
}

/* ===== HOME ROUTING ===== */
function goHome(){
  const list = loadMoments();
  if(list.length === 0){
    renderWelcome();
    go("welcome");
  }else{
    renderCabinet();
    go("cabinet");
  }
}

function renderWelcome(){
  document.getElementById("welcomeTitle").textContent = `Добро пожаловать, ${guest.name}.`;
}

/* ===== RANKS + ACHIEVEMENTS ===== */
function getRank(momentsCount){
  if(momentsCount <= 0) return "Незнакомец";
  if(momentsCount <= 2) return "Гость";
  if(momentsCount <= 4) return "Постоянный";
  if(momentsCount <= 7) return "Посвящённый";
  return "Свой";
}

function computeStats(){
  const list = loadMoments();
  const momentsCount = list.length;
  const ratedCount = list.filter(m => !!m.rating).length;
  const tipCount = list.filter(m => !!m.tipClickedAt).length;
  const active = getActiveMoment();
  const hasActive = active && Date.now() < active.endAt;

  return { momentsCount, ratedCount, tipCount, hasActive };
}

function getAchievements(){
  const s = computeStats();

  return [
    { id:"first", title:"Первый момент", desc:"Вы вошли.", unlocked: s.momentsCount >= 1 },
    { id:"return", title:"Возвращение", desc:"Вы вернулись.", unlocked: s.momentsCount >= 3 },
    { id:"honesty", title:"Честность", desc:"Вы оценили три момента.", unlocked: s.ratedCount >= 3 },
    { id:"gesture", title:"Благодарность", desc:"Вы оставили жест.", unlocked: s.tipCount >= 1 }
  ];
}

/* ===== CABINET ===== */
function renderCabinet(){
  const list = loadMoments();
  const stats = computeStats();

  document.getElementById("cabTitle").textContent = guest.name;
  document.getElementById("cabSubtitle").textContent = `Сеансов: ${stats.momentsCount} · Оценок: ${stats.ratedCount}`;
  document.getElementById("cabRank").textContent = getRank(stats.momentsCount);

  const mainBtn = document.getElementById("cabMainBtn");
  mainBtn.textContent = stats.hasActive ? "Вернуться к процессу" : "Создать новый момент";

  const nowBox = document.getElementById("cabNowBox");
  nowBox.style.display = stats.hasActive ? "block" : "none";

  const last = [...list].sort((a,b)=>b.createdAt-a.createdAt).slice(0,3);
  const box = document.getElementById("cabLastList");
  box.innerHTML = "";

  if(!last.length){
    box.innerHTML = `<p class="small muted">Пока здесь пусто.</p>`;
  }else{
    last.forEach(m=>{
      const st = m.status === "active"
        ? `<span class="badge warn">В процессе</span>`
        : `<span class="badge done">Завершено</span>`;

      const rateText = m.rating
        ? `<span class="badge good">${m.rating}</span>`
        : `<span class="badge">Без оценки</span>`;

      box.innerHTML += `
        <div class="cardBox" style="margin-top:10px">
          <div class="row">
            <b>${m.epithet || "Момент"}</b>
            ${st}
          </div>
          <div class="row" style="margin-top:8px">
            <div class="small muted">${new Date(m.createdAt).toLocaleString()}</div>
            ${rateText}
          </div>
          <button class="btn" onclick="openMoment('${m.id}')">Открыть</button>
        </div>
      `;
    });
  }

  const ach = getAchievements();
  const grid = document.getElementById("achGrid");
  grid.innerHTML = "";
  ach.forEach(a=>{
    grid.innerHTML += `
      <div class="ach ${a.unlocked ? "" : "locked"}">
        <div class="t">${a.title}</div>
        <div class="d">${a.desc}</div>
      </div>
    `;
  });
}

function cabinetMainAction(){
  const active = getActiveMoment();
  if(active && Date.now() < active.endAt){
    resumeActiveMoment();
    return;
  }
  go("s0");
}

function resumeActiveMoment(){
  const active = getActiveMoment();
  if(!active) return;
  go("waiting");
  startTimer(active.startAt);
}

/* ===== PROLOGUE CONTINUE (SMART) ===== */
function prologueContinue(){
  // если допуск уже есть — не возвращаем к двери
  if(isGeoOk()){
    startCourse();
    return;
  }
  go("door");
}

/* ===== ARCHIVE ===== */
function openArchive(){
  renderArchive();
  go("archive");
}

function setArchiveFilter(mode){
  setArchiveFilterValue(mode);

  document.getElementById("fltAll").classList.toggle("active", mode === "all");
  document.getElementById("fltNoRate").classList.toggle("active", mode === "no_rate");

  renderArchive();
}

function renderArchive(){
  const list = [...loadMoments()].sort((a,b)=>b.createdAt-a.createdAt);
  const mode = getArchiveFilter();

  document.getElementById("archiveCount").textContent = `${list.length}`;

  let filtered = list;
  if(mode === "no_rate"){
    filtered = list.filter(m => !m.rating);
  }

  const box = document.getElementById("archiveList");
  box.innerHTML = "";

  if(!filtered.length){
    box.innerHTML = `<p class="small muted" style="margin-top:10px">Пусто.</p>`;
    return;
  }

  filtered.forEach(m=>{
    const st = m.status === "active"
      ? `<span class="badge warn">В процессе</span>`
      : `<span class="badge done">Завершено</span>`;

    const rateText = m.rating
      ? `<span class="badge good">${m.rating}</span>`
      : `<span class="badge">Без оценки</span>`;

    box.innerHTML += `
      <div class="cardBox" style="margin-top:10px">
        <div class="row">
          <b>${m.epithet || "Момент"}</b>
          ${st}
        </div>
        <div class="row" style="margin-top:8px">
          <div class="small muted">${new Date(m.createdAt).toLocaleString()}</div>
          ${rateText}
        </div>
        <button class="btn" onclick="openMoment('${m.id}')">Открыть</button>
      </div>
    `;
  });
}

/* ===== MOMENT DETAILS ===== */
function openMoment(id){
  selectedMomentId = id;

  const list = loadMoments();
  const m = list.find(x => x.id === id);
  if(!m){
    go("archive");
    return;
  }

  document.getElementById("momentTitle").textContent = m.epithet || "Момент";
  document.getElementById("momentTime").textContent = new Date(m.createdAt).toLocaleString();

  const status = m.status === "active" ? "В процессе" : "Завершено";
  document.getElementById("momentStatus").textContent = status;

  document.getElementById("tipLink").href = TIP_URL;

  const rateHint = document.getElementById("rateHint");
  const tipBox = document.getElementById("tipBox");
  const tipHint = document.getElementById("tipHint");

  if(m.rating){
    rateHint.textContent = `Зафиксировано: ${m.rating}`;
    tipBox.style.display = "block";
  }else{
    rateHint.textContent = "";
    tipBox.style.display = "none";
  }

  if(m.tipClickedAt){
    tipHint.textContent = "Жест уже был оставлен.";
  }else{
    tipHint.textContent = "";
  }

  go("moment");
}

function rateMoment(value){
  if(!selectedMomentId) return;

  const list = loadMoments();
  const idx = list.findIndex(x => x.id === selectedMomentId);
  if(idx === -1) return;

  if(list[idx].rating) return;

  list[idx].rating = value;
  saveMoments(list);

  haptic("medium");

  document.getElementById("rateHint").textContent = `Зафиксировано: ${value}`;
  document.getElementById("tipBox").style.display = "block";

  renderCabinet();
  renderArchive();
}

function tipClicked(){
  if(!selectedMomentId) return;

  const list = loadMoments();
  const idx = list.findIndex(x => x.id === selectedMomentId);
  if(idx === -1) return;

  if(!list[idx].tipClickedAt){
    list[idx].tipClickedAt = Date.now();
    saveMoments(list);
  }

  document.getElementById("tipHint").textContent = "Жест принят.";
  haptic("light");

  renderCabinet();
}

/* ===== COURSE ===== */
function startCourse(){
  answers = {};
  currentQIndex = 0;
  renderQuestion();
  go("course");
}

function renderQuestion(){
  const q = QUESTIONS[currentQIndex];
  document.getElementById("qTitle").textContent = q.title;
  document.getElementById("qText").textContent = q.text;

  const box = document.getElementById("qOptions");
  const footer = document.getElementById("qFooter");
  box.innerHTML = "";
  footer.innerHTML = "";

  if(q.type === "single"){
    q.options.forEach(opt=>{
      const div = document.createElement("div");
      div.className = "option";
      div.textContent = opt;
      div.onclick = () => {
        haptic("light");
        answers[q.id] = opt;

        if(q.id === "q2" && opt === "Без шагов назад"){
          setTimeout(nextQuestion, 250);
        }else{
          nextQuestion();
        }
      };
      box.appendChild(div);
    });
  }

  if(q.type === "multi"){
    const selected = new Set(answers[q.id] || []);
    const max = q.max || 3;

    q.options.forEach(opt=>{
      const div = document.createElement("div");
      div.className = "option" + (selected.has(opt) ? " selected" : "");
      div.textContent = opt;

      div.onclick = () => {
        haptic("light");
        if(selected.has(opt)){
          selected.delete(opt);
        }else{
          if(selected.size >= max) return;
          selected.add(opt);
        }
        answers[q.id] = Array.from(selected);
        renderQuestion();
      };

      box.appendChild(div);
    });

    const count = document.createElement("div");
    count.className = "small";
    count.textContent = `Выбрано: ${selected.size}/${max}`;
    footer.appendChild(count);

    const btn = document.createElement("button");
    btn.className = "btn primary";
    btn.textContent = "Дальше";
    btn.onclick = () => {
      haptic("medium");
      nextQuestion();
    };
    footer.appendChild(btn);
  }
}

function nextQuestion(){
  if(currentQIndex < QUESTIONS.length - 1){
    currentQIndex++;
    renderQuestion();
  }else{
    go("confirm");
  }
}

function backToLastQuestion(){
  currentQIndex = QUESTIONS.length - 1;
  renderQuestion();
  go("course");
}

/* ===== DOOR ===== */
async function doorCheck(){
  const btn = document.getElementById("btnDoor");
  const txt = document.getElementById("doorText");
  btn.disabled = true;
  txt.innerHTML = "Секунду.<br>Мы проверяем, где вы.";

  try{
    const geo = await getGeolocation();
    const data = await apiGeoCheck(geo.lat, geo.lng);

    if(data?.ok && data.allowed){
      // фикс: сохраняем, что допуск открыт (и не мучаем человека дальше)
      setGeoOkNow();
      haptic("medium");

      // сразу после гео — атмосферный gate
      go("soundGate");
      return;
    }

    const dist = Math.round(data?.distanceMeters ?? 9999);
    document.getElementById("outsideText").innerHTML =
      `Вы слишком далеко.<br>Сейчас между нами примерно <b>${dist} м</b>.<br><br>Подойдите ближе. И попробуйте снова.`;
    go("outside");
  }catch(e){
    // если браузер молчит — пробуем серверную сессию (fallback)
    const s = await apiGeoSession();
    if(s?.ok && s.allowed){
      setGeoOkNow();
      haptic("medium");
      go("soundGate");
      return;
    }

    if(e?.code === 1){
      go("no-permission");
      return;
    }
    go("geo-error");
  }finally{
    btn.disabled = false;
    txt.innerHTML = `Начало для всех одно.<br><br>Дверь открывается только внутри.<br>Разрешите местоположение.`;
  }
}

/* ===== CONFIRM ===== */
async function confirmMoment(){
  const btn = document.getElementById("btnConfirm");
  const hint = document.getElementById("confirmHint");
  btn.disabled = true;
  hint.textContent = "Проверяем допуск…";

  try{
    // фикс: если допуск уже есть — не дергаем гео снова
    let allowed = isGeoOk();

    if(!allowed){
      try{
        const geo = await getGeolocation();
        const data = await apiGeoCheck(geo.lat, geo.lng);
        allowed = !!(data?.ok && data.allowed);
      }catch(e){
        const s = await apiGeoSession();
        allowed = !!(s?.ok && s.allowed);
      }
    }

    if(!allowed){
      hint.textContent = "Нужен допуск.";
      setTimeout(()=>go("geo-error"), 500);
      return;
    }

    // если подтвердили — продлеваем TTL допуска
    setGeoOkNow();

    const id = Date.now()+"_"+Math.random().toString(36).slice(2,6);
    const epithet = generateEpithet();

    const moment = {
      id,
      guest,
      createdAt: Date.now(),
      startAt: Date.now(),
      endAt: Date.now() + DURATION_MS,
      status: "active",
      epithet,
      answers,
      venue: VENUE
    };

    const list = loadMoments();
    list.push({
      id: moment.id,
      createdAt: moment.createdAt,
      status: "active",
      epithet: moment.epithet,
      rating: null,
      tipClickedAt: null
    });
    saveMoments(list);
    setActiveMoment(moment);

    await fetch(`${BACKEND_BASE}/moment`,{
      method:"POST",
      headers:{'Content-Type':'application/json'},
      body: JSON.stringify(moment)
    });

    haptic("heavy");
    go("waiting");
    startTimer(moment.startAt);

  }catch(e){
    hint.textContent = "Кухня молчит.";
  }finally{
    btn.disabled = false;
    setTimeout(()=>{ hint.textContent=""; }, 2500);
  }
}

/* ===== TIMER ===== */
function startTimer(start){
  clearInterval(guestTimerInt);

  const hint = document.getElementById("guestHint");
  hint.textContent = "";

  guestTimerInt = setInterval(()=>{
    const d = (start + DURATION_MS) - Date.now();

    if(d <= 0){
      document.getElementById("guestTimer").textContent = "Готово";
      finishActiveMoment();
      clearInterval(guestTimerInt);
      setTimeout(()=>go("epilogue"), 500);
      return;
    }

    const m = Math.floor(d/60000);
    const s = Math.floor((d%60000)/1000);
    document.getElementById("guestTimer").textContent = `${m}:${String(s).padStart(2,"0")}`;

    if(d < 3*60*1000) hint.textContent = "Скоро.";
    else if(d < 10*60*1000) hint.textContent = "Вы почти там.";
    else if(d < 20*60*1000) hint.textContent = "Сейчас всё решается.";
    else hint.textContent = "";

  }, 1000);
}

function finishActiveMoment(){
  const active = getActiveMoment();
  if(!active) return;

  const list = loadMoments();
  const idx = list.findIndex(x => x.id === active.id);
  if(idx !== -1){
    list[idx].status = "done";
    saveMoments(list);
  }

  clearActiveMoment();
  renderCabinet();
  renderArchive();
}

/* ===== START ===== */
document.addEventListener("DOMContentLoaded", ()=>{
  updateMusicUI();
  applyMusicDefaults();

  if(isMusicEnabled()){
    playMusic();
  }

  const active = getActiveMoment();
  if(active && Date.now() < active.endAt){
    go("waiting");
    startTimer(active.startAt);
    return;
  }else{
    clearActiveMoment();
  }

  const mode = getArchiveFilter();
  document.getElementById("fltAll").classList.toggle("active", mode === "all");
  document.getElementById("fltNoRate").classList.toggle("active", mode === "no_rate");

  // НОВОЕ ПРАВИЛО:
  // Начало для всех: "дверь".
  // Но если допуск уже открыт — сразу показываем soundGate (атмосфера), и далее goHome().
  if(isGeoOk()){
    go("soundGate");
  }else{
    go("door");
  }
});
</script>

</body>
</html>
