//////////// for burger menu ////////////////////
toggleMenu = document.querySelector('.togglemenu');
body = document.querySelector('body');
header = document.querySelector('.header');

toggleMenu.addEventListener('click', function () {
    body.classList.toggle('active');
});

window.onscroll = () => {
    this.scrollY > 20
        ? header.classList.add('sticky')
        : header.classList.remove('sticky');
};

///////////// for active color //////////////
let productColor = document.querySelectorAll(
    '.product__info__color__container span'
);
productColor.forEach((element) => {
    element.addEventListener('click', function () {
        productColor.forEach((nav) => nav.classList.remove('activecolor'));
        this.classList.add('activecolor');
    });
});

/////////   for the slider  /////////////////////////////
let slideIndex = 1;
let colorItem = document.querySelectorAll(
    '.product__info__color__container span'
);
showSlides(slideIndex);

//for previous and next button
function plusSlides(n) {
    showSlides((slideIndex += n));
}

//image controls
function currentSlide(n) {
    showSlides((slideIndex = n));
}

function showSlides(n) {
    let i;
    let productItem = document.getElementsByClassName('product__slider__item');
    let galleryImg = document.getElementsByClassName('product__gallery__img');
    if (n > productItem.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = productItem.length;
    }
    for (i = 0; i < productItem.length; i++) {
        productItem[i].style.display = 'none';
    }
    for (i = 0; i < galleryImg.length; i++) {
        galleryImg[i].className = galleryImg[i].className.replace(
            ' active',
            ''
        );
    }
    productItem[slideIndex - 1].style.display = 'block';
    galleryImg[slideIndex - 1].className += ' active';
    // captionText.innerHTML = dots[slideIndex - 1].alt;
}

///////////////////////////////////////////////////////////
// pour gérer l'accordion du faq
let nb;
const skillsContainer = document.getElementsByClassName('detail__content'),
    skillsHeader = document.querySelectorAll('.detail__question');

function toggleSkills() {
    let itemClass = this.parentNode.className;
    for (nb = 0; nb < skillsContainer.length; nb++) {
        skillsContainer[nb].className = 'detail__content detail__close';
    }
    if (itemClass === 'detail__content detail__close') {
        this.parentNode.className = 'detail__content detail__open';
    }
}
skillsHeader.forEach((el) => {
    el.addEventListener('click', toggleSkills);
});
