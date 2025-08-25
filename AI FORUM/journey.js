document.addEventListener("DOMContentLoaded", function () {
    // Load Background Image
    document.body.style.backgroundImage = "url('MainImage.jpg')";

    // Menu Button Toggle
    const menuBtn = document.getElementById("menuBtn");
    const menuOptions = document.getElementById("menuOptions");

    menuBtn.addEventListener("click", function (event) {
        menuOptions.style.display = (menuOptions.style.display === "block") ? "none" : "block";
        event.stopPropagation();
    });

    // Close menu if clicked outside
    document.addEventListener("click", function () {
        menuOptions.style.display = "none";
    });

    // Prevent menu close when clicking inside
    menuOptions.addEventListener("click", function (event) {
        event.stopPropagation();
    });
});
