// Pre-load audio elements for better performance
const audioElements = new Map();
let currentAudio = null;

const audioFiles = [
    { label: '1. Entry', src: 'Audio/KGF entry music.mp3' },
    { label: '2. Snap', src: 'Audio/Finger snap.mp3' },
    { label: '3. Snap', src: 'Audio/Finger snap.mp3' },
    { label: '4. Rain', src: 'Audio/real-rain-sound-379215.mp3' },
    { label: '5. Yay', src: 'Audio/yay-6326.mp3' },
    { label: '6. Satyam Entry', src: 'Audio/satyam.mp3' },
    { label: '7. Snap', src: 'Audio/Finger snap.mp3' },
    { label: '8. Snap', src: 'Audio/Finger snap.mp3' },
    { label: '9. Ayush Entry', src: 'Audio/May i Come In Kgf.mp3' },
    { label: 'Nature Future', src: 'Audio/Nature Future.mp3' },
    { label: 'Exam Song', src: 'Audio/8. Exam Song.mp3' },
    { label: 'Satyam entering', src: 'Audio/Satyam entering.mp3' },
    { label: 'Amit getting caught', src: 'Audio/Amit getting caught.mp3' },
    { label: 'Sees amit chits', src: 'Audio/sees amit chits.mp3' },
    { label: 'Punch', src: 'Audio/punch.mp3' },
    { label: 'Likith supplying chits', src: 'Audio/Likith supplying chits.mp3' },
    { label: 'Likith', src: 'Audio/likith.mp3' },
    { label: 'Slapping likith', src: 'Audio/Slaping likith.mp3' },
    { label: 'Vikas flexing extra sheet', src: 'Audio/vikas flexing extra sheet.mp3' },
    { label: 'The Next Day', src: 'Audio/The Next Day.mp3' },
    { label: 'Raju', src: 'Audio/raju.mp3' },
    { label: 'Cricket IPL', src: 'Audio/9. Cricket IPL.mp3' },
    { label: 'Fight Scene', src: 'Audio/Fight Scene.mp3' },
    { label: 'Sir Thirboki!!', src: 'Audio/10. Sir Thirboki!!.mp3' },
    
];


function createSoundButtons() {
    const soundboard = document.getElementById('soundboard');
    const fragment = document.createDocumentFragment();

    audioFiles.forEach(audio => {
        // Pre-load audio elements
        if (!audioElements.has(audio.src)) {
            const audioElement = new Audio(audio.src);
            audioElement.preload = 'auto';
            audioElements.set(audio.src, audioElement);
        }

        const button = document.createElement('button');
        button.textContent = audio.label;

        button.addEventListener('click', () => {
            if (currentAudio) {
                currentAudio.pause();
                currentAudio.currentTime = 0;
            }

            currentAudio = audioElements.get(audio.src);
            if (currentAudio.currentTime !== 0) {
                currentAudio.currentTime = 0;
            }
            currentAudio.play();
        });

        fragment.appendChild(button);
    });
    
    soundboard.appendChild(fragment);
}

createSoundButtons();

// Disable caching and cookies in JavaScript
if ('serviceWorker' in navigator) {
    // Unregister any existing service workers to prevent caching
    navigator.serviceWorker.getRegistrations().then(function(registrations) {
        for(let registration of registrations) {
            registration.unregister();
        }
    });
}

// Clear all cookies
document.cookie.split(";").forEach(function(c) { 
    document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/"); 
});

// Clear localStorage and sessionStorage
if (typeof(Storage) !== "undefined") {
    localStorage.clear();
    sessionStorage.clear();
}

// Disable browser caching for this session
if ('caches' in window) {
    caches.keys().then(function(names) {
        for (let name of names) {
            caches.delete(name);
        }
    });
}

