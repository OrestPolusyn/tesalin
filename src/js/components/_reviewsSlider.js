$('.reviews ul').slick({
  dots: false,
  infinite: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 300,
  centerMode: true,
  fade: true,
  cssEase: 'linear',
  responsive: [
    {
      breakpoint: 576,
      settings: {
        dots: true,
      },
    },
  ],
});
