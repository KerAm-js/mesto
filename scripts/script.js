import Card from "./Card.js";

const closeModalButtons = document.querySelectorAll('.modal__close-button');
const profileEditBtn = document.querySelector('.profile__edit-button');
const profileModal = document.querySelector('.modal_type_profile');
const profileForm = document.forms.formProfile;
const username = document.querySelector('.profile__username');
const userAbout = document.querySelector('.profile__about');
const usernameInput = profileForm.querySelector('.form__input_value_username');
const userAboutInput = profileForm.querySelector('.form__input_value_about');
const newPlaceModal = document.querySelector('.modal_type_place');
const newPlaceForm = document.forms.formPlace;
const addPlaceBtn = document.querySelector('.profile__add-place-button');
const elements = document.querySelector('.elements__list');
const placeNameInput = newPlaceForm.querySelector('.form__input_value_place-name');
const imageLinkInput = newPlaceForm.querySelector('.form__input_value_image-link');
const modals = document.querySelectorAll('.modal');


const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

function clearInputs(form) {
  form.reset();
}

function addCard(name, link) {
  const card = new Card(name, link, openPopup);
  elements.prepend(card.getCard());
}

function onCreateCardHandler(event) {
  event.preventDefault();
  const name = placeNameInput.value; 
  const link = imageLinkInput.value; 
  addCard(name, link);
  closePopup(newPlaceModal);
  disableSubmitBtn({
    submitButtonSelector: '.form__button[type=submit]',  
    inactiveButtonClass: 'form__button_disabled',
  }, event.target);
  clearInputs(event.target);
}

initialCards.forEach(card => {
  addCard(card.name, card.link);
})

function showProfileModal() {
  usernameInput.value = username.textContent.trim();
  userAboutInput.value = userAbout.textContent.trim();
  openPopup(profileModal);
}

function openPopup(element) {
  document.addEventListener('keydown', onEscKeyDownHanlder);
  element.closest('.modal').classList.add('modal_opened');
}

function closePopup(element) {
  document.removeEventListener('keydown', onEscKeyDownHanlder);
  element.closest('.modal').classList.remove('modal_opened');
}
 
function saveUserData(event) {
  event.preventDefault()
  username.textContent = usernameInput.value;
  userAbout.textContent = userAboutInput.value;
  closePopup(event.target);
}

function onEscKeyDownHanlder(evt) {
  const openedPopup = document.querySelector('.modal_opened');
  if (evt.key === 'Escape' && openedPopup) {
    openedPopup.classList.remove('modal_opened');
  }
}

profileEditBtn.addEventListener('click', showProfileModal);
profileForm.addEventListener('submit', saveUserData);
addPlaceBtn.addEventListener('click', () => openPopup(newPlaceModal));
newPlaceForm.addEventListener('submit', onCreateCardHandler);

modals.forEach(modal => modal.addEventListener('click', evt => {
  const item = evt.target;
  if (item.classList.contains('modal') && !item.classList.contains('modal__blocj')) {
    closePopup(evt.target);
  }
}))

closeModalButtons.forEach(closeBtn => {
  closeBtn.addEventListener('click', event => closePopup(event.target));
})