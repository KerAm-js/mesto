import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._imageElement = this._element.querySelector('.modal__image');
    this._nameElement = this._element.querySelector('.modal__place-name');
  }

  open(name, src) {
    this._imageElement.src = src;
    this._imageElement.alt = name;
    this._nameElement.textContent = name;
    super.open();
  }
}