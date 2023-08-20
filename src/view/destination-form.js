import {createElement} from '../render';

function createDestinationFormTemplate(data) {
  const {id, type, destination} = data;

  const value = destination ?? '';

  return (
    `<div class="event__field-group  event__field-group--destination">
      <label class="event__label event__type-output" for="event-destination-${id}">${type}</label>
      <input class="event__input event__input--destination" id="event-destination-${id}" type="text" name="event-destination" value="${value}" list="destination-list-${id}">

      <!-- Destination list -->
    </div>`
  );
}

export default class DestinationFormView {
  constructor({data}) {
    this.data = data;
  }

  getTemplate() {
    return createDestinationFormTemplate(this.data);
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
