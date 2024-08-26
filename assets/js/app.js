const front__swiper = new Swiper('.front__swiper', {
    slidesPerView: 1,
    loop: false,
    spaceBetween: 20,
    autoplay: {
        delay: 3000,
    },
    pagination: {
        el: '.front__swiper__pagination',
    },
});

const partner__swiper = new Swiper('.partner__swiper', {
    slidesPerView: 'auto',
    loop: false,
    spaceBetween: 12,

    navigation: {
        nextEl: '.partner__swiper__next',
        prevEl: '.partner__swiper__prev',
    },

});