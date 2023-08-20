import {createElement} from '../render';

function createEventEditHeaderTemplate() {
  return (
    `<header class="event__header">
      <!-- Type Wrapper -->

      <!-- Field group destination -->

      <!-- Field group time -->

      <!-- Field group price -->

      <!-- save button -->

      <!-- reset button -->

      <!-- rollup button -->
    </header>`
  );
}

export default class EventEditHeaderView {
  getTemplate() {
    return createEventEditHeaderTemplate();
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
