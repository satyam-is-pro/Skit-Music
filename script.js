let currentAudio = null;

const audioFiles = [
    { label: 'Sound 1', src: 'audio/1. Beginning.mp3' },
    { label: 'Sound 2', src: 'audio/2. May I come in.mp3' },
    { label: 'Sound 3', src: 'audio/3. Donald Trump.mp3' },
    { label: 'Sound 4', src: 'audio/4. Throwing page.mp3' },
    { label: 'Sound 5', src: 'audio/5. Bell.mp3' },
    { label: 'Sound 6', src: 'audio/6. PT Period.mp3' },
    { label: 'Sound 7', src: 'audio/7. Moye Moye.mp3' },
    { label: 'Sound 8', src: 'audio/Google(1).mp3' },
    { label: 'Sound 9', src: 'audio/Nature Future.mp3' },
    { label: 'Sound 10', src: 'audio/6. PT Period.mp3' },
    { label: 'Sound 11', src: 'audio/8. Exam Song.mp3' },
    { label: 'Sound 12', src: 'audio/Satyam entering.mp3' },
    { label: 'Sound 13', src: 'audio/Amit getting caught.mp3' },
    { label: 'Sound 14', src: 'audio/sees amit chits.mp3' },
    { label: 'Sound 15', src: 'audio/punch.mp3' },
    { label: 'Sound 16', src: 'audio/Likith supplying chits.mp3' },
    { label: 'Sound 17', src: 'audio/likith.mp3' },
    { label: 'Sound 18', src: 'audio/Slaping likith.mp3' },
    { label: 'Sound 19', src: 'audio/vikas flexing extra sheet.mp3' },
    { label: 'Sound 20', src: 'audio/The Next Day.mp3' },
    { label: 'Sound 21', src: 'audio/raju.mp3' },
    { label: 'Sound 22', src: 'audio/9. Cricket IPL.mp3' },
    { label: 'Sound 23', src: 'audio/Fight Scene.mp3' },
    { label: 'Sound 24', src: 'audio/10. Sir Thirboki!!.mp3' },
    
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
