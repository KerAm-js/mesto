import { submitButtonSelector } from '../utils/constants.js';
import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor(popupSelector, onSubmitHanlder, onPopupShowHanlder = () => {}) {
    super(popupSelector);
    this._onSubmitHanlder = onSubmitHanlder;
    this._onPopupShowHanlder = onPopupShowHanlder;
    this._formElement = this._element.querySelector('.form');
    this._submitBtn = this._element.querySelector(submitButtonSelector);
    this._submitBtnDefaultText = this._submitBtn.textContent;
    this._inputList = this._element.querySelectorAll('.form__input');
  }

  _getInputValues() {
    this._inputValues = {};
    this._inputList.forEach(input => {
      this._inputValues[input.name] = input.value;
    })
    return this._inputValues;
  }

  _setLoader = isLoading => {
    this._submitBtn.textContent = isLoading ? 'Сохранение...' : this._submitBtnDefaultText;
  }

  setEventListeners() {
    super.setEventListeners();
    this._formElement.addEventListener('submit', evt => {
      evt.preventDefault();
      this._setLoader(true);
      this._onSubmitHanlder(this._getInputValues()).finally(() => {
        this.close();
        this._setLoader(false);
      });
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
