import {createElement} from '../render';

function createDestinationDescriptionTemplate(text) {
  return (
    `<p class="event__destination-description">${text}</p>`
  );
}

export default class DestinationDescriptionView {
  constructor({description}) {
    this.description = description;
  }

  getTemplate() {
    return createDestinationDescriptionTemplate(this.description);
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
