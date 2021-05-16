// Navigation Bar Animations

const hamburger = document.querySelector(".nav-toggler");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", function () {
    navMenu.classList.toggle("navigation-links-appear");
});

// Navigation Bar animations not working properly.

// ScrollReveal Animations

const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
});

// Home Section
sr.reveal('.home-title', {});
sr.reveal('.home-button', {
    delay: 200
});
sr.reveal('.home-img', {
    delay: 400
});
sr.reveal('.home-social-icon', {
    interval: 200
});
// Home Section ends

// About Section
sr.reveal('.about-img', {});
sr.reveal('.about-subtitle', {
    delay: 400
});
sr.reveal('.about-text', {
    delay: 400
});
// About Section ends

// Skills Section
sr.reveal('.skills-subtitle', {});
sr.reveal('.skills-text', {});
// skills-data contains 4 blocks each displayed in an interval of 0.2s.
sr.reveal('.skills-data', {
    interval: 200
});
sr.reveal('.skills-img', {
    delay: 600
});
// Skills Section ends

// Work Section

// 6 div elements have class = "work-img", therefore, each element will be displayed after an interval of 0.2s. 
sr.reveal('.work-img', {
    interval: 200
});
// Work Section ends

// Contact Section

// 3 form elements have class="contact-input"
sr.reveal('.contact-input', {
    interval: 200
});
sr.reveal('.contact-button', {
    delay: 200
});
// Contact Section ends