// Выплывающее окно навигации
let navBtn = document.querySelector('.navbar__btn'),
    navList = document.querySelector('.navbar__list'),
    count = 0;

navBtn.onclick = () => {
    navList.style.transform = "translateY(0px)";
    if (count % 2) {
        navList.style.transform = "translateY(-160px)";
    }
    count++;
}

//Слайдер

$('.slick').slick({
    arrows: false,
    dots: true,
    dotsClass: 'slick-dots slider__dots',
  })

//Скролл

$("a[href^='#']").click(function () {
    var _href = $(this).attr("href");
    $("html, body").animate({ scrollTop: $(_href).offset().top -45 + "px"});
    return false;
});