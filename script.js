/* ==========================================
   MICKO & ANGELA
   Our Little Story
========================================== */


/* ==========================================
   RELATIONSHIP COUNTER
========================================== */

const startDate = new Date("December 25, 2025 00:00:00");

function updateCounter() {

    const now = new Date();

    let difference = now - startDate;

    if (difference < 0) {
        difference = 0;
    }

    const secondsTotal = Math.floor(difference / 1000);

    const days = Math.floor(secondsTotal / 86400);

    const hours = Math.floor(
        (secondsTotal % 86400) / 3600
    );

    const minutes = Math.floor(
        (secondsTotal % 3600) / 60
    );

    const seconds =
        secondsTotal % 60;

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent =
        String(hours).padStart(2, "0");

    document.getElementById("minutes").textContent =
        String(minutes).padStart(2, "0");

    document.getElementById("seconds").textContent =
        String(seconds).padStart(2, "0");
}

updateCounter();

setInterval(updateCounter, 1000);


/* ==========================================
   MUSIC PLAYER
========================================== */

const music = document.getElementById("music");
const musicButton = document.getElementById("musicButton");
const musicText = document.getElementById("musicText");
const vinyl = document.querySelector(".vinyl");

let musicLoaded = false;


/* Check whether the audio file loaded */
music.addEventListener("canplaythrough", function () {

    musicLoaded = true;

    console.log("🎵 Beautiful Things is ready to play.");

});


/* Detect missing or broken audio file */
music.addEventListener("error", function () {

    musicLoaded = false;

    musicText.textContent = "Music file not found";

    console.error(
        "Music error:",
        music.error
    );

});


/* PLAY / PAUSE BUTTON */

musicButton.addEventListener("click", async function () {

    /* If music is currently playing */
    if (!music.paused) {

        music.pause();

        musicText.textContent = "Play our song";

        vinyl.classList.remove("playing");

        return;
    }


    /* Try to play */
    try {

        await music.play();

        musicText.textContent = "Pause our song";

        vinyl.classList.add("playing");

        console.log("🎵 Music is playing!");

    }

    catch (error) {

        console.error(
            "Unable to play music:",
            error
        );

        musicText.textContent = "Music unavailable";

        alert(
            "I couldn't play the song.\n\n" +
            "Please check that your music folder contains:\n\n" +
            "music/beautiful-things.mp3"
        );

    }

});


/* Keep button synchronized if audio ends */
music.addEventListener("pause", function () {

    if (music.currentTime > 0 && !music.ended) {

        musicText.textContent = "Play our song";

        vinyl.classList.remove("playing");

    }

});


music.addEventListener("play", function () {

    musicText.textContent = "Pause our song";

    vinyl.classList.add("playing");

});


music.addEventListener("ended", function () {

    musicText.textContent = "Play our song";

    vinyl.classList.remove("playing");

});

/* ==========================================
   SCROLL FUNCTION
========================================== */

function scrollToSection(id) {

    document.getElementById(id)
        .scrollIntoView({
            behavior: "smooth"
        });

}


/* ==========================================
   PHOTO MODAL
========================================== */

const modal =
    document.getElementById("modal");

const modalImage =
    document.getElementById("modalImage");

const modalCaption =
    document.getElementById("modalCaption");

const closeModal =
    document.getElementById("closeModal");


const memoryImages =
    document.querySelectorAll(".memory-card img");


memoryImages.forEach(function (image) {

    image.addEventListener("click", function () {

        modal.classList.add("active");

        modalImage.src =
            image.src;

        const card =
            image.closest(".memory-card");

        const title =
            card.querySelector("h3").textContent;

        const description =
            card.querySelector("p").textContent;

        modalCaption.textContent =
            title + " — " + description;

    });

});


closeModal.addEventListener("click", function () {

    modal.classList.remove("active");

});


modal.addEventListener("click", function (event) {

    if (event.target === modal) {

        modal.classList.remove("active");

    }

});


/* ==========================================
   ESC KEY CLOSES PHOTO
========================================== */

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {

        modal.classList.remove("active");

    }

});


/* ==========================================
   FLOATING HEARTS
========================================== */

const heartsContainer =
    document.getElementById("hearts");


function createHeart() {

    const heart =
        document.createElement("div");

    heart.className =
        "floating-heart";

    const heartTypes =
        ["♡", "♥", "♡", "♡", "♥"];

    heart.textContent =
        heartTypes[
            Math.floor(
                Math.random() * heartTypes.length
            )
        ];

    heart.style.left =
        Math.random() * 100 + "%";

    heart.style.fontSize =
        (12 + Math.random() * 20) + "px";

    heart.style.animationDuration =
        (6 + Math.random() * 6) + "s";

    heartsContainer.appendChild(heart);


    setTimeout(function () {

        heart.remove();

    }, 12000);

}


setInterval(createHeart, 1200);


/* ==========================================
   SIMPLE SCROLL REVEAL
========================================== */

const revealElements =
    document.querySelectorAll(
        ".story-card, .memory-card, .thing, .song-card, .letter"
    );


const observer =
    new IntersectionObserver(

        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";
                    entry.target.style.transform =
                        "translateY(0)";

                    observer.unobserve(
                        entry.target
                    );

                }

            });

        },

        {
            threshold: 0.1
        }

    );


revealElements.forEach(function (element) {

    element.style.opacity = "0";

    element.style.transform =
        "translateY(25px)";

    element.style.transition =
        "opacity 0.8s ease, transform 0.8s ease";

    observer.observe(element);

});