const hiddenElements = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
        else {
            entry.target.classList.remove('show');
        }
    });
})

hiddenElements.forEach((el) => observer.observe(el));

document.addEventListener("DOMContentLoaded", function () {
    const preloader = document.getElementById("preloader");
    const startAudioButton = document.getElementById("startAudioButton");
    const audio = document.getElementById("audio");

    startAudioButton.addEventListener("click", function () {
        preloader.style.display = "none"; // Hide the preloader
        audio.play(); // Start playing the audio
    });
});