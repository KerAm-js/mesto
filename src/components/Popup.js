export default class Popup {
  constructor(popupSelector) {
    this._element = document.querySelector(popupSelector);
    this._closeBtn = this._element.querySelector('.modal__close-button');
  }

  open() {
    document.addEventListener('keydown', this._handleEscClose);
    this._element.classList.add('modal_opened');
  }

  close() {
    document.removeEventListener('keydown', this._handleEscClose);
    this._element.classList.remove('modal_opened');
  }

  _handleEscClose(evt) {
    if (evt.key === 'Escape') {
      this.close();
    }
  }

  setEventListeners() {
    this._element.addEventListener('click', evt => {
      const item = evt.target;
      if (item.classList.contains('modal') && !item.classList.contains('modal__block')) {
        this.close();
      }
    })
    this._closeBtn.addEventListener('click', () => this.close());
  }

}