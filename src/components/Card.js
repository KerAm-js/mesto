class Card {
  constructor(name, link, likes, templateSelector, handleCardClick) {
    this._name = name;
    this._link = link;
    this._likes = likes;
    this._handleCardClick = handleCardClick;
    this._templateSelector = templateSelector;
  }

  _setEventListeners() {
    this._element.querySelector('.element__image').addEventListener('click', () => this._handleCardClick(this._name, this._link));
    this._element.querySelector('.element__like-button').addEventListener('click', this._setLike);
    this._element.querySelector('.element__delete-button').addEventListener('click', this._deleteCard);
  }

  _createNewCard = () => {
    this._element = document.querySelector(this._templateSelector).content.querySelector('.element').cloneNode(true);
    this._element.querySelector('.element__image').style.backgroundImage = `url(${this._link})`;
    this._element.querySelector('.element__title').textContent = this._name;
    this._element.querySelector('.element__like-count').textContent = this._likes.length;
    this._setEventListeners();
    return this._element;
  }

  _deleteCard = () => {
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