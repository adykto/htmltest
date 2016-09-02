$(function () {
    'use strict';

    function scrollToDiv(e) {
        var target = $(this).attr('href'),
            $target = $(target);

        if ($target.length) {
            var pos = $target.offset().top;

            $('body, html').animate({
                scrollTop: pos
            });

            e.preventDefault();
        }
    }

    function collapseMenu(e) {
        var $target = $(e.target);

        if( $target.is('a') && $target.attr('class') !== 'dropdown-toggle' ) {
            $(this).collapse('hide');
        }
    }

    $(document).on('click', 'a[href^="#"]', scrollToDiv);

    $(document).on('click','.navbar-collapse.in', collapseMenu);

    window.sr = ScrollReveal();
    sr.reveal('.scroll-reveal');
});
