import SortFormView from '../view/sort-form';
import SortItemView from '../view/sort-item';
import {render} from '../render';

const SORTING_LIST = [
  {
    label: 'Day',
    value: 'day'
  },
  {
    label: 'Event',
    value: 'event'
  },
  {
    label: 'Time',
    value: 'time'
  },
  {
    label: 'Price',
    value: 'price'
  },
  {
    label: 'Offers',
    value: 'offer'
  }
];

export default class SortingPresenter {
  sortFormComponent = new SortFormView();

  constructor({sortingContainer}) {
    this.sortingContainer = sortingContainer;
  }

  init() {
    render(this.sortFormComponent, this.sortingContainer);

    const sortFormElement = this.sortFormComponent.getElement();

    SORTING_LIST.forEach((sortingData) => render(new SortItemView({sortingData}), sortFormElement));
  }
}
