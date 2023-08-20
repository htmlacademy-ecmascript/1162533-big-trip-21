import {createElement} from '../render';

function createAvailableOffersWrapperTemplate() {
  return (
    '<div class="event__available-offers"></div>'
  );
}

export default class AvailableOffersWrapperView {
  getTemplate() {
    return createAvailableOffersWrapperTemplate();
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
