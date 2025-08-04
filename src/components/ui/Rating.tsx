const Rating = ({ name, value }: Props) => {
  return (
    <div className="rating">
      <input
        type="radio"
        name="rating-2"
        className="mask mask-star-2 bg-orange-400"
        aria-label="1 star"
      />
      <input
        type="radio"
        name="rating-1"
        className="mask mask-star-2 bg-orange-400"
        aria-label="2 star"
        defaultChecked
        aria-current="true"
      />
      <input
        type="radio"
        name="rating-2"
        className="mask mask-star-2 bg-orange-400"
        aria-label="3 star"
      />
      <input
        type="radio"
        name="rating-2"
        className="mask mask-star-2 bg-orange-400"
        aria-label="4 star"
        aria-current="true"
      />
      <input
        type="radio"
        name="rating-2"
        className="mask mask-star-2 bg-orange-400"
        aria-label="5 star"
      />
    </div>
  );
};

const Star = ({ name, i }: { name: string; i: number }) => (
  <input
    type="radio"
    name={`${name}-${i}`}
    className="mask mask-star -2 bg-orange-400"
    aria-label={`${i + 1} star`}
  />
);

const NoStar = ({ name, i }: { name: string; i: number }) => (
  <input
    type="radio"
    name={`${name}-${i}`}
    className="mask mask-star-2"
    aria-label={`${i + 1} star`}
  />
);

type Props = {
  name: string;
  value: number;
};

export default Rating;
