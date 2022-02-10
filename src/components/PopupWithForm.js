import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor(popupSelector, onSubmitHanlder, onPopupShowHanlder = () => {}) {
    super(popupSelector);
    this._onSubmitHanlder = onSubmitHanlder;
    this._onPopupShowHanlder = onPopupShowHanlder;
    this._formElement = this._element.querySelector('.form');
    this._inputList = this._element.querySelectorAll('.form__input');
  }

  _getInputValues() {
    this._inputValues = {};
    this._inputList.forEach(input => {
      this._inputValues[input.name] = input.value;
    })
    return this._inputValues;
  }

  setEventListeners() {
    super.setEventListeners();
    this._formElement.addEventListener('submit', evt => {
      this._onSubmitHanlder(evt, this._getInputValues());
      this.close();
    });
  }

  close() {
    super.close();
    this._formElement.reset();
  }

  open() {
    super.open();
    this._onPopupShowHanlder();
  }

}
