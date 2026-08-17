/* ==========================
   BIRTHDAY COUNTDOWN
========================== */

const birthdayDate = new Date(
    "August 27, 2026 00:00:00"
).getTime();


function updateCountdown() {

    const now = new Date().getTime();

    const difference = birthdayDate - now;


    if (difference <= 0) {

        document.getElementById("days").textContent = "00";
        document.getElementById("hours").textContent = "00";
        document.getElementById("minutes").textContent = "00";
        document.getElementById("seconds").textContent = "00";

        document.getElementById(
            "birthdayMessage"
        ).style.display = "block";

        return;
    }


    const days = Math.floor(
        difference / (1000 * 60 * 60 * 24)
    );

    const hours = Math.floor(
        (difference / (1000 * 60 * 60)) % 24
    );

    const minutes = Math.floor(
        (difference / (1000 * 60)) % 60
    );

    const seconds = Math.floor(
        (difference / 1000) % 60
    );


    document.getElementById("days").textContent =
        String(days).padStart(2, "0");

    document.getElementById("hours").textContent =
        String(hours).padStart(2, "0");

    document.getElementById("minutes").textContent =
        String(minutes).padStart(2, "0");

    document.getElementById("seconds").textContent =
        String(seconds).padStart(2, "0");
}


updateCountdown();

setInterval(updateCountdown, 1000);


/* ==========================
   DATE REVEAL
========================== */

const revealButton =
    document.getElementById("revealBtn");

const dateReveal =
    document.getElementById("dateReveal");


revealButton.addEventListener("click", function () {

    dateReveal.style.display = "block";

    revealButton.textContent =
        "It's a Date! ❤️";

    createHeartBurst();

});


/* ==========================
   FLOATING HEARTS
========================== */

const heartsContainer =
    document.querySelector(".hearts");


function createHeart() {

    const heart =
        document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML =
        Math.random() > 0.5
            ? "♥"
            : "♡";


    heart.style.left =
        Math.random() * 100 + "vw";


    heart.style.fontSize =
        (12 + Math.random() * 25) + "px";


    heart.style.animationDuration =
        (5 + Math.random() * 6) + "s";


    heartsContainer.appendChild(heart);


    setTimeout(() => {
        heart.remove();
    }, 11000);
}


setInterval(createHeart, 800);


/* ==========================
   HEART BURST
========================== */

function createHeartBurst() {

    for (let i = 0; i < 25; i++) {

        setTimeout(() => {

            const heart =
                document.createElement("div");

            heart.classList.add("heart");

            heart.innerHTML = "❤️";

            heart.style.left =
                (35 + Math.random() * 30) + "vw";

            heart.style.fontSize =
                (15 + Math.random() * 25) + "px";

            heart.style.animationDuration =
                (3 + Math.random() * 3) + "s";

            heartsContainer.appendChild(heart);

            setTimeout(() => {
                heart.remove();
            }, 7000);

        }, i * 80);
    }
}