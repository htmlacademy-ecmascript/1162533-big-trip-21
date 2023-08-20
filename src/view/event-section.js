import {createElement} from '../render';

function createEventSectionTemplate(data) {
  const {name, title} = data;
  const sectionClassName = name ? `event__section--${name}` : '';
  const sectionTitleClassName = name ? `event__section-title--${name}` : '';

  return (
    `<section class="event__section ${sectionClassName}">
      <h3 class="event__section-title ${sectionTitleClassName}">${title}</h3>
    </section>`
  );
}

export default class EventSectionView {
  constructor({sectionData}) {
    this.sectionData = sectionData;
  }

  getTemplate() {
    return createEventSectionTemplate(this.sectionData);
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
