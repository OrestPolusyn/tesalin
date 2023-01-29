new jBox('Tooltip', {
  attach: '[tip]',
  preventDefault: true,
  trigger: 'click',
  animation: 'pulse',
  closeOnClick: false,
  closeButton: true,
  maxWidth: 450,
  onOpen: function () {
    this.setContent($('.tooltip-' + this.source.attr('tip')));
  },
});
