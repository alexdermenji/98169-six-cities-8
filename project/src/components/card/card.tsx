/* eslint-disable no-console */
import { Link } from 'react-router-dom';
import {ApartmentOffer } from '../../types/offers-type';
type CardProps = {
  placesClass: string,
  data: ApartmentOffer
  onListItemHover: (listItemName: string) => void;
};

function Card({data, onListItemHover, placesClass}:CardProps): JSX.Element {
  const {
    id,
    name ,
    premium,
    type,
    price,
  } = data;

  console.log(placesClass);
  const listItemHoverHandler = () => {
    onListItemHover(id);
  };


  return (

    <article className={`${placesClass} place-card`} onMouseOver={listItemHoverHandler}>
      {premium && <div className="place-card__mark"><span>Premium</span></div>}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <img
          className="place-card__image"
          src="img/apartment-01.jpg"
          width="260"
          height="200"
          alt="Place"
        />

      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: '80%' }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name" >
          <Link to={`/offer/${id}`}>{name}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default Card;
