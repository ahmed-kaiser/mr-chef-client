import { RiStarLine } from "react-icons/ri";

const RatingStar = ({ rating, handleClick }) => {
  return (
    <div className="flex space-x-3">
      {[...Array(5)].map((item, index) => (
        <button key={index} type="button" onClick={() => handleClick(index)}>
          <RiStarLine
            className={`h-6 w-6 ${
                rating !== 0 && index < rating && "text-yellow-500"
            }`}
          />
        </button>
      ))}
    </div>
  );
};

export default RatingStar;
