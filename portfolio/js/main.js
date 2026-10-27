const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = String(new Date().getFullYear());

const track = document.getElementById("work-track");
const prev = document.getElementById("work-prev");
const next = document.getElementById("work-next");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function cardStep() {
  const card = track?.querySelector(".cover");
  if (!card) return 320;
  const styles = window.getComputedStyle(track);
  const gap = Number.parseFloat(styles.columnGap || styles.gap) || 14;
  return card.getBoundingClientRect().width + gap;
}

function updateButtons() {
  if (!track || !prev || !next) return;
  const max = track.scrollWidth - track.clientWidth - 2;
  prev.disabled = track.scrollLeft <= 2;
  next.disabled = track.scrollLeft >= max;
}

function scrollByCard(direction) {
  if (!track) return;
  track.scrollBy({
    left: direction * cardStep(),
    behavior: reduceMotion ? "auto" : "smooth",
  });
}

if (track && prev && next) {
  prev.addEventListener("click", () => scrollByCard(-1));
  next.addEventListener("click", () => scrollByCard(1));
  track.addEventListener("scroll", updateButtons, { passive: true });
  window.addEventListener("resize", updateButtons);
  updateButtons();
}
