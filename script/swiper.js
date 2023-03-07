// swiper

const swiper = new Swiper('#swiper-container2', {
    // Optional parameters
    loop: true,
    slidesPerview: 3,
    stopOnLastSlide: false,
    autoplay: {
        delay: 3000
    },



    pagination: {
        el: '.team-dot',
        clickable: true,
    },

    navigation: {
        nextEl: '.btn-next',
        prevEl: '.btn-prev',
    },
});

const swiperHead = new Swiper('#swiper-container1', {
    // Optional parameters
    loop: true,
    slidesPerview: 3,
    stopOnLastSlide: false,
    autoplay: {
        delay: 3000
    },



    pagination: {
        el: '.header-dot',
        clickable: true,
    },

});



