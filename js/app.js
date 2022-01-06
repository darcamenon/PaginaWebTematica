// 'use strict'


let searchForm = document.querySelector('.search-form');
document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
}
let navbar = document.querySelector('.navbar');


document.querySelector('#menu-btn').onclick = () => {
        console.log(navbar);
        navbar.classList.toggle('active');
        searchForm.classList.remove('active');

    }
    // Scroll Spy 

let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('.header .navbar a');


window.onscroll = () => { // Cuando se hace scroll activo un background 
    searchForm.classList.remove('active');
    navbar.classList.remove('active');

    if (window.scrollY > 0) {
        document.querySelector('.header').classList.add('active');
    } else {
        document.querySelector('.header').classList.remove('active');

    }
    // Codigo para señalar la seccion en la que estoy
    section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 200;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('.header .navbar a[href*=' + id + ']').classList.add('active');
                console.log(section);
            });
        };

    });
};
window.onload = () => {
    if (window.scrollY > 0) {
        document.querySelector('.header').classList.add('active');
    } else {
        document.querySelector('.header').classList.remove('active');

    }
}



// Script slider

var swiper = new Swiper(".home-slider", {
    spaceBetween: 20,
    effect: "fade",
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    centeredSlides: true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
    },
});
var swiper = new Swiper(".products-slider", {
    spaceBetween: 20,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
    },
    grabCursor: true,
    breakpoints: {
        0: {
            slidesPerView: 1,

        },
        768: {
            slidesPerView: 2,

        },
        991: {
            slidesPerView: 3,

        },
    },
});