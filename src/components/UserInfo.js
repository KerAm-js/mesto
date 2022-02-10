export default class UserInfo {
  constructor(usernameSelector, descriptionSelector) {
    this._username = document.querySelector(usernameSelector);
    this._description = document.querySelector(descriptionSelector);
  }

  getUserInfo() {
    return {
      username: this._username.textContent.trim(),
      description: this._description.textContent.trim(),
    }
  }

  setUserInfo(username, description) {
    this._username.textContent = username;
    this._description.textContent = description;
  }
}