
  (() => {
    const refs = {
      openLocationBtn: document.querySelector('[data-location-open]'),
      closeLocationBtn: document.querySelector('[data-location-close]'),
      location: document.querySelector('[data-location]'),
      body: document.querySelector('body'),
    };

    refs.openLocationBtn.addEventListener('click', toggleModal);
    refs.closeLocationBtn.addEventListener('click', toggleModal);

      function toggleModal() {
      
      refs.location.classList.toggle('is-hidden');
      refs.body.classList.toggle('no-scroll');
    }
  })();
