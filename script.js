/* =====================================================
   LIZA PORTFOLIO — JAVASCRIPT
===================================================== */


/* =====================================================
   NAVBAR — CHANGE WHEN SCROLLING
===================================================== */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {

        navbar.style.boxShadow =
            "0 12px 35px rgba(0, 0, 0, 0.08)";

        navbar.style.background =
            "rgba(255, 255, 255, 0.95)";

    } else {

        navbar.style.boxShadow =
            "0 8px 30px rgba(0, 0, 0, 0.04)";

        navbar.style.background =
            "rgba(255, 255, 255, 0.86)";
    }

});


/* =====================================================
   SMOOTH NAVIGATION
===================================================== */

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (event) {

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if (target) {

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

});


/* =====================================================
   SCROLL REVEAL ANIMATION
===================================================== */

const revealElements = document.querySelectorAll(
    ".project, .service-card, .process-card, .about-content, .about-visual"
);


const revealObserver = new IntersectionObserver(
    (entries, observer) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);


revealElements.forEach(element => {

    element.classList.add("reveal");

    revealObserver.observe(element);

});


/* =====================================================
   IMAGE ERROR HANDLING
===================================================== */

document.querySelectorAll("img").forEach(image => {

    image.addEventListener("error", () => {

        image.classList.add("image-error");

        image.alt = "Website project preview";

    });

});


/* =====================================================
   CURRENT YEAR
===================================================== */

const yearElement = document.querySelector(".footer-copy");

if (yearElement) {

    yearElement.innerHTML =
        `© ${new Date().getFullYear()} Liza`;

}


/* =====================================================
   BUTTON CLICK FEEDBACK
===================================================== */

const emailButton = document.querySelector(".email-button");

if (emailButton) {

    emailButton.addEventListener("click", () => {

        emailButton.classList.add("clicked");

        setTimeout(() => {

            emailButton.classList.remove("clicked");

        }, 500);

    });

}