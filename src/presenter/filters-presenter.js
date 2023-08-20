import FiltersBlockView from '../view/filters-block';
import FilterItemView from '../view/filter-item';
import {render, RenderPosition} from '../render';

const FILTERS_LIST = [
  {
    label: 'Everything',
    value: 'everything'
  },
  {
    label: 'Future',
    value: 'future'
  },
  {
    label: 'Present',
    value: 'present'
  },
  {
    label: 'Past',
    value: 'past'
  }
];

export default class FiltersPresenter {
  filtersBlockComponent = new FiltersBlockView();

  constructor({filtersContainer}) {
    this.filtersContainer = filtersContainer;
  }

  init() {
    render(this.filtersBlockComponent, this.filtersContainer);

    const filterBlockElement = this.filtersBlockComponent.getElement();

    FILTERS_LIST.reverse().forEach((filterData) => render(new FilterItemView({filterData}), filterBlockElement, RenderPosition.AFTERBEGIN));
  }
}
