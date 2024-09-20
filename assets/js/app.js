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
// const mission__main = new Swiper('.mission__main', {
//     slidesPerView: 'auto',
//     loop: false,
//     spaceBetween: 12,

//     navigation: {
//         nextEl: '.partner__swiper__next',
//         prevEl: '.partner__swiper__prev',
//     },

// });


let missionSwiper = null;

function initSwiperOnMobile() {
    const mobileBreakpoint = 768;

    if (window.innerWidth < mobileBreakpoint && missionSwiper === null) {
        missionSwiper = new Swiper('.mission__main', {
            slidesPerView: 'auto',
            loop: false,
            spaceBetween: 12,
            navigation: {
                nextEl: '.mission__swiper__next',
                prevEl: '.mission__swiper__prev',
            },
        });
    } else if (window.innerWidth >= mobileBreakpoint && missionSwiper !== null) {
        missionSwiper.destroy(true, true);
        missionSwiper = null;
    }
}

window.addEventListener('load', initSwiperOnMobile);

window.addEventListener('resize', initSwiperOnMobile);

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
    anchor.addEventListener('click', function (event) {
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


function openuslugiPopup() {
    $('.uslugi_popup').addClass('active');
    $('body').addClass('no-scroll');
}

function closeuslugiPopup() {
    $('.uslugi_popup').removeClass('active');
    $('body').removeClass('no-scroll');
}

$('.uslugi_popup__close').on('click', closeuslugiPopup);

$('.uslugi_popup__open').on('click', openuslugiPopup);


function openCity(evt, cityName) {
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("uslovia__tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("uslovia__tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}



document.getElementById('dropdown-btn').addEventListener('click', function(event) {
    event.preventDefault(); 

    var dropdownContent = document.getElementById("dropdown-content");
    dropdownContent.style.display = dropdownContent.style.display === "flex" ? "none" : "flex";
});

document.addEventListener('click', function (event) {
    var dropdownContent = document.getElementById("dropdown-content");
    var dropdownBtn = document.getElementById("dropdown-btn");

    if (!dropdownBtn.contains(event.target) && !dropdownContent.contains(event.target)) {
        dropdownContent.style.display = "none";
    }
});

var menuItems = document.querySelectorAll('#dropdown-content a');
var resultSpan = document.getElementById('selected-service');

menuItems.forEach(function(item) {
    item.addEventListener('click', function(event) {
        event.preventDefault();

        menuItems.forEach(function(el) {
            el.classList.remove('active');
        });

        item.classList.add('active');

        var selectedService = event.target.getAttribute('data-service');
        resultSpan.textContent = selectedService;

        document.getElementById('dropdown-content').style.display = 'none';
    });
});