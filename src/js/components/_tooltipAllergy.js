new jBox('Tooltip', {
  attach: '[tip]',
  preventDefault: true,
  trigger: 'click',
  animation: 'slide',
  closeOnClick: false,
  closeButton: true,
  maxWidth: 450,
  onOpen: function () {
    this.source[0].classList.add('scale');
    this.setContent($('.tooltip-' + this.source.attr('tip')));
  },
  onClose: function () {
    this.source[0].classList.remove('scale');
  },
});
