import Api from "../components/Api.js";
import Card from "../components/Card.js";
import ConfirmPopup from "../components/ConfirmPopup.js";
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
  groupId,
  confirmPopupSelector,
  editAvatarPopupSelector,
  avatarFormName,
  avatarSelector
} from "../utils/constants.js";

const profileEditBtn = document.querySelector('.profile__edit-button');
const avatarWrapper = document.querySelector('.profile__avatar-wrapper');
const editAvatarBtn = avatarWrapper.querySelector('.profile__edit-avatar-btn');
const profileForm = document.forms.formProfile;
const usernameInput = profileForm.querySelector('.form__input_value_username');
const descriptionInput = profileForm.querySelector('.form__input_value_about');
const avatarForm = document.forms.formAvatar;
const avatarLinkInput = avatarForm.querySelector('.form__input_value_avatar-link');
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

const editAvatarPopup = new PopupWithForm(editAvatarPopupSelector, editAvatar, showAvatarPopup);
editAvatarPopup.setEventListeners();

const imagePopup = new PopupWithImage(imagePopupSelector);
imagePopup.setEventListeners();

const confirmActionPopup = new ConfirmPopup(confirmPopupSelector);
confirmActionPopup.setEventListeners();

const userInfo = new UserInfo(usernameSelector, descriptionSelector, avatarSelector);

const api = new Api({
  serverUrl: `https://nomoreparties.co/v1/${groupId}`,
  token,
  groupId,
  userAddress: '/users/me',
  avatarAddress: `/avatar`,
  cardsAddress: '/cards',
  likeAddress: '/likes'
})
api.getUserData().then(res => userInfo.setUserInfo(res));

let cardList;

function updateCardList() {
  api.getCards().then(cards => {
    cardList = new Section({
      items: cards,
      renderer: cardData => {
        const card = new Card(
          cardData, 
          userInfo.getUserInfo().id, 
          '#element', 
          imagePopup.open.bind(imagePopup), 
          api.deleteCard, 
          confirmCardDeleting,
          api.setLike,
          api.deleteLike,
        );
        return card.getCard();
      }
    }, elementsContainerSelector);
    cardList.renderItems();
  });
}
updateCardList();

function editAvatar({avatarLink}) {
  return new Promise((resolve, reject) => {
    api.editAvatar(avatarLink)
      .then(res => {
        userInfo.setUserInfo({avatar: res.avatar});
        resolve();
      })
      .catch(err => {
        console.log(err);
        reject();
      });
  })
}

function confirmCardDeleting(action) {
  confirmActionPopup.setEventListener(action);
  confirmActionPopup.open();
}

function onCreateCardHandler({placeName, imageLink}) {
  return new Promise((resolve, reject) => {
    api.addCard(placeName, imageLink)
      .then(() => {
        updateCardList();
        resolve()
      })
      .catch(err => {
        console.log(err);
        reject();
      })
      .finally(() => {
        formValidators[profileFormName].disableSubmitBtn();
      })
  })
}

function showProfilePopup() {
  const {name, about} = userInfo.getUserInfo();
  usernameInput.value = name
  descriptionInput.value = about;
  formValidators[profileFormName].enableSubmitBtn();
}

function showAvatarPopup() {
  const {avatar} = userInfo.getUserInfo();
  avatarLinkInput.value = avatar;
  formValidators[avatarFormName].enableSubmitBtn()
}
 
function saveUserData({username, description}) {
  return new Promise((resolve, reject) => {
    api.editProfile(username, description)
      .then(res => {
        userInfo.setUserInfo({name: res.name, about: res.about});
        resolve();
      })
      .catch(err => {
        console.log(err);
        reject();
      });
  })
}

function onProfileEditHanlder() {
  formValidators[profileFormName].resetValidation();
  profilePopup.open();
}

function onAddPlaceHanlder() {
  formValidators[placeFormName].resetValidation();
  newPlacePopup.open();
}

function onAvatarEditHandler() {
  formValidators[avatarFormName].resetValidation();
  editAvatarPopup.open();
}

profileEditBtn.addEventListener('click', onProfileEditHanlder);
addPlaceBtn.addEventListener('click', onAddPlaceHanlder);
editAvatarBtn.addEventListener('click', onAvatarEditHandler);