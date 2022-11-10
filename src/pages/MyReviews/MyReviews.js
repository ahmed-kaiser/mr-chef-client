import { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../context/UserAuthContext";
import useScrollTop from "../../hook/useScrollTop";
import useSetTitle from "../../hook/useSetTitle";
import Loading from "../Shared_components/Loading";
import Review from "./Review";

const MyReviews = () => {
  const [reviews, setReviews] = useState([]);
  const { userInfo, logOut } = useContext(AuthContext);
  const [isDataLoading, setIsDataLoading] = useState(true);

  useSetTitle("My Reviews");
  useScrollTop();
  
  useEffect(() => {
    fetch(`https://mr-chef-server-ahmed-kaiser.vercel.app/my_reviews?email=${userInfo.email}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem('userToken')}`
      }
    })
    .then(res => {
      if(res.status === 401) {
        toast.error("Unauthorized Access...!");
        logOut();
      }
      return res.json()
    })
    .then(data => {
      setReviews(data);
      setIsDataLoading(false);
    })
  }, [userInfo.email, logOut]);

  return (
    <div className="py-10 mx-auto max-w-screen-xl px-4 md:px-6 ">
      {
        isDataLoading? <Loading /> : reviews.length === 0 && <p className="font-semibold text-center text-gray-500">No reviews were added</p>
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
