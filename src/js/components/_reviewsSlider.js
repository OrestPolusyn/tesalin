$('.reviews ul').slick({
  dots: false,
  infinite: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 300,
  responsive: [
    {
      breakpoint: 576,
      settings: {
        dots: true,
      },
    },
  ],
});
