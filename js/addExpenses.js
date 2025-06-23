document.addEventListener("DOMContentLoaded", () => {
  const categoryInput = document.querySelector(".expenditureCategory-input");
  const icon = categoryInput.nextElementSibling; // <i> icon
  const container = categoryInput.closest(".input-box");
  const saveBtn = document.querySelector(".saveExpense-btn");
  const saveText = saveBtn.querySelector("h4");

  saveBtn.addEventListener("click", (e) => {
    e.preventDefault(); // Mencegah navigasi langsung

    // Tampilkan alert
    alert("Data berhasil disimpan.");

    // Ubah teks tombol
    saveText.textContent = "Successfully Saved";

    // (Opsional) Nonaktifkan tombol agar tidak bisa diklik ulang
    saveBtn.classList.add("disabled");
    saveBtn.style.pointerEvents = "none";
    saveBtn.style.opacity = "0.6";

    // (Opsional) Redirect setelah delay
    setTimeout(() => {
      window.location.href = "../../home"; // arahkan ke halaman report
    }, 1500); // delay 1.5 detik agar user lihat pesan berubah
  });

  // Daftar preset kategori
  const categories = [
    "Operational",
    "Maintenance",
    "Salary",
    "Utilities",
    "Cleaning Supplies",
    "Other"
  ];

  // Buat dropdown <ul>
  const dropdown = document.createElement("ul");
  dropdown.classList.add("dropdown-category");
  dropdown.style.display = "none";

  categories.forEach(category => {
    const li = document.createElement("li");
    li.textContent = category;
    li.addEventListener("click", () => {
      categoryInput.value = category;
      dropdown.style.display = "none";
    });
    dropdown.appendChild(li);
  });

  container.appendChild(dropdown);

  // Toggle saat icon diklik
  icon.addEventListener("click", () => {
    dropdown.style.display = dropdown.style.display === "none" ? "block" : "none";
  });

  // Tutup dropdown jika klik di luar
  document.addEventListener("click", (e) => {
    if (!container.contains(e.target)) {
      dropdown.style.display = "none";
    }
  });
});
