class FormValidator {
  constructor(settings, form) {
    this._settings = settings;
    this._form = form;
    this._submitButton = this._form.querySelector(this._settings.submitButtonSelector);
    this._inputs = Array.from(this._form.querySelectorAll(this._settings.inputSelector));
  }

  _isFormValid() {
    let isValid = true;
    const inputs = this._form.querySelectorAll(this._settings.inputSelector);
    inputs.forEach(input => !input.validity.valid ? isValid = false : null);
    return isValid;
  }

  disableSubmitBtn() {
    this._submitButton.classList.add(this._settings.inactiveButtonClass);
    this._submitButton.setAttribute('disabled', true);
  }

  enableSubmitBtn() {
    this._submitButton.classList.remove(this._settings.inactiveButtonClass);
    this._submitButton.removeAttribute('disabled');
  }

  _submitButtonValidation() {
    if (this._isFormValid()) {
      this.enableSubmitBtn();
    } else {
      this.disableSubmitBtn();
    }
  }

  _showInputError(input, validationMessage) {
    const formError = this._form.querySelector(`.${input.id}-error`);
    formError.textContent = validationMessage;
    input.classList.add(this._settings.inputErrorClass);
    formError.classList.add(this._settings.errorActiveClass);
  }

  _hideInputError(input) {
    const formError = this._form.querySelector(`.${input.id}-error`);
    input.classList.remove(this._settings.inputErrorClass);
    formError.classList.remove(this._settings.errorActiveClass);
  }

  _inputValidation(input) {
    if (!input.validity.valid) {
      this._showInputError(input, input.validationMessage);
    } else {
      this._hideInputError(input);
    }
  }

  _setInputEventListeners = () => {
    this._inputs.forEach(input => {
      input.addEventListener('input', evt => {
        this._inputValidation(evt.target); 
        this._submitButtonValidation();
      })
    })
  }

  resetValidation() {
    this.disableSubmitBtn();
    this._inputs.forEach(input => this._hideInputError(input));
  }

  enableValidation() {
    this._form.addEventListener('submit', evt => {
      evt.preventDefault();
    });
    this._setInputEventListeners();
  }
}

export default FormValidator;