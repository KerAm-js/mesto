class Card {
  constructor(
    {name, link, likes, owner, _id}, 
    userId, 
    templateSelector, 
    handleCardClick, 
    deleteCardFromServer,
    confirmCardDeleting
  ) {
    this._name = name;
    this._link = link;
    this._likes = likes;
    this._ownerId = owner._id;
    this._id = _id;
    this._userId = userId;
    this._isUserOwner =  this._userId === this._ownerId;
    this._handleCardClick = handleCardClick;
    this._deleteCardFromServer = deleteCardFromServer;
    this._confirmCardDeleting = confirmCardDeleting;
    this._templateSelector = templateSelector; 
  }

  _setEventListeners() {
    this._element.querySelector('.element__image').addEventListener('click', () => this._handleCardClick(this._name, this._link));
    this._element.querySelector('.element__like-button').addEventListener('click', this._setLike);
    if (this._isUserOwner) {
      this._deleteBtn.addEventListener('click', this._askCardDeleting);
    }
  }

  _createNewCard = () => {
    this._element = document.querySelector(this._templateSelector).content.querySelector('.element').cloneNode(true);
    this._deleteBtn = this._element.querySelector('.element__delete-button');
    if (!this._isUserOwner) {
      this._deleteBtn.remove();
    }
    this._element.querySelector('.element__image').style.backgroundImage = `url(${this._link})`;
    this._element.querySelector('.element__title').textContent = this._name;
    this._element.querySelector('.element__like-count').textContent = this._likes.length;
    this._setEventListeners();
    return this._element;
  }

  _askCardDeleting = () => {
    this._confirmCardDeleting(this._deleteCard);
  }

  _deleteCard = () => {
    this._deleteCardFromServer(this._id);
    this._element.remove();
    this._element = null;
  }

  _setLike(evt) {
    evt.target.classList.toggle('element__like-button_active');
  }

  getCard() {
    const newCard = this._createNewCard()
    return newCard;
  }
  
}

export default Card;