export default class Section {
  constructor({items, renderer}, containerSelector) {
    this._items = items;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  addItem(item) {
    this._container.append(this._renderer(item));
  }

  clear() {
    this._container.innerHTML = '';
  }

  renderItems() {
    this.clear();
    this._items.forEach(item => {
      this.addItem(item);
    })
  }
}