import {createElement} from '../render';

function createEventTypeGroupTemplate() {
  return (
    `<fieldset class="event__type-group">
      <legend class="visually-hidden">Event type</legend>

      <!-- Types list -->

    </fieldset>`
  );
}

export default class EventTypeGroupView {
  getTemplate() {
    return createEventTypeGroupTemplate();
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
