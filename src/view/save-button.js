import {createElement} from '../render';

function createSaveButtonTemplate(color) {
  const colorClassName = color ? `btn--${color}` : '';

  return (
    `<button class="event__save-btn btn ${colorClassName}" type="submit">Save</button>`
  );
}

export default class SaveButtonView {
  constructor({color}) {
    this.color = color;
  }

  getTemplate() {
    return createSaveButtonTemplate(this.color);
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
