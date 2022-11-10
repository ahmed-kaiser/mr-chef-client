import { useState } from "react";
import toast from "react-hot-toast";
import { RiEditLine, RiDeleteBin6Line, RiStarLine } from "react-icons/ri";
import ReviewUpdateForm from "./ReviewUpdateForm";

const Review = ({ review, reviews, setReviews }) => {
  const [showForm, setShowForm] = useState(false);
  const [askConfirmation, setAskConfirmation] = useState(false);

  const handleDeleteConfirm = () => {
    fetch(`http://localhost:5000/my-reviews/${review._id}`, {
      method: 'delete'
    })
    .then(res => res.json())
    .then(data => {
      if(data.acknowledged){
        setReviews(reviews.filter(item => item._id !== review._id ));
        toast.success("Review deleted successfully...")
      }
    })
  };

  const handleDeleteConfirmation = () => {
    setAskConfirmation(!askConfirmation);
  }

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
        {!showForm ? (
          <div className="relative mt-6">
            <div className="flex items-center gap-4">
              <h2 className="font-semibold text-lg text-gray-600">Review</h2>
              <p className="flex items-center gap-1">
                <RiStarLine className="h-4 w-4 text-yellow-500" />
                <span className="font-semibold">{review.ratings}</span>
              </p>
            </div>
            <p className="mt-4 mb-8 text-sm pl-3">{review.message}</p>
            <div className="flex gap-10">
              <button
                onClick={() => setShowForm(true)}
                className="flex item-center text-sm  gap-1 text-gray-500 hover:text-sky-500 font-semibold"
              >
                <RiEditLine className="h-5 w-5" />
                <span>Edit</span>
              </button>
              <button onClick={handleDeleteConfirmation} className="flex item-center text-sm gap-1 font-semibold text-gray-500 hover:text-red-500">
                <RiDeleteBin6Line className="h-5 w-5" />
                <span>Delete</span>
              </button>
            </div>
            {
              askConfirmation && 
              <div className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 gap-3 p-3 rounded-md text-sm text-center text-gray-600 bg-gray-100 w-full h-full">
                <div className="p-3">
                  <p>Are you sure, you want to delete the review ?</p>
                  <div className="flex gap-3 mt-2 justify-center">
                    <button onClick={handleDeleteConfirmation} className="border border-sky-600 px-2 py-1 rounded-sm text-sm font-semibold hover:text-sky-600 duration-300">Cancel</button>
                    <button onClick={handleDeleteConfirm} className="border border-red-600 px-2 py-1 rounded-sm text-sm font-semibold hover:text-red-600 duration-300">Confirm</button>
                  </div>
                </div>
              </div>
            }
          </div>
        ) : (
          <ReviewUpdateForm
            reviews = {reviews}
            setReviews = {setReviews}
            id={review._id}
            message={review.message}
            prevRatings={review.ratings}
            showForm={showForm}
            setShowForm={setShowForm}
          />
        )}
      </div>
    </div>
  );
};

export default Review;
