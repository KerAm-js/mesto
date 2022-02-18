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
      .then(res => res)
      .catch(err => console.log(err))
  }
}

export default Api;