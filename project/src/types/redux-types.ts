import { ApartmentOffer } from './offers-type';

export type State = {
  city: string,
  offers: ApartmentOffer[]
  sortType: string
}
