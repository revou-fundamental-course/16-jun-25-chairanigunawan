document.addEventListener('DOMContentLoaded', () => {
    // Dapatkan elemen-elemen dari HTML menggunakan ID
    const calculationType = document.getElementById('calculationType');
    const luasInputs = document.getElementById('luasInputs');
    const kelilingInputs = document.getElementById('kelilingInputs');
    const calculateButton = document.getElementById('calculateButton');
    const resetButton = document.getElementById('resetButton'); // Tambahkan elemen tombol Reset
    const resultArea = document.getElementById('resultArea');

    const baseInput = document.getElementById('base');
    const heightInput = document.getElementById('height');
    const sideAInput = document.getElementById('sideA');
    const sideBInput = document.getElementById('sideB');
    const sideCInput = document.getElementById('sideC');

    // Fungsi untuk menampilkan atau menyembunyikan input sesuai pilihan
    const toggleInputs = () => {
        if (calculationType.value === 'luas') {
            luasInputs.style.display = 'block';
            kelilingInputs.style.display = 'none';
        } else {
            luasInputs.style.display = 'none';
            kelilingInputs.style.display = 'block';
        }
        // Kosongkan hasil dan input setiap kali jenis perhitungan diubah
        resetCalculator();
    };

    // Fungsi untuk menghitung
    calculateButton.addEventListener('click', () => {
        resultArea.innerHTML = ''; // Kosongkan hasil sebelumnya

        const type = calculationType.value;

        if (type === 'luas') {
            const base = parseFloat(baseInput.value);
            const height = parseFloat(heightInput.value);

            if (isNaN(base) || isNaN(height) || base <= 0 || height <= 0) {
                resultArea.innerHTML = '<p class="error-message">Masukkan angka yang valid (lebih dari 0) untuk Alas dan Tinggi.</p>';
                return;
            }

            const area = 0.5 * base * height;
            resultArea.innerHTML = `<h3>Luas Segitiga:</h3>
                                    <p>Luas = 1/2 × Alas × Tinggi</p>
                                    <p>Luas = 1/2 × ${base} × ${height}</p>
                                    <p>Luas = ${area}</p>`;
        } else if (type === 'keliling') {
            const sideA = parseFloat(sideAInput.value);
            const sideB = parseFloat(sideBInput.value);
            const sideC = parseFloat(sideCInput.value);

            if (isNaN(sideA) || isNaN(sideB) || isNaN(sideC) || sideA <= 0 || sideB <= 0 || sideC <= 0) {
                resultArea.innerHTML = '<p class="error-message">Masukkan angka yang valid (lebih dari 0) untuk semua Sisi.</p>';
                return;
            }

            // Validasi aturan segitiga (jumlah dua sisi harus lebih besar dari sisi ketiga)
            if (!((sideA + sideB > sideC) && (sideA + sideC > sideB) && (sideB + sideC > sideA))) {
                resultArea.innerHTML = '<p class="error-message">Sisi-sisi yang dimasukkan tidak membentuk segitiga yang valid.</p>';
                return;
            }

            const perimeter = sideA + sideB + sideC;
            resultArea.innerHTML = `<h3>Keliling Segitiga:</h3>
                                    <p>Keliling = Sisi A + Sisi B + Sisi C</p>
                                    <p>Keliling = ${sideA} + ${sideB} + ${sideC}</p>
                                    <p>Keliling = ${perimeter}</p>`;
        }
    });

    // Fungsi untuk mereset semua input dan hasil
    const resetCalculator = () => {
        baseInput.value = '';
        heightInput.value = '';
        sideAInput.value = '';
        sideBInput.value = '';
        sideCInput.value = '';
        resultArea.innerHTML = '<h3>Hasil Perhitungan:</h3>'; // Reset ke teks awal
    };

    // Event listeners
    calculationType.addEventListener('change', toggleInputs);
    resetButton.addEventListener('click', resetCalculator); // Kaitkan tombol Reset

    // Panggil toggleInputs() saat halaman dimuat pertama kali untuk menampilkan input yang benar
    toggleInputs();
});
