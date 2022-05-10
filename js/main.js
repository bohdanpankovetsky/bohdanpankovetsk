  "use strict";
  $(document).ready(function() {
    var logoText = $(".header-logo h1").html();
    var logoTextCurrent = '';
    var counter = 0;
    var i = setInterval(function(){
        logoTextCurrent = logoTextCurrent + logoText.charAt(counter);
        $(".header-logo h1").html(logoTextCurrent);
        counter++;
        if(counter == logoText.length) {
            setTimeout(function() {
            counter = 0;
            logoTextCurrent = '';
            $(".header-logo h1").html(logoTextCurrent);
             setInterval(i);
            }, 2000);
        }
    }, 100);
    $('.portfolio-block').on('click', function() {
      let img = $(this).find('.portfolio-img img').attr('src');
      let title = $(this).find('.portfolio-info-title').html();
      $('#popupportfolio .b-popup-img img').attr('src', img);
      $('#popupportfolio .b-popup-title').html(title);
      $('.b-popup').addClass('active');
      $('html').css('overflow-y', 'hidden');
    });
    $('.b-popup-close, .b-popup .overlay').on('click', function() {
      $('.b-popup').removeClass('active');
      $('html').css('overflow-y', 'auto');
    });
    $(document).on('scroll', headerTop);
    function headerTop() {
      var st = $('html').scrollTop();
      if (st >= 700) {
        $('header').addClass('displaing');
      }
      else {
        $('header').removeClass('displaing');
      }
    }
    headerTop();
    $('.header-menu-button').on('click', function() {
      $('.header-mob-menu').addClass('active');
    });
    $('.header-mob-close, .header-menu a').on('click', function() {
      $('.header-mob-menu').removeClass('active');
    });

  });
