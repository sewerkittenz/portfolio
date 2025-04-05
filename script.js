// script.js
document.addEventListener('DOMContentLoaded', () => {
    // Interactive background elements
    createFloatingHearts();
    createFollowingStars();
    initRainbowCursor();
    setupMascotInteraction();
    addClickSparkles();
    setupSqueakyButtons();
    initBGMControls();
    createBounceEffects();
});

function createFloatingHearts() {
    const container = document.querySelector('.bouncing-hearts');
    for(let i = 0; i < 20; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.style.left = `${Math.random() * 100}%`;
        heart.style.animation = `float ${5 + Math.random() * 5}s infinite`;
        heart.innerHTML = '💖';
        container.appendChild(heart);
    }
}

function setupMascotInteraction() {
    const mascot = document.getElementById('mascot');
    let isDragging = false;
    
    mascot.addEventListener('mousedown', () => {
        isDragging = true;
        mascot.style.transform = 'scale(0.9)';
        playSound('pop');
    });

    document.addEventListener('mousemove', (e) => {
        if(isDragging) {
            mascot.style.left = `${e.clientX - 100}px`;
            mascot.style.top = `${e.clientY - 100}px`;
            createSparkles(e.clientX, e.clientY);
        }
    });

    document.addEventListener('mouseup', () => {
        isDragging = false;
        mascot.style.transform = '';
    });
}

function addClickSparkles() {
    document.addEventListener('click', (e) => {
        createBurstEffect(e.clientX, e.clientY);
        playSound('click');
        animateButtonPress(e.target);
    });
}

function createBurstEffect(x, y) {
    const burst = document.createElement('div');
    burst.className = 'burst-effect';
    burst.style.left = `${x}px`;
    burst.style.top = `${y}px`;
    burst.innerHTML = Array(10).fill('✨').join('');
    document.body.appendChild(burst);
    
    setTimeout(() => burst.remove(), 1000);
}

function initRainbowCursor() {
    document.addEventListener('mousemove', (e) => {
        const trail = document.createElement('div');
        trail.className = 'cursor-trail';
        trail.style.left = `${e.clientX}px`;
        trail.style.top = `${e.clientY}px`;
        trail.style.background = `hsl(${Date.now()/10 % 360},100%,70%)`;
        document.body.appendChild(trail);
        
        setTimeout(() => trail.remove(), 500);
    });
}