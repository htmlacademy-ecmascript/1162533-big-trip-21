import {createElement} from '../render';

function createEventPhotoTemplate(data) {
  const {src, name} = data;

  return (
    `<img class="event__photo" src="${src}" alt="${name}">`
  );
}

export default class EventPhotoView {
  constructor({data}) {
    this.data = data;
  }

  getTemplate() {
    return createEventPhotoTemplate(this.data);
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
