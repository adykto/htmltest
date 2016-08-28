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

    $(window).scroll(function () {
        var top = $(window).scrollTop(),
            $sections = [];

        $sections = $('#menu .nav a');

        if (top > 100) {
            //sdfsdf sdf
        }
    });
});
