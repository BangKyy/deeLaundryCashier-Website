document.addEventListener("DOMContentLoaded", () => {
  const orderTabs = document.querySelectorAll(".order-box");
  const customersContent = document.querySelector(".customers-content");

  // Dummy data untuk setiap tab (kamu bisa ganti dengan fetch ke backend / localStorage)
  const orderData = {
    Queue: [
      {
        name: "Dimas Akbar M.",
        entryDate: "10/06/2025",
        estDate: "10/06/2025",
        services: "2 Services",
        price: "Rp 68.000",
        link: "../myadmin/add-transaction/checking/"
      },
      {
        name: "Salsabila R.",
        entryDate: "10/06/2025",
        estDate: "11/06/2025",
        services: "1 Service",
        price: "Rp 24.000",
        link: "../myadmin/add-transaction/checking/"
      }
    ],
    Process: [
      {
        name: "Bayu A.",
        entryDate: "09/06/2025",
        estDate: "10/06/2025",
        services: "3 Services",
        price: "Rp 90.000",
        link: "../myadmin/add-transaction/checking/"
      },
      {
        name: "Lestari M.",
        entryDate: "08/06/2025",
        estDate: "09/06/2025",
        services: "1 Service",
        price: "Rp 28.000",
        link: "../myadmin/add-transaction/checking/"
      },
      {
        name: "Riko N.",
        entryDate: "10/06/2025",
        estDate: "12/06/2025",
        services: "2 Services",
        price: "Rp 60.000",
        link: "../myadmin/add-transaction/checking/"
      },
      {
        name: "Ajeng F.",
        entryDate: "11/06/2025",
        estDate: "12/06/2025",
        services: "2 Services",
        price: "Rp 56.000",
        link: "../myadmin/add-transaction/checking/"
      }
    ],
    Take: [
      {
        name: "Rina A.",
        entryDate: "06/06/2025",
        estDate: "08/06/2025",
        services: "1 Service",
        price: "Rp 25.000",
        link: "../myadmin/add-transaction/checking/"
      }
      // Tambahkan hingga 9 data jika sesuai notif
    ],
    Finished: [
      {
        name: "Fajar P.",
        entryDate: "04/06/2025",
        estDate: "06/06/2025",
        services: "1 Service",
        price: "Rp 30.000",
        link: "../myadmin/add-transaction/checking/"
      }
      // Tambahkan hingga 8 data jika sesuai notif
    ],
    Cancel: [
      {
        name: "Intan L.",
        entryDate: "03/06/2025",
        estDate: "04/06/2025",
        services: "2 Services",
        price: "Rp 40.000",
        link: "../myadmin/add-transaction/checking/"
      }
      // Tambahkan hingga 8 data jika sesuai notif
    ]
  };

  // Fungsi render data pelanggan sesuai tab
  function renderCustomers(tabName) {
    customersContent.innerHTML = ""; // Reset isi

    const data = orderData[tabName];
    if (!data) return;

    data.forEach((item) => {
      const box = document.createElement("a");
      box.className = "customers-box";
      box.href = item.link;

      box.innerHTML = `
        <div class="profile-box">
            <i class="ph ph-user"></i>
        </div>
        <div class="profileUser">
            <div class="user">
                <h4>${item.name}</h4>
            </div>
            <div class="sum">
                <div class="date-section">
                    <h4 class="ent">${item.entryDate}</h4>
                    <h4 class="est">${item.estDate}</h4>
                </div>
                <div class="price-section">
                    <h4 class="note">${item.services}</h4>
                    <h4 class="price">${item.price}</h4>
                </div>
            </div>
        </div>
      `;

      customersContent.appendChild(box);
    });
  }

  // Default aktif tab pertama: Queue
  renderCustomers("Queue");

  // Event klik pada masing-masing tab
  orderTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      // Hilangkan kelas active dari semua tab
      orderTabs.forEach((t) => t.classList.remove("active"));
      // Tambahkan kelas active ke tab yang diklik
      tab.classList.add("active");

      const tabName = tab.querySelector("h4").textContent;
      renderCustomers(tabName);
    });
  });
});
