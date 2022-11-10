import { useContext } from "react";
import { AuthContext } from "../../context/UserAuthContext";
import useScrollTop from "../../hook/useScrollTop";
import useSetTitle from "../../hook/useSetTitle";
import { RiMailOpenLine } from "react-icons/ri";
import img from "../../assets/images/default/default-profile.jpg";

const Profile = () => {
  useSetTitle("Profile");
  useScrollTop();
  const { userInfo } = useContext(AuthContext);

  return (
    <section className="my-8 mx-auto max-w-screen-xl px-4 md:px-6">
      <div className="max-w-md p-8 sm:flex sm:space-x-6 bg-gray-50 text-gray-700 mx-auto">
        <div className="flex-shrink-0 w-full mb-6 h-44 sm:h-32 sm:w-32 sm:mb-0">
          <img
            src={userInfo.photoURL}
            alt=""
            onError={(e) => (e.currentTarget.src = img)}
            className="object-cover object-center w-full h-full rounded bg-gray-500"
          />
        </div>
        <div className="flex flex-col space-y-4">
          <div>
            <h2 className="text-2xl font-semibold capitalize">{userInfo.displayName}</h2>
          </div>
          <div className="space-y-1">
            <span className="flex items-center space-x-2">
              <RiMailOpenLine />
              <span className="text-gray-400">{userInfo.email}</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
