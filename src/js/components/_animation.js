sr.reveal('.header,.product__content', {
  duration: 300,
  easing: 'ease',
  delay: '500',
  origin: 'top',
  mobile: false,
});

sr.reveal(
  '.hero__inner > *, .advantages .title, .symptoms .title,.research .title,.test ul > *,, .allergy ul',
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

sr.reveal(
  '.recipe__grid h3,.recipe__grid li > *, .btn,.advantages__list > *, .articles ul>*,.single__list ul > *, .single__items > *,.single__content > *, .single__flowering ul > *',
  {
    duration: 800,
    distance: '20px',
    easing: 'ease',
    delay: '100',
    origin: 'top',
    mobile: false,
  }
);

sr.reveal('.product__image, .research ul>li,.tabs__switcher > *', {
  duration: 400,
  distance: '40px',
  easing: 'ease',
  delay: '100',
  origin: 'left',
  interval: 200,
  mobile: false,
});

sr.reveal('.symptoms-banner,.reviews,.footer,.test__result', {
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
