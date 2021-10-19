/* eslint-disable indent */

import FormReview from '../form-review/formReview';
import Review from '../review/Review';
import {ReviewType} from '../../types/offers-type';


type ReviewsListProps = {
  reviews: ReviewType[]
}
function ReviewsList({reviews}:ReviewsListProps):JSX.Element {

  return(
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">

        {reviews.map((review)=><Review key={Math.random()} review={review}/>)}

      </ul>
      <FormReview/>
    </section>
  );
}

export default ReviewsList;
