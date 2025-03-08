
let currentSlideIndex = 0;
const slides = document.querySelectorAll(".slide");
const thumbnails = document.querySelectorAll(".thumbnail");

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove("active");
        thumbnails[i].classList.remove("active");
        if (i === index) {
            slide.classList.add("active");
            thumbnails[i].classList.add("active");
        }
    });
    currentSlideIndex = index;
}

function changeSlide(direction) {
    currentSlideIndex += direction;
    if (currentSlideIndex < 0) {
        currentSlideIndex = slides.length - 1;
    } else if (currentSlideIndex >= slides.length) {
        currentSlideIndex = 0;
    }
    showSlide(currentSlideIndex);
}

// Initialize the first slide and thumbnail as active
showSlide(0);
