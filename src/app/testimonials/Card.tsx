import ReactStars from "react-star-rating-component";

const TestimonialsCard = ({ name, date, rating, description }: Props) => {
  return (
    <div
      style={{ minHeight: "24rem" }}
      className="bg-white rounded-lg shadow-lg p-6 border border-gray-100 flex flex-col items-start text-start"
    >
      <ReactStars
        name="rating"
        starCount={5}
        value={rating}
        starColor="#ffd700"
        emptyStarColor="#e5e7eb"
        editing={false}
      />
      <div>
        <b>
          posted {date} by {name}
        </b>
        <p>{description}</p>
      </div>
    </div>
  );
};

type Props = {
  name: string;
  date: string;
  rating: number;
  description: string;
};

export default TestimonialsCard;
