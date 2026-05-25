// Palet warna sprinkles pastel aesthetic
const pastelColors = ['#ff85a1', '#fff2a3', '#a8dadc', '#e63946', '#ffb347'];

// FUNGSI 1: MEMADAMKAN LILIN & MENJALANKAN LOADING PERTAMA
function turnOffCandle() {
    const flames = document.querySelectorAll('.flame');
    flames.forEach(function(flame) {
        flame.style.display = 'none';
    });

    setTimeout(function() {
        const page1 = document.getElementById('page-1');
        const loadingPage = document.getElementById('loading-page');

        page1.classList.remove('active');
        loadingPage.classList.add('active');

        const progressFill = document.querySelector('.progress-fill');
        let width = 0;
        
        const loadingInterval = setInterval(function() {
            if (width >= 100) {
                clearInterval(loadingInterval);
                
                setTimeout(function() {
                    const page2 = document.getElementById('page-2');
                    loadingPage.classList.remove('active');
                    page2.classList.add('active');

                    // Ledakan Confetti Surat Pertama
                    triggerConfettiBurst();

                }, 400); 
            } else {
                width++;
                progressFill.style.width = width + '%';
            }
        }, 20);

    }, 600); 
}

// FUNGSI 2: KLIK TOMBOL NEXT -> MASUK LOADING KEDUA -> SURAT KEDUA (BARU)
function goToNextLoading() {
    const page2 = document.getElementById('page-2');
    const loadingPage2 = document.getElementById('loading-page-2');

    // Sembunyikan halaman surat pertama
    page2.classList.remove('active');
    // Munculkan halaman loading kedua
    loadingPage2.classList.add('active');

    const progressFill2 = document.querySelector('.progress-fill-2');
    let width = 0;

    const loadingInterval2 = setInterval(function() {
        if (width >= 100) {
            clearInterval(loadingInterval2);

            setTimeout(function() {
                const page3 = document.getElementById('page-3');
                loadingPage2.classList.remove('active');
                page3.classList.add('active');

                // BOOM! Ledakan Confetti Kedua khusus untuk Surat Kedua
                triggerConfettiBurst();

            }, 400);
        } else {
            width++;
            progressFill2.style.width = width + '%';
        }
    }, 20); // Berjalan lancar selama 2 detik
}

// REUSABLE FUNCTION: LEDAKAN CONFETTI BERUNTUN
function triggerConfettiBurst() {
    // Kiri bawah ke atas
    confetti({
        particleCount: 70,
        angle: 60,
        spread: 55,
        origin: { x: 0, y: 0.8 },
        colors: pastelColors
    });

    // Kanan bawah ke atas
    setTimeout(function() {
        confetti({
            particleCount: 70,
            angle: 120,
            spread: 55,
            origin: { x: 1, y: 0.8 },
            colors: pastelColors
        });
    }, 150);

    // Letusan besar di tengah
    setTimeout(function() {
        confetti({
            particleCount: 50,
            angle: 90,
            spread: 100,
            origin: { x: 0.5, y: 0.5 },
            colors: pastelColors,
            scalar: 1.2
        });
    }, 300);
}