/* =========================================
   SMOOTH SCROLL FOR INTERNAL LINKS
========================================= */

const internalLinks =
    document.querySelectorAll('a[href^="#"]');

internalLinks.forEach(function (link) {

    link.addEventListener("click", function (event) {

        const targetId =
            link.getAttribute("href");

        if (targetId === "#") {
            return;
        }

        const target =
            document.querySelector(targetId);

        if (target) {

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});


/* =========================================
   SIMPLE APPLY INTERACTION
========================================= */

const applyButton =
    document.querySelector(
        '.nav-button[href="#apply"]'
    );

if (applyButton) {

    applyButton.addEventListener(
        "click",
        function () {

            console.log(
                "Application section selected."
            );

        }
    );

}