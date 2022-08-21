$(function () {

    $('.burger__menu').on('click', function () {
        $('.header__list').toggleClass('header__list--active');
    });

});

$('.burger__menu').click(function () {
    $('.burger__menu:hover div:nth-child(1)').toggleClass('burger__animation-first');
    $('.burger__menu:hover div:nth-child(2)').toggleClass('burger__animation-second');
    $('.burger__menu:hover div:nth-child(3)').toggleClass('burger__animation-third');
});


new WOW().init();