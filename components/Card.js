class Card {
  constructor(name, link, templateSelector, handleCardClick) {
    this._name = name;
    this._link = link;
    this._handleCardClick = handleCardClick;
    this._templateSelector = templateSelector;
  }

  _createNewCard = () => {
    this._element = document.querySelector(this._templateSelector).content.querySelector('.element').cloneNode(true);
    this._element.querySelector('.element__image').style.backgroundImage = `url(${this._link})`;
    this._element.querySelector('.element__image').addEventListener('click', this._handleCardClick);
    this._element.querySelector('.element__title').textContent = this._name;
    this._element.querySelector('.element__like-button').addEventListener('click', this._setLike);
    this._element.querySelector('.element__delete-button').addEventListener('click', this._deleteCard);
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