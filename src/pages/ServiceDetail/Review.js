import { RiStarLine } from "react-icons/ri";
import defaultProfile from "../../assets/images/default/default-profile.jpg";

const Review = ({ review }) => {
  return (
    <div className="container flex flex-col w-full max-w-3xl p-4 mx-auto divide-y rounded-md bg-gray-100 divide-gray-300 mb-8">
      <div className="flex justify-between p-4">
        <div className="flex space-x-4">
          <div>
            <img
              src={review.img || defaultProfile}
              alt=""
              onError={(e) => (e.currentTarget.src = defaultProfile)}
              className="object-cover w-12 h-12 rounded-full bg-gray-500"
            />
          </div>
          <div>
            <h4 className="font-bold">{review.name}</h4>
            <p></p>
            <span className="text-xs text-gray-400">
              Date: {review.date.slice(0, 10)} Time: {review.date.slice(11, 16)}
            </span>
          </div>
        </div>
        <div className="flex items-center space-x-2 text-yellow-500">
          <RiStarLine className="h-6 w-6" />
          <span className="text-xl font-bold">{review.ratings}</span>
        </div>
      </div>
      <div className="p-4 space-y-2 text-sm text-gray-800">
        <p>{review.message}</p>
      </div>
    </div>
  );
};

export default Review;
