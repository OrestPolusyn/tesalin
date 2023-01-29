new jBox('Tooltip', {
  attach: '[tip]',
  preventDefault: true,
  trigger: 'click',
  animation: 'move',
  width: 450,
  closeOnClick: false,
  closeButton: true,
  maxWidth: 450,
  adjustTracker: true,
  closeOnEsc: true,
  position: {
    x: 'right',
    y: 'center',
  },
  outside: 'x',
  pointer: 'left:50',
  onOpen: function () {
    this.source[0].classList.add('scale');
    this.setContent($('.tooltip-' + this.source.attr('tip')));
  },
  onClose: function () {
    this.source[0].classList.remove('scale');
  },
});
