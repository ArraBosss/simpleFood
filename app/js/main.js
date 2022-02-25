$(function () {

  $('.filter-price__input').ionRangeSlider({
    type: "double",
    onStart: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
    onChange: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
  })

  $('.slider-reviews__list').slick({
    dots: true,
    arrows: true,
    appendArrows: '.slider-reviews__nav',
    appendDots: '.slider-reviews__dots',
    prevArrow: '<button class="slide-arrow prev-arrow"><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="20" cy="20" r="18.5" fill="white" fill-opacity="0.01" stroke="#C2C2C2" stroke-width="3"/><path d="M21.1968 29.0492L13.4508 21.3033C12.8497 20.699 12.8497 19.7231 13.4508 19.1189L21.1968 11.3729C21.7761 10.8757 22.6328 10.8757 23.2122 11.3729C23.8614 11.9291 23.9372 12.9082 23.3811 13.5573L16.7351 20.2033L23.3811 26.8648C23.9822 27.469 23.9822 28.445 23.3811 29.0492C22.7769 29.6503 21.8009 29.6503 21.1968 29.0492Z" fill="#C2C2C2"/></svg></button>',

    nextArrow: '<button class="slide-arrow next-arrow"><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="20" cy="20" r="18.5" fill="white" fill-opacity="0.01" stroke="#C2C2C2" stroke-width="3"/><path d="M18.6352 11.4508L26.3811 19.1967C26.9822 19.801 26.9822 20.7769 26.3811 21.3811L18.6352 29.1271C18.0558 29.6243 17.1991 29.6243 16.6197 29.1271C15.9706 28.5709 15.8947 27.5918 16.4509 26.9427L23.0968 20.2967L16.4508 13.6352C15.8497 13.031 15.8497 12.055 16.4508 11.4508C17.055 10.8497 18.031 10.8497 18.6352 11.4508Z" fill="#C2C2C2"/></svg></button>',
    responsive: [{
      breakpoint: 560,
      settings: {
        dots: false,
      }
    }, ]
  });

  $('.top-restaurants__slider').slick({
    dots: true,
    arrows: false,
  });

  $('.interesting__slider').slick({
    slidesToShow: 5,
    slidesToScroll: 5,
    dots: false,
    arrows: true,
    appendArrows: '.slider-reviews__nav',

    prevArrow: '<button class="slide-arrow prev-arrow"><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="20" cy="20" r="18.5" fill="white" fill-opacity="0.01" stroke="#C2C2C2" stroke-width="3"/><path d="M21.1968 29.0492L13.4508 21.3033C12.8497 20.699 12.8497 19.7231 13.4508 19.1189L21.1968 11.3729C21.7761 10.8757 22.6328 10.8757 23.2122 11.3729C23.8614 11.9291 23.9372 12.9082 23.3811 13.5573L16.7351 20.2033L23.3811 26.8648C23.9822 27.469 23.9822 28.445 23.3811 29.0492C22.7769 29.6503 21.8009 29.6503 21.1968 29.0492Z" fill="#C2C2C2"/></svg></button>',

    nextArrow: '<button class="slide-arrow next-arrow"><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="20" cy="20" r="18.5" fill="white" fill-opacity="0.01" stroke="#C2C2C2" stroke-width="3"/><path d="M18.6352 11.4508L26.3811 19.1967C26.9822 19.801 26.9822 20.7769 26.3811 21.3811L18.6352 29.1271C18.0558 29.6243 17.1991 29.6243 16.6197 29.1271C15.9706 28.5709 15.8947 27.5918 16.4509 26.9427L23.0968 20.2967L16.4508 13.6352C15.8497 13.031 15.8497 12.055 16.4508 11.4508C17.055 10.8497 18.031 10.8497 18.6352 11.4508Z" fill="#C2C2C2"/></svg></button>',

    responsive: [{
      breakpoint: 1230,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: true
      }
    },
    {
      breakpoint: 560,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }
  ]
  });

  // $('.product__list').slick({

  //   dots: false,
  //   arrows: true,
  //   appendArrows: '.product__nav',
  //   prevArrow: '<button class="slide-arrow prev-arrow"><svg width="19" height="32" viewBox="0 0 19 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.384665 15.2262L16.398 0.839919C16.9234 0.324519 17.7756 0.324519 18.3011 0.839919C18.8266 1.35528 18.8266 2.19151 18.3011 2.70691L3.25336 16.2267L18.2998 29.7465C18.8253 30.2619 18.8253 31.0981 18.2998 31.6135C17.7743 32.1288 16.9221 32.1288 16.3967 31.6135L0.38333 17.2273C0.103261 16.9525 -0.0168143 16.5883 0.00189296 16.228C-0.0155212 15.8665 0.104514 15.5023 0.384665 15.2262Z" fill="#363853"/></svg></button>',

  //   nextArrow: '<button class="slide-arrow next-arrow"><svg width="19" height="32" viewBox="0 0 19 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.3105 14.7728L2.29726 0.38655C1.77178 -0.12885 0.919578 -0.12885 0.394105 0.38655C-0.131368 0.90191 -0.131369 1.73814 0.394104 2.25354L15.4418 15.7734L0.395433 29.2931C-0.130041 29.8085 -0.130041 30.6447 0.395432 31.1601C0.920905 31.6755 1.77311 31.6755 2.29854 31.1601L18.3119 16.7739C18.5919 16.4991 18.712 16.1349 18.6933 15.7747C18.7107 15.4131 18.5907 15.0489 18.3105 14.7728Z" fill="#363853"/></svg></button>'
  // });

  $('.filter-btn, .filter-aside__close').on('click', function () {
    toggleFilter();
  });

  $('.overlay-aside').on('click', function (event) {
    if (this == event.target) {
      toggleFilter();
    }
  });

  function toggleFilter() {
    $('body').toggleClass('lock');
    $('.filter-aside, .overlay-aside').toggleClass('active');
  }

  $('.burger, .close').on('click', function () {
    toggleSideNav();
  });

  $('.overlay').on('click', function (event) {
    if (this == event.target) {
      toggleSideNav();
    }
  });

  function toggleSideNav() {
    $('body').toggleClass('lock');
    $('.burger, .burger__line, .overlay, .side-nav').toggleClass('active');
  }

  $('.catalog__sort-filter, .product__num').styler();

  $(".product__star").rateYo({
    starWidth: "16px",
    spacing: "6px",
    normalFill: "#C1C1C1",
    ratedFill: "#FFB800",
    readOnly: true
  });

  $(".review-form__star").rateYo({
    starWidth: "16px",
    spacing: "6px",
    normalFill: "#C1C1C1",
    ratedFill: "#FFB800",
    fullStar: true
  });

  $('.product-tabs__link').on('click', function (e) {
    e.preventDefault();
    $('.product-tabs__link').removeClass('product-tabs__link--active');
    $(this).addClass('product-tabs__link--active');

    $('.product-tabs__item').removeClass('product-tabs__item--active');
    $($(this).attr('href')).addClass('product-tabs__item--active');

  })

  const mainCarousel = new Carousel(document.querySelector("#mainCarousel"), {
    Dots: false,
  });

  Fancybox.bind('[data-fancybox="gallery"]', {
  Thumbs: false,
  Toolbar: false,

  closeButton: "top",

  Carousel: {
    Dots: true,
    on: {
      change: (that) => {
        mainCarousel.slideTo(mainCarousel.findPageForSlide(that.page), {
          friction: 0,
        });
      },
    },
  },
});

});

var mixer = mixitup('.popular__menu');