/* eslint-disable indent */

import {useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import {ActionType} from '../../store/action';


type CitiesListProps = {
    cities: string[],
}
function CitiesList({cities}: CitiesListProps):JSX.Element{
  const activeCity = useSelector<{ city: string}, string>((state) => state.city);
  const dispatch = useDispatch();
  const menuClickHandler = (cityTitle:string)=>{
    dispatch({type:ActionType.CityChange, payload: cityTitle});
  };

  return(
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {cities.map((city) =>(<li key={city} className="locations__item">
            <Link onClick={() => menuClickHandler(city)} className={`locations__item-link tabs__item ${city===activeCity ? 'tabs__item--active' : ''}`} to="/">
              <span>{city}</span>
            </Link>
                                </li>)) }

        </ul>
      </section>
    </div>
  );
}

export default CitiesList;
