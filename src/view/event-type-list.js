import {createElement} from '../render';

function createEventTypeListTemplate() {
  return (
    '<div class="event__type-list"></div>'
  );
}

export default class EventTypeListView {
  getTemplate() {
    return createEventTypeListTemplate();
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
