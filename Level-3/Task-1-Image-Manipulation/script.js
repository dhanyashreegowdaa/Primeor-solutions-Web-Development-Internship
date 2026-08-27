// ===============================
// NAVBAR SCROLL EFFECT
// ===============================

const navbar = document.querySelector(".navbar");

if (navbar) {
    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            navbar.classList.add("shadow-sm");
        } else {
            navbar.classList.remove("shadow-sm");
        }
    });
}


// ===============================
// SMOOTH SCROLL
// ===============================

const links = document.querySelectorAll('a[href^="#"]');

links.forEach(function (link) {
    link.addEventListener("click", function (event) {
        const targetId = this.getAttribute("href");

        if (!targetId || targetId === "#") {
            return;
        }

        const target = document.querySelector(targetId);

        if (target) {
            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
});


// ===============================
// SERVICE CARD HOVER EFFECT
// ===============================

const serviceCards = document.querySelectorAll(".service-card");

serviceCards.forEach(function (card) {
    card.addEventListener("mouseenter", function () {
        this.style.transform = "translateY(-8px)";
    });

    card.addEventListener("mouseleave", function () {
        this.style.transform = "";
    });
});


// ===============================
// CURRENT YEAR
// ===============================

const yearElement = document.querySelector("#currentYear");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}