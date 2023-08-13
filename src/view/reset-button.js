import {createElement} from '../render';

function createResetButtonTemplate(title) {
  return (
    `<button class="event__reset-btn" type="reset">${title}</button>`
  );
}

export default class ResetButtonView {
  constructor({title}) {
    this.title = title;
  }

  getTemplate() {
    return createResetButtonTemplate(this.title);
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
