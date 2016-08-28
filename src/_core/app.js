$(function () {
    'use strict';

    var opacity = 1,
        sectionId = 'body';

    function toggleClass(name) {
        if ($('body').hasClass(name)) {
            $('body').removeClass(name)
        } else {
            $('body').addClass(name)
        }
    }

    $(document).keydown(function (e) {
        if (e.ctrlKey) {
            switch (e.keyCode) {
                case 71:
                    toggleClass('grid-visible');
                    break;

                case 79:
                    if (opacity < 1) {
                        opacity = opacity + 0.25
                    } else {
                        opacity = 0.25;
                    }

                    $('body').css('opacity', opacity);
                    break;
            }
        }
    });

    toggleClass('grid-visible');

    $(document).on('click', 'a[href^="#"]', function (e) {
        var target = $(this).attr('href');

        if ($(target).length) {
            var pos = $(target).offset().top;

            e.preventDefault();
            $('body, html').animate({scrollTop: pos});
        }
    });
});
