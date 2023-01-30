document.querySelector('.close')?.addEventListener('click', e => {
  if (!e.target.matches('.close')) return;
  console.log(e.target.closest('.test-alert'));
  e.target.closest('.test-alert').classList.remove('test-alert--open');
});
