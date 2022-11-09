import { RiEditLine, RiDeleteBin6Line, RiStarLine } from "react-icons/ri";

const Review = ({ review }) => {
  return (
    <div className="container flex flex-col mx-auto lg:flex-row mb-10 bg-gray-50">
      <div className="relative w-full lg:w-1/3">
        <img
          src={review.service[0].img}
          alt=""
          className="object-cover object-center h-full"
        />
      </div>
      <div className="flex flex-col w-full py-6 px-4 lg:w-2/3 md:p-8 lg:px-12 lg:py-3 ">
        <h2 className="text-2xl font-semibold leading-none border-b-2 pb-3 text-yellow-500">
          {review.serviceTitle}
        </h2>
        <div className="mt-6">
          <div className="flex items-center gap-4">
          <h2 className="font-semibold text-lg text-gray-600">Review</h2>
          <p className="flex items-center gap-1">
            <RiStarLine className="h-4 w-4 text-yellow-500" />
            <span className="font-semibold">{review.ratings}</span>
          </p>
          </div>
          <p className="mt-4 mb-8 text-sm pl-3">{review.message}</p>
          <div className="flex gap-10">
            <button className="flex item-center text-sm  gap-1 text-gray-500 hover:text-sky-500 font-semibold">
              <RiEditLine className="h-5 w-5" />
              <span>Edit</span>
            </button>
            <button className="flex item-center text-sm gap-1 font-semibold text-gray-500 hover:text-red-500">
              <RiDeleteBin6Line className="h-5 w-5" />
              <span>Delete</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
