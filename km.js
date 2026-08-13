
function createBalloons() {
    const container = document.getElementById('balloon-container');
    const colors = ['#94212a', '#ffa502', '#2ed573', '#1e90ff', '#9b59b6'];

    for (let i = 0; i < 15; i++) {
        const balloon = document.createElement('div');
        balloon.classList.add('balloon');
        
        balloon.style.left = `${Math.random() * 100}%`;
        balloon.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        balloon.style.animationDuration = `${6 + Math.random() * 6}s`;
        balloon.style.animationDelay = `${Math.random() * 5}s`;

        container.appendChild(balloon);
    }
}

function startContinuousConfetti() {
    setInterval(() => {
        confetti({
            particleCount: 15,
            angle: 60,
            spread: 55,
            origin: { x: 0, y: 0.7 }
        });
        confetti({
            particleCount: 15,
            angle: 120,
            spread: 55,
            origin: { x: 1, y: 0.7 }
        });
    }, 800);0.8
}

// ដំណើរការមុខងារទាំងអស់ពេលបើក Web ភ្លាម
window.addEventListener('load', () => {
    createBalloons();
    startContinuousConfetti();
});
// ដោះស្រាយបញ្ហា Autoplay Block៖ ចុចលើអេក្រង់ត្រង់ណាក៏បានម្ដង ដើម្បីឱ្យចម្រៀងលឺ
window.addEventListener('click', function() {
    const iframe = document.getElementById('youtube-player');
    if (iframe) {
        iframe.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
    }
}, { once: true });
// បង្កើត Function ដើម្បីបើកចម្រៀង
function playMusic() {
    const audio = document.getElementById('bg-music');
    if (audio) {
        audio.play().catch(() => {
            console.log("Autoplay blocked. Waiting for click...");
        });
    }
}

// ព្យាយាមបើកចម្រៀងពេល Load Page
window.addEventListener('load', playMusic);

// ប្រសិនបើ Browser Block វានឹងលេងភ្លាមពេលអ្នកចុច (Click) លើអេក្រង់ត្រង់ណាក៏បាន 1 ដង
window.addEventListener('click', playMusic, { once: true });