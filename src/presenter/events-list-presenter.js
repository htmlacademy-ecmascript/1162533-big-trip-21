import {render} from '../render';
import TripEventsListView from '../view/trip-events-list';
import TripEventsItemView from '../view/trip-events-item';
import TripEventView from '../view/trip-event';
import FavoriteButtonView from '../view/favorite-button';
import RollupButtonView from '../view/rollup-button';
import EventOffersItemView from '../view/event-offers-item';
import EventOffersTitleView from '../view/event-offers-title';
import EventOffersListView from '../view/event-offers-list';
import TripEventEditFormView from '../view/trip-event-edit-form';
import EventEditHeaderView from '../view/event-edit-header';
import EventTypeWrapperView from '../view/event-type-wrapper';
import EventTypeListView from '../view/event-type-list';
import EventTypeGroupView from '../view/event-type-group';
import EventTypeItemView from '../view/event-type-item';
import DestinationFormView from '../view/destination-form';
import DestinationOptionsListView from '../view/destination-options-list';
import DestinationOptionView from '../view/destination-option';
import TimeFormView from '../view/time-form';
import PriceFormView from '../view/price-form';
import SaveButtonView from '../view/save-button';
import ResetButtonView from '../view/reset-button';
import EventDetailsWrapperView from '../view/event-details-wrapper';
import EventSectionView from '../view/event-section';
import AvailableOffersWrapperView from '../view/available-offers-wrapper';
import EventOfferSelectorView from '../view/event-offer-selector';
import DestinationDescriptionView from '../view/destination-description';
import PhotosContainerView from '../view/photos-container';
import PhotosTapeView from '../view/photos-tape';
import EventPhotoView from '../view/event-photo';

const TRIP_TYPE = {
  TAXI: 'Taxi',
  BUS: 'Bus',
  TRAIN: 'Train',
  SHIP: 'Ship',
  DRIVE: 'Drive',
  FLIGHT: 'Flight',
  CHECK_IN: 'Check-in',
  SIGHTSEEING: 'Sightseeing',
  RESTAURANT: 'Restaurant'
};

const typesList = Object.values(TRIP_TYPE);

const TRIP_EVENTS_LIST = [
  {
    dateFrom: '2019-03-18T10:30',
    dateTo: '2019-03-18T11:00',
    destination: 'Amsterdam',
    type: TRIP_TYPE.TAXI,
    price: 20,
    isFavorite: true,
    availableOffers: [
      {
        title: 'Add luggage',
        name: 'luggage',
        price: 50
      },
      {
        title: 'Switch to comfort',
        name: 'comfort',
        price: 80
      },
      {
        title: 'Add meal',
        name: 'meal',
        price: 15
      },
      {
        title: 'Choose seats',
        name: 'seats',
        price: 5
      },
      {
        title: 'Travel by train',
        name: 'train',
        price: 40
      }
    ],
    chosenOffers: [
      {
        title: 'Add luggage',
        price: 50
      },
      {
        title: 'Switch to comfort',
        price: 80
      }
    ],
    destinationInfo: {
      description: 'Chamonix-Mont-Blanc (usually shortened to Chamonix) is a resort area near the junction of France, Switzerland and Italy. At the base of Mont Blanc, the highest summit in the Alps, it\'s renowned for its skiing.',
      pictures: [
        {
          src: 'img/photos/1.jpg',
          description: 'Event photo'
        },
        {
          src: 'img/photos/2.jpg',
          description: 'Event photo'
        },
        {
          src: 'img/photos/3.jpg',
          description: 'Event photo'
        }
      ]
    }
  },
  {
    dateFrom: '2019-03-18T12:25',
    dateTo: '2019-03-18T13:35',
    destination: 'Chamonix',
    type: TRIP_TYPE.FLIGHT,
    price: 160,
    isFavorite: true,
    chosenOffers: [
      {
        title: 'Add luggage',
        price: 50
      },
      {
        title: 'Switch to comfort',
        price: 80
      }
    ]
  },
  {
    dateFrom: '2019-03-18T14:30',
    dateTo: '2019-03-18T16:05',
    destination: 'Chamonix',
    type: TRIP_TYPE.DRIVE,
    price: 160,
    isFavorite: false,
    chosenOffers: [
      {
        title: 'Rent a car',
        price: 200
      }
    ]
  },
  {
    dateFrom: '2019-03-18T16:20',
    dateTo: '2019-03-18T17:00',
    destination: 'Chamonix',
    type: TRIP_TYPE.CHECK_IN,
    price: 600,
    isFavorite: false,
    chosenOffers: [
      {
        title: 'Add breakfast',
        price: 50
      }
    ]
  }
];

const destinationsList = TRIP_EVENTS_LIST.map(({destination}) => destination).reduce((acc, item) => {
  if (!acc.includes(item)) {
    return [...acc, item];
  }

  return acc;
}, []);

export default class EventsListPresenter {
  tripEventsListComponent = new TripEventsListView();

  constructor({listContainer}) {
    this.listContainer = listContainer;
  }

  init() {
    render(this.tripEventsListComponent, this.listContainer);

    const tripEventsListElement = this.tripEventsListComponent.getElement();

    TRIP_EVENTS_LIST.forEach(({chosenOffers, availableOffers, isFavorite, destinationInfo,...eventData}, index) => {
      const tripItemComponent = new TripEventsItemView();
      render(tripItemComponent, tripEventsListElement);

      if (index === 0) {
        const id = index + 1;

        const eventEditFormComponent = new TripEventEditFormView();
        const eventEditHeaderComponent = new EventEditHeaderView();
        const eventTypeWrapperComponent = new EventTypeWrapperView({typeData: {id, type: eventData.type}});
        const eventTypeListComponent = new EventTypeListView();
        const eventTypeGroupComponent = new EventTypeGroupView();

        const headerElement = eventEditHeaderComponent.getElement();

        render(eventEditFormComponent, tripItemComponent.getElement());

        const editFormElement = eventEditFormComponent.getElement();

        render(eventEditHeaderComponent, editFormElement);
        render(eventTypeWrapperComponent, headerElement);
        render(eventTypeListComponent, eventTypeWrapperComponent.getElement());
        render(eventTypeGroupComponent, eventTypeListComponent.getElement());

        const eventTypeGroupElement = eventTypeGroupComponent.getElement();

        typesList.forEach((type) => render(new EventTypeItemView({
          eventTypeData: {
            id,
            name: type.toLowerCase(),
            label: type
          }
        }), eventTypeGroupElement));

        const destinationFormComponent = new DestinationFormView({
          data: {
            id,
            type: eventData.type,
            destination: eventData.destination
          }});
        render(destinationFormComponent, headerElement);

        const destinationListComponent = new DestinationOptionsListView({id});
        render(destinationListComponent, destinationFormComponent.getElement());

        const destinationListElement = destinationListComponent.getElement();

        destinationsList.forEach((destination) => {
          render(new DestinationOptionView({value: destination}), destinationListElement);
        });

        const timeFormComponent = new TimeFormView({data: {
          id,
          dateFrom: eventData.dateFrom,
          dateTo: eventData.dateTo
        }});

        render(timeFormComponent, headerElement);

        const priceFormComponent = new PriceFormView({data: {
          id,
          price: eventData.price
        }});
        render(priceFormComponent, headerElement);

        const saveButtonComponent = new SaveButtonView({color: 'blue'});
        const resetButtonComponent = new ResetButtonView({title: 'Delete'});
        const rollupButtonComponent = new RollupButtonView();
        render(saveButtonComponent, headerElement);
        render(resetButtonComponent, headerElement);
        render(rollupButtonComponent, headerElement);

        const eventDetailsComponent = new EventDetailsWrapperView();
        render(eventDetailsComponent, editFormElement);

        const eventDetailsElement = eventDetailsComponent.getElement();

        if (availableOffers?.length) {
          const eventSectionOffersComponent = new EventSectionView({sectionData: {
            name: 'offers',
            title: 'Offers'
          }});

          render(eventSectionOffersComponent, eventDetailsElement);

          const availableOffersWrapperComponent = new AvailableOffersWrapperView();
          render(availableOffersWrapperComponent, eventSectionOffersComponent.getElement());

          const availableOffersWrapperElement = availableOffersWrapperComponent.getElement();

          availableOffers.forEach((availableOffer) => {
            render(new EventOfferSelectorView({selectorData: {
              id,
              name: availableOffer.name,
              label: availableOffer.title,
              price: availableOffer.price,
              isChecked: chosenOffers.some((chosenOffer) => chosenOffer.title === availableOffer.title)
            }}), availableOffersWrapperElement);
          });
        }

        const eventSectionDestinationComponent = new EventSectionView({sectionData: {
          name: 'destination',
          title: 'Destination'
        }});

        render(eventSectionDestinationComponent, eventDetailsElement);

        if (destinationInfo?.description) {
          const destinationDescriptionComponent = new DestinationDescriptionView({description: destinationInfo.description});
          render(destinationDescriptionComponent, eventDetailsElement);
        }

        if (destinationInfo?.pictures?.length) {
          const picturesContainerComponent = new PhotosContainerView();
          render(picturesContainerComponent, eventDetailsElement);

          const picturesTapeComponent = new PhotosTapeView();
          render(picturesTapeComponent, picturesContainerComponent.getElement());

          const picturesTapeElement = picturesTapeComponent.getElement();


          destinationInfo.pictures.forEach((picture) => {
            render(new EventPhotoView({data: {
              src: picture.src,
              name: picture.description
            }}), picturesTapeElement);
          });
        }


        return;
      }

      const eventComponent = new TripEventView({eventData});
      render(eventComponent, tripItemComponent.getElement());

      if (chosenOffers.length) {
        const offersList = new EventOffersListView();
        render(new EventOffersTitleView(), eventComponent.getElement());
        render(offersList, eventComponent.getElement());

        const offersListElement = offersList.getElement();

        chosenOffers.forEach((offerData) => render(new EventOffersItemView({offerData}), offersListElement));
      }

      render(new FavoriteButtonView({isFavorite}), eventComponent.getElement());
      render(new RollupButtonView(), eventComponent.getElement());
    });


  }
}
