let slideIndex = 1;
let slideTimer;

// Initialize slideshow
document.addEventListener('DOMContentLoaded', function() {
    showSlide(slideIndex);
    autoSlide();
    autoCenterView();
});

window.addEventListener('load', autoCenterView);
window.addEventListener('resize', autoCenterView);

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

function autoCenterView() {
    // In very short banner mode we keep content top-aligned.
    if (window.matchMedia('(max-height: 140px)').matches) {
        return;
    }

    const adContainer = document.querySelector('.ad-container');
    if (!adContainer) {
        return;
    }

    const containerRect = adContainer.getBoundingClientRect();
    const absoluteTop = window.scrollY + containerRect.top;
    const targetScrollTop = absoluteTop - (window.innerHeight / 2) + (containerRect.height / 2);
    const maxScrollTop = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
    const boundedScrollTop = Math.max(0, Math.min(targetScrollTop, maxScrollTop));

    window.scrollTo({
        top: boundedScrollTop,
        behavior: 'smooth'
    });
}

// Call to action button handler
function handleCTA() {
    alert('Thank you for your interest! Redirecting to offer page...');
    // You can replace the alert with actual navigation
    // window.location.href = 'https://example.com/offer';
}
