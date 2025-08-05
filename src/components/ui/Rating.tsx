const Rating = ({ name, value }: Props) => {

  return (
    <div className="rating">
      {Array.from({ length: 5 }).map((_, i) =>
        value > i ? (
          <Star name={name} i={i} key={`${name}-${i}`} />
        ) : (
          <NoStar name={name} i={i} key={`${name}-${i}`} />
        )
      )}
    </div>
  );
};

const Star = ({ name, i }: { name: string; i: number }) => (
  <input
    type="radio"
    name={`${name}-${i}`}
    className="mask mask-star -2 bg-orange-400"
    aria-label={`${i + 1} star`}
    key={`${name}-${i}`}
  />
);

const NoStar = ({ name, i }: { name: string; i: number }) => (
  <input
    type="radio"
    name={`${name}-${i}`}
    className="mask mask-star-2 bg-orange-100"
    aria-label={`${i + 1} star`}
  />
);

type Props = {
  name: string;
  value: number;
};

export default Rating;
