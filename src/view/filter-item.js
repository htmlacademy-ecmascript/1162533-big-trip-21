import {createElement} from '../render';

function createFilterTemplate(filterData) {
  const {label, value, isActive, isDisabled} = filterData;

  const checkedAttr = isActive ? 'checked' : '';
  const disabledAttr = isDisabled ? 'disabled' : '';

  return (
    `<div class="trip-filters__filter">
      <input id="filter-${value}" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="${value}" ${checkedAttr} ${disabledAttr}>
      <label class="trip-filters__filter-label" for="filter-${value}">${label}</label>
    </div>`
  );
}

export default class FilterItemView {
  constructor({filterData}) {
    this.filterData = filterData;
  }

  getTemplate() {
    return createFilterTemplate(this.filterData);
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
