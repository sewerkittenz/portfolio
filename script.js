// Dynamic banner color and date display
function updateBanner() {
    const date = new Date();
    const hue = (date.getHours() * 15) % 360;
    document.getElementById('banner').style.backgroundColor = `hsl(${hue}, 70%, 85%)`;
    document.getElementById('date').innerHTML = 
        date.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' }) + 
        '<br>' + 
        date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
}

// Music controls
const audio = document.getElementById('bg-music');
audio.volume = 0.3;

function toggleMusic() {
    audio.muted = !audio.muted;
    const button = document.querySelector('.music-player button');
    button.textContent = audio.muted ? '🔇 Unmute' : '🎵 Mute';
}

// Discord username copy
function copyDiscord() {
    navigator.clipboard.writeText('PastelDev#1234')
        .then(() => {
            const toast = document.createElement('div');
            toast.textContent = '🎀 Username copied to clipboard!';
            toast.style.position = 'fixed';
            toast.style.bottom = '20px';
            toast.style.left = '50%';
            toast.style.transform = 'translateX(-50%)';
            toast.style.background = 'white';
            toast.style.padding = '10px 20px';
            toast.style.borderRadius = '20px';
            toast.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
            document.body.appendChild(toast);
            
            setTimeout(() => toast.remove(), 2000);
        });
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    setInterval(updateBanner, 1000);
    document.addEventListener('click', () => {
        audio.play().catch(() => { /* Handle autoplay restrictions */ });
    }, { once: true });
    
    // Add hover effects dynamically
    document.querySelectorAll('.social-icon').forEach(icon => {
        icon.addEventListener('mouseenter', () => {
            icon.style.transform = 'scale(1.2) rotate(5deg)';
        });
        icon.addEventListener('mouseleave', () => {
            icon.style.transform = 'scale(1)';
        });
    });
});