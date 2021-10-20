import Card from '../card/card';
import {ApartmentOffer} from '../../types/offers-type';


type PlaceListProps = {
    placesClass: string,
    offers: ApartmentOffer[]
    onListItemHover: (listItemName: string) => void;
}
function PlacesList({offers, onListItemHover, placesClass}: PlaceListProps):JSX.Element{
  return(
    <div className={placesClass === 'near'? 'near-places__list places__list' : 'cities__places-list places__list tabs__content'}>
      {offers.map((offer)=> <Card placesClass={placesClass==='near'? 'near-places__card':'cities__place-card'} onListItemHover={onListItemHover} data={offer} key={offer.id}/>)}
    </div>
  );
}

export default PlacesList;
