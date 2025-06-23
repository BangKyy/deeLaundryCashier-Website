document.addEventListener("DOMContentLoaded", () => {
  const chooseButtons = document.querySelectorAll(".chooseBtn-section");
  const popUp = document.querySelector(".popUp-container");
  const cancelBtn = document.querySelector(".cancelBtn");
  const saveBtn = document.querySelector(".saveBtn");
  const quantityInput = document.querySelector(".input-box input");
  const serviceOrderTitle = document.querySelector(
    ".serviceOrder-container .title-section h6"
  );
  const totalPriceDisplay = document.querySelector(".price-section h4");
  const deleteBtn = document.querySelector(".del-btn");

  let selectedService = null;
  let totalPrice = 0;
  const selectedServices = [];

  // Ambil data dari localStorage saat halaman dimuat
  const storedTotal = localStorage.getItem("totalPrice");
  if (storedTotal) {
    totalPrice = parseFloat(storedTotal);
    totalPriceDisplay.textContent = `Rp ${totalPrice.toLocaleString("id-ID")}`;
  }

  const storedServices = JSON.parse(localStorage.getItem("selectedServices"));
  if (Array.isArray(storedServices) && storedServices.length > 0) {
    storedServices.forEach((service) => selectedServices.push(service));
    serviceOrderTitle.textContent = `${selectedServices.length} service(s) selected`;
  }

  // Fungsi untuk mengambil angka dari string harga
  function extractPrice(text) {
    const match = text.match(/Rp\s?([\d.]+)/);
    return match ? parseInt(match[1].replace(/\./g, ""), 10) : 0;
  }

  // Ketika tombol "Choose" diklik
  chooseButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const productSection = btn.closest(".products-section");
      const name = productSection.querySelector(".name-product h4").innerText;
      const priceText =
        productSection.querySelector(".name-product h6").innerText;
      const price = extractPrice(priceText);

      selectedService = {
        name,
        price,
        element: productSection,
      };

      quantityInput.value = "";
      popUp.style.display = "flex";
    });
  });

  // Cancel popup
  cancelBtn.addEventListener("click", (e) => {
    e.preventDefault();
    selectedService = null;
    popUp.style.display = "none";
  });

  // Simpan pilihan saat klik "Save"
  saveBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const quantity = parseFloat(quantityInput.value);

    if (!selectedService || isNaN(quantity) || quantity <= 0) {
      alert("Please enter a valid quantity.");
      return;
    }

    const total = selectedService.price * quantity;
    totalPrice += total;

    const newService = {
      name: selectedService.name,
      price: selectedService.price,
      quantity,
      total,
    };
    selectedServices.push(newService);

    // Update tampilan
    serviceOrderTitle.textContent = `${selectedServices.length} service(s) selected`;
    totalPriceDisplay.textContent = `Rp ${totalPrice.toLocaleString("id-ID")}`;
    popUp.style.display = "none";

    // Simpan ke localStorage
    localStorage.setItem("totalPrice", totalPrice.toString());
    localStorage.setItem("selectedServices", JSON.stringify(selectedServices));
  });

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
