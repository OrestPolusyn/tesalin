new jBox('Tooltip', {
  attach: '[tip]',
  preventDefault: true,
  trigger: 'click',
  animation: 'slide',
  closeOnClick: false,
  closeButton: true,
  maxWidth: 450,
  onOpen: function () {
    this.setContent($('.tooltip-' + this.source.attr('tip')));
  },
});
