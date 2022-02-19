export default class UserInfo {
  constructor(usernameSelector, descriptionSelector) {
    this._usernameElement = document.querySelector(usernameSelector);
    this._descriptionElement = document.querySelector(descriptionSelector);
  }

  getUserInfo() {
    return {
      name: this._name,
      about: this._about,
      avatar: this._avatar,
      id: this._id
    }
  }

  setUserInfo({name, about, avatar = this._avatar, _id = this._id}) {
    this._usernameElement.textContent = name;
    this._descriptionElement.textContent = about;
    this._name = name;
    this._about = about;
    this._avatar = avatar;
    this._id = _id;
  }
}