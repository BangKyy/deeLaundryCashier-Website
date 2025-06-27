document.addEventListener("DOMContentLoaded", () => {
  // === ORDER STATE LOGIC ===
  const btnOrderProcess = document.querySelector(".btnOrder");
  const btnText = btnOrderProcess.querySelector("h4");

  const waBtn = document.querySelector(".waBtn");
  const cancelBtn = document.querySelector(".cancelBtn");

  // Sembunyikan tombol WA dan Cancel saat halaman pertama kali dibuka
  waBtn.style.display = "none";
  cancelBtn.style.display = "none";

  let currentState = "process";

  btnOrderProcess.addEventListener("click", () => {
    if (currentState === "process") {
      btnText.textContent = "Order Ready to be Picked Up";
      currentState = "ready";
    } else if (currentState === "ready") {
      btnText.textContent = "Order Completed / Picked Up by Customer";
      currentState = "completed";

      // Tampilkan tombol WA dan Cancel
      waBtn.style.display = "flex";
      cancelBtn.style.display = "flex";
    }
  });

  waBtn.addEventListener("click", () => {
    alert("WhatsApp notification sent to customer!");
  });

  cancelBtn.addEventListener("click", () => {
    const confirmCancel = confirm("Are you sure you want to cancel this transaction?");
    if (confirmCancel) {
      location.reload(); // Atau arahkan ke halaman lain
    }
  });

  // === PAYMENT LOGIC ===
  const btnPay = document.querySelector(".order-btn");
  const btnPayText = btnPay.querySelector("h4");

  const totalPriceElement = document.querySelector(".price-section h4");
  const paymentStatus = document.querySelector(".payment-status");

  btnPay.addEventListener("click", () => {
    btnPayText.textContent = "Completed";

    // Reset total price to 0
    totalPriceElement.textContent = "Rp 0";

    // Change payment status to Paid Off
    paymentStatus.textContent = "Paid off";
    paymentStatus.style.color = "var(--green-color1)";

    // Clear local storage (optional: adjust key if needed)
    localStorage.clear(); // or localStorage.removeItem("yourKey");

    // Optionally show confirmation
    alert("Payment completed and local storage has been cleared.");
  });
});
