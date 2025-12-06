/*========== scroll sections active link ==========*/
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll(".navbar a");

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 120;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => link.classList.remove("active"));
            document
                .querySelector(`.navbar a[href*=${id}]`)
                .classList.add("active");
        }
    });

    // Sticky header
    document.querySelector(".header")
        .classList.toggle("sticky", window.scrollY > 100);

    // remove mobile menu when scroll
    navbar.classList.remove("active");
    menuIcon.classList.remove("bx-x");
};


/*========== MOBILE MENU ==========*/
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
    navbar.classList.toggle("active");
    menuIcon.classList.toggle("bx-x");
};


/*========== DARK MODE ==========*/
let darkModeIcon = document.querySelector('#darkMode-icon');

darkModeIcon.onclick = () => {
    darkModeIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode');
};


/*========== SKILL CIRCLE ANIMATION ==========*/
const circles = document.querySelectorAll(".circle-container");

circles.forEach(circle => {
    let percent = circle.getAttribute("data-percent");
    let progress = circle.querySelector(".progress");

    
    let offset = 440 - (440 * percent) / 100;

    progress.style.strokeDashoffset = offset;
});


/*========== SWIPER ==========*/
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    grabCursor: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});



/*========== SCROLL REVEAL ==========*/
ScrollReveal({
    distance: "80px",
    duration: 1800,
    delay: 200,
});

ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
ScrollReveal().reveal(".home-img img, .services-container, .portfolio-box, .testimonial-wrapper, .contact form", { origin: "bottom" });
ScrollReveal().reveal(".about-img img, .skill-container", { origin: "left" });
ScrollReveal().reveal(".about-content, .home-content p", { origin: "right" });
