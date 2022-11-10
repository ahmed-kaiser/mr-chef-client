import { useState } from "react";
import toast from "react-hot-toast";
import RatingStar from "../ServiceDetail/RatingStar";

const ReviewUpdateForm = ({ reviews, setReviews, id, prevRatings, message, showForm, setShowForm }) => {
  const [ratings, setRatings] = useState(prevRatings);

  const handleCheck = (index) => {
    setRatings(index + 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = e.target.message.value;

    fetch(`https://mr-chef-server-ahmed-kaiser.vercel.app/my-reviews?id=${id}`, {
        method: 'put',
        headers:{
            'content-type': 'application/json'
        },
        body: JSON.stringify({ message, ratings })
    })
    .then(res => res.json())
    .then(data => {
        if(data.acknowledged) {
            const newReviews = reviews.map(review => {
                if(review._id === id) {
                    review.message = message;
                    review.ratings = ratings;
                }
                return review;
            })
            setReviews(newReviews);
            setShowForm(false);
            toast.success("Review updated successfully...");
        }
    })
  };

  return (
    <div
      className={`container flex flex-col w-full max-w-3xl p-4 mx-auto divide-y rounded-md divide-gray-300 ${
        !showForm && "hidden"
      }`}
    >
      <div className="flex flex-col items-center w-full">
        <div className="flex flex-col items-center py-2 space-y-3">
          <span className="text-center">How was your experience?</span>
          <RatingStar rating={ratings} handleClick={handleCheck} />
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col w-full">
          <textarea
            defaultValue={message}
            rows="3"
            name="message"
            required
            placeholder="Message..."
            className="p-4 rounded-md resize-none outline-none"
          ></textarea>
          <button
            type="submit"
            className="py-2.5 my-2 font-semibold rounded-md text-gray-100 bg-sky-600"
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default ReviewUpdateForm;
