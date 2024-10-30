import { FaStar } from "react-icons/fa";

interface StarRatingProps {
  rating: number;
}

const StarRating = ({ rating }: StarRatingProps) => {
  const fullStars = Math.floor(rating);
  const partialStarPercentage = (rating - fullStars) * 100;

  return (
    <div className="flex items-center">
      {[...Array(fullStars)].map((_, i) => (
        <span key={i} className="text-[#FFAD33]">
          <FaStar />
        </span>
      ))}

      {fullStars < 5 && partialStarPercentage > 0 && (
        <span className="relative">
          <FaStar className="text-[#bfbfbf]" />
          <span
            className="absolute top-0 left-0 h-full overflow-hidden"
            style={{ width: `${partialStarPercentage}%` }}
          >
            <FaStar className="text-[#FFAD33]" />
          </span>
        </span>
      )}

      {[...Array(5 - Math.ceil(rating))].map((_, i) => (
        <span key={i} className="text-[#bfbfbf]">
          <FaStar />
        </span>
      ))}
    </div>
  );
};

export default StarRating;
