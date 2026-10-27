const now = new Date();
const dows = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const dowEl = document.getElementById("date-dow");
const numEl = document.getElementById("date-num");
const yearEl = document.getElementById("year");

if (dowEl) dowEl.textContent = dows[now.getDay()];
if (numEl) numEl.textContent = String(now.getDate());
if (yearEl) yearEl.textContent = String(now.getFullYear());

const featured = {
  title: document.getElementById("featured-title"),
  lede: document.getElementById("featured-lede"),
  type: document.getElementById("featured-type"),
  link: document.getElementById("featured-link"),
  stat1: document.getElementById("featured-stat-1"),
  stat2: document.getElementById("featured-stat-2"),
};

if (featured.title) featured.title.dataset.current = featured.title.textContent.trim();
if (featured.lede) featured.lede.dataset.current = featured.lede.textContent.trim();
if (featured.type) featured.type.dataset.current = featured.type.textContent.trim();

const books = document.querySelectorAll(".book[data-title]");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function swapCopy(el, value) {
  if (!el || el.dataset.current === value) return;
  el.dataset.current = value;
  if (reduceMotion) {
    el.textContent = value;
    return;
  }
  el.classList.add("is-swapping");
  window.setTimeout(() => {
    el.textContent = value;
    el.classList.remove("is-swapping");
  }, 180);
}

function showFeature(book) {
  if (!featured.title || !book) return;
  books.forEach((el) => el.classList.toggle("is-featured", el === book));
  swapCopy(featured.title, book.dataset.title);
  swapCopy(featured.lede, book.dataset.lede);
  swapCopy(featured.type, book.dataset.type);
  featured.link.href = book.dataset.href;
  if (featured.stat1 && book.dataset.stat1) {
    featured.stat1.classList.toggle("is-swapping", !reduceMotion);
    window.setTimeout(() => {
      featured.stat1.innerHTML = `<span>01</span> ${book.dataset.stat1}`;
      featured.stat1.classList.remove("is-swapping");
    }, reduceMotion ? 0 : 180);
  }
  if (featured.stat2 && book.dataset.stat2) {
    featured.stat2.classList.toggle("is-swapping", !reduceMotion);
    window.setTimeout(() => {
      featured.stat2.innerHTML = `<span>02</span> ${book.dataset.stat2}`;
      featured.stat2.classList.remove("is-swapping");
    }, reduceMotion ? 0 : 180);
  }
}

books.forEach((book) => {
  book.addEventListener("mouseenter", () => showFeature(book));
  book.addEventListener("focus", () => showFeature(book));
});
