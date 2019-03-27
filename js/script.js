$(function () {

    $('.mobile-navicon').on('click', function () {
        $('.hamburger').toggleClass('op0');
        $('.hamb-close').toggleClass('op1');
        $('nav a').toggleClass('display-nav');
    });

});