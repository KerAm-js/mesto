const closeModalButtons = document.querySelectorAll('.modal__close-button');
const profileEditBtn = document.querySelector('.profile__edit-button');
const profileModal = document.querySelector('.modal_type_profile');
const profileForm = document.querySelector('.form_type_profile');
const username = document.querySelector('.profile__username');
const userAbout = document.querySelector('.profile__about');
const usernameInput = profileForm.querySelector('.form__input_value_username');
const userAboutInput = profileForm.querySelector('.form__input_value_about');
const newPlaceModal = document.querySelector('.modal_type_place');
const newPlaceForm = document.querySelector('.form_type_place');
const addPlaceBtn = document.querySelector('.profile__add-place-button');
const elements = document.querySelector('.elements__list');
const placeNameInput = newPlaceForm.querySelector('.form__input_value_place-name');
const imageLinkInput = newPlaceForm.querySelector('.form__input_value_image-link');

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

function addCard(name, link) {
  const newElement = document.querySelector('#element').content.cloneNode(true);
  newElement.querySelector('.element__image').style.backgroundImage = `url(${link})`;
  newElement.querySelector('.element__title').textContent = name;
  newElement.querySelector('.element__like-button').addEventListener('click', setLike);
  newElement.querySelector('.element__delete-button').addEventListener('click', deleteCard);
  elements.prepend(newElement);
}

function deleteCard(event) {
  event.target.closest('.element').remove();
}

function createNewCard(event) {
  event.preventDefault()
  const name = placeNameInput.value;
  const link = imageLinkInput.value;
  addCard(name, link);
  hideModal(event.target.parentElement.parentElement);
}

initialCards.forEach(card => {
  addCard(card.name, card.link);
})

function setLike(event) {
  event.target.classList.toggle('element__like-button_active')
}

function showProfileModal() {
  profileModal.style.transition = 'visibility .3s, opacity .3s linear';
  usernameInput.value = username.textContent.trim();
  userAboutInput.value = userAbout.textContent.trim();
  profileModal.classList.toggle('modal_opened');
}

function showNewPLaceModal() {
  newPlaceModal.style.transition = 'visibility .3s, opacity .3s linear';
  newPlaceModal.classList.toggle('modal_opened');
}

function hideModal(element) {
  element.classList.toggle('modal_opened');
}
 
function saveUserData(event) {
  event.preventDefault()
  username.textContent = usernameInput.value;
  userAbout.textContent = userAboutInput.value;
  hideModal(event.target.parentElement.parentElement);
}

profileEditBtn.addEventListener('click', showProfileModal);
profileForm.addEventListener('submit', saveUserData);
addPlaceBtn.addEventListener('click', showNewPLaceModal);
newPlaceForm.addEventListener('submit', createNewCard);

closeModalButtons.forEach(closeBtn => {
  closeBtn.addEventListener('click', event => hideModal(event.target.parentElement.parentElement));
})