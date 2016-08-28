$(function () {
    'use strict';

    var guideLines = [],
        lineX = null,
        lineY = null,
        lineLabel = null,
        opacity = 1,
        $body = $('body'),
        $document = $('.document');

    function toggleClass(name) {
        if ($body.hasClass(name)) {
            $body.removeClass(name)
        } else {
            $body.addClass(name)
        }
    }

    function toggleOpacity() {
        if (opacity < 1) {
            opacity = opacity + 0.25
        } else {
            opacity = 0.25;
        }

        if(opacity >= 1) {
            $document.removeClass('grid-opaque');
            $document.css('opacity', '');
        } else {
            if (!$document.hasClass('grid-opaque')) {
                $document.addClass('grid-opaque')
            }

            $document.css('opacity', opacity);
        }
    }

    function hideGuides() {
        if(lineLabel) lineLabel.remove();
        if(lineX) lineX.remove();
        if(lineY) lineY.remove();

        lineLabel = null;
        lineX = null;
        lineY = null;
    }

    function clearGuides() {
        $('.guide-saved').remove();
        guideLines = [];
        localStorage["guide-lines"] = [];
        console.log($('.guide-saved'))
    }

    function createGuide(x, y) {
        var height = $document.height(),
            width = $document.width(),
            $guide = [
                $('<div>').addClass('guide-lineX guide-saved'),
                $('<div>').addClass('guide-lineY guide-saved'),
                $('<div>').addClass('guide-lineLabel guide-saved')
            ];

        $body.append($guide[0]);
        $body.append($guide[1]);
        $body.append($guide[2]);

        $guide[0].css({'top': y + 'px', 'width': width});
        $guide[1].css({'left': x + 'px', 'height': height});
        $guide[2].css({'top': y + 'px', 'left': x}).text(x + ',' + y);
    }

    $(document).keydown(function (e) {
        if (e.ctrlKey) {
            switch (e.keyCode) {
                case 71:
                    toggleClass('grid-luminosity');
                    break;

                case 75:
                    clearGuides();
                    break;

                case 76:
                    toggleClass('grid-visible');
                    break;

                case 79:
                    toggleOpacity();
                    break;
            }
        }
    });

    $(document).on('keyup keydown', function(e){
        if(e.altKey) {
            $body.css('cursor', 'crosshair');
        } else {
            $body.css('cursor', 'default');
        }
    });

    $(document).on('mousemove', function(e){
        if(e.altKey) {
            if(lineLabel === null) {

                lineX = $('<div>').addClass('guide-lineX');
                lineY = $('<div>').addClass('guide-lineY');
                lineLabel = $('<div>').addClass('guide-lineLabel');

                $body.append(lineX);
                $body.append(lineY);
                $body.append(lineLabel);
            }

            var height = $document.height(),
                width = $document.width();

            lineLabel.css({'top': e.pageY + 'px', 'left': e.pageX}).text(e.pageX + ',' + e.pageY);
            lineX.css({'top': e.pageY + 'px', 'width': width});
            lineY.css({'left': e.pageX + 'px', 'height': height});
        } else {
            if(lineLabel !== null) {
                hideGuides();
            }
        }
    });

    $(document).on('click', function (e) {
        if(e.altKey) {
            createGuide(e.pageX, e.pageY);
            guideLines.push([e.pageX, e.pageY]);
            localStorage["guide-lines"] = JSON.stringify(guideLines);
        }
    });

    $(window).on('resize', function(e){
        if(lineX !== null) {
            lineX.css('width', $document.width());
            lineY.css('height', $document.height());
        }
    });

    console.log('[ALT+Click] Toggle add/remove guide lines, [CTRL+K] Clear all guides');
    console.log('[CTRL+G] Toggles grayscale ON/OFF, [CTRL+L] Toggles layout ON/OFF, [CTRL+O] Toggles opacity +25%');

    toggleClass('grid-lines');

    var cachedGuides = localStorage.getItem("guide-lines");
    if(cachedGuides && cachedGuides.length > 0) {
        guideLines = JSON.parse(cachedGuides) || [];

        $.each(guideLines, function(index, guide){
            console.log(guide)
            createGuide(guide[0], guide[1]);
        })
    }
});
