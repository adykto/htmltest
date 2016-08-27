$(function() {
  'use strict';

  function toggleClass(name) {
    if($('body').hasClass(name)){
      $('body').removeClass(name)
    } else {
      $('body').addClass(name)
    }
  }

  $(document).keydown(function(e) {
    if(e.ctrlKey) {
      switch(e.keyCode) {
        case 71:
          toggleClass('grid-visible');
          break;
        case 79:
          toggleClass('grid-opaque');
          break;
      }
    }
  });

  toggleClass('grid-visible');

  $(window).scroll(function() {
    var top = $(window).scrollTop();

    if(top  > 100) {
      // do something
    }
  });

  console.log('main app loaded!');
});
