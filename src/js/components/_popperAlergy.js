const button = document.querySelector('.popper');
const buttonClose = document.querySelector('.popper-close');
const popper = document.querySelector('.allergy-popper');

function show() {
  popper.removeAttribute('hidden');
  instance.update(); // correctly position
}

function hide() {
  popper.setAttribute('hidden', '');
}

function onMouseenter() {
  show();
}

function onMouseleave() {
  hide();
}

hide();

const instance = createPopper(button, popper, {
  placement: 'right-end',
  modifiers: [
    {
      name: 'offset',
      options: {
        offset: [10, 0],
      },
    },
  ],
});
button.addEventListener('click', onMouseenter);
popper.addEventListener('mouseenter', onMouseenter);
buttonClose.addEventListener('click', onMouseleave);
