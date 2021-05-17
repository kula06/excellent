$(function() {

	// Custom JS
  $('.reviews__slider').owlCarousel({
    items: 2,
    loop: true,
    nav: true,
    dots: false,
    margin: 47,
    touchDrag: false,
     mouseDrag: false,
     responsive: {
       300: {
         items: 1,
         nav: true,
         dots: true,
         margin: 9,
         touchDrag: true,
         mouseDrag: true,
       },
       600: {
         items: 2,
         nav: true,
         dots: true,
         margin: 22,
         touchDrag: true,
         mouseDrag: true,
       },
       900: {
         items: 2,
         nav: true,
         dots: true,
         margin: 22,
         touchDrag: true,
         mouseDrag: true,
       },
       1200: {
         items: 2,
         nav: true,
         dots: false,
         margin: 47,
       }
     }
  });

  $('.cooperate__slider').owlCarousel({
    items: 4,
    loop: true,
    nav: true,
    dots: false,
    margin: 30,
    responsive: {
      300: {
        items: 1,
        nav: true,
        dots: true,
        margin: 9,
      },
      600: {
        items: 2,
        nav: false,
        dots: true,
        margin: 24,
      },
      900: {
        items: 2,
        nav: false,
        dots: true,
        margin: 24,
      },
      1200: {
        items: 4,
        nav: true,
        dots: false,
        margin: 30,
      }
    }
  });

  $('.photos__main-slider').owlCarousel({
    items: 1,
    nav: true,
    dots: false,
  });

  $('.photos__thumbnails').owlCarousel({
    items: 4,
    nav: false,
    dots: false,
    margin: 2
  });

  $('.universities__slider').owlCarousel({
    items: 3,
    margin: 45,
    nav: true,
    dots: false
  });
/*
  $('.awards-block__items').owlCarousel({
    items: 3,
    margin: 29,
    nav: false,
    dots: false,
    responsive: {
      300: {
        items: 1,
        nav: true,
        dots: true,
        margin: 9,
      },
      600: {
        items: 2,
        nav: false,
        dots: false,
        margin: 17,
      },
      900: {
        items: 2,
        nav: false,
        dots: false,
        margin: 17,
      },
      1200: {
        items: 3,
        nav: false,
        dots: false,
        margin: 29,
      }
    }
  });
  */
/*
  $('.education-programs__program .program__info').each(function() {
    var $items = $(this).find('.info__item');
    if ($items.length) {
      var breakIndex = Math.floor($items.length * .62);
      $('<div class="info__break">').insertAfter( $items.eq(breakIndex) );
    }
  });*/

  $('.program-table__table').each(function() {
    var $header = $(this).find('.table__header');
    $header.find('.col').each(function() {
      var $rows = $header.next('.table__rows');

      $rows.find('.col:nth-child('+($(this).index()+1)+')').attr('data-label', $(this).text().trim());
    });
  });

  // scroll
  $(window).resize(function() {
    $('.countries__list, .program__info .info__list').mCustomScrollbar('destroy');

    if ($(this).width() >= 1200) {
      $('.countries__list').mCustomScrollbar({
        scrollButtons: {
          enable: false
        }
      });

      $('.program__info .info__list').mCustomScrollbar({
        scrollButtons: {
          enable: true
        }
      });
    }
  })


  $('.table__rows.rows--scroll').mCustomScrollbar({
    scrollButtons: {
      enable: false
    }
  });

  $(window).resize();


});
