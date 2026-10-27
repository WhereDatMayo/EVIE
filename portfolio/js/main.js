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

const books = document.querySelectorAll(".book[data-title]");

function showFeature(book) {
  if (!featured.title || !book) return;
  books.forEach((el) => el.classList.toggle("is-featured", el === book));
  featured.title.textContent = book.dataset.title;
  featured.lede.textContent = book.dataset.lede;
  featured.type.textContent = book.dataset.type;
  featured.link.href = book.dataset.href;
  if (featured.stat1 && book.dataset.stat1) {
    featured.stat1.innerHTML = `<span>01</span> ${book.dataset.stat1}`;
  }
  if (featured.stat2 && book.dataset.stat2) {
    featured.stat2.innerHTML = `<span>02</span> ${book.dataset.stat2}`;
  }
}

books.forEach((book) => {
  book.addEventListener("mouseenter", () => showFeature(book));
  book.addEventListener("focus", () => showFeature(book));
});
