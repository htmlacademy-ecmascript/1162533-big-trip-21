import {createElement} from '../render';

function createEventOffersTitleTemplate() {
  return (
    '<h4 class="visually-hidden">Offers:</h4>'
  );
}

export default class EventOffersTitleView {
  getTemplate() {
    return createEventOffersTitleTemplate();
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
