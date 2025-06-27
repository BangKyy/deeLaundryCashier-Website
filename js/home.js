document.addEventListener("DOMContentLoaded", () => {
  // ===== Chart Animation =====
  const chartLines = document.querySelectorAll(".chart-line");
  chartLines.forEach((line, i) => {
    line.style.height = "0px";
    setTimeout(() => {
      line.style.transition = "height 0.5s ease";
      line.style.height = `${20 + Math.random() * 80}px`;
    }, i * 100);
  });

  // ===== Add Pocket Button Animation =====
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

  // ===== Function for Count Animation =====
  function animateCount(id, target, duration = 1500) {
    const el = document.getElementById(id);
    if (!el) return;

    let current = 0;
    const increment = Math.ceil(target / (duration / 16));
    const formatNumber = (num) => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      el.textContent = formatNumber(current);
    }, 16);
  }

  // ===== Run Animation for Each Number =====
  const totalBalance = parseInt(document.getElementById("totalBalance")?.textContent.replace(/\./g, "") || "0");
  animateCount("totalBalance", totalBalance);

  animateCount("orderIncoming", 4);
  animateCount("orderTarget", 40);
  animateCount("orderLate", 8);
});
