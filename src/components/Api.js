class Api {
  constructor({
    serverUrl, 
    token, 
    groupId, 
    userAddress,
    avatarAddress,
    cardsAddress,
    likeAddress,
  }) {
    this._serverUrl = serverUrl;
    this._token = token;
    this._groupId = groupId;
    this._userUrl = `${this._serverUrl}${userAddress}`;
    this._avatarUrl = `${this._userUrl}${avatarAddress}`;
    this._cardsUrl = `${this._serverUrl}${cardsAddress}`;
    this._likeAddress = likeAddress;
  }

  getUserData() {
    return fetch(this._userUrl, {
      headers: {
        authorization: this._token
      }
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
      return Promise.reject(`Ошибка: ${res.status}`);
    })
  }

  getCards() {
    return fetch(this._cardsUrl, {
      headers: {
        authorization: this._token
      }
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      })
  }

  addCard(name, link) {
    return fetch(this._cardsUrl, {
      method: 'POST',
      headers: {
        authorization: this._token,
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        name,
        link,
      })
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      })
  }

  deleteCard = id => {
    return fetch(`${this._cardsUrl}/${id}`, {
      method: 'DELETE',
      headers: {
        authorization: this._token,
      },
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      })
  }

  setLike = cardId => {
    return fetch(`${this._cardsUrl}/${cardId}${this._likeAddress}`, {
      method: 'PUT',
      headers: {
        authorization: this._token
      }
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      })
  }

  deleteLike = cardId => {
    return fetch(`${this._cardsUrl}/${cardId}${this._likeAddress}`, {
      method: 'DELETE',
      headers: {
        authorization: this._token
      }
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      })
  }

  editProfile(name, about) {
    return fetch(this._userUrl, {
      method: 'PATCH',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name,
        about,
      })
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      })
  }

  editAvatar(avatar) {
    return fetch(`${this._avatarUrl}`, {
      method: 'PATCH',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        avatar,
      })
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      })
  }
}

export default Api;