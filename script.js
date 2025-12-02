document.addEventListener("DOMContentLoaded", () => {
    const about = document.getElementById("about");
    const arrow = document.getElementById("downArrow");
    const menu = document.getElementById("menu");

    setTimeout(() => {
        window.scrollTo(0, 0); // scroll to top
        about.style.opacity = 1; // fade in About Me
        // remove any hash from URL
        if (window.location.hash) {
            history.replaceState(null, null, " ");
        }
    }, 50); 

    // scroll to menu section when arrow's clicked
    arrow.addEventListener("click", () => {
        menu.scrollIntoView({ behavior: "smooth" });
    });
});