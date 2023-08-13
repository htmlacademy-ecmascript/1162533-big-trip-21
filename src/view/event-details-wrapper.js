import {createElement} from '../render';

function createEventDetailsWrapper() {
  return (
    '<section class="event__details"></section>'
  );
}

export default class EventDetailsWrapperView {
  getTemplate() {
    return createEventDetailsWrapper();
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
