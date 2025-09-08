// Pre-load audio elements for better performance
const audioElements = new Map();
let currentAudio = null;

const audioFiles = [
    { label: '1. Entry', src: 'Audio/KGF entry music.mp3' },
    { label: '2. Snap', src: 'Audio/Finger snap.mp3' },
    { label: '3. Snap', src: 'Audio/Finger snap.mp3' },
    { label: '4. Rain', src: 'Audio/real-rain-sound-379215.mp3' },
    { label: '5. Yay', src: 'Audio/crowd-hooray.mp3' },
    { label: '6. Satyam Entry', src: 'Audio/satyam.mp3' },
    { label: '7. Snap', src: 'Audio/Finger snap.mp3' },
    { label: '8. Snap', src: 'Audio/Finger snap.mp3' },
    { label: '9. Ayush Entry', src: 'Audio/May i Come In Kgf.mp3' },
    { label: '10. Vikas Snoring', src: 'Audio/Vikas snore.mp3' },
    { label: '11. Slap', src: 'Audio/slap-oh_LGvkhyt.mp3' },
    { label: '12. Saiyaara', src: 'Audio/Gf saiyaara.mp3' },
    { label: '13. Workout', src: 'Audio/20170909_125333.mp3' },
    { label: '14. Principal', src: 'Audio/Principal bgm.mp3' },
    { label: '15. Bell', src: 'Audio/school-bell_f0L9NQQ.mp3' },
    { label: '16. Gravity', src: 'Audio/galaxy-brain-meme-2.mp3' },
    { label: '17. Bell', src: 'Audio/school-bell_f0L9NQQ.mp3' },
    { label: '18. Cheer', src: 'Audio/ssvid.net--CROWD-CHEER-SOUND-EFFECT.mp3' },
    { label: '19. Sports Practice', src: 'Audio/phonk_7QBlqFo5.mp3' },
    { label: '20. Yay', src: 'Audio/crowd-hooray.mp3' },
    { label: '21. Snap', src: 'Audio/Finger snap.mp3' },
    { label: '22. 3days later', src: 'Audio/3days.mp3' },
    { label: '23. Snap', src: 'Audio/Finger snap.mp3' },
    { label: '24. Prizes', src: 'Audio/prize-dis_JMbLFvVW.mp3' },
    { label: '25. Bell', src: 'Audio/school-bell_f0L9NQQ.mp3' },
    { label: '26. Bell', src: 'Audio/school-bell_f0L9NQQ.mp3' },
    { label: '27. 3weeks later', src: 'Audio/ssvid.net--Three-weeks-later-sound-effect-spongebob.mp3' },
    { label: '28. Exam day', src: 'Audio/8. Exam Song.mp3' },
    { label: '29. Snap', src: 'Audio/Finger snap.mp3' },
    { label: '30. Snap', src: 'Audio/Finger snap.mp3' },
    { label: '31. Bell', src: 'Audio/school-bell_f0L9NQQ.mp3' },
    { label: '32. Few Days later', src: 'Audio/ssvid.net--A-FEW-DAYS-LATER-SOUND-EFFECT-l-Original-No-copyright.mp3' },
    { label: '33. End', src: 'Audio/End.mp3' },
    
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

