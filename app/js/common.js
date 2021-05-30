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
    dots: false,
    touchDrag: false,
    mouseDrag: false,
    loop: true,
    responsive: {
      300: {
        items: 1,
        nav: true,
        dots: true,
        margin: 9,
        touchDrag: true,
        mouseDrag: true
      },
      600: {
        items: 2,
        nav: false,
        dots: false,
        margin: 22,
        touchDrag: true,
        mouseDrag: true
      },
      900: {
        items: 2,
        nav: false,
        dots: false,
        margin: 22,
        touchDrag: true,
        mouseDrag: true
      },
      1200: {
        items: 3,
        nav: true,
        dots: false,
        margin: 45,
      }
    }
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

  window.globalRedirect = '';

window.openPopup = function(el) {
  closePopups(false);
  //closeMenu();
  $('.cover-form').show();
  $(el).show().css('display', 'inline-block');

  $(window).resize();

  $('html, body').css({
    overflow: 'hidden'
  });

  $('.popup .awards__list').mCustomScrollbar({
    scrollButtons: {
      enable: false
    }
  });
}

window.closePopups = function(cover) {
  $('.popup .awards__list').mCustomScrollbar('destroy');
  if (cover == true) {
    $('.cover-form').removeClass('view');
    $('html, body').css({
      overflow: ''
    });

    globalRedirect = '';

    $('.cover-form').hide();
    $('.cover-form .popup').hide()
  } else {
    $('.cover-form .popup').removeClass('view').hide();
  }
}

$(document).on('click', '.openPopup-li', function (e) {
  var $el = $(this).find('a');
  if ($el.length) {
    e.preventDefault();
    openPopupByTarget($el.get(0));
  }
});

function openPopupByTarget(target) {
  if ($(target).is('[data-redirect]')) {
    globalRedirect = $(target).data('redirect');
  }

  var target_selector = false;
  if ($(target).is('[data-target]'))
    target_selector = $(target).attr('data-target');
  if ($(target).is('[href]'))
    target_selector = $(target).attr('href');

    if (target_selector) {
      openPopup( target_selector );

      if ($(target).is('[data-slide]')) {
        $( target_selector ).find('.owl-carousel').trigger('to.owl.carousel', parseInt($(target).attr('data-slide')))
      }

      if ($(target).is('[data-tab]')) {
        $( target_selector ).find('.tab').eq( $(target).attr('data-tab') ).click();
      }
    }

}

$(document).on('click', '.openPopup', function(e) {
  e.preventDefault();
  openPopupByTarget(this);
});
$(document).on('click', '.cover-form, .cover-form .close, .cover-form .close-all', function(e) {
  if (e.target != this)
    return;
  closePopups(true);
  return false;
});

$(document).on('click', '.close-all-popups', function() {
  closePopups(true);
});

$(document).keyup(function(e) {
  if (e.keyCode === 27) {
    closePopups(true);
  }
});

  $('.tabs__tab, .price__tab, .line-tabs__tab').click(function(e) {
    e.preventDefault();

    $(this).addClass('active').siblings().removeClass('active').each(function() {
      $( $(this).attr('href') ).hide();
    });

    $( $(this).attr('href') ).show();
  }).filter(':first-child').click();

  $(document).on('click', '[data-toggle-target]', function(e) {
    e.preventDefault();

    $( $(this).attr('data-toggle-target') ).toggleClass('view-all');

    var currentText = $(this).text();
    $(this).text( $(this).attr('data-toggle-text') );
    $(this).attr('data-toggle-text', currentText);
    $(this).toggleClass('toggled');
  });

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
  });


  $('.table__rows.rows--scroll').mCustomScrollbar({
    scrollButtons: {
      enable: false
    }
  });

  $(document).on('click', '.program-menu a', function(e) {
    e.preventDefault();

    $('html,body').animate({
      scrollTop: $( $(this).attr('href') ).offset().top - $('.program-menu').outerHeight()
    }, 'fast');
  });

  function uid() {
    let a = new Uint32Array(3);
    window.crypto.getRandomValues(a);

    return (performance.now().toString(36)+Array.from(a).map(A => A.toString(36)).join("")).replace(/\./g,"");
  };

  $('[data-program-menu]').each(function() {
    var id = uid();
    $(this).attr('id', id);
    $('.program-menu .menu').append(
      '<li><a href="#'+id+'">'+$(this).attr('data-program-menu')+'</a></li>'
    );
  });

  $(".js-range-slider").each(function(index, slider) {
    $(slider).ionRangeSlider({
          type: "double",
          grid: false,
          prefix: "",
          onChange: function(e) {
            var $range = $(slider).parent().find('.range-inputs');
            $range.find('[data-type="from"]').val(e.from);
            $range.find('[data-type="to"]').val(e.to);
          }
      });
  });
  $('.range-inputs input').change(function() {
    var slider = $(this).closest('.filter__row').find('.js-range-slider').data('ionRangeSlider');
    var dir = $(this).attr('data-type');
    slider.update({
      [dir]: $(this).val()
    });
  });

  $(window).scroll(function() {
    var scrollTop = $(this).scrollTop();
    var windowHeight = $(this).height();
    var menuHeight = $('.program-menu').outerHeight();

    var $pMenu = $('.program-menu');

    if ($pMenu.length) {

    } else {
      var $target = $('.header');

      $target.removeClass('fixed');
      $('body').css({
        paddingTop: ''
      });

      if (scrollTop > 20) {
        $('body').css({
          paddingTop: $target.outerHeight()
        });
        $target.addClass('fixed');
      }
    }

    if ($pMenu.length) {
      if (scrollTop > 20) {
        $pMenu.addClass('view');
      } else {
        $pMenu.removeClass('view');
      }
    }

    $pMenu.find('li').removeClass('active').each(function() {
      var href = $(this).find('a').attr('href');
      if (href == '#')
        return;
      var $target = $( href );
      if ($target.position().top+$target.outerHeight() > scrollTop+menuHeight) {
        $(this).addClass('active'); return false;
      }
    });
  });

  $(window).resize();
  $(window).scroll();

});
