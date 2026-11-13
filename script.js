const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];

// Create and store audio objects
const audioElements = {};
sounds.forEach(sound => {
    audioElements[sound] = new Audio(`sounds/${sound}.mp3`);
});

// Function to stop all currently playing audio
function stopSongs() {
    Object.values(audioElements).forEach(audio => {
        audio.pause();
        audio.currentTime = 0;
    });
}

// Add event listeners to sound buttons
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', () => {
        stopSongs();
        const soundType = button.getAttribute('data-sound');
        if (audioElements[soundType]) {
            audioElements[soundType].play();
        }
    });
});

// Add event listener to stop button
document.querySelector('.stop').addEventListener('click', stopSongs);