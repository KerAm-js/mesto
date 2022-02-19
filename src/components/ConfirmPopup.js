import Popup from "./Popup";

export default class ConfirmPopup extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._form = this._element.querySelector('.form');
  }

  _onSubmit = evt => {
    evt.preventDefault();
    this._confirmAction();
    this.close();
  }

  setEventListener = action => {
    this._confirmAction = action;
    this._form.addEventListener('submit', this._onSubmit);
  }

  close() {
    super.close();
    this._form.removeEventListener('submit', this._onSubmit);
  }
}