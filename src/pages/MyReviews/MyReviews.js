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
        reviews.map(review => (
            <Review review={review} />
        ))
      }
    </div>
  );
};

export default MyReviews;
