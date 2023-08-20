import {createElement} from '../render';

function createEventOfferSelectorTemplate(data) {
  const {id, name, label, price, isChecked} = data;

  const checkedAttr = isChecked ? 'checked' : '';

  return (
    `<div class="event__offer-selector">
      <input class="event__offer-checkbox  visually-hidden" id="event-offer-${name}-${id}" type="checkbox" name="event-offer-${name}" ${checkedAttr}>
      <label class="event__offer-label" for="event-offer-${name}-${id}">
        <span class="event__offer-title">${label}</span>
        &plus;&euro;&nbsp;
        <span class="event__offer-price">${price}</span>
      </label>
    </div>`
  );
}

export default class EventOfferSelectorView {
  constructor({selectorData}) {
    this.selectorData = selectorData;
  }

  getTemplate() {
    return createEventOfferSelectorTemplate(this.selectorData);
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
