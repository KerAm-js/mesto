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
    this.serverUrl = serverUrl;
    this.token = token;
    this.groupId = groupId;
    this.userUrl = `${this.serverUrl}${userAddress}`;
    this.avatarUrl = `${this.userUrl}${avatarAddress}`;
    this.cardsUrl = `${this.serverUrl}${cardsAddress}`;
    this.likeAddress = likeAddress;
  }

  getUserData() {
    return fetch(this.userUrl, {
      headers: {
        authorization: this.token
      }
    })
      .then(res => res.json())
      .catch(err => console.log(err))
  }

  getCards() {
    return fetch(this.cardsUrl, {
      headers: {
        authorization: this.token
      }
    })
      .then(res => res.json())
      .catch(err => console.log(err))
  }

  editProfile(name, about) {
    return fetch(this.userUrl, {
      method: 'PATCH',
      headers: {
        authorization: this.token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name,
        about,
      })
    })
      .then(res => res.json())
      .catch(err => console.log(err))
  }
}

export default Api;