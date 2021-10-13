import Card from '../card/card';
import {OfferType} from '../../types/offers-type';
import { useState } from 'react';


type PlaceListProps = {
    offers: OfferType[]
}
function PlacesList({offers}: PlaceListProps):JSX.Element{
  console.log(offers);

  const [activeCard, setActiveCard] = useState(null);
  return(
    <div className="cities__places-list places__list tabs__content">

      {offers.map((offer, index)=> <Card data={offer} key={offer.id}/>)}
    </div>
  );
}

export default PlacesList;
