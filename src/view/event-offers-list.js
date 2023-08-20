import {createElement} from '../render';

function createEventOffersList() {
  return (
    '<ul class="event__selected-offers"></ul>'
  );
}

export default class EventOffersListView {
  getTemplate() {
    return createEventOffersList();
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
