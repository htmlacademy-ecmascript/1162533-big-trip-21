import {createElement} from '../render';

function createDestinationOptionsList(id) {
  return (
    `<datalist id="destination-list-${id}"></datalist>`
  );
}

export default class DestinationOptionsListView {
  constructor({id}) {
    this.id = id;
  }

  getTemplate() {
    return createDestinationOptionsList(this.id);
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
