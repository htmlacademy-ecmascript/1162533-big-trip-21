import {createElement} from '../render';

const getHHMMFormatDate = (date) => {
  const dateObj = new Date(date);

  const hours = dateObj.getHours();
  const minutes = dateObj.getMinutes();

  return `${hours > 9 ? hours : `0${hours}`}:${minutes > 9 ? minutes : `0${minutes}`}`;
};

const MONTHS_LIST = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];

const getMMDDFormatDate = (date) => {
  const dateObj = new Date(date);

  return `${MONTHS_LIST[dateObj.getMonth()]} ${dateObj.getDate()}`;
};

const MINUTES_IN_HOUR = 60;
const HOURS_IN_DAY = 24;
const MILLISECOND_IN_SECOND = 60 * 1000;

const getDiffInDates = (firstDate, secondDate) => {
  const firstDateObj = new Date(firstDate);
  const secondDateObj = new Date(secondDate);

  const diff = Math.abs(secondDateObj - firstDateObj);
  const minutes = Math.floor(diff / MILLISECOND_IN_SECOND);

  if (minutes < MINUTES_IN_HOUR) {
    return `${minutes}M`;
  }

  const hours = Math.floor(minutes / MINUTES_IN_HOUR);
  const days = Math.floor(hours / HOURS_IN_DAY);
  const remainingHours = hours % HOURS_IN_DAY;
  const remainingMinutes = minutes % MINUTES_IN_HOUR;
  if (days > 0) {
    return `${days}D ${remainingHours}H ${remainingMinutes}M`;
  }

  return `${remainingHours}H ${remainingMinutes}M`;

};

function createTripEventTemplate(eventData) {
  const {dateFrom, dateTo, destination, type, price} = eventData;

  const formattedDateFrom = getMMDDFormatDate(dateFrom);
  const dateFromTime = getHHMMFormatDate(dateFrom);
  const dateToTime = getHHMMFormatDate(dateTo);
  const diffTime = getDiffInDates(dateFrom, dateTo);

  return (
    `<div class="event">
        <time class="event__date" datetime="${dateFrom.slice(0, 10)}">${formattedDateFrom}</time>
        <div class="event__type">
          <img class="event__type-icon" width="42" height="42" src="img/icons/${type}.png" alt="Event type icon">
        </div>
        <h3 class="event__title">${type} ${destination}</h3>
        <div class="event__schedule">
          <p class="event__time">
            <time class="event__start-time" datetime="${dateFrom}">${dateFromTime}</time>
            &mdash;
            <time class="event__end-time" datetime="${dateTo}">${dateToTime}</time>
          </p>
          <p class="event__duration">${diffTime}</p>
        </div>
        <p class="event__price">
          &euro;&nbsp;<span class="event__price-value">${price}</span>
        </p>

         <!-- Offers -->

         <!-- Favorite button -->

         <!-- Rollup button -->
      </div>`
  );
}

export default class TripEventView {
  constructor({eventData}) {
    this.eventData = eventData;
  }

  getTemplate() {
    return createTripEventTemplate(this.eventData);
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
