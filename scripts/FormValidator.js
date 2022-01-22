class FormValidator {
  constructor(settings, form) {
    this._settings = settings;
    this._form = form;
  }

  _isFormValid() {
    let isValid = true;
    const inputs = this._form.querySelectorAll(this._settings.inputSelector);
    inputs.forEach(input => !input.validity.valid ? isValid = false : null);
    return isValid;
  }

  _disableSubmitBtn() {
    const submitBtn = this._form.querySelector(this._settings.submitButtonSelector);
    submitBtn.classList.add(this._settings.inactiveButtonClass);
    submitBtn.setAttribute('disabled', true);
  }

  _enableSubmitBtn() {
    const submitBtn = this._form.querySelector(this._settings.submitButtonSelector);
    submitBtn.classList.remove(this._settings.inactiveButtonClass);
    submitBtn.removeAttribute('disabled');
  }

  _submitButtonValidation() {
    if (this._isFormValid()) {
      this._enableSubmitBtn();
    } else {
      this._disableSubmitBtn();
    }
  }

  _showInputError(input, validationMessage) {
    const formError = this._form.querySelector(`.${input.id}-error`);
    const submitBtn = this._form.querySelector(this._settings.submitButtonSelector);
    submitBtn.classList.add(this._settings.inactiveButtonClass);
    submitBtn.setAttribute('disabled', true);
    formError.textContent = validationMessage;
    input.classList.add(this._settings.inputErrorClass);
    formError.classList.add(this._settings.errorActiveClass);
  }
  
  _hideInputError(input) {
    const formError = this._form.querySelector(`.${input.id}-error`);
    const submitBtn = this._form.querySelector(this._settings.submitButtonSelector);
    submitBtn.classList.remove(this._settings.inactiveButtonClass);
    submitBtn.removeAttribute('disabled');
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
    const inputs = Array.from(this._form.querySelectorAll(this._settings.inputSelector));
    inputs.forEach(input => {
      input.addEventListener('input', evt => {
        this._inputValidation(evt.target); 
        this._submitButtonValidation();
      })
    })
  }

  enableValidation() {
    this._form.addEventListener('submit', evt => {
      evt.preventDefault();
      if(Array.from(this._form.classList).includes('form_type_place')) {
        this._disableSubmitBtn();
      }
    });
    this._setInputEventListeners();
  }
}

export default FormValidator;