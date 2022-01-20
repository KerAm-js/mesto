class Card {
  constructor(name, link, templateSelector, openPopup) {
    this._name = name;
    this._link = link;
    this._openPopup = openPopup;
    this._templateSelector = templateSelector;
  }

  _createNewCard() {
    this._element = document.querySelector(this._templateSelector).content.cloneNode(true);
    this._element.querySelector('.element__image').style.backgroundImage = `url(${this._link})`;
    this._element.querySelector('.element__image').addEventListener('click', () => this._showImageModal(this._link, this._name));
    this._element.querySelector('.element__title').textContent = this._name;
    this._element.querySelector('.element__like-button').addEventListener('click', this._setLike);
    this._element.querySelector('.element__delete-button').addEventListener('click', this._deleteCard);
    return this._element;
  }

  _deleteCard(event) {
    event.target.closest('.element').remove();
  }

  _setLike(event) {
    event.target.classList.toggle('element__like-button_active')
  }

  _showImageModal(imageLink, placeName) {
    const imageModal = document.querySelector('.modal_type_image');
    imageModal.querySelector('.modal__image').src = imageLink;
    imageModal.querySelector('.modal__image').alt = placeName;
    imageModal.querySelector('.modal__place-name').textContent = placeName;
    this._openPopup(imageModal);
  }

  getCard() {
    const newCard = this._createNewCard()
    return newCard;
  }
}

export default Card;