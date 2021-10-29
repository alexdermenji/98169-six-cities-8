import { useDispatch, useSelector } from 'react-redux';
import { ApartmentOffer } from '../../types/offers-type';
import {ActionType} from '../../store/action';
import { useState } from 'react';


function FilterOffers():JSX.Element{
  const [filterActive, setFilterActive] = useState(false);
  const [activeFilterText, setActiveFilterText] = useState('Popular');
  const filterTabHandler = ()=>{
    setFilterActive(!filterActive);
  };
  const offers = useSelector<{ offers: ApartmentOffer[]},ApartmentOffer[]>((state) => state.offers);
  const popularOffers = offers;
  const dispatch = useDispatch();

  const sortPopularOffers =()=> {
    dispatch({type:ActionType.SortOffers, payload: popularOffers});
    setActiveFilterText('Popular');
  };
  const sortDesOffers = ()=> {
    const sortedOffers = offers.sort((a,b)=>a.price-b.price);
    dispatch({type:ActionType.SortOffers, payload: sortedOffers});
    setActiveFilterText('Price: low to high');

  };
  const sortAscOffers = ()=> {
    const sortedOffers = offers.sort((a,b)=>b.price-a.price);
    dispatch({type:ActionType.SortOffers, payload: sortedOffers});
    setActiveFilterText('Price: high to low');
  };
  const sortRatingOffers = ()=> {
    const sortedOffers = offers.sort((a,b)=>b.rating-a.rating);
    dispatch({type:ActionType.SortOffers, payload: sortedOffers});
    setActiveFilterText('Top rated first');
  };


  return(
    <form className="places__sorting" action="#" method="get" onClick={filterTabHandler}>
      <span className="places__sorting-caption">Sort by </span>
      <span className="places__sorting-type" tabIndex={0}>
        {activeFilterText}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul  className={`places__options places__options--custom ${filterActive ? 'places__options--opened' : ''}`}>
        <li onClick={()=>sortPopularOffers()}
          className="places__option places__option--active"
          tabIndex={0}
        >
        Popular
        </li>
        <li className="places__option" tabIndex={0} onClick={()=>sortDesOffers()}>
        Price: low to high
        </li>
        <li className="places__option" tabIndex={0} onClick={()=>sortAscOffers()}>
        Price: high to low
        </li>
        <li className="places__option" tabIndex={0} onClick={()=>sortRatingOffers()}>
        Top rated first
        </li>
      </ul>
    </form>
  );
}

export default FilterOffers;
