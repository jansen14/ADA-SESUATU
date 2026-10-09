// ============================================
// 1. PENGATURAN WEBSITE
// ============================================

const config = {
    namaPacar: "Sayangku junn junnn",
    namaKamu: "Orang yang Selalu Menyayangimu, -S",

    // Gunakan kode negara 62, tanpa tanda +, spasi, atau strip.
    // Contoh: 6281234567890
    nomorWhatsApp: "6282292040714",

    pesanCinta: `Happy birthday, sayangku! ❤️

Hari ini adalah hari ketika seseorang yang luar biasa hadir di dunia, dan aku bersyukur karena semesta mempertemukan aku dengan kamu.

Terima kasih sudah hadir, sudah bertahan sejauh ini, dan sudah menjadi bagian indah dalam hidupku.

Di usia barumu ini, aku berdoa semoga kamu selalu diberikan kesehatan, kebahagiaan, rezeki yang luas, dan kemudahan dalam setiap langkahmu.

Kalau suatu hari dunia terasa berat, semoga kamu selalu ingat bahwa kamu tidak harus menghadapi semuanya sendirian.

Walaupun nantiya kita tidak bisa bersama selamanya yang gak tau kapan datangnya hari itu, tetapi aku ingin terus berusaha menjadi seseorang yang bisa membuat duniamu terasa lebih indah.

Jangan pernah berhenti tersenyum, jangan berhenti bermimpi, dan jangan lupa betapa berharganya dirimu.

karena untuk berada di titik sekarang pun kamu udah hebat banget, bisa melalui banyak hal hal yang mungkin dulu kamu berpikirnya mustahil untuk dilewati, and see kamu bisa melewati semuanyanya. Aku bangga banget sama kamu. 

Happy birthday, my favorite person. Semoga semua hal baik menemukan jalan menuju kamu, baik itu lingkungan kamu dan orang orang sekitar kamu

I love you you you youuuuuuuuu, more than words can explain. ❤️`
};

// ============================================
// 2. AMBIL ELEMEN HTML
// ============================================

const screens = document.querySelectorAll(".screen");
const starsContainer = document.getElementById("stars");
const particlesContainer = document.getElementById("particles");

const music = document.getElementById("birthdayMusic");
const musicBtn = document.getElementById("musicBtn");

const letterText = document.getElementById("letterText");
const signature = document.getElementById("signature");

// Tampilkan nama pada website
document.title = `Happy Birthday, ${config.namaPacar} ❤️`;

document.getElementById("birthdaySubtitle").textContent =
    `Selamat ulang tahun, ${config.namaPacar}. Semoga semua impianmu menjadi nyata ❤️`;

signature.textContent = `With love, ${config.namaKamu}`;

// ============================================
// 3. MEMBUAT BINTANG
// ============================================

for (let i = 0; i < 100; i++) {
    const star = document.createElement("span");

    star.className = "star";

    star.style.left = Math.random() * 100 + "%";
    star.style.top = Math.random() * 100 + "%";

    star.style.setProperty(
        "--duration",
        1 + Math.random() * 4 + "s"
    );

    star.style.animationDelay = Math.random() * 4 + "s";

    starsContainer.appendChild(star);
}

// ============================================
// 4. PINDAH HALAMAN
// ============================================

function showScreen(id) {
    screens.forEach(screen => {
        screen.classList.add("hidden");
    });

    document.getElementById(id).classList.remove("hidden");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

// ============================================
// 5. ANIMASI HATI
// ============================================

let heartTimer = null;

function startHearts() {
    // Mencegah timer dibuat berulang kali
    if (heartTimer) return;

    heartTimer = setInterval(() => {
        const heart = document.createElement("span");

        heart.className = "heart";

        const symbols = ["💗", "💖", "💕", "💘", "✨", "💞"];

        heart.textContent =
            symbols[Math.floor(Math.random() * symbols.length)];

        heart.style.left = Math.random() * 100 + "vw";

        heart.style.fontSize =
            15 + Math.random() * 25 + "px";

        heart.style.setProperty(
            "--speed",
            5 + Math.random() * 5 + "s"
        );

        particlesContainer.appendChild(heart);

        setTimeout(() => heart.remove(), 11000);
    }, 350);
}

// ============================================
// 6. EFEK CONFETTI
// ============================================

function confettiBurst(amount = 150) {
    const colors = [
        "#ff4f9a",
        "#ffcae4",
        "#b18aff",
        "#ffffff",
        "#ffcf70",
        "#80f7ff"
    ];

    for (let i = 0; i < amount; i++) {
        setTimeout(() => {
            const piece = document.createElement("span");

            piece.className = "confetti";

            piece.style.left = Math.random() * 100 + "vw";

            piece.style.background =
                colors[Math.floor(Math.random() * colors.length)];

            piece.style.setProperty(
                "--speed",
                2.5 + Math.random() * 3 + "s"
            );

            piece.style.setProperty(
                "--drift",
                Math.random() * 250 - 125 + "px"
            );

            particlesContainer.appendChild(piece);

            setTimeout(() => piece.remove(), 6000);
        }, Math.random() * 700);
    }
}

// ============================================
// 7. MUSIK ULANG TAHUN
// ============================================

music.volume = 0.45;

musicBtn.addEventListener("click", async() => {
    if (music.paused) {
        try {
            await music.play();

            musicBtn.textContent = "♫ Jeda Musik";
        } catch (error) {
            console.error("Musik gagal diputar:", error);

            musicBtn.textContent = "Coba Putar Lagi ♫";

            alert(
                "Musik belum bisa diputar. Periksa file music/lagu.mp3 dan coba lagi."
            );
        }
    } else {
        music.pause();
        musicBtn.textContent = "♫ Putar Musik";
    }
});

// ============================================
// 8. TOMBOL PEMBUKA KEJUTAN
// ============================================

document.getElementById("startBtn").addEventListener("click", () => {
    showScreen("birthday");

    startHearts();
    confettiBurst(180);
});

// ============================================
// 9. SURAT CINTA DENGAN EFEK MENGETIK
// ============================================

let typingTimer = null;

function typeLetter() {
    clearInterval(typingTimer);

    letterText.textContent = "";

    const message = config.pesanCinta;
    let index = 0;

    typingTimer = setInterval(() => {
        letterText.textContent += message.charAt(index);
        index++;

        if (index >= message.length) {
            clearInterval(typingTimer);
            typingTimer = null;
        }
    }, 28);
}

document.getElementById("letterBtn").addEventListener("click", () => {
    showScreen("letterScreen");

    typeLetter();
    confettiBurst(45);
});

// ============================================
// 10. KEJUTAN TERAKHIR
// ============================================

document.getElementById("finalBtn").addEventListener("click", () => {
    showScreen("finalScreen");

    confettiBurst(220);
    startHearts();
});

// ============================================
// 11. KIRIM BALASAN KE WHATSAPP
// ============================================

document.getElementById("replyForm").addEventListener("submit", event => {
    event.preventDefault();

    const name = document.getElementById("replyName").value.trim();
    const message = document.getElementById("replyMessage").value.trim();

    // Hanya digit diperbolehkan pada nomor tujuan
    const phone = config.nomorWhatsApp.replace(/\D/g, "");

    if (!name || !message) {
        alert("Isi nama dan pesanmu terlebih dahulu, ya ❤️");
        return;
    }

    if (!/^[1-9]\d{7,14}$/.test(phone)) {
        alert(
            "Nomor WhatsApp belum benar. Periksa config.nomorWhatsApp di script.js. Gunakan kode negara, misalnya 6281234567890."
        );
        return;
    }

    const whatsappMessage =
        `Hai ${config.namaKamu}! ❤️\n\n` +
        `Aku ${name}.\n\n` +
        `Balasanku:\n\n` +
        `${message}\n\n` +
        `Terima kasih untuk kejutan indahnya! 💖`;

    const whatsappURL =
        `https://wa.me/${phone}?text=${encodeURIComponent(whatsappMessage)}`;

    // Membuka WhatsApp dengan pesan yang sudah terisi.
    // Pengguna tetap perlu menekan tombol Kirim di WhatsApp.
    window.open(whatsappURL, "_blank");
});

// ============================================
// 12. ULANGI DARI AWAL
// ============================================

document.getElementById("replayBtn").addEventListener("click", () => {
    clearInterval(typingTimer);
    typingTimer = null;

    letterText.textContent = "";

    showScreen("intro");
});


/* ======================================
   SLIDESHOW FOTO KENANGAN OTOMATIS
====================================== */

// GANTI teks dan nama foto sesuai kenangan kalian.
const memories = [{
        image: "images/foto1.jpg",
        title: "Our First Memory",
        caption: "Salah satu momen yang selalu ingin kuingat."
    },
    {
        image: "images/foto2.jpg",
        title: "My Favorite Person",
        caption: "Terima kasih sudah hadir di hidupku."
    },
    {
        image: "images/foto3.jpg",
        title: "Little Moments",
        caption: "Hal sederhana bersamamu terasa istimewa."
    },
    {
        image: "images/foto4.jpg",
        title: "You Make Me Smile",
        caption: "Senyummu selalu menjadi favoritku."
    },
    {
        image: "images/foto5.jpg",
        title: "Always You",
        caption: "Semoga kita punya lebih banyak kenangan."
    }
];

const memoryScreen = document.getElementById("screen-memories");
const memoryImage = document.getElementById("memoryImage");
const memoryCounter = document.getElementById("memoryCounter");
const memoryTitle = document.getElementById("memoryTitle");
const memoryCaption = document.getElementById("memoryCaption");
const progressBar = document.getElementById("slideProgressBar");
const nextMemoryBtn = document.getElementById("nextMemoryBtn");
const finishMemoriesBtn = document.getElementById("finishMemoriesBtn");

const MEMORY_DURATION = 4000;

let currentMemory = 0;
let memoryTimer = null;
let memoryStarted = false;
let memoryFinished = false;

function updateMemory(index) {
    if (!memoryImage || !memories.length) return;

    currentMemory = index;

    const memory = memories[currentMemory];
    const number = String(currentMemory + 1).padStart(2, "0");
    const total = String(memories.length).padStart(2, "0");

    memoryImage.classList.add("photo-changing");

    // Beri waktu untuk animasi fade sebelum mengganti foto.
    setTimeout(() => {
        memoryImage.src = memory.image;
        memoryImage.alt = memory.title;
        memoryTitle.textContent = memory.title;
        memoryCaption.textContent = memory.caption;
        memoryCounter.textContent = `${number} / ${total}`;

        memoryImage.onload = () => {
            memoryImage.classList.remove("photo-changing");
        };

        // Jika gambar sudah ada di cache, tampilkan kembali.
        if (memoryImage.complete && memoryImage.naturalWidth > 0) {
            memoryImage.classList.remove("photo-changing");
        }
    }, 300);

    if (progressBar) {
        progressBar.classList.remove("progress-running");
        progressBar.style.animation = "none";

        // Memulai ulang animasi progress bar.
        void progressBar.offsetWidth;

        progressBar.style.animation = "";
        progressBar.classList.add("progress-running");
    }

    // Pada foto terakhir, hentikan pergantian otomatis.
    if (currentMemory === memories.length - 1) {
        memoryFinished = true;

        if (nextMemoryBtn) nextMemoryBtn.hidden = true;
        if (finishMemoriesBtn) finishMemoriesBtn.hidden = false;
    } else {
        memoryFinished = false;

        if (nextMemoryBtn) nextMemoryBtn.hidden = false;
        if (finishMemoriesBtn) finishMemoriesBtn.hidden = true;
    }
}

function stopMemorySlideshow() {
    clearTimeout(memoryTimer);
    memoryTimer = null;
}

function scheduleNextMemory() {
    stopMemorySlideshow();

    if (!memoryStarted || memoryFinished) return;

    memoryTimer = setTimeout(() => {
        if (currentMemory < memories.length - 1) {
            updateMemory(currentMemory + 1);
            scheduleNextMemory();
        }
    }, MEMORY_DURATION);
}

function startMemorySlideshow() {
    stopMemorySlideshow();

    currentMemory = 0;
    memoryStarted = true;
    memoryFinished = false;

    updateMemory(0);
    scheduleNextMemory();
}

function showMemoriesScreen() {
    stopMemorySlideshow();

    // Sembunyikan screen lain, lalu tampilkan galeri.
    document.querySelectorAll(".screen").forEach((screen) => {
        screen.classList.remove("active");
    });

    memoryScreen.classList.add("active");
    startMemorySlideshow();
}

// Tombol untuk langsung melihat foto berikutnya.
if (nextMemoryBtn) {
    nextMemoryBtn.addEventListener("click", () => {
        if (currentMemory < memories.length - 1) {
            updateMemory(currentMemory + 1);
            scheduleNextMemory();
        }
    });
}

// Tombol untuk melanjutkan ke surat cinta.
if (finishMemoriesBtn) {
    finishMemoriesBtn.addEventListener("click", () => {
        stopMemorySlideshow();

        // Sesuaikan ID ini jika ID surat cintamu berbeda.
        const letterScreen = document.getElementById("screen-letter");

        if (letterScreen) {
            document.querySelectorAll(".screen").forEach((screen) => {
                screen.classList.remove("active");
            });

            letterScreen.classList.add("active");
        } else {
            alert(
                "Slideshow selesai! Sesuaikan ID screen surat cinta di script.js."
            );
        }
    });
}