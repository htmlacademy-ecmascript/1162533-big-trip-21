import {createElement} from '../render';

function createTripEventEditFormTemplate() {
  return (
    `<form class="event event--edit" action="#" method="post">
        <!-- Event header -->

        <!-- Event details -->
      </form>`
  );
}

export default class TripEventEditFormView {
  getTemplate() {
    return createTripEventEditFormTemplate();
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
