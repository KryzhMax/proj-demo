(() => {
  const menuBtnRef = document.querySelector('[data-menu-button]');
  const mobileMenuRef = document.querySelector('[data-menu]');
  menuBtnRef.addEventListener('click', () => {
    const expanded =
      menuBtnRef.getAttribute('aria-expanded') === 'true' || false;

    menuBtnRef.classList.toggle('is-open');
    menuBtnRef.setAttribute('aria-expanded', !expanded);

    mobileMenuRef.classList.toggle('is-open');
  });

  const links = document.querySelectorAll('.site-nav__link--mobile');
  [].forEach.call(links, el => {
    el.addEventListener('click', () => {
      menuBtnRef.classList.remove('is-open');
      menuBtnRef.setAttribute('aria-expanded', false);

      mobileMenuRef.classList.remove('is-open');
    });
  });
})();
