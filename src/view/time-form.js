import {createElement} from '../render';

function createTimeFormTemplate(data) {
  const {dateFrom, dateTo, id} = data;

  return (
    `<div class="event__field-group  event__field-group--time">
      <label class="visually-hidden" for="event-start-time-${id}">From</label>
      <input class="event__input event__input--time" id="event-start-time-${id}" type="text" name="event-start-time" value="${dateFrom}">
      &mdash;
      <label class="visually-hidden" for="event-end-time-${id}">To</label>
      <input class="event__input event__input--time" id="event-end-time-${id}" type="text" name="event-end-time" value="${dateTo}">
    </div>`
  );
}

export default class TimeFormView {
  constructor({data}) {
    this.data = data;
  }

  getTemplate() {
    return createTimeFormTemplate(this.data);
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
