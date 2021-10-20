/* eslint-disable indent */
import {ReviewType} from '../../types/offers-type';


type ReviewsListProps = {
  review: ReviewType
}
function Review({review}:ReviewsListProps):JSX.Element {
  return(
 <li key={Math.random()} className="reviews__item">
          <div className="reviews__user user">
            <div className="reviews__avatar-wrapper user__avatar-wrapper">
              <img className="reviews__avatar user__avatar" src="img/avatar-max.jpg" width="54" height="54" alt="Reviews avatar"/>
            </div>
            <span className="reviews__user-name">
              {review.name}
            </span>
          </div>
          <div className="reviews__info">
            <div className="reviews__rating rating">
              <div className="reviews__stars rating__stars">
                <span style={{width: `${review.rating}%`}}></span>
                <span className="visually-hidden">Rating</span>
              </div>
            </div>
            <p className="reviews__text">
              {review.review}
            </p>
            <time className="reviews__time" dateTime="2019-04-24">{review.date}</time>
          </div>
 </li>);

}

export default Review;
