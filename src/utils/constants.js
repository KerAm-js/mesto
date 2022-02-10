import arkhyz from '../images/arkhyz.jpeg';
import chelyabinskOblast from '../images/chelyabinsk-oblast.jpeg';
import ivanovo from '../images/ivanovo.jpeg';
import kamchatka from '../images/kamchatka.jpeg';
import kholomogorskyRayon from '../images/kholmogorsky-rayon.jpeg';
import baikal from '../images/baikal.jpeg';

// const arkhyz = new URL('https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg', import.meta.url);
// const chelyabinskOblast = new URL('../images/chelyabinsk-oblast.jpeg', import.meta.url);
// const ivanovo = new URL('../images/ivanovo.jpeg', import.meta.url);
// const  = new URL(, import.meta.url);
// const  = new URL(, import.meta.url);
// const  = new URL(, import.meta.url);

export const profilePopupSelector = '.modal_type_profile';
export const newPlacePopupSelector = '.modal_type_place';
export const usernameSelector = '.profile__username';
export const descriptionSelector = '.profile__about';
export const imagePopupSelector = '.modal_type_image';
export const elementsContainerSelector = '.elements__list';

export const validationConfig = {
  inputSelector: '.form__input',
  submitButtonSelector: '.form__button[type=submit]',
  inactiveButtonClass: 'form__button_disabled',
  inputErrorClass: 'form__input_error',
  errorClass: '.form__error',
  errorActiveClass: 'form__error_active',
}

export const initialCards = [
  {
    name: 'Архыз',
    link: arkhyz
  },
  {
    name: 'Челябинская область',
    link: chelyabinskOblast
  },
  {
    name: 'Иваново',
    link: ivanovo
  },
  {
    name: 'Камчатка',
    link: kamchatka
  },
  {
    name: 'Холмогорский район',
    link: kholomogorskyRayon
  },
  {
    name: 'Байкал',
    link: baikal
  }
];
