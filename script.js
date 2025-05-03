// Image Slider
let currentIndex = 0;
const images = document.querySelectorAll(".slider-image");

function showNextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    document.querySelector(".slider-container").style.transform = `translateX(-${currentIndex * 100}%)`;
}

setInterval(showNextImage, 3000); // Change image every 3 seconds

// Form Validation
document.getElementById("contact").addEventListener("submit", function (e) {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (!name || !email || !message) {
        e.preventDefault();
        alert("Please fill in all fields before submitting. Let's spread the joy!");
    }
});
