const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    initialSlide: 0,
    loopedSlides: 6,
    spaceBetween: 20,
    width: 274,
    breakpoints: {
      // スライドの表示枚数：500px以上の場合
      768: {
        loopedSlides: 6,
        spaceBetween: 40,
        width: 400,
      }
    },

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
  });

jQuery('.qa-box__q').on('click', function() {
  jQuery(this).next().slideToggle();
  jQuery(this).children('.qa-box__icon').toggleClass('is-open')
});

jQuery('.drawer-icon').on('click', function(e) {
  e.preventDefault();

  jQuery('.drawer-background').toggleClass('is-active');
  jQuery('.drawer-icon').toggleClass('is-active');
  jQuery('.drawer-content').toggleClass('is-active');

  return false;
});

jQuery('.drawer-content__item a').on('click', function() {
  jQuery('.drawer-background').removeClass('is-active');
  jQuery('.drawer-icon').removeClass('is-active');
  jQuery('.drawer-content').removeClass('is-active');
});

jQuery('.drawer-content').on('click', function() {
  jQuery('.drawer-background').removeClass('is-active');
  jQuery('.drawer-icon').removeClass('is-active');
  jQuery('.drawer-content').removeClass('is-active');
});

jQuery('a[href^="#"]').on('click', function() {

  var header = jQuery('.header').innerHeight();
  var id = jQuery(this).attr('href');
  var position = 0;
  if ( id != '#') {
      position = jQuery(id).offset().top - header;
  }
  jQuery('html,body').animate({
      scrollTop: position
  },
  300);
});

jQuery(window).on('scroll', function() {
  if ( 100 < jQuery(this).scrollTop() ) {
    jQuery('.to-top').addClass('is-show');
  } else {
    jQuery('.to-top').removeClass('is-show');
  }
});

jQuery('.header__nav li a').on('click', function() {
  jQuery('.header__nav li a').removeClass('is-active');
  jQuery(this).addClass('is-active');
});

let $submit = $('#js-submit')
$( '#js-form input, #js-form textarea').on( 'change', function() {
  if (
    $( '#js-form input[type="text"]').val() !== "" &&
    $( '#js-form input[type="email"]').val() !== "" &&
    $( '#js-form input[type="checkbox"]').prop( 'checked' ) === true
  ) {
    $submit.prop('disabled', false)
  } else {
    $submit.prop('disabled', true)
  }
});

new WOW().init();
