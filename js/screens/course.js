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

  // концептуальные
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
  "Медный Пепел",
];

function randomEpithet() {
  return EPITHETS[Math.floor(Math.random() * EPITHETS.length)];
}

export function initCourseScreen() {
  // welcome -> course
  qs("#btnWelcomeStart")?.addEventListener("click", () => {
    answers = {};
    current = 0;
    go("course");
    renderQuestion();
  });

  // back
  qs("#btnCourseBack")?.addEventListener("click", () => {
    // если это первый вопрос — вернём в welcome
    if (current <= 0) {
      go("welcome");
      return;
    }
    current = Math.max(0, current - 1);
    renderQuestion();
  });
}

function renderQuestion() {
  const q = QUESTIONS[current];
  if (!q) return;

  qs("#courseTitle").textContent = q.title;
  qs("#courseText").textContent = q.text;

  const box = qs("#courseOptions");
  box.innerHTML = "";

  q.options.forEach(opt => {
    const div = document.createElement("div");
    div.className = "option";
    div.textContent = opt;
    div.addEventListener("click", () => pick(opt));
    box.appendChild(div);
  });
}

async function pick(val) {
  answers[current + 1] = val;
  current++;

  if (current < QUESTIONS.length) {
    renderQuestion();
    return;
  }

  // конец -> создаём момент
  await placeMoment();
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
    console.error("createMoment error:", e);
  }

  go("waiting");
}