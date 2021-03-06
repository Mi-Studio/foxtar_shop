$(function () {

  if ($('.trending-products__product-container').length) {
    $('.trending-products__product-container').slick({
      autoplay: true,
      autoplaySpeed: 2000,
      dots: true,
      infinite: true,
      arrows: false,
      speed: 2000,
      slidesToShow: 4,
      slidesToScroll: 4,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }


      ]
    });
  };

  if ($('.product-tabs').length) {
    $('.product-tabs').tabs();
  };

  if ($(".js-range-slider").length) {
    $(".js-range-slider").ionRangeSlider({
      type: "double",
      min: 0,
      max: 600,
      prefix: "$"
    });
  };

  $('.js-slick').slicknav({
    appendTo: '.menu',
    label: ''
  });

});