// Start Swiper Banners
var swiper = new Swiper(".slide-swp", {
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true
    },
    autoplay: {
        delay: 2500
    },
    loop: true,
});
// End Swiper Banners

// Start Swiper Products
var swiper = new Swiper(".slide-products", {
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints: {
        640: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 4,
        },
        1024: {
            slidesPerView: 5,
        },
    },

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    autoplay: {
        delay: 2500
    },
    loop: true,
});
// End Swiper Products
