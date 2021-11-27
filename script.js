let body = document.querySelector('.root');
let modalBackdrop = document.querySelector('.modal__backdrop');
let editBtn = document.querySelector('.profile__edit-button');
let closeModalBtn = document.querySelector('.modal__close-button');
let form = document.querySelector('.form');
let modal = document.querySelector('.modal');
let username = document.querySelector('.profile__username');
let userAbout = document.querySelector('.profile__about');
let usernameInput = document.querySelector('.form__input_value_username');
let userAboutInput = document.querySelector('.form__input_value_about');

usernameInput.value = username.textContent.trim();
userAboutInput.value = userAbout.textContent.trim();

function showModal() {
  modal.style.display = 'flex';
}

function hideModal() {
  modal.style.display = 'none';
}

function saveUserData(event) {
  event.preventDefault()
  let usernameInput = document.querySelector('.form__input_value_username');
  let userAboutInput = document.querySelector('.form__input_value_about');

  username.textContent = usernameInput.value;
  userAbout.textContent = userAboutInput.value;

  hideModal();
}

editBtn.addEventListener('click', showModal);
modalBackdrop.addEventListener('click', hideModal);
closeModalBtn.addEventListener('click', hideModal);
form.addEventListener('submit', saveUserData);