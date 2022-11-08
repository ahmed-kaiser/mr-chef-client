import { useContext } from "react";
import toast from "react-hot-toast";
import { RiGoogleFill } from "react-icons/ri";
import { AuthContext } from "../../context/UserAuthContext";

const SocialLinkButton = () => {
    const { signUpWithGoogle } = useContext(AuthContext);

    const handleClick = () => {
      signUpWithGoogle()
      .then(res => {
        toast.success(`Welcome ${res.user.displayName}`);
      })
      .catch(err => toast.error(err.code))
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