document.addEventListener("DOMContentLoaded", () => {
  function animateCount(id, targetValue, duration = 1500) {
    const el = document.getElementById(id);
    if (!el) return;

    let start = 0;
    const increment = Math.ceil(targetValue / (duration / 16));
    const format = (val) => val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

    const timer = setInterval(() => {
      start += increment;
      if (start >= targetValue) {
        start = targetValue;
        clearInterval(timer);
      }
      el.textContent = format(start);
    }, 16);
  }

  // === Inisialisasi animasi angka ===
  animateCount("turnover", 32972420);
  animateCount("income", 12500000);
  animateCount("outcome", 4500000);

  animateCount("orderIncoming", 20);
  animateCount("orderTarget", 40);
  animateCount("lateOrder", 10);
});
