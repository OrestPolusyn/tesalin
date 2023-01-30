sr.reveal('.header,.product__content', {
  duration: 300,
  easing: 'ease',
  delay: '500',
  origin: 'top',
  mobile: false,
});

sr.reveal(
  '.hero__inner > *, .title,.test ul > *,.single > *,.single__content >*, .allergy ul > *',
  {
    duration: 300,
    distance: '20px',
    easing: 'ease',
    delay: '100',
    origin: 'top',
    interval: 200,
    mobile: false,
  }
);

sr.reveal('.recipe__grid h3,.recipe__grid li > *, .btn', {
  duration: 300,
  distance: '20px',
  easing: 'ease',
  delay: '100',
  origin: 'top',
  mobile: false,
});

sr.reveal(
  '.advantages__list > *, .product__image, .research ul>li,.tabs__switcher > *,.single__flowering ul > *, .single__list ul > *,.single__items li:not(:nth-child(2)), .articles ul>*',
  {
    duration: 400,
    distance: '40px',
    easing: 'ease',
    delay: '100',
    origin: 'left',
    interval: 200,
    mobile: false,
  }
);

sr.reveal('.single__items li:nth-child(2)', {
  duration: 400,
  distance: '40px',
  easing: 'ease',
  delay: '100',
  origin: 'rigth',
  interval: 200,
  mobile: false,
});

sr.reveal('.symptoms-banner,.reviews,.footer,.test__result, .yellow', {
  duration: 600,
  easing: 'ease',
  delay: '300',
  origin: 'center',
  mobile: false,
});

sr.reveal('.flip > *', {
  duration: 400,
  distance: '40px',
  easing: 'ease',
  delay: '100',
  origin: 'top',
  interval: 200,
  mobile: false,
});
