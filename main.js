document.addEventListener("DOMContentLoaded", function () {
    // ===== Scroll Up =====
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
    const menuBtn = document.getElementById("menu-btn");
    const closeBtn = document.getElementById("close-btn");
    const mobileMenu = document.getElementById("mobile-menu");

    if (menuBtn && closeBtn && mobileMenu) {
        menuBtn.addEventListener("click", () => mobileMenu.classList.add("open"));
        closeBtn.addEventListener("click", () => mobileMenu.classList.remove("open"));
    }

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
    revealSection();

    // ===== ScrollReveal Reset & Navigation Animation =====
    function resetTransitions() {
        ScrollReveal().clean();
        sr.reveal(`.home__content, .services__data, .services__swiper`);
        sr.reveal(`.home__images`, { origin: 'bottom', delay: 1000 });
        sr.reveal(`.about__images, .contact__img`, { origin: 'left' });
        sr.reveal(`.about__data, .contact__data`, { origin: 'right' });
        sr.reveal(`.projects__card`, { interval: 100 });
    }

    function navigateToSection(event) {
        event.preventDefault();
        const targetSection = document.querySelector(this.getAttribute('href'));
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
            resetTransitions();
        }
    }

    navLinks.forEach(link => {
        link.addEventListener('click', navigateToSection);
    });

    resetTransitions();

    const menuButton = document.getElementById('nav-toggle');
    const closeButton = document.getElementById('nav-close');
    const navMenu = document.getElementById('nav-menu');

    menuButton.addEventListener('click', () => {
        navMenu.classList.add('active');
    });

    closeButton.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });

    
    
    
    
    
    
    
    
    

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

    
    
    
    
    
    