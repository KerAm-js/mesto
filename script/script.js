const editBtn = document.querySelector('.profile__edit-button');
const closeModalBtn = document.querySelector('.modal__close-button');
const form = document.querySelector('.form');
const modal = document.querySelector('.modal');
const username = document.querySelector('.profile__username');
const userAbout = document.querySelector('.profile__about');
const usernameInput = form.querySelector('.form__input_value_username');
const userAboutInput = form.querySelector('.form__input_value_about');
const likeButtons = document.querySelectorAll('.element__like-button');

function setLike(event) {
  event.target.classList.toggle('element__like-button_active');
}

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

likeButtons.forEach(likeButton => {
  likeButton.addEventListener('click', setLike);
});