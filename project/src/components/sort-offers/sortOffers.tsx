/* eslint-disable indent */
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { State } from '../../types/redux-types';
import { sortTypes } from '../../mocks/sortTypes';
import SortOption from '../sort-option/sortOption';
import { ActionType } from '../../store/action';
import { sortOffers } from '../../store/actionCreators';


function SortOffers():JSX.Element{
  const [isOpened, setIsOpened] = useState(false);
  const sortType = useSelector<State,State['sortType']>((state:State)=>state.sortType);
  const dispatch = useDispatch();

  const onSort = (type:State['sortType'])=>{
    dispatch(sortOffers(ActionType.SortOffers,type));
    setIsOpened(false);
  };

  return(
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by </span>
      <span className="places__sorting-type" tabIndex={0} onClick={()=>setIsOpened(true)}>
        {sortType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul  className={`places__options places__options--custom ${isOpened ? 'places__options--opened' : ''}`}>

        {sortTypes.map((type)=>(<SortOption sortType={type} onClick={()=>{
          onSort(type);
        }} key={type}
                                />))}

      </ul>
    </form>
  );
}

export default SortOffers;
