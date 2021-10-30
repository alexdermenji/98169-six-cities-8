import { SortOffersAction } from './action';
import { ActionType } from './action';
export const sortOffers =(type:ActionType.SortOffers, payload:string):SortOffersAction => ({
  type: type,
  payload: payload,
});
