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

const advantages__bottom__left__swiper = new Swiper('.advantages__bottom__left__swiper', {
    slidesPerView: 1,
    loop: true,
    spaceBetween: 12,

    navigation: {
        nextEl: '.advantages__bottom__left__swiper__next',
        prevEl: '.advantages__bottom__left__swiper__prev',
    },
    pagination: {
        el: '.advantages__bottom__left__swiper__pagination',
    },

});

const advantages__bottom__right__swiper = new Swiper('.advantages__bottom__right__swiper', {
    slidesPerView: 1,
    loop: true,
    spaceBetween: 12,

    navigation: {
        nextEl: '.advantages__bottom__right__swiper__next',
        prevEl: '.advantages__bottom__right__swiper__prev',
    },
    pagination: {
        el: '.advantages__bottom__right__swiper__pagination',
    },

});


const haschildElements = document.querySelectorAll('.haschild > a');
    
haschildElements.forEach(anchor => {
    anchor.addEventListener('click', function(event) {
        event.preventDefault();

        const parent = this.parentElement;

        parent.classList.toggle('active');
    });
});


const menu = document.querySelector(".mobile__menu");
const menuContainer = document.querySelector(".mobile__menu__container");
const openBtn = document.querySelector(".mobile__menu__open"); // кнопка для открытия меню
const closeBtn = document.querySelector(".mobile__menu__close"); // кнопка для закрытия меню

// Открыть меню
openBtn.addEventListener("click", function () {
    menu.classList.add("mobile__menu--active");
});

// Закрыть меню по кнопке закрытия
closeBtn.addEventListener("click", function () {
    menu.classList.remove("mobile__menu--active");
});

// Закрыть меню при клике вне его области
document.addEventListener("click", function (event) {
    if (!menuContainer.contains(event.target) && !openBtn.contains(event.target)) {
        menu.classList.remove("mobile__menu--active");
    }
});

function openPopup() {
    $('.feedback_popup').addClass('active');
    $('body').addClass('no-scroll');
}

function closePopup() {
    $('.feedback_popup').removeClass('active');
    $('body').removeClass('no-scroll');
}

$('.feedback_popup__close').on('click', closePopup);

$('.feedback_popup__open').on('click', openPopup);