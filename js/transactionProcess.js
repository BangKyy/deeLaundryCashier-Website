document.addEventListener("DOMContentLoaded", () => {
  setupDropdownInputs();
  setupOrderButton();

  let originalTotal = parseFloat(localStorage.getItem("totalPrice")) || 0;
  const totalPriceDisplay = document.querySelector(".price-section h4");
  totalPriceDisplay.textContent = `Rp ${originalTotal.toLocaleString("id-ID")}`;

  function setupDropdownInputs() {
    const dropdownInputs = document.querySelectorAll('.service-inputSearch-section');

    dropdownInputs.forEach((section) => {
      const input = section.querySelector('input');
      const icon = section.querySelector('i');

      let options = [];
      const placeholder = input.placeholder.toLowerCase();

      if (placeholder.includes('perfume')) {
        options = ['Lavender', 'Ocean Breeze', 'Fresh Linen', 'No Perfume'];
      } else if (placeholder.includes('white')) {
        options = ['White t-shirts fade easily', 'Handle with care', 'Do not mix with dark clothes'];
      } else if (placeholder.includes('discount')) {
        options = ['No Discount', '10%', '20%', '50%'];
      }

      const dropdown = document.createElement('ul');
      dropdown.classList.add('dropdown-list');
      dropdown.style.display = 'none';

      options.forEach(option => {
        const li = document.createElement('li');
        li.textContent = option;

        li.addEventListener('click', () => {
          input.value = option;
          dropdown.style.display = 'none';
          if (placeholder.includes('discount')) {
            applyDiscountFromInput(input.value);
          }
        });

        dropdown.appendChild(li);
      });

      section.appendChild(dropdown);

      icon.addEventListener('click', () => {
        dropdown.style.display = dropdown.style.display === 'none' ? 'block' : 'none';
      });

      document.addEventListener('click', (e) => {
        if (!section.contains(e.target)) {
          dropdown.style.display = 'none';
        }
      });

      // Tambahan: jika input discount diketik manual
      if (placeholder.includes('discount')) {
        input.addEventListener('input', () => {
          applyDiscountFromInput(input.value);
        });
      }
    });
  }

  function applyDiscountFromInput(inputValue) {
    let discountValue = 0;

    // Bersihkan input dari simbol persen jika ada
    const cleaned = inputValue.replace('%', '').trim();

    // Jika angka valid dan dalam rentang 0-100
    const percent = parseFloat(cleaned);
    if (!isNaN(percent) && percent >= 0 && percent <= 100) {
      discountValue = percent / 100;
    }

    const discountedTotal = originalTotal - (originalTotal * discountValue);
    totalPriceDisplay.textContent = `Rp ${discountedTotal.toLocaleString("id-ID")}`;
  }

  function setupOrderButton() {
    const orderBtn = document.querySelector(".order-btn");
    const orderText = orderBtn.querySelector("h4");

    if (orderBtn) {
      orderBtn.addEventListener("click", () => {
        // Reset semua data
        localStorage.removeItem("totalPrice");
        localStorage.removeItem("selectedServices");

        originalTotal = 0;
        totalPriceDisplay.textContent = "Rp 0";

        // Kosongkan semua input
        const inputs = document.querySelectorAll('.service-inputSearch-section input');
        inputs.forEach(input => input.value = '');

        // Ubah status tombol
        orderText.textContent = "Completed";
        orderBtn.classList.add("completed");
        orderBtn.style.pointerEvents = "none";
      });
    }
  }
});
