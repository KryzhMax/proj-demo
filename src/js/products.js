(() => {
  const refs = {
    openTextBtn: document.querySelectorAll('[data-text-show]'),
  };

  refs.openTextBtn.forEach(btn => {
    const parentElem = btn.closest('.products__item');
    const hiddenText = parentElem.querySelector('[data-text-hidden]');
    btn.addEventListener('click', () => {
      hiddenText.classList.toggle('is-hidden');
    });
    // console.log(parentElem);
  });
  //   refs.openTextBtn.addEventListener('click', toggleModal);
  //   refs.openModalBtnMob.addEventListener('click', toggleModal);
  //   refs.closeModalBtn.addEventListener('click', toggleModal);

  //   function toggleModal() {
  //     refs.modal.classList.toggle('backdrop--hidden');
  //   }
})();
