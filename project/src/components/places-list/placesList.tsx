import Card from '../card/card';
import {ApartmentOffer} from '../../types/offers-type';
// import { useState } from 'react';


type PlaceListProps = {
    offers: ApartmentOffer[]
}
function PlacesList({offers}: PlaceListProps):JSX.Element{


  // const [activeCard, setActiveCard] = useState(null);
  return(
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer)=> <Card data={offer} key={offer.id}/>)}
    </div>
  );
}

export default PlacesList;
