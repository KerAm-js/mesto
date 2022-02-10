import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
  }

  open(name, src) {
    this._element.querySelector('.modal__image').src = src;
    this._element.querySelector('.modal__image').alt = name;
    this._element.querySelector('.modal__place-name').textContent = name;
    super.open();
  }
}