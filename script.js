document.addEventListener('DOMContentLoaded', () => {

    // =======================================================================
    // !! PERINGATAN !! DATA PRODUK DI BAWAH INI ADALAH CONTOH / PLACEHOLDER !!
    // !! HARGA (price & originalPrice) BUKAN HARGA PASARAN INDONESIA AKTUAL !!
    // !! GANGHGA PONSEL WAJIB MENGGANTI SEMUA DATA INI SESUAI STOK & HARGA TOKO !!
    // =======================================================================
    const productData = [
        // --- iPhone ---
        { id: 1, brand: 'iPhone', model: 'iPhone 16 Pro Max', spec: '256GB', price: 22499999, originalPrice: 29500000, status: 'Tersedia', imageUrl: null },
        { id: 2, brand: 'iPhone', model: 'iPhone 16 Pro Max', spec: '512GB', price: 27999999, originalPrice: 32000000, status: 'Tersedia', imageUrl: null },
        { id: 3, brand: 'iPhone', model: 'iPhone 16 Pro', spec: '128GB', price: 18499999, originalPrice: 25000000, status: 'Tersedia', imageUrl: null },
        { id: 4, brand: 'iPhone', model: 'iPhone 16 Pro', spec: '256GB', price: 21499999, originalPrice: 27500000, status: 'Tersedia', imageUrl: null },
        { id: 5, brand: 'iPhone', model: 'iPhone 16', spec: '128GB', price: 14999999, originalPrice: 18900000, status: 'Tersedia', imageUrl: null },
        { id: 6, brand: 'iPhone', model: 'iPhone 16', spec: '256GB', price: 17499999, originalPrice: 20900000, status: 'Tersedia', imageUrl: null },
        { id: 7, brand: 'iPhone', model: 'iPhone 15 Pro', spec: '256GB', price: 21000000, originalPrice: 21800000, status: 'Stok Habis', imageUrl: null },
        { id: 8, brand: 'iPhone', model: 'iPhone 15', spec: '128GB', price: 11499999, originalPrice: 16000000, status: 'Tersedia', imageUrl: null },
        { id: 9, brand: 'iPhone', model: 'iPhone 13', spec: '128GB', price: 8499999, originalPrice: 10100000, status: 'Tersedia', imageUrl: null },

        // --- Samsung ---
        { id: 9, brand: 'Samsung', model: 'Galaxy S25 Ultra', spec: '256GB / 12GB RAM', price: 25000000, originalPrice: 26000000, status: 'Tersedia', imageUrl: null },
        { id: 10, brand: 'Samsung', model: 'Galaxy S25 Ultra', spec: '512GB / 12GB RAM', price: 28000000, originalPrice: 29000000, status: 'Tersedia', imageUrl: null },
        { id: 11, brand: 'Samsung', model: 'Galaxy S25+', spec: '256GB / 8GB RAM', price: 19000000, originalPrice: 19900000, status: 'Stok Habis', imageUrl: null },
        { id: 12, brand: 'Samsung', model: 'Galaxy S25', spec: '128GB / 8GB RAM', price: 16500000, originalPrice: 17200000, status: 'Tersedia', imageUrl: null },
        { id: 13, brand: 'Samsung', model: 'Galaxy Z Fold 7', spec: '512GB / 12GB RAM', price: 33000000, originalPrice: 34500000, status: 'Tersedia', imageUrl: null },
        { id: 14, brand: 'Samsung', model: 'Galaxy Z Flip 7', spec: '256GB / 8GB RAM', price: 17000000, originalPrice: 17800000, status: 'Tersedia', imageUrl: null },
        // { id: 15, brand: 'Samsung', model: 'Galaxy A76 5G', spec: '256GB / 8GB RAM', price: 7800000, originalPrice: 8200000, status: 'Tersedia', imageUrl: null },
        // { id: 16, brand: 'Samsung', model: 'Galaxy A56 5G', spec: '128GB / 8GB RAM', price: 6500000, originalPrice: 6900000, status: 'Tersedia', imageUrl: null },
        { id: 51, brand: 'Samsung', model: 'Galaxy A56 5G', spec: '256GB / 8GB RAM', price: 6199999, originalPrice: 7600000, status: 'Tersedia', imageUrl: null },
        { id: 52, brand: 'Samsung', model: 'Galaxy A36 5G', spec: '128GB / 6GB RAM', price: 4800000, originalPrice: 5100000, status: 'Tersedia', imageUrl: null },
        { id: 53, brand: 'Samsung', model: 'Galaxy M36 5G', spec: '128GB / 8GB RAM', price: 4500000, originalPrice: 4800000, status: 'Stok Habis', imageUrl: null },
        { id: 54, brand: 'Samsung', model: 'Galaxy A16', spec: '64GB / 4GB RAM', price: 2500000, originalPrice: 2700000, status: 'Tersedia', imageUrl: null },
        // { id: 55, brand: 'Samsung', model: 'Galaxy A06 Core', spec: '32GB / 3GB RAM', price: 1500000, originalPrice: 1650000, status: 'Tersedia', imageUrl: null },

        // --- Vivo ---
        { id: 17, brand: 'Vivo', model: 'X110 Pro+', spec: '512GB / 16GB RAM', price: 19500000, originalPrice: 20500000, status: 'Tersedia', imageUrl: null },
        { id: 18, brand: 'Vivo', model: 'X110', spec: '256GB / 12GB RAM', price: 15000000, originalPrice: 15800000, status: 'Tersedia', imageUrl: null },
        { id: 19, brand: 'Vivo', model: 'V35 Pro', spec: '256GB / 12GB RAM', price: 8500000, originalPrice: 8999000, status: 'Tersedia', imageUrl: null },
        { id: 20, brand: 'Vivo', model: 'V35', spec: '128GB / 8GB RAM', price: 6000000, originalPrice: 6500000, status: 'Stok Habis', imageUrl: null },
        { id: 56, brand: 'Vivo', model: 'V35e', spec: '128GB / 8GB RAM', price: 5200000, originalPrice: 5600000, status: 'Tersedia', imageUrl: null },
        { id: 21, brand: 'Vivo', model: 'Y59 5G', spec: '256GB / 8GB RAM', price: 4500000, originalPrice: 4800000, status: 'Tersedia', imageUrl: null },
        { id: 57, brand: 'Vivo', model: 'Y39s', spec: '128GB / 8GB RAM', price: 3800000, originalPrice: 4100000, status: 'Tersedia', imageUrl: null },
        { id: 58, brand: 'Vivo', model: 'Y29', spec: '128GB / 6GB RAM', price: 3100000, originalPrice: 3300000, status: 'Tersedia', imageUrl: null },
        { id: 59, brand: 'Vivo', model: 'Y19t', spec: '64GB / 4GB RAM', price: 2300000, originalPrice: 2500000, status: 'Stok Habis', imageUrl: null },
        { id: 60, brand: 'Vivo', model: 'Y05', spec: '32GB / 3GB RAM', price: 1600000, originalPrice: 1750000, status: 'Tersedia', imageUrl: null },

        // --- Oppo ---
        { id: 22, brand: 'Oppo', model: 'Find X8 Pro', spec: '512GB / 16GB RAM', price: 21000000, originalPrice: 22000000, status: 'Tersedia', imageUrl: null },
        { id: 61, brand: 'Oppo', model: 'Find X8', spec: '256GB / 12GB RAM', price: 17500000, originalPrice: 18500000, status: 'Stok Habis', imageUrl: null },
        { id: 23, brand: 'Oppo', model: 'Reno 13 Pro+', spec: '512GB / 12GB RAM', price: 11000000, originalPrice: 11800000, status: 'Tersedia', imageUrl: null },
        { id: 62, brand: 'Oppo', model: 'Reno 13 Pro', spec: '256GB / 12GB RAM', price: 9500000, originalPrice: 9999000, status: 'Tersedia', imageUrl: null },
        { id: 24, brand: 'Oppo', model: 'Reno 13', spec: '128GB / 8GB RAM', price: 7000000, originalPrice: 7500000, status: 'Tersedia', imageUrl: null },
        { id: 63, brand: 'Oppo', model: 'Reno 13 F', spec: '128GB / 8GB RAM', price: 6200000, originalPrice: 6600000, status: 'Tersedia', imageUrl: null },
        { id: 25, brand: 'Oppo', model: 'A99 5G', spec: '256GB / 8GB RAM', price: 5500000, originalPrice: 5900000, status: 'Stok Habis', imageUrl: null },
        { id: 64, brand: 'Oppo', model: 'A85 5G', spec: '128GB / 8GB RAM', price: 4500000, originalPrice: 4800000, status: 'Tersedia', imageUrl: null },
        { id: 26, brand: 'Oppo', model: 'A65s', spec: '128GB / 6GB RAM', price: 3200000, originalPrice: 3400000, status: 'Tersedia', imageUrl: null },
        { id: 65, brand: 'Oppo', model: 'A35', spec: '64GB / 4GB RAM', price: 2400000, originalPrice: 2600000, status: 'Tersedia', imageUrl: null },
        { id: 66, brand: 'Oppo', model: 'A19k', spec: '32GB / 3GB RAM', price: 1700000, originalPrice: 1850000, status: 'Tersedia', imageUrl: null },

        // --- Xiaomi ---
        { id: 27, brand: 'Xiaomi', model: '15 Ultra', spec: '512GB / 16GB RAM', price: 18000000, originalPrice: 19000000, status: 'Tersedia', imageUrl: null },
        { id: 28, brand: 'Xiaomi', model: '15 Pro', spec: '256GB / 12GB RAM', price: 14000000, originalPrice: 14800000, status: 'Stok Habis', imageUrl: null },
        { id: 67, brand: 'Xiaomi', model: '15', spec: '256GB / 8GB RAM', price: 11500000, originalPrice: 12200000, status: 'Tersedia', imageUrl: null },
        { id: 68, brand: 'Xiaomi', model: '15 Lite NE', spec: '128GB / 8GB RAM', price: 7500000, originalPrice: 7900000, status: 'Tersedia', imageUrl: null },
        { id: 29, brand: 'Xiaomi', model: 'Redmi Note 15 Pro+', spec: '512GB / 12GB RAM', price: 6800000, originalPrice: 7200000, status: 'Tersedia', imageUrl: null },
        { id: 69, brand: 'Xiaomi', model: 'Redmi Note 15 Pro', spec: '256GB / 8GB RAM', price: 5500000, originalPrice: 5750000, status: 'Tersedia', imageUrl: null },
        { id: 30, brand: 'Xiaomi', model: 'Redmi Note 15 5G', spec: '128GB / 8GB RAM', price: 4500000, originalPrice: 4800000, status: 'Tersedia', imageUrl: null },
        { id: 70, brand: 'Xiaomi', model: 'Redmi Note 15', spec: '128GB / 6GB RAM', price: 3800000, originalPrice: 4100000, status: 'Stok Habis', imageUrl: null },
        { id: 71, brand: 'Xiaomi', model: 'Redmi 14C', spec: '128GB / 6GB RAM', price: 2500000, originalPrice: 2700000, status: 'Tersedia', imageUrl: null },
        { id: 72, brand: 'Xiaomi', model: 'Redmi A4+', spec: '64GB / 4GB RAM', price: 1800000, originalPrice: 1950000, status: 'Tersedia', imageUrl: null },
        { id: 31, brand: 'Xiaomi', model: 'Poco F7 Pro', spec: '256GB / 12GB RAM', price: 7800000, originalPrice: 8200000, status: 'Tersedia', imageUrl: null },
        { id: 73, brand: 'Xiaomi', model: 'Poco F7', spec: '128GB / 8GB RAM', price: 6500000, originalPrice: 6900000, status: 'Stok Habis', imageUrl: null },
        { id: 74, brand: 'Xiaomi', model: 'Poco X7 Pro 5G', spec: '256GB / 8GB RAM', price: 5200000, originalPrice: 5500000, status: 'Tersedia', imageUrl: null },
        { id: 32, brand: 'Xiaomi', model: 'Poco M8 5G', spec: '128GB / 6GB RAM', price: 3300000, originalPrice: 3500000, status: 'Tersedia', imageUrl: null },
        { id: 75, brand: 'Xiaomi', model: 'Poco C75', spec: '64GB / 4GB RAM', price: 1900000, originalPrice: 2100000, status: 'Tersedia', imageUrl: null },

        // --- Realme ---
        { id: 33, brand: 'Realme', model: 'GT 7 Pro', spec: '512GB / 16GB RAM', price: 10500000, originalPrice: 11200000, status: 'Tersedia', imageUrl: null },
        { id: 76, brand: 'Realme', model: 'GT 7', spec: '256GB / 12GB RAM', price: 9000000, originalPrice: 9500000, status: 'Tersedia', imageUrl: null },
        { id: 34, brand: 'Realme', model: 'GT Neo 8', spec: '256GB / 12GB RAM', price: 7500000, originalPrice: 7900000, status: 'Stok Habis', imageUrl: null },
        { id: 77, brand: 'Realme', model: 'GT Neo 8 SE', spec: '256GB / 8GB RAM', price: 6500000, originalPrice: 6800000, status: 'Tersedia', imageUrl: null },
        { id: 35, brand: 'Realme', model: '14 Pro+', spec: '256GB / 12GB RAM', price: 5800000, originalPrice: 6100000, status: 'Tersedia', imageUrl: null },
        { id: 78, brand: 'Realme', model: '14 Pro', spec: '128GB / 8GB RAM', price: 5100000, originalPrice: 5400000, status: 'Tersedia', imageUrl: null },
        { id: 36, brand: 'Realme', model: '14 5G', spec: '128GB / 8GB RAM', price: 4500000, originalPrice: 4800000, status: 'Tersedia', imageUrl: null },
        { id: 79, brand: 'Realme', model: 'Narzo 80 Pro 5G', spec: '128GB / 8GB RAM', price: 4000000, originalPrice: 4300000, status: 'Stok Habis', imageUrl: null },
        { id: 80, brand: 'Realme', model: 'Narzo 80A', spec: '128GB / 6GB RAM', price: 3200000, originalPrice: 3400000, status: 'Tersedia', imageUrl: null },
        { id: 37, brand: 'Realme', model: 'C75 Prime', spec: '128GB / 8GB RAM', price: 3000000, originalPrice: 3200000, status: 'Tersedia', imageUrl: null },
        { id: 81, brand: 'Realme', model: 'C75', spec: '128GB / 6GB RAM', price: 2600000, originalPrice: 2800000, status: 'Tersedia', imageUrl: null },
        { id: 82, brand: 'Realme', model: 'C65', spec: '64GB / 4GB RAM', price: 1900000, originalPrice: 2050000, status: 'Tersedia', imageUrl: null },

        // --- Itel ---
        { id: 38, brand: 'Itel', model: 'S25 Pro 5G', spec: '256GB / 8GB RAM', price: 2800000, originalPrice: 2999000, status: 'Tersedia', imageUrl: null },
        { id: 83, brand: 'Itel', model: 'S25', spec: '128GB / 8GB RAM', price: 2200000, originalPrice: 2400000, status: 'Stok Habis', imageUrl: null },
        { id: 39, brand: 'Itel', model: 'P55 Power+', spec: '256GB / 8GB RAM', price: 2000000, originalPrice: 2150000, status: 'Tersedia', imageUrl: null },
        { id: 84, brand: 'Itel', model: 'P55 Power', spec: '128GB / 6GB RAM', price: 1700000, originalPrice: 1850000, status: 'Tersedia', imageUrl: null },
        { id: 40, brand: 'Itel', model: 'A75 Vision+', spec: '128GB / 4GB RAM', price: 1500000, originalPrice: 1650000, status: 'Stok Habis', imageUrl: null },
        { id: 85, brand: 'Itel', model: 'A75 Vision', spec: '64GB / 4GB RAM', price: 1250000, originalPrice: 1350000, status: 'Tersedia', imageUrl: null },
        { id: 86, brand: 'Itel', model: 'A65 Value', spec: '64GB / 3GB RAM', price: 1000000, originalPrice: 1100000, status: 'Tersedia', imageUrl: null },

        // --- Infinix ---
        { id: 41, brand: 'Infinix', model: 'Zero 40 Ultra 5G', spec: '512GB / 16GB RAM', price: 8500000, originalPrice: 8900000, status: 'Tersedia', imageUrl: null },
        { id: 87, brand: 'Infinix', model: 'Zero 40 Pro 5G', spec: '256GB / 12GB RAM', price: 6800000, originalPrice: 7200000, status: 'Stok Habis', imageUrl: null },
        { id: 88, brand: 'Infinix', model: 'GT 30 Pro', spec: '256GB / 12GB RAM', price: 5500000, originalPrice: 5800000, status: 'Tersedia', imageUrl: null },
        { id: 42, brand: 'Infinix', model: 'Note 50 Pro 5G', spec: '256GB / 8GB RAM', price: 4500000, originalPrice: 4800000, status: 'Tersedia', imageUrl: null },
        { id: 43, brand: 'Infinix', model: 'Note 50', spec: '256GB / 8GB RAM', price: 3800000, originalPrice: 4100000, status: 'Stok Habis', imageUrl: null },
        { id: 89, brand: 'Infinix', model: 'Note 45 VIP', spec: '128GB / 8GB RAM', price: 3200000, originalPrice: 3400000, status: 'Tersedia', imageUrl: null },
        { id: 44, brand: 'Infinix', model: 'Hot 50 Pro', spec: '256GB / 8GB RAM', price: 2800000, originalPrice: 3000000, status: 'Tersedia', imageUrl: null },
        { id: 90, brand: 'Infinix', model: 'Hot 50 Play NFC', spec: '128GB / 8GB RAM', price: 2400000, originalPrice: 2600000, status: 'Tersedia', imageUrl: null },
        { id: 91, brand: 'Infinix', model: 'Hot 50i', spec: '128GB / 4GB RAM', price: 1800000, originalPrice: 1950000, status: 'Stok Habis', imageUrl: null },
        { id: 92, brand: 'Infinix', model: 'Smart 10 HD', spec: '64GB / 4GB RAM', price: 1400000, originalPrice: 1500000, status: 'Tersedia', imageUrl: null },
        { id: 93, brand: 'Infinix', model: 'Smart 9', spec: '64GB / 3GB RAM', price: 1100000, originalPrice: 1200000, status: 'Tersedia', imageUrl: null },

        // --- Tecno --- (Termasuk Pova)
        { id: 45, brand: 'Tecno', model: 'Phantom V2 Fold', spec: '512GB / 12GB RAM', price: 17000000, originalPrice: 17900000, status: 'Tersedia', imageUrl: null },
        { id: 94, brand: 'Tecno', model: 'Phantom V2 Flip', spec: '256GB / 8GB RAM', price: 11000000, originalPrice: 11800000, status: 'Stok Habis', imageUrl: null },
        { id: 95, brand: 'Tecno', model: 'Phantom X3 Pro', spec: '512GB / 12GB RAM', price: 9500000, originalPrice: 10200000, status: 'Tersedia', imageUrl: null },
        { id: 46, brand: 'Tecno', model: 'Camon 35 Premier 5G', spec: '512GB / 12GB RAM', price: 7500000, originalPrice: 7900000, status: 'Tersedia', imageUrl: null },
        { id: 96, brand: 'Tecno', model: 'Camon 35 Pro', spec: '256GB / 8GB RAM', price: 5800000, originalPrice: 6200000, status: 'Tersedia', imageUrl: null },
        { id: 97, brand: 'Tecno', model: 'Camon 35', spec: '128GB / 8GB RAM', price: 4500000, originalPrice: 4800000, status: 'Stok Habis', imageUrl: null },
        { id: 47, brand: 'Tecno', model: 'Pova 7 Pro 5G', spec: '256GB / 8GB RAM', price: 4200000, originalPrice: 4500000, status: 'Stok Habis', imageUrl: null },
        { id: 98, brand: 'Tecno', model: 'Pova 7 5G', spec: '256GB / 8GB RAM', price: 4100000, originalPrice: 4400000, status: 'Tersedia', imageUrl: null },
        { id: 48, brand: 'Tecno', model: 'Pova 7 Neo', spec: '128GB / 8GB RAM', price: 3100000, originalPrice: 3300000, status: 'Tersedia', imageUrl: null },
        { id: 49, brand: 'Tecno', model: 'Spark 25 Pro+', spec: '256GB / 8GB RAM', price: 2800000, originalPrice: 3000000, status: 'Tersedia', imageUrl: null },
        { id: 99, brand: 'Tecno', model: 'Spark 25 Pro', spec: '128GB / 8GB RAM', price: 2400000, originalPrice: 2600000, status: 'Tersedia', imageUrl: null },
        { id: 50, brand: 'Tecno', model: 'Spark 25C NFC', spec: '128GB / 4GB RAM', price: 1900000, originalPrice: 2050000, status: 'Tersedia', imageUrl: null },
        { id: 100, brand: 'Tecno', model: 'Spark Go 2025', spec: '64GB / 4GB RAM', price: 1500000, originalPrice: 1600000, status: 'Tersedia', imageUrl: null },
        { id: 101, brand: 'Tecno', model: 'Pop 9 Pro', spec: '64GB / 3GB RAM', price: 1200000, originalPrice: 1300000, status: 'Tersedia', imageUrl: null },

    ];
    // =======================================================================
    // AKHIR BAGIAN DATA PRODUK CONTOH
    // =======================================================================


    const pricelistContainer = document.getElementById('pricelist-container');
    const filterButtons = document.querySelectorAll('.filter-btn');

    // Fungsi formatCurrency (tetap sama)
    function formatCurrency(number) {
        if (typeof number !== 'number' || isNaN(number)) {
             return 'Harga tidak valid'; // Penanganan jika harga bukan angka
        }
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        }).format(number);
    }

    // Fungsi renderTable (sudah bisa handle harga coret)
    function renderTable(products) {
        if (!pricelistContainer) return;
        pricelistContainer.innerHTML = '';

        if (products.length === 0) {
            pricelistContainer.innerHTML = '<p class="text-center text-muted">Tidak ada produk yang cocok dengan filter ini.</p>';
            return;
        }

        const table = document.createElement('table');
        table.className = 'table table-striped table-hover table-bordered align-middle';
        const thead = table.createTHead();
        const headerRow = thead.insertRow();
        const headers = ['Model', 'Spesifikasi', 'Harga', 'Status'];
        headers.forEach(text => {
            const th = document.createElement('th');
            th.textContent = text;
            th.scope = 'col';
            headerRow.appendChild(th);
        });

        const tbody = table.createTBody();
        products.forEach(product => {
            const row = tbody.insertRow();

            const cellModel = row.insertCell();
            cellModel.textContent = `${product.brand} ${product.model}`;
            const cellSpec = row.insertCell();
            cellSpec.textContent = product.spec;

            const cellPrice = row.insertCell();
            cellPrice.classList.add('text-end', 'price-cell');

            // Cek harga asli
            if (product.originalPrice && typeof product.originalPrice === 'number' && product.originalPrice > product.price) {
                cellPrice.innerHTML = `
                    <span class="original-price text-muted"><s>${formatCurrency(product.originalPrice)}</s></span>
                    <br>
                    <span class="current-price fw-bold">${formatCurrency(product.price)}</span>
                    <span class="badge bg-danger ms-1 discount-badge">Diskon!</span>
                `;
            } else {
                cellPrice.innerHTML = `<span class="current-price">${formatCurrency(product.price)}</span>`;
            }

            const cellStatus = row.insertCell();
            cellStatus.textContent = product.status;
            if (product.status && product.status.toLowerCase() === 'tersedia') {
                cellStatus.classList.add('text-success', 'fw-bold');
            } else {
                cellStatus.classList.add('text-danger', 'fst-italic');
                 // Jika status null atau undefined, anggap habis stok
                 if (!product.status) cellStatus.textContent = 'Stok Habis';
            }
        });
        pricelistContainer.appendChild(table);
    }

    // Fungsi filterProducts (tetap sama)
    function filterProducts(brand) {
        filterButtons.forEach(button => {
            if (button.getAttribute('data-brand') === brand) {
                button.classList.add('active');
            } else {
                button.classList.remove('active');
            }
        });
        let filteredData;
        if (brand === 'Semua') {
            filteredData = productData;
        } else {
            filteredData = productData.filter(product => product.brand === brand);
        }
        renderTable(filteredData);
    }

    // Event listener untuk tombol filter (tetap sama)
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const brand = button.getAttribute('data-brand');
            filterProducts(brand);
        });
    });

    // Render tabel awal (tetap sama)
    renderTable(productData);

}); // Akhir dari DOMContentLoaded
