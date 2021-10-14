import { useState } from 'react';

type RadioButtonProps = {
  value: number;
  onChange: (value: number) => void;
  checked: boolean;
}

function RadioButton({value,onChange,checked}:RadioButtonProps){
  return(
    <>
      <input
        className="form__rating-input visually-hidden"
        name="rating"
        value={value}
        id={`${value}-stars`}
        checked={checked}
        type="radio"
        onChange={() => onChange(value)}
      />
      <label htmlFor={`${value}-stars`} className="reviews__rating-label form__rating-label" title="good">
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"/>
        </svg>
      </label>
    </>
  );
}

function FormReview():JSX.Element{
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState<number>();

  return (
    <form className="reviews__form form" action="#" method="post"  >
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {Array(5).fill(null).map((_, i) => (
          <RadioButton value={i + 1} onChange={setRating} checked={rating === i + 1} key={Math.random()}/>
        ))}
      </div>
      <textarea
        className="reviews__textarea form__textarea" id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={comment}
        onChange={(e)=>setComment( e.target.value )}
      />

      <div className="reviews__button-wrapper">
        <p className="reviews__help">
                      To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>

        <button className="reviews__submit form__submit button" type="submit" disabled={comment.length === 0 || !rating}>
          Submit
        </button>
      </div>
    </form>
  );
}

export default FormReview;
