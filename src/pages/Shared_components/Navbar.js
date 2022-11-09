import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/images/logo/logo.png";
import { RiMenuLine, RiCloseLine } from "react-icons/ri";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/UserAuthContext";
import profileImage from "../../assets/images/default/default-profile.jpg";
import toast from "react-hot-toast";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const { userInfo, logOut } = useContext(AuthContext);

  const handleSignOut = () => {
    logOut()
    .then(() => toast.success("Logged Out...."))
    .catch(err => toast.error(err.code))
  }

  const menu = [
    { title: "Home", to: "/" },
    { title: "Services", to: "/services" },
    { title: "My Review", to: "/myReviews" },
    { title: "Add Service", to: "/add-service" },
    { title: "Blog", to: "/blog" },
  ];

  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="py-2 bg-gray-100 text-gray-700 sticky top-0 z-20">
      <div className="container flex justify-between h-16 mx-auto max-w-screen-xl px-4 md:px-6">
        <Link
          to="/"
          aria-label="Back to homepage"
          className="flex items-center"
        >
          <img src={logo} alt="logo" className="w-40" />
        </Link>
        {/* ------ Menu in large screen -------- */}
        <ul className="hidden space-x-3 lg:flex items-center">
          {menu.map((item, index) => (
            <li key={index} className="font-semibold">
              <NavLink
                to={item.to}
                end
                className={({ isActive }) =>
                  `px-2 pb-1 ${
                    isActive && "border-b-2 text-sky-600 border-sky-600"
                  }`
                }
              >
                {item.title}
              </NavLink>
            </li>
          ))}
        </ul>
        {/* ------ Menu in small screen -------- */}
        <ul
          className={`absolute top-16 space-y-4 lg:hidden items-center bg-gray-100 text-gray-800 w-52 h-screen pl-4 py-4 ${
            showMenu ? "left-0" : "-left-64"
          } duration-500`}
        >
          {menu.map((item, index) => (
            <li key={index} className="font-semibold">
              <NavLink
                to={item.to}
                end
                className={({ isActive }) =>
                  `pr-2 pb-1 ${
                    isActive && "border-b-2 text-sky-600 border-sky-600"
                  }`
                }
              >
                {item.title}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="items-center flex-shrink-0 hidden lg:flex">
          {userInfo ? (
            <>
            <button onClick={handleSignOut} className="self-center px-6 py-2 rounded">
                Sign out
            </button>
            <Link className="relative flex-shrink-0">
              <span className="absolute bottom-0 right-0 w-4 h-4 bg-green-600 border rounded-full"></span>
              <img
                src={userInfo.photoURL || profileImage}
                alt={userInfo.displayName}
                onError={(e) => e.currentTarget.src = profileImage}
                className="w-12 h-12 border rounded-full dark:bg-gray-500 dark:border-gray-700"
              />
            </Link>
            </>
          ) : (
            <>
              <Link to="/signIn" className="self-center px-6 py-2 rounded">
                Sign in
              </Link>
              <Link
                to="signUp"
                className="self-center px-6 py-2 font-semibold rounded bg-sky-600 text-gray-50"
              >
                Sign up
              </Link>
            </>
          )}
        </div>
        <button className="p-4 lg:hidden">
          {showMenu ? (
            <RiCloseLine onClick={handleShowMenu} className="h-6 w-6" />
          ) : (
            <RiMenuLine onClick={handleShowMenu} className="h-6 w-6" />
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
