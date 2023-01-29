import { _querySelector } from '../_config.js';
import {
  removeClassItem,
  toggleClassItem,
} from '../functions/_toggleClassItem.js';

document[_querySelector]('.burger')?.addEventListener('click', e => {
  if (!e.target.matches('.burger')) return;
  toggleClassItem('.page', 'page--menu');
  toggleClassItem('.burger', 'burger--active');
});

document[_querySelector]('span.nav__link')?.addEventListener('click', e => {
  e.target.classList.toggle('nav__link--hover');
});

window.addEventListener('resize', () => {
  if (window.innerWidth <= 992) return;

  removeClassItem('.page', 'page--menu');
  removeClassItem('.burger', 'burger--active');
});
