// 1. Animasi sederhana untuk chart bar saat halaman dimuat
// 2. Hover efek interaktif pada service-box
// 3. Toggle bendera bahasa saat klik lang-box
// 4. Klik “Add Pockets” munculkan animasi feedback

document.addEventListener("DOMContentLoaded", () => {
  const chartLines = document.querySelectorAll(".chart-line");
  chartLines.forEach((line, i) => {
    line.style.height = "0px";
    setTimeout(() => {
      line.style.transition = "height 0.5s ease";
      line.style.height = `${20 + Math.random() * 80}px`; // Tinggi acak antara 20-100px
    }, i * 100);
  });
});

const addPocketBtn = document.querySelector(".addPockets-box");
addPocketBtn.addEventListener("click", e => {
  e.preventDefault();
  const title = addPocketBtn.querySelector("h4");
  title.textContent = "Added!";
  title.style.color = "green";
  setTimeout(() => {
    title.textContent = "Add Pockets";
    title.style.color = "";
  }, 1000);
});