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

    // ===== ScrollReveal Animations =====
    const sr = ScrollReveal({ reset: true });

    function resetTransitions() {
        sr.clean();
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
            navMenu.classList.remove('show-menu');
            resetTransitions();
        }
    }

    navLinks.forEach(link => {
        link.addEventListener('click', navigateToSection);
    });

    resetTransitions(); // Initial animation trigger

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
});





document.addEventListener("DOMContentLoaded", function () {
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
          observer.unobserve(entry.target); // Only animate once
        }
      });
    },
    {
      threshold: 0.1 // Trigger when 10% of section is visible
    }
  );

  // Target all the sections that should animate in
  const sections = document.querySelectorAll(
    ".home, .about, .services, .projects, .contact"
  );

  sections.forEach(section => {
    observer.observe(section);
  });
});








