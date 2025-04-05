// Real-time Date and Day for Banner
function updateDate() {
    const date = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById('date').innerText = date.toLocaleDateString('en-US', options);
}

// Mute Sound Button
document.getElementById('mute-button').addEventListener('click', function () {
    const audio = document.getElementById('music');
    if (audio.muted) {
        audio.muted = false;
        this.innerText = 'Mute';
    } else {
        audio.muted = true;
        this.innerText = 'Unmute';
    }
});

// Initialize Date Update
updateDate();
setInterval(updateDate, 60000); // Update every minute
