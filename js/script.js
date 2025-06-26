document.addEventListener('DOMContentLoaded', () => {
    const calculateButton = document.getElementById('calculateButton');
    const sideAInput = document.getElementById('sideA');
    const sideBInput = document.getElementById('sideB');
    const sideCInput = document.getElementById('sideC');
    const baseInput = document.getElementById('base');
    const heightInput = document.getElementById('height');
    const resultArea = document.getElementById('resultArea');
    const calculationType = document.getElementById('calculationType');

    calculateButton.addEventListener('click', () => {
        resultArea.innerHTML = ''; // Clear previous results

        const type = calculationType.value;

        if (type === 'luas') {
            const base = parseFloat(baseInput.value);
            const height = parseFloat(heightInput.value);

            if (isNaN(base) || isNaN(height) || base <= 0 || height <= 0) {
                resultArea.innerHTML = '<p class="error-message">Masukkan angka positif untuk alas dan tinggi.</p>';
                return;
            }

            const area = 0.5 * base * height;
            resultArea.innerHTML = `<h3>Luas Segitiga:</h3><p>Luas = 1/2 × Alas × Tinggi</p><p>Luas = 1/2 × ${base} × ${height}</p><p>Luas = ${area}</p>`;
        } else if (type === 'keliling') {
            const sideA = parseFloat(sideAInput.value);
            const sideB = parseFloat(sideBInput.value);
            const sideC = parseFloat(sideCInput.value);

            if (isNaN(sideA) || isNaN(sideB) || isNaN(sideC) || sideA <= 0 || sideB <= 0 || sideC <= 0) {
                resultArea.innerHTML = '<p class="error-message">Masukkan angka positif untuk semua sisi.</p>';
                return;
            }

            // Check if it's a valid triangle
            if (sideA + sideB <= sideC || sideA + sideC <= sideB || sideB + sideC <= sideA) {
                resultArea.innerHTML = '<p class="error-message">Ini bukan segitiga yang valid (jumlah dua sisi harus lebih besar dari sisi ketiga).</p>';
                return;
            }

            const perimeter = sideA + sideB + sideC;
            resultArea.innerHTML = `<h3>Keliling Segitiga:</h3><p>Keliling = Sisi A + Sisi B + Sisi C</p><p>Keliling = ${sideA} + ${sideB} + ${sideC}</p><p>Keliling = ${perimeter}</p>`;
        }
    });

    // Event listener to toggle input visibility based on calculation type
    calculationType.addEventListener('change', () => {
        const type = calculationType.value;
        document.getElementById('luasInputs').style.display = type === 'luas' ? 'block' : 'none';
        document.getElementById('kelilingInputs').style.display = type === 'keliling' ? 'block' : 'none';
    });

    // Initialize display based on default selected type
    calculationType.dispatchEvent(new Event('change'));
});
