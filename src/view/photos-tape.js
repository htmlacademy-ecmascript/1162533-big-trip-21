import {createElement} from '../render';

function createPhotosTapeTemplate() {
  return (
    '<div class="event__photos-tape"></div>'
  );
}

export default class PhotosTapeView {
  getTemplate() {
    return createPhotosTapeTemplate();
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
