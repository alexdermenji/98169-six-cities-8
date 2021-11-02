import { State } from '../types/redux-types';
import { SortOffersAction, ActionType } from './action';

export const sortOffersAction =(sortType:State['sortType']):SortOffersAction => ({
  type: ActionType.SortOffers,
  payload: sortType,
});
