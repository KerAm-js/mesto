import Popup from "./Popup";

export default class ConfirmPopup extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._submitBtn = this._element.querySelector('.form__button_type_confirm');
  }

  _onSubmit = evt => {
    evt.preventDefault();
    this._confirmAction();
    this.close();
  }

  setEventListener = action => {
    this._confirmAction = action;
    this._submitBtn.addEventListener('click', this._onSubmit);
  }

  close() {
    super.close();
    this._submitBtn.removeEventListener('click', this._onSubmit);
  }
}