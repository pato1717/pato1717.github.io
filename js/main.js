
const overlayImage = document.getElementById("overlay-image");

const images = document.querySelectorAll(".subdiv img");
const overlay = document.querySelector(".overlay");
const closeButton = overlay.querySelector(".close-button");


images.forEach(image => {
    image.addEventListener("click", function () {

        overlayImage.src = this.src;


        overlay.style.display = "flex";
    });
});


closeButton.addEventListener("click", function () {

    overlay.style.display = "none";
});
