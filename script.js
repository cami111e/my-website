document.addEventListener("DOMContentLoaded", () => {
    const about = document.getElementById("about");
    const downArrow = document.getElementById("downArrow");
    const menu = document.getElementById("menu");
    const upArrow = document.getElementById("upArrow");

    setTimeout(() => {
        window.scrollTo(0, 0); // scroll to top
        about.style.opacity = 1; // fade in About Me
        // remove any hash from URL
        if (window.location.hash) {
            history.replaceState(null, null, " ");
        }
    }, 50); 

    // scroll to menu section when arrow's clicked
    downArrow.addEventListener("click", () => {
        menu.scrollIntoView({ behavior: "smooth" });
        
    });

    upArrow.addEventListener("click", () => {
        about.scrollIntoView({behavior: "smooth" });
    });
    
});