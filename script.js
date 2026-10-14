```javascript
// ========================================
// JINUSHA J J — DEVOPS PORTFOLIO
// ========================================


// 1. UPDATE COPYRIGHT YEAR
const year = document.getElementById("year");

if (year) {
    year.textContent = new Date().getFullYear();
}


// 2. MOBILE NAVIGATION MENU
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", function () {

        const isOpen = navLinks.classList.toggle("open");

        menuToggle.setAttribute(
            "aria-expanded",
            String(isOpen)
        );

        menuToggle.textContent = isOpen ? "✕" : "☰";

    });


    // Close menu after clicking a navigation link
    navLinks.querySelectorAll("a").forEach(function (link) {

        link.addEventListener("click", function () {

            navLinks.classList.remove("open");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

            menuToggle.textContent = "☰";

        });

    });

}


// 3. SCROLL PROGRESS BAR
const scrollProgress = document.getElementById("scrollProgress");

function updateScrollProgress() {

    if (!scrollProgress) return;

    const scrollableHeight =
        document.documentElement.scrollHeight - window.innerHeight;

    let progress = 0;

    if (scrollableHeight > 0) {
        progress = (window.scrollY / scrollableHeight) * 100;
    }

    scrollProgress.style.width =
        Math.min(100, Math.max(0, progress)) + "%";

}

window.addEventListener(
    "scroll",
    updateScrollProgress,
    { passive: true }
);

updateScrollProgress();


// 4. SCROLL REVEAL ANIMATIONS
const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {

    const revealObserver = new IntersectionObserver(
        function (entries, observer) {

            entries.forEach(function (entry) {

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

    revealElements.forEach(function (element) {

        revealObserver.observe(element);

    });

} else {

    // Fallback for older browsers
    revealElements.forEach(function (element) {

        element.classList.add("visible");

    });

}


// 5. ACTIVE NAVIGATION LINK
const sections = document.querySelectorAll("main section[id]");
const navigationItems = document.querySelectorAll(".nav-links a");

if ("IntersectionObserver" in window) {

    const sectionObserver = new IntersectionObserver(
        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    navigationItems.forEach(function (link) {

                        const targetSection = link.getAttribute("href");

                        link.classList.toggle(
                            "active",
                            targetSection === "#" + entry.target.id
                        );

                    });

                }

            });

        },
        {
            rootMargin: "-30% 0px -60% 0px"
        }
    );

    sections.forEach(function (section) {

        sectionObserver.observe(section);

    });

}
```
