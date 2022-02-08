export default class Popup {
  constructor(popupSelector) {
    this._element = document.querySelector(popupSelector);
    this._closeBtn = this._element.querySelector('.modal__close-button');
  }

  _handleEscClose(evt) {
    // const isPopupOpened = this._element.classList.contains('modal_opened');
    // if (evt.key === 'Escape' && isPopupOpened) {
    //   this.close();
    // }
    evt.key === 'Escape' ? this.close() : null;
  }

  open() {
    document.addEventListener('keydown', this._handleEscClose);
    this._element.closest('.modal').classList.add('modal_opened');
  }

  close() {
    document.removeEventListener('keydown', this._handleEscClose);
    this._element.closest('.modal').classList.remove('modal_opened');
  }

  setEventListeners() {
    this._element.addEventListener('click', evt => {
      const item = evt.target;
      if (item.classList.contains('modal') && !item.classList.contains('modal__block')) {
        this.close();
      }
    })
    this._closeBtn.addEventListener('click', event => closePopup(event.target));
  }
}