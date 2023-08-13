import {createElement} from '../render';

function createEventOffersItem(offerData) {
  const {title, price} = offerData;

  return (
    `<li class="event__offer">
      <span class="event__offer-title">${title}</span>
      &plus;&euro;&nbsp;
      <span class="event__offer-price">${price}</span>
    </li>`
  );
}

export default class EventOffersItemView {
  constructor({offerData}) {
    this.offerData = offerData;
  }

  getTemplate() {
    return createEventOffersItem(this.offerData);
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
