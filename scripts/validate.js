const showInputError = (selectors, formElement, input, validationMessage) => {
  const formError = formElement.querySelector(`.${input.id}-error`);
  const submitBtn = formElement.querySelector(selectors.submitButtonSelector);
  submitBtn.classList.add(selectors.inactiveButtonClass);
  submitBtn.setAttribute('disabled', true);
  formError.textContent = validationMessage;
  input.classList.add(selectors.inputErrorClass);
  formError.classList.add(selectors.errorActiveClass);
}

const hideInputError = (selectors, formElement, input) => {
  const formError = formElement.querySelector(`.${input.id}-error`);
  const submitBtn = formElement.querySelector(selectors.submitButtonSelector);
  submitBtn.classList.remove(selectors.inactiveButtonClass);
  submitBtn.removeAttribute('disabled');
  input.classList.remove(selectors.inputErrorClass);
  formError.classList.remove(selectors.errorActiveClass);
}

const inputValidation = (selectors, formElement, input) => {
  if (!input.validity.valid) {
    showInputError(selectors, formElement, input, input.validationMessage);
  } else {
    hideInputError(selectors, formElement, input);
  }
}

const isFormValid = (selectors, form) => {
  let isValid = true;
  const inputs = form.querySelectorAll(selectors.inputSelector);
  inputs.forEach(input => !input.validity.valid ? isValid = false : null);
  return isValid;
}

const disableSubmitBtn = (selectors, form) => {
  const submitBtn = form.querySelector(selectors.submitButtonSelector);
  submitBtn.classList.add(selectors.inactiveButtonClass);
  submitBtn.setAttribute('disabled', true);
}

const enableSubmitBtn = (selectors, form) => {
  const submitBtn = form.querySelector(selectors.submitButtonSelector);
  submitBtn.classList.remove(selectors.inactiveButtonClass);
  submitBtn.removeAttribute('disabled');
}

const submitButtonValidation = (selectors, form) => {
  if (isFormValid(selectors, form)) {
    enableSubmitBtn(selectors, form);
  } else {
    disableSubmitBtn(selectors, form);
  }
}

const setInputEventListeners = (selectors, formElement) => {
  const inputs = Array.from(formElement.querySelectorAll(selectors.inputSelector));
  inputs.forEach(input => {
    input.addEventListener('input', evt => {
      inputValidation(selectors, formElement, evt.target); 
      submitButtonValidation(selectors, formElement);
    })
  })
}

const enableValidation = (selectors) => {
  const forms = Array.from(document.querySelectorAll(selectors.formSelector));
  forms.forEach(form => {
    form.addEventListener('submit', evt => {
      evt.preventDefault();
    });
    setInputEventListeners(selectors, form);
  })
}

enableValidation({
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.form__button[type=submit]',
  inactiveButtonClass: 'form__button_disabled',
  inputErrorClass: 'form__input_error',
  errorClass: '.form__error',
  errorActiveClass: 'form__error_active',
});