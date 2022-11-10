import { useContext } from "react";
import toast from "react-hot-toast";
import { RiGoogleFill } from "react-icons/ri";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/UserAuthContext";

const SocialLinkButton = () => {
    const { signUpWithGoogle } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const handleClick = () => {
      signUpWithGoogle()
      .then(res => {
        toast.success(`Welcome ${res.user.displayName}`);
        verify({ email : res.user.email });
        navigate(from, {replace:true});
      })
      .catch(err => toast.error(err.code))
    };

    const verify = (data) => {
      fetch('http://localhost:5000/verify', {
        method: 'post',
        headers: {
          'content-type' : 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(res => res.json())
      .then(data => {
        localStorage.setItem("userToken", data.token)
      })
    };

    return (
        <div className="my-6 space-y-4">
          <button
            onClick={handleClick}
            type="button"
            className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 focus:ring-sky-600 hover:bg-gray-100"
          >
            <RiGoogleFill className="h-6 w-6" />
            <p>Sign up with Google</p>
          </button>
        </div>
    );
};

export default SocialLinkButton;