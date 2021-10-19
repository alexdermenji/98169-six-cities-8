import Card from '../card/card';
import {ApartmentOffer} from '../../types/offers-type';
// import { useState } from 'react';


type PlaceListProps = {
    offers: ApartmentOffer[]
    onListItemHover?: (listItemName: string) => void;
}
function PlacesList({offers, onListItemHover}: PlaceListProps):JSX.Element{
  return(
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer)=> <Card onListItemHover={onListItemHover} data={offer} key={offer.id}/>)}
    </div>
  );
}

export default PlacesList;
