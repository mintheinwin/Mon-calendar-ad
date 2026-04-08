let slideIndex = 1;
let slideTimer;

// Initialize slideshow
document.addEventListener('DOMContentLoaded', function() {
    showSlide(slideIndex);
    autoSlide();
});

// Next/previous controls
function changeSlide(n) {
    clearTimeout(slideTimer);
    showSlide(slideIndex += n);
    autoSlide();
}

// Thumbnail image controls
function currentSlide(n) {
    clearTimeout(slideTimer);
    showSlide(slideIndex = n);
    autoSlide();
}

// Main slide display function
function showSlide(n) {
    let slides = document.getElementsByClassName('slide');
    let dots = document.getElementsByClassName('dot');

    // Wrap around: if slide number is greater than total slides, go back to 1
    if (n > slides.length) {
        slideIndex = 1;
    }
    // If slide number is less than 1, go to last slide
    if (n < 1) {
        slideIndex = slides.length;
    }

    // Remove active class from all slides and dots
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove('active');
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove('active');
    }

    // Add active class to current slide and dot
    slides[slideIndex - 1].classList.add('active');
    dots[slideIndex - 1].classList.add('active');
}

// Auto advance slides every 5 seconds
function autoSlide() {
    slideTimer = setTimeout(function() {
        slideIndex++;
        showSlide(slideIndex);
        autoSlide();
    }, 5000); // Change slide every 5 seconds
}

// Call to action button handler
function handleCTA() {
    alert('Thank you for your interest! Redirecting to offer page...');
    // You can replace the alert with actual navigation
    // window.location.href = 'https://example.com/offer';
}
