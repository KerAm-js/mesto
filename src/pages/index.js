import Api from "../components/Api.js";
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";
import '../index.css';
import { 
  validationConfig, 
  profilePopupSelector, 
  imagePopupSelector,
  elementsContainerSelector,
  newPlacePopupSelector,
  usernameSelector,
  descriptionSelector,
  profileFormName,
  placeFormName,
  token,
  groupId
} from "../utils/constants.js";

const profileEditBtn = document.querySelector('.profile__edit-button');
const profileForm = document.forms.formProfile;
const usernameInput = profileForm.querySelector('.form__input_value_username');
const descriptionInput = profileForm.querySelector('.form__input_value_about');
const addPlaceBtn = document.querySelector('.profile__add-place-button');

const formValidators = {};
const enableValidation = config => {
  Array.from(document.forms).forEach(form => {
    const validator = new FormValidator(config, form);
    formValidators[form.name] = validator;
    validator.enableValidation();
  })
}
enableValidation(validationConfig);

const profilePopup = new PopupWithForm(profilePopupSelector, saveUserData, showProfilePopup);
profilePopup.setEventListeners();

const newPlacePopup = new PopupWithForm(newPlacePopupSelector, onCreateCardHandler);
newPlacePopup.setEventListeners();

const imagePopup = new PopupWithImage(imagePopupSelector);
imagePopup.setEventListeners();

const userInfo = new UserInfo(usernameSelector, descriptionSelector);

const api = new Api({
  serverUrl: `https://nomoreparties.co/v1/${groupId}`,
  token,
  groupId,
  userAddress: '/users/me',
  avatarAddress: `/avatar`,
  cardsAddress: '/cards',
  likeAddress: '/like'
})
api.getUserData().then(data => userInfo.setUserInfo(data.name, data.about));

let cardList;
api.getCards().then(cards => {
  cardList = new Section({
    items: cards,
    renderer: cardData => {
      const card = new Card(cardData.name, cardData.link, '#element', imagePopup.open.bind(imagePopup));
      return card.getCard();
    }
  }, elementsContainerSelector);
  cardList.renderItems();
});

function onCreateCardHandler(event, {placeName, imageLink}) {
  event.preventDefault();
  cardList.addItem({name: placeName, link: imageLink});
  formValidators[profileFormName].disableSubmitBtn();
}

function showProfilePopup() {
  const {username, description} = userInfo.getUserInfo();
  usernameInput.value = username
  descriptionInput.value = description;
  formValidators[profileFormName].enableSubmitBtn();
}
 
function saveUserData(event, {username, description}) {
  event.preventDefault();
  userInfo.setUserInfo(username, description);
}

function onProfileEditBtnHanlder() {
  formValidators[profileFormName].resetValidation();
  profilePopup.open();
}

function onAddPlaceBtnHanlder() {
  formValidators[placeFormName].resetValidation();
  newPlacePopup.open();
}

profileEditBtn.addEventListener('click', onProfileEditBtnHanlder);
addPlaceBtn.addEventListener('click', onAddPlaceBtnHanlder);
