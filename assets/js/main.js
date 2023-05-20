(function ($)
  { "use strict"
  

/* 1. Proloder */
    $(window).on('load', function () {
      $('#preloader-active').delay(450).fadeOut('slow');
      $('body').delay(450).css({
        'overflow': 'visible'
      });
    });

/* 2. sticky And Scroll UP */
    $(window).on('scroll', function () {
      var scroll = $(window).scrollTop();
      if (scroll < 250) {
        $(".header-sticky").removeClass("sticky-bar");
        $('#back-top').fadeOut(500);
      } else {
        $(".header-sticky").addClass("sticky-bar");
        $('#back-top').fadeIn(500);
      }
    });

  // Scroll Up
    $('#back-top a').on("click", function () {
      $('body,html').animate({
        scrollTop: 0
      }, 800);
      return false;
    });
  

/* 3. slick Nav */
// mobile_menu
    var menu = $('ul#navigation');
    if(menu.length){
      menu.slicknav({
        prependTo: ".mobile_menu",
        closedSymbol: '+',
        openedSymbol:'-'
      });
    };

    /* COUNTER */
    const counters = document.querySelectorAll('.number');
    counters.forEach((number) => {
        number.innerHTML = '0';
      const updateCounter = () => {
        const target = + number.getAttribute('data-number');
        const c = + number.innerHTML;
   
       
        var increment;
          increment=Math.max((Math.trunc(target/500)), 1);
        
        if (c < target) {
          number.innerHTML = c + increment;
            if(target>10){
              setTimeout(updateCounter, 1);
            }else{
              setTimeout(updateCounter, 300);
            }
            
            
        }else {
          number.innerText = target;
        }
        
      }
      updateCounter();
    })
    

})(jQuery);

