import {createElement} from '../render';

function createEventTypeWrapperTemplate(typeData) {
  const {id, type} = typeData;

  return (
    `<div class="event__type-wrapper">
      <label class="event__type  event__type-btn" for="event-type-toggle-${id}">
        <span class="visually-hidden">Choose event type</span>
        <img class="event__type-icon" width="17" height="17" src="img/icons/${type}.png" alt="Event type icon">
      </label>
      <input class="event__type-toggle  visually-hidden" id="event-type-toggle-${id}" type="checkbox">

      <!-- Event type list -->
    </div>`
  );
}


export default class EventTypeWrapperView {
  constructor({typeData}) {
    this.typeData = typeData;
  }

  getTemplate() {
    return createEventTypeWrapperTemplate(this.typeData);
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
