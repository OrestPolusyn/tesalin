new jBox('Tooltip', {
  attach: '[tip]',
  preventDefault: true,
  trigger: 'click',
  animation: 'move',
  closeButton: true,
  maxWidth: 450,
  adjustTracker: true,
  closeOnClick: 'body',
  closeOnEsc: true,
  closeOnMouseleave: true,
  position: {
    x: 'right',
    y: 'center',
  },
  outside: 'x',
  onOpen: function () {
    document.querySelectorAll('button').forEach(item => {
      item.classList.remove('scale');
    });

    this.source[0].classList.add('scale');
    this.setContent($('.tooltip-' + this.source.attr('tip')));
  },
  onClose: function () {
    this.source[0].classList.remove('scale');
  },
});
