import { ActionType,Actions } from '../store/action';
import { State} from '../types/redux-types';
import {allOffers} from '../mocks/offers';


const initialState = {
  city: 'Paris',
  offers: allOffers[0].offers,
};


const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionType.CityChange: {
      const [newOffers] = allOffers.filter((offer) => offer.title === action.payload);
      if (newOffers) {
        return {
          city: action.payload,
          offers: newOffers.offers,
        };
      }
      return {
        city: action.payload,
        offers: [],
      };
    }
    case ActionType.SortOffers: {
      return {
        ...state,
        offers: action.payload,
      };
    }


    default:
      return state;
  }
};

export {reducer};
