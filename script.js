document.addEventListener("DOMContentLoaded", () => {
    const about = document.getElementById("about");
    const arrow = document.getElementById("downArrow");
    const menu = document.getElementById("menu");

    window.scrollTo(0, 0);

    window.addEventListener("load", () => {
        // on load, fade in about section again and fade to top of screen
        setTimeout(() => {
            about.style.opacity = 1;
        }, 50);
        
    });

    // scroll to menu section when arrow's clicked
    arrow.addEventListener("click", () => {
        menu.scrollIntoView({ behavior: "smooth" });
    });
});