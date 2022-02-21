import Popup from "./Popup";

export default class ConfirmPopup extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._submitBtn = this._element.querySelector('.form__button_type_confirm');
  }

  _onSubmit = evt => {
    evt.preventDefault();
    this._confirmAction()
      .then(this.close.bind(this))
      .catch(err => console.log(err));
  }

  setEventListeners() {
    super.setEventListeners();
    this._submitBtn.addEventListener('click', this._onSubmit);
  }

  setAction = action => {
    console.log(action);
    this._confirmAction = action;
  }
}