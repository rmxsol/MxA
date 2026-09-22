/* =========================================
   PASSWORD
========================================= */

const correctPassword = "122525";

const loginScreen =
    document.getElementById("loginScreen");

const mainSite =
    document.getElementById("mainSite");

const passwordInput =
    document.getElementById("passwordInput");

const loginButton =
    document.getElementById("loginButton");

const loginError =
    document.getElementById("loginError");

const passwordArea =
    document.getElementById("passwordArea");

const songPrompt =
    document.getElementById("songPrompt");

const playEntranceSong =
    document.getElementById("playEntranceSong");

const enterWebsiteButton =
    document.getElementById("enterWebsiteButton");

const entranceSongStatus =
    document.getElementById("entranceSongStatus");

const music =
    document.getElementById("music");


let passwordCorrect = false;
let entranceSongPlayed = false;


/* =========================================
   LOGIN
========================================= */

function unlockWebsite() {

    const enteredPassword =
        passwordInput.value.trim();

    if (enteredPassword === correctPassword) {

        passwordCorrect = true;

        loginError.style.display = "none";

        passwordInput.disabled = true;

        loginButton.style.display = "none";

        songPrompt.classList.add("show");

        entranceSongStatus.textContent =
            "Password accepted. 💜";

        passwordArea.classList.add(
            "password-complete"
        );

    } else {

        loginError.style.display = "block";

        passwordInput.value = "";

        passwordInput.focus();

    }

}


loginButton.addEventListener(
    "click",
    unlockWebsite
);


passwordInput.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Enter") {
            unlockWebsite();
        }

    }
);


/* =========================================
   ENTRANCE SONG
========================================= */

playEntranceSong.addEventListener(
    "click",
    async function() {

        try {

            await music.play();

            entranceSongPlayed = true;

            playEntranceSong.textContent =
                "❚❚ Beautiful Things is playing 💜";

            entranceSongStatus.textContent =
                "Now playing our song... 🌻";

            enterWebsiteButton.disabled = false;

        } catch (error) {

            entranceSongStatus.textContent =
                "I couldn't play the song. Please make sure beautiful-things.mp3 is inside the music folder.";

        }

    }
);


/* =========================================
   ENTER WEBSITE
========================================= */

enterWebsiteButton.addEventListener(
    "click",
    function() {

        if (
            passwordCorrect &&
            entranceSongPlayed
        ) {

            loginScreen.style.opacity = "0";

            setTimeout(
                function() {

                    loginScreen.classList.add(
                        "hidden"
                    );

                    mainSite.classList.remove(
                        "hidden"
                    );

                    window.scrollTo({
                        top: 0,
                        behavior: "instant"
                    });

                },
                800
            );

        }

    }
);


/* =========================================
   MEMORY DATA
========================================= */

const memories = [

    {
        image: "images/photo01.jpg",
        date: "December 2025",
        title: "The Beginning",
        caption: "The beginning of something beautiful. 💜"
    },

    {
        image: "images/photo02.jpg",
        date: "January 2026",
        title: "Another Memory",
        caption: "Another day that became special because I was with you. 🌻"
    },

    {
        image: "images/photo03.jpg",
        date: "February 2026",
        title: "Just Us",
        caption: "Sometimes the simplest moments become my favorites."
    },

    {
        image: "images/photo04.jpg",
        date: "March 2026",
        title: "Our Little Adventure",
        caption: "One more memory I never want to forget. 💜"
    },

    {
        image: "images/photo05.jpg",
        date: "April 2026",
        title: "Another Day With You",
        caption: "Thank you for filling my days with beautiful memories."
    },

    {
        image: "images/photo06.jpg",
        date: "May 2026",
        title: "A Favorite Moment",
        caption: "I would happily live this moment all over again."
    },

    {
        image: "images/photo07.jpg",
        date: "June 2026",
        title: "Still Us",
        caption: "More memories, more laughs, more reasons to be grateful."
    },

    {
    image: "images/photo08.jpg",
    date: "July 2026",
    title: "Our Special Day",
    caption: "One of my favorite memories with you. 🌻"
    },

    {
    image: "images/photo09.jpg",
    date: "August 2026",
    title: "Smiles With You",
    caption: "I hope we never run out of reasons to smile together."
    },

    {
    image: "images/photo10.jpg",
    date: "September 2026",
    title: "My Favorite Person",
    caption: "Out of all the places I could be, I'm glad some of my favorite places are beside you."
    },

    {
        image: "images/photo11.jpg",
        date: "Our Story",
        title: "To Be Continued...",
        caption: "This isn't the end of our memories. It's only the beginning. 🌻"
    }


];


let currentIndex = 0;


/* =========================================
   CAROUSEL ELEMENTS
========================================= */

const carouselImage =
    document.getElementById("carouselImage");

const memoryDate =
    document.getElementById("memoryDate");

const memoryTitle =
    document.getElementById("memoryTitle");

const memoryCaption =
    document.getElementById("memoryCaption");

const carouselCounter =
    document.getElementById("carouselCounter");

const carouselDots =
    document.getElementById("carouselDots");

const carousel =
    document.querySelector(".carousel");


/* =========================================
   CREATE DOTS
========================================= */

memories.forEach(
    function(memory, index) {

        const dot =
            document.createElement("button");

        dot.className = "dot";

        dot.setAttribute(
            "aria-label",
            `Go to memory ${index + 1}`
        );

        dot.addEventListener(
            "click",
            function() {
                showMemory(index);
            }
        );

        carouselDots.appendChild(dot);

    }
);


/* =========================================
   SHOW MEMORY
========================================= */

function showMemory(index) {

    if (index < 0) {
        index = memories.length - 1;
    }

    if (index >= memories.length) {
        index = 0;
    }

    currentIndex = index;

    const memory =
        memories[currentIndex];


    carouselImage.style.opacity = "0";


    setTimeout(
        function() {

            carouselImage.src =
                memory.image;

            carouselImage.alt =
                memory.title;

            memoryDate.textContent =
                memory.date;

            memoryTitle.textContent =
                memory.title;

            memoryCaption.textContent =
                memory.caption;

            carouselCounter.textContent =
                `${currentIndex + 1} / ${memories.length}`;

            carouselImage.style.opacity = "1";

        },
        150
    );


    const dots =
        document.querySelectorAll(".dot");


    dots.forEach(
        function(dot) {
            dot.classList.remove("active");
        }
    );


    if (dots[currentIndex]) {

        dots[currentIndex]
            .classList.add("active");

    }

}


/* =========================================
   CAROUSEL BUTTONS
========================================= */

document
    .getElementById("prevButton")
    .addEventListener(
        "click",
        function() {

            showMemory(
                currentIndex - 1
            );

        }
    );


document
    .getElementById("nextButton")
    .addEventListener(
        "click",
        function() {

            showMemory(
                currentIndex + 1
            );

        }
    );


showMemory(0);


/* =========================================
   KEYBOARD CAROUSEL
========================================= */

document.addEventListener(
    "keydown",
    function(event) {

        if (
            mainSite.classList.contains("hidden")
        ) {
            return;
        }

        if (
            photoModal.classList.contains("show")
        ) {
            return;
        }

        if (event.key === "ArrowLeft") {

            showMemory(
                currentIndex - 1
            );

        }

        if (event.key === "ArrowRight") {

            showMemory(
                currentIndex + 1
            );

        }

    }
);


/* =========================================
   SWIPE SUPPORT
========================================= */

let touchStartX = 0;
let touchEndX = 0;


carousel.addEventListener(
    "touchstart",
    function(event) {

        touchStartX =
            event.changedTouches[0].screenX;

    },
    {
        passive: true
    }
);


carousel.addEventListener(
    "touchend",
    function(event) {

        touchEndX =
            event.changedTouches[0].screenX;

        handleSwipe();

    },
    {
        passive: true
    }
);


function handleSwipe() {

    const distance =
        touchEndX - touchStartX;


    if (Math.abs(distance) < 50) {
        return;
    }


    if (distance < 0) {

        showMemory(
            currentIndex + 1
        );

    } else {

        showMemory(
            currentIndex - 1
        );

    }

}


/* =========================================
   PHOTO MODAL
========================================= */

const photoModal =
    document.getElementById("photoModal");

const modalImage =
    document.getElementById("modalImage");

const closeModal =
    document.getElementById("closeModal");


carouselImage.addEventListener(
    "click",
    function() {

        modalImage.src =
            carouselImage.src;

        modalImage.alt =
            carouselImage.alt;

        photoModal.classList.add(
            "show"
        );

    }
);


closeModal.addEventListener(
    "click",
    function() {

        photoModal.classList.remove(
            "show"
        );

    }
);


photoModal.addEventListener(
    "click",
    function(event) {

        if (
            event.target === photoModal
        ) {

            photoModal.classList.remove(
                "show"
            );

        }

    }
);


document.addEventListener(
    "keydown",
    function(event) {

        if (
            event.key === "Escape" &&
            photoModal.classList.contains("show")
        ) {

            photoModal.classList.remove(
                "show"
            );

        }

    }
);


/* =========================================
   RELATIONSHIP COUNTER
========================================= */

const relationshipStart =
    new Date("2025-12-25T00:00:00");


function updateCounter() {

    const now =
        new Date();

    let difference =
        now - relationshipStart;


    if (difference < 0) {
        difference = 0;
    }


    const totalSeconds =
        Math.floor(
            difference / 1000
        );


    const totalMinutes =
        Math.floor(
            totalSeconds / 60
        );


    const totalHours =
        Math.floor(
            totalMinutes / 60
        );


    const days =
        Math.floor(
            totalHours / 24
        );


    document.getElementById("days")
        .textContent = days;


    document.getElementById("hours")
        .textContent =
        totalHours % 24;


    document.getElementById("minutes")
        .textContent =
        totalMinutes % 60;


    document.getElementById("seconds")
        .textContent =
        totalSeconds % 60;

}


updateCounter();


setInterval(
    updateCounter,
    1000
);


/* =========================================
   MUSIC PLAYER
========================================= */

const musicButton =
    document.getElementById("musicButton");

const floatingMusicButton =
    document.getElementById(
        "floatingMusicButton"
    );

const musicStatus =
    document.getElementById("musicStatus");

const songSection =
    document.querySelector(".song-section");


function updateMusicButtons() {

    if (music.paused) {

        musicButton.textContent =
            "▶ Play Our Song";

        floatingMusicButton.textContent =
            "🎵";

        songSection.classList.remove(
            "playing"
        );

    } else {

        musicButton.textContent =
            "❚❚ Pause Our Song";

        floatingMusicButton.textContent =
            "⏸";

        songSection.classList.add(
            "playing"
        );

    }

}


async function toggleMusic() {

    if (music.paused) {

        try {

            await music.play();

            musicStatus.textContent =
                "Now playing our song. 💜";

        } catch (error) {

            musicStatus.textContent =
                "Music couldn't start. Make sure beautiful-things.mp3 is in the music folder.";

        }

    } else {

        music.pause();

        musicStatus.textContent =
            "Music paused. 🌻";

    }


    updateMusicButtons();

}


musicButton.addEventListener(
    "click",
    toggleMusic
);


floatingMusicButton.addEventListener(
    "click",
    toggleMusic
);


music.addEventListener(
    "play",
    updateMusicButtons
);


music.addEventListener(
    "pause",
    updateMusicButtons
);


music.addEventListener(
    "error",
    function() {

        musicStatus.textContent =
            "Music file not found. Check music/beautiful-things.mp3";

        entranceSongStatus.textContent =
            "Music file not found. Check music/beautiful-things.mp3";

    }
);


/* =========================================
   BROKEN IMAGE HANDLING
========================================= */

carouselImage.addEventListener(
    "error",
    function() {

        memoryCaption.textContent =
            "Add this photo to the images folder using the correct filename. 🌻";

    }
);


/* =========================================
   INITIAL MUSIC STATE
========================================= */

updateMusicButtons();