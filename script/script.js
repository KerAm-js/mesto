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
const imageModal = document.querySelector('.modal_type_image');


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

function clearInputs(...inputs) {
  inputs.forEach(input => input.value = '')
}

function createNewCard(name, link) {
  const newElement = document.querySelector('#element').content.cloneNode(true);
  newElement.querySelector('.element__image').style.backgroundImage = `url(${link})`;
  newElement.querySelector('.element__image').addEventListener('click', () => showImageModal(link, name));
  newElement.querySelector('.element__title').textContent = name;
  newElement.querySelector('.element__like-button').addEventListener('click', setLike);
  newElement.querySelector('.element__delete-button').addEventListener('click', deleteCard);
  return newElement;
}

function deleteCard(event) {
  event.target.closest('.element').remove();
}

function addCard(name, link) {
  elements.prepend(createNewCard(name, link));
}

function onCreateCardHandler(event) {
  event.preventDefault();
  const name = placeNameInput.value; 
  const link = imageLinkInput.value; 
  addCard(name, link);
  closePopup(newPlaceModal);
  clearInputs(placeNameInput, imageLinkInput);
}

initialCards.forEach(card => {
  addCard(card.name, card.link);
})

function setLike(event) {
  event.target.classList.toggle('element__like-button_active')
}

function showProfileModal() {
  usernameInput.value = username.textContent.trim();
  userAboutInput.value = userAbout.textContent.trim();
  openPopup(profileModal);
}

function showNewPLaceModal() {
  openPopup(newPlaceModal);
}

function showImageModal(imageLink, placeName) {
  imageModal.querySelector('.modal__image').src = imageLink;
  imageModal.querySelector('.modal__image').alt = placeName;
  imageModal.querySelector('.modal__place-name').textContent = placeName;
  openPopup(imageModal);
}

function openPopup(element) {
  element.closest('.modal').classList.add('modal_opened');
}

function closePopup(element) {
  element.closest('.modal').classList.remove('modal_opened');
}
 
function saveUserData(event) {
  event.preventDefault()
  username.textContent = usernameInput.value;
  userAbout.textContent = userAboutInput.value;
  closePopup(event.target);
}

profileEditBtn.addEventListener('click', showProfileModal);
profileForm.addEventListener('submit', saveUserData);
addPlaceBtn.addEventListener('click', showNewPLaceModal);
newPlaceForm.addEventListener('submit', onCreateCardHandler);

closeModalButtons.forEach(closeBtn => {
  closeBtn.addEventListener('click', event => closePopup(event.target));
})