$(function () {
    'use strict';

    $(document).on('click', 'a[href^="#"]', function (e) {
        var target = $(this).attr('href');

        if ($(target).length) {
            var pos = $(target).offset().top;

            e.preventDefault();
            $('body, html').animate({scrollTop: pos});
        }
    });

    $(document).on('click','.navbar-collapse.in',function(e) {
        if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
            $(this).collapse('hide');
        }
    });

    window.sr = ScrollReveal();
    sr.reveal('.scroll-reveal');
});
