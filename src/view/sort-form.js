import {createElement} from '../render';

function createSortFormTemplate() {
  return (
    '<form class="trip-events__trip-sort trip-sort" action="#" method="get"></form>'
  );
}

export default class SortFormView {
  getTemplate() {
    return createSortFormTemplate();
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
