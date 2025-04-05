// Particle Network Generation
function generateParticles() {
    const container = document.getElementById('particleField');
    const particleCount = Math.floor(window.innerWidth / 10);
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.width = `${Math.random() * 15 + 5}px`;
        particle.style.height = particle.style.width;
        particle.style.left = `${Math.random() * 100}vw`;
        particle.style.animationDelay = `${Math.random() * 5}s`;
        particle.style.opacity = Math.random() * 0.4;
        container.appendChild(particle);
    }
}

// Temporal Display System
function updateChrono() {
    const now = new Date();
    const options = { 
        weekday: 'long', 
        month: 'long', 
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
    };
    
    document.getElementById('chronoDisplay').innerHTML = `
        ${now.toLocaleDateString('en-US', options)}<br>
        ${now.toLocaleTimeString('en-US', options)}
    `;
}

// Audio Matrix Control
const cyberAudio = document.getElementById('cyberJams');
cyberAudio.volume = 0.4;

function toggleCyberJams() {
    cyberAudio.muted = !cyberAudio.muted;
    const button = document.querySelector('.cyber-button');
    button.textContent = cyberAudio.muted ? '♫ Unmute Matrix' : '♫ Tune Matrix';
    button.style.transform = 'skewX(-5deg) scale(1.1)';
    setTimeout(() => button.style.transform = '', 300);
}

// Discord Alchemy
function copyDiscord() {
    navigator.clipboard.writeText('conjoinedpenis')
        .then(() => {
            const toast = document.createElement('div');
            toast.textContent = '🎀 Username copied to clipboard!';
            toast.className = 'cyber-toast';
            document.body.appendChild(toast);
            
            setTimeout(() => {
                toast.style.transform = 'translateY(100px)';
                setTimeout(() => toast.remove(), 500);
            }, 2000);
        });
}

// Particle Explosion Effect
function createParticleExplosion(x, y) {
    const explosion = document.createElement('div');
    explosion.className = 'particle-explosion';
    explosion.style.left = `${x}px`;
    explosion.style.top = `${y}px`;
    
    for (let i = 0; i < 20; i++) {
        const spark = document.createElement('div');
        spark.className = 'particle-spark';
        spark.style.transform = `rotate(${Math.random() * 360}deg)`;
        spark.style.animationDelay = `${Math.random() * 0.5}s`;
        explosion.appendChild(spark);
    }
    
    document.body.appendChild(explosion);
    setTimeout(() => explosion.remove(), 1000);
}

// Interactive Initiation
document.addEventListener('DOMContentLoaded', () => {
    generateParticles();
    setInterval(updateChrono, 1000);
    updateChrono();

    // Audio Activation Protocol
    document.addEventListener('click', () => {
        cyberAudio.play().catch(console.error);
    }, { once: true });

    // Social Orb Interactions
    document.querySelectorAll('.social-orb').forEach(orb => {
        orb.addEventListener('click', (e) => {
            createParticleExplosion(e.clientX, e.clientY);
            orb.style.transform = 'scale(0.9)';
            setTimeout(() => orb.style.transform = '', 200);
        });
    });

    // Holographic Hover Effects
    const hologram = document.querySelector('.hologram-pfp');
    document.addEventListener('mousemove', (e) => {
        const x = (e.clientX / window.innerWidth - 0.5) * 20;
        const y = (e.clientY / window.innerHeight - 0.5) * 20;
        hologram.style.transform = `rotateX(${y}deg) rotateY(${x}deg)`;
    });
});

// Responsive Reconfiguration
window.addEventListener('resize', () => {
    document.querySelectorAll('.particle').forEach(p => p.remove());
    generateParticles();
});