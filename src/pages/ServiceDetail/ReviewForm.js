import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../context/UserAuthContext";
import RatingStar from "./RatingStar";

const ReviewForm = ({ handleRefresh, serviceId, show, handleShowForm }) => {
  const [ratings, setRating] = useState(0);
  const { userInfo } = useContext(AuthContext);

  const handleCheck = (index) => {
    setRating(index + 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = e.target.message.value;
    const review = {
      userEmail: userInfo.email,
      name: userInfo.displayName,
      img: userInfo.photoURL,
      serviceId,
      ratings,
      message,
      date: new Date(),
    };
    fetch("http://localhost:5000/reviews", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          e.target.reset();
          setRating(0);
          handleShowForm();
          handleRefresh();
          toast.success("Review Added...");
        }
      })
      .catch((err) => toast.error(err));
  };

  return (
    <div
      className={`container flex flex-col w-full max-w-3xl p-4 mx-auto divide-y rounded-md bg-gray-100 divide-gray-300 mb-10 ${
        !show && "hidden"
      }`}
    >
      <div className="flex flex-col items-center w-full">
        <h2 className="text-2xl font-semibold text-center">
          Your opinion matters!
        </h2>
        <div className="flex flex-col items-center py-2 space-y-3">
          <span className="text-center">How was your experience?</span>
          <RatingStar rating={ratings} handleClick={handleCheck} />
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col w-full">
          <textarea
            rows="3"
            name="message"
            required
            placeholder="Message..."
            className="p-4 rounded-md resize-none outline-none"
          ></textarea>
          <button
            type="submit"
            className="py-4 my-2 font-semibold rounded-md text-gray-100 bg-sky-400"
          >
            Leave feedback
          </button>
        </form>
      </div>
    </div>
  );
};

export default ReviewForm;
