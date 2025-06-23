document.addEventListener("DOMContentLoaded", () => {
  const serviceOrderTitle = document.querySelector(
    ".serviceOrder-container .title-section h6"
  );
  const totalPriceDisplay = document.querySelector(".price-section h4");
  const deleteBtn = document.querySelector(".del-btn");

  // Hapus semua data
  deleteBtn.addEventListener("click", () => {
    const confirmDelete = confirm(
      "Are you sure you want to delete all selected services?"
    );
    if (confirmDelete) {
      localStorage.removeItem("totalPrice");
      localStorage.removeItem("selectedServices");

      totalPrice = 0;
      selectedServices.length = 0;

      totalPriceDisplay.textContent = "Rp 0";
      serviceOrderTitle.textContent =
        "You have not selected any available services";

      alert("All service selections have been deleted.");
    }
  });
});
