let currentAudio = null;

const audioFiles = [
    { label: 'Beginning', src: 'Audio/1. Beginning.mp3' },
    { label: 'May I come in', src: 'Audio/2. May I come in.mp3' },
    { label: 'Donald Trump', src: 'Audio/3. Donald Trump.mp3' },
    { label: 'Throwing page', src: 'Audio/4. Throwing page.mp3' },
    { label: 'Bell', src: 'Audio/5. Bell.mp3' },
    { label: 'PT Period', src: 'Audio/6. PT Period.mp3' },
    { label: 'Moye Moye', src: 'Audio/7. Moye Moye.mp3' },
    { label: 'Google', src: 'Audio/Google(1).mp3' },
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

    audioFiles.forEach(audio => {
        const button = document.createElement('button');
        button.textContent = audio.label;

        button.addEventListener('click', () => {
            if (currentAudio) {
                currentAudio.pause();
                currentAudio.currentTime = 0;
            }

            currentAudio = new Audio(audio.src);
            currentAudio.play();
        });

        soundboard.appendChild(button);
    });
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

