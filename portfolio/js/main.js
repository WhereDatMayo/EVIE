(function () {
  var slide = document.getElementById("slide");
  if (!slide) return;

  function fit() {
    var maxW = window.innerWidth;
    var maxH = window.innerHeight;
    if (maxW < 720) {
      slide.style.width = "100vw";
      return;
    }
    var width = Math.min(maxW, maxH * (1920 / 1109));
    slide.style.width = width + "px";
  }

  fit();
  window.addEventListener("resize", fit);
})();
