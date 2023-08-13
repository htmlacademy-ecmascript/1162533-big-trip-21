import {createElement} from '../render';

function createPhotosContainerTemplate() {
  return (
    '<div class="event__photos-container"></div>'
  );
}

export default class PhotosContainerView {
  getTemplate() {
    return createPhotosContainerTemplate();
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
