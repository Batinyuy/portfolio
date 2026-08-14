/* ================= MOBILE MENU ================= */

const menuIcon = document.getElementById("menu-icon");

const navbar = document.getElementById("navbar");

menuIcon.addEventListener("click", function () {

    navbar.classList.toggle("active");

});


/* ================= CLOSE MOBILE MENU ================= */

const navLinks = document.querySelectorAll(".navbar a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navbar.classList.remove("active");

    });

});


/* ================= TYPING EFFECT ================= */

const typingText = document.getElementById("typing-text");

const words = [
    "Web Developer",
    "UI Designer",
    "Flutter Developer",
    "Freelancer"
];

let wordIndex = 0;

let characterIndex = 0;

let deleting = false;


function typeEffect() {

    const currentWord = words[wordIndex];

    if (deleting === false) {

        typingText.textContent =
            currentWord.substring(0, characterIndex + 1);

        characterIndex++;

        if (characterIndex === currentWord.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);

            return;
        }

    } else {

        typingText.textContent =
            currentWord.substring(0, characterIndex - 1);

        characterIndex--;

        if (characterIndex === 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex === words.length) {
                wordIndex = 0;
            }

        }

    }

    setTimeout(typeEffect, deleting ? 70 : 120);
}


typeEffect();


/* ================= CONTACT FORM ================= */

const contactForm =
    document.getElementById("contact-form");


contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name =
        document.getElementById("name").value;

    alert(
        "Thank you " + name +
        "! Your message has been received."
    );

    contactForm.reset();

});