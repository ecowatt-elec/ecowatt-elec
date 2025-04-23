document.addEventListener("DOMContentLoaded", function () {
    // ===== Scroll Up Button =====
    const scrollUp = document.getElementById("scroll-up");
    if (scrollUp) {
        window.addEventListener("scroll", function () {
            scrollUp.classList.toggle("show", window.scrollY > 200);
        });

        scrollUp.addEventListener("click", function (e) {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }

    // ===== Section Navigation =====
    const sections = document.querySelectorAll(".section");
    const navLinks = document.querySelectorAll(".nav__link");

    function openSection(sectionId) {
        sections.forEach(section => {
            section.classList.remove("active");
            section.style.opacity = 0;
        });

        const targetSection = document.getElementById(sectionId);
        if (targetSection) {
            targetSection.classList.add("active");
            setTimeout(() => {
                targetSection.style.opacity = 1;
            }, 100);
        }
    }

    // ===== Mobile Menu Toggle =====
    const navMenu = document.getElementById('nav-menu'),
          navToggle = document.getElementById('nav-toggle'),
          navClose = document.getElementById('nav-close');

    // Show menu
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.add('show-menu');
        });
    }

    // Hide menu
    if (navClose && navMenu) {
        navClose.addEventListener('click', () => {
            navMenu.classList.remove('show-menu');
        });
    }

    // Hide menu on nav link click
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('show-menu');
        });
    });

    // ===== Fade-in Sections on Scroll =====
    const fadeSections = document.querySelectorAll(".fade-in");

    function revealSection() {
        fadeSections.forEach((section) => {
            if (section.getBoundingClientRect().top < window.innerHeight - 100) {
                section.classList.add("show");
            }
        });
    }

    window.addEventListener("scroll", revealSection);
    revealSection(); // Initial call


    // ===== Image Slider with Thumbnails =====
    const slides = document.querySelectorAll('.slide');
    const thumbs = document.querySelectorAll('.thumb');
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
            thumbs[i].classList.toggle('active', i === index);
        });
        currentSlide = index;
    }

    thumbs.forEach((thumb, index) => {
        thumb.addEventListener('click', () => {
            showSlide(index);
        });
    });

    setInterval(() => {
        let nextSlide = (currentSlide + 1) % slides.length;
        showSlide(nextSlide);
    }, 5000);
);


















