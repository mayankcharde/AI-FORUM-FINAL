document.addEventListener("DOMContentLoaded", function () {
    // Ensure Background Loads Correctly
    document.getElementById("background").style.backgroundImage = "url('MainImage.jpg')";

    // Menu Button Hover Effect
    const menuButton = document.getElementById("menuButton");
    const menuDropdown = document.getElementById("menuDropdown");

    menuButton.addEventListener("mouseover", function () {
        menuDropdown.style.display = "block";
    });

    menuDropdown.addEventListener("mouseleave", function () {
        menuDropdown.style.display = "none";
    });

    // Carousel Auto-Slide
    let carousel = new bootstrap.Carousel(document.getElementById('teamCarousel'), {
        interval: 3000,  
        wrap: true
    });

    // Animate Sections
    setTimeout(() => {
        document.querySelector(".incharge-section").style.opacity = "1";
        document.querySelector(".incharge-section").style.transform = "translateY(0)";
    }, 200);

    setTimeout(() => {
        document.querySelectorAll(".about-section").forEach((section, index) => {
            setTimeout(() => {
                section.style.opacity = "1";
                section.style.transform = "translateY(0)";
            }, 300 * index);
        });
    }, 400);

    setTimeout(() => {
        document.querySelector(".team-section").style.opacity = "1";
        document.querySelector(".team-section").style.transform = "translateY(0)";
    }, 800);
});
