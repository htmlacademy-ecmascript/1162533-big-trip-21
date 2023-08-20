import FiltersPresenter from './presenter/filters-presenter';
import SortingPresenter from './presenter/sorting-presenter';
import EventsListPresenter from './presenter/events-list-presenter';

const tripControlsFiltersElement = document.querySelector('.trip-controls__filters');
const tripEventsElement = document.querySelector('.trip-events');
const filterPresenter = new FiltersPresenter({filtersContainer: tripControlsFiltersElement});
const sortingPresenter = new SortingPresenter({sortingContainer: tripEventsElement});
const tripEventsPresenter = new EventsListPresenter({listContainer: tripEventsElement});

filterPresenter.init();
sortingPresenter.init();
tripEventsPresenter.init();
