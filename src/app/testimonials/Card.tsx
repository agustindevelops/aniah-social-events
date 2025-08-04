import Rating from "@/components/ui/Rating";

const TestimonialsCard = ({ name, date, rating, description }: Props) => {
  return (
    <div
      style={{ minHeight: "24rem" }}
      className="bg-white rounded-lg shadow-lg p-6 border border-gray-100 flex flex-col items-start text-start"
    >
      <div className="flex flex-row items-center gap-2 w-64">
        <Rating name={name} value={rating} />
      </div>
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
