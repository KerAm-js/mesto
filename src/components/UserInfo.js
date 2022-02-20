export default class UserInfo {
  constructor(usernameSelector, descriptionSelector, avatarSelector) {
    this._usernameElement = document.querySelector(usernameSelector);
    this._descriptionElement = document.querySelector(descriptionSelector);
    this._avatarElement = document.querySelector(avatarSelector);
  }

  getUserInfo = () => {
    return {
      name: this._name,
      about: this._about,
      avatar: this._avatar,
      id: this._id
    }
  }

  setUserInfo = ({
    name = this._name, 
    about = this._about, 
    avatar = this._avatar, 
    _id = this._id
  }) => {
    this._usernameElement.textContent = name;
    this._descriptionElement.textContent = about;
    this._avatarElement.src = avatar;
    this._name = name;
    this._about = about;
    this._avatar = avatar;
    this._id = _id;
  }
}