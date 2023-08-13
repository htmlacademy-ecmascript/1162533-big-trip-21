import {createElement} from '../render';

function createSortItemTemplate(sortingData) {
  const {label, value, isActive, isDisabled} = sortingData;

  const checkedAttr = isActive ? 'checked' : '';
  const disabledAttr = isDisabled ? 'disabled' : '';

  return (
    `<div class="trip-sort__item  trip-sort__item--${value}">
      <input id="sort-${value}" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-${value}" ${checkedAttr} ${disabledAttr}>
      <label class="trip-sort__btn" for="sort-${value}">${label}</label>
    </div>`
  );
}

export default class SortItemView {
  constructor({sortingData}) {
    this.sortingData = sortingData;
  }

  getTemplate() {
    return createSortItemTemplate(this.sortingData);
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
