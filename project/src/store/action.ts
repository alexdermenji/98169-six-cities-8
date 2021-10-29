import { ApartmentOffer } from '../types/offers-type';

export enum ActionType {
  CityChange = 'cityChange',
  GetOffers = 'getOffers',
  SortOffers='sortOffers',
}

export type CityChangeAction = {
  type: ActionType.CityChange;
  payload: string
};

export type GetOffersAction = {
  type: ActionType.GetOffers;
  payload: ApartmentOffer[]
};
export type SortOffersAction = {
  type: ActionType.SortOffers;
  payload: ApartmentOffer[]
};

export type Actions = CityChangeAction | GetOffersAction | SortOffersAction
