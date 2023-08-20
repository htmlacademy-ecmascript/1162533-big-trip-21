import {createElement} from '../render';

const processDateNumber = (number) => {
  if (number < 9) {
    return `0${number}`;
  }

  return number;
};


const dateFormatter = (date) => {
  const dateObj = new Date(date);
  const day = processDateNumber(dateObj.getDate());
  const month = processDateNumber(dateObj.getMonth() + 1);
  const year = dateObj.getFullYear().toString().substr(-2);

  const hour = processDateNumber(dateObj.getHours());
  const minutes = processDateNumber(dateObj.getMinutes());

  return `${day}/${month}/${year} ${hour}: ${minutes}`;
};

function createTimeFormTemplate(data) {
  const {dateFrom, dateTo, id} = data;

  const dateFromFormatted = dateFormatter(dateFrom);
  const dateToFormatted = dateFormatter(dateTo);

  return (
    `<div class="event__field-group  event__field-group--time">
      <label class="visually-hidden" for="event-start-time-${id}">From</label>
      <input class="event__input event__input--time" id="event-start-time-${id}" type="text" name="event-start-time" value="${dateFromFormatted}">
      &mdash;
      <label class="visually-hidden" for="event-end-time-${id}">To</label>
      <input class="event__input event__input--time" id="event-end-time-${id}" type="text" name="event-end-time" value="${dateToFormatted}">
    </div>`
  );
}

export default class TimeFormView {
  constructor({data}) {
    this.data = data;
  }

  getTemplate() {
    return createTimeFormTemplate(this.data);
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
