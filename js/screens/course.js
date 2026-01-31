import { api } from "../api.js";
import { go, qs } from "../ui.js";
import { addGuestMomentId } from "../storage.js";

let answers = {};
let current = 0;

const QUESTIONS = [
  { title: "Не думайте долго.", text: "К какому цвету тянется рука сейчас?", options: ["Коричневый", "Зелёный", "Синий", "Фиолетовый", "Белый"] },
  { title: "Ощущение.", text: "Не вкус. Не запах. Ощущение во рту —", options: ["Сухо", "Мягко", "Плотно", "Пусто"] },
  { title: "Если сделать паузу.", text: "Не перекусить. Просто паузу.", options: ["Орех", "Фрукт", "Хлеб", "Ничего"] },
  { title: "Скорость.", text: "Это время хочется прожить —", options: ["Медленно", "Рывками", "Ровно", "Не чувствуя времени"] },
  { title: "Пространство.", text: "Если закрыть глаза, вокруг сейчас —", options: ["Полумрак", "Яркий свет", "Тень", "Ничего"] },
  { title: "Этот момент —", text: "не про планы и не про цели.", options: ["Начало", "Продолжение", "Завершение"] },

  // новые вопросы под твой “концепт”
  { title: "Температура.", text: "Это должно быть —", options: ["Холод", "Тепло", "Без температуры", "Контраст"] },
  { title: "Тело.", text: "Это должно ощущаться —", options: ["Почти вплотную", "На расстоянии", "Воздушно", "Тяжело"] },
  { title: "Материал.", text: "Ближе к чему?", options: ["Бархат", "Металл", "Дерево", "Стекло"] },
  { title: "Запрет.", text: "Что сегодня нельзя впускать?", options: ["Цитрус", "Ягоды", "Десерт", "Тяжёлые специи", "Мята"] },
  { title: "Вес.", text: "Это должно быть —", options: ["Легко", "Ровно", "Плотно", "Тяжело"] },
];

const EPITHETS = [
  "Сухая Тишина",
  "Тихая Ночь",
  "Чёрная Тень",
  "Белый Шум",
  "Холодный Свет",
  "Тёплый Металл",
];

function randomEpithet() {
  return EPITHETS[Math.floor(Math.random() * EPITHETS.length)];
}

export function initCourseScreen() {
  // пролог
  qs("#btnPrologueContinue")?.addEventListener("click", () => {
    answers = {};
    current = 0;
    go("course");
    renderQuestion();
  });

  qs("#btnPrologueBack")?.addEventListener("click", () => go("cabinet"));

  // confirm
  qs("#btnConfirm")?.addEventListener("click", async () => {
    await placeMoment();
  });

  qs("#btnConfirmBack")?.addEventListener("click", () => {
    go("course");
    renderQuestion();
  });
}

function renderQuestion() {
  const q = QUESTIONS[current];
  if (!q) return;

  qs("#qTitle").textContent = q.title;
  qs("#qText").textContent = q.text;

  const box = qs("#qOptions");
  box.innerHTML = "";

  q.options.forEach(opt => {
    const div = document.createElement("div");
    div.className = "option";
    div.textContent = opt;
    div.addEventListener("click", () => pick(opt));
    box.appendChild(div);
  });

  qs("#qFooter").innerHTML = `<div class="small muted">Вопрос ${current + 1} из ${QUESTIONS.length}</div>`;
}

function pick(val) {
  answers[current + 1] = val;

  current++;
  if (current < QUESTIONS.length) {
    renderQuestion();
  } else {
    // в confirm
    go("confirm");
    qs("#confirmHint").textContent = "Время начнётся, когда кухня подтвердит.";
  }
}

async function placeMoment() {
  const tg = window.Telegram?.WebApp;
  const user = tg?.initDataUnsafe?.user;

  const id = Date.now() + "_" + Math.random().toString(36).slice(2, 6);

  const moment = {
    id,
    createdAt: Date.now(),
    status: "new",
    guest: {
      id: user?.id,
      name: user?.first_name || "Гость",
      username: user?.username || ""
    },
    answers,
    epithet: randomEpithet(),
    rating: null,
    acceptedAt: null
  };

  addGuestMomentId(id);

  try {
    await api.createMoment(moment);
  } catch (e) {
    console.error(e);
  }

  go("waiting");
}