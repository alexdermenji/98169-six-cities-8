import { ApartmentOffer } from './offers-type';

export type State = {
  city: string,
  offers: ApartmentOffer[]
  sortType: 'Popular' | 'Price high to low' | 'Price low to high' | 'Rating',
}
