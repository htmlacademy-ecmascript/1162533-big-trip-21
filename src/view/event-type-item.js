import {createElement} from '../render';

function createEventTypeItem(eventTypeData) {
  const {name, id, label, isActive} = eventTypeData;

  const checkedAttr = isActive ? 'checked' : '';

  return (
    `<div class="event__type-item">
      <input id="event-type-${name}-${id}" class="event__type-input visually-hidden" type="radio" name="event-type" value="${name}" ${checkedAttr}>
      <label class="event__type-label event__type-label--${name}" for="event-type-${name}-${id}">${label}</label>
    </div>`
  );
}

export default class EventTypeItemView {
  constructor({eventTypeData}) {
    this.eventTypeData = eventTypeData;
  }

  getTemplate() {
    return createEventTypeItem(this.eventTypeData);
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
