import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/UserAuthContext";
import Review from "./Review";

const MyReviews = () => {
  const [reviews, setReviews] = useState([]);
  const { userInfo } = useContext(AuthContext);
  
  useEffect(() => {
    fetch(`http://localhost:5000/my_reviews?email=${userInfo.email}`)
    .then(res => res.json())
    .then(data => setReviews(data))
  }, [userInfo.email]);

  return (
    <div className="py-10 mx-auto max-w-screen-xl px-4 md:px-6 ">
      {
        reviews.length === 0 && <p className="font-semibold text-center text-gray-500">No reviews were added</p>
      }
      {
        reviews.map(review => (
            <Review key={review._id} review={review} reviews={reviews} setReviews={setReviews}  />
        ))
      }
    </div>
  );
};

export default MyReviews;
