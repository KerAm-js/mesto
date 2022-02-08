import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
  }

  open(src, name) {
    const imageModal = document.querySelector('.modal_type_image');
    imageModal.querySelector('.modal__image').src = src;
    imageModal.querySelector('.modal__image').alt = name;
    imageModal.querySelector('.modal__place-name').textContent = name;
    super.open();
  }
}