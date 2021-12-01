let editBtn = document.querySelector('.profile__edit-button');
let closeModalBtn = document.querySelector('.modal__close-button');
let form = document.querySelector('.form');
let modal = document.querySelector('.modal');
let username = document.querySelector('.profile__username');
let userAbout = document.querySelector('.profile__about');
let usernameInput = form.querySelector('.form__input_value_username');
let userAboutInput = form.querySelector('.form__input_value_about');

function showModal() {
  usernameInput.value = username.textContent.trim();
  userAboutInput.value = userAbout.textContent.trim();
  modal.classList.toggle('modal_opened');
}

function hideModal() {
  modal.classList.toggle('modal_opened');
}

function saveUserData(event) {
  event.preventDefault()
  username.textContent = usernameInput.value;
  userAbout.textContent = userAboutInput.value;
  hideModal();
}

editBtn.addEventListener('click', showModal);
closeModalBtn.addEventListener('click', hideModal);
form.addEventListener('submit', saveUserData);