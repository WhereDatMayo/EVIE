const now = new Date();
const dows = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const dowEl = document.getElementById("date-dow");
const numEl = document.getElementById("date-num");

if (dowEl) dowEl.textContent = dows[now.getDay()];
if (numEl) numEl.textContent = String(now.getDate());
