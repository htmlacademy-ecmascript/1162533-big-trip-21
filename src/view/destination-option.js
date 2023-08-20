import {createElement} from '../render';

function createDestinationOptionTemplate(value) {
  return (
    `<option value="${value}"></option>`
  );
}

export default class DestinationOptionView {
  constructor({value}) {
    this.value = value;
  }

  getTemplate() {
    return createDestinationOptionTemplate(this.value);
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
