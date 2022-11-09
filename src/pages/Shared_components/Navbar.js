import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/images/logo/logo.png";
import { RiMenuLine, RiCloseLine, RiLogoutCircleRLine } from "react-icons/ri";
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
      .catch((err) => toast.error(err.code));
  };

  const menu = [
    { title: "Home", to: "/", private: false },
    { title: "Services", to: "/services" },
    { title: "My Review", to: "/myReviews", private: true },
    { title: "Add Service", to: "/addService", private: true },
    { title: "Blog", to: "/blog", private: false },
  ];

  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="py-2 bg-gray-100 text-gray-700 sticky top-0 z-20">
      <div className="container flex justify-between items-center h-16 mx-auto max-w-screen-xl px-4 md:px-6">
        {/* -------- Menu Button -------- */}
        <button className="pr-4 lg:hidden">
          {showMenu ? (
            <RiCloseLine onClick={handleShowMenu} className="h-6 w-6" />
          ) : (
            <RiMenuLine onClick={handleShowMenu} className="h-6 w-6" />
          )}
        </button>
        {/* -------- Logo -------- */}
        <Link
          to="/"
          aria-label="Back to homepage"
          className="flex items-center grow lg:grow-0 justify-center pr-8 md:pr-0"
        >
          <img src={logo} alt="logo" className="w-40" />
        </Link>
        {/* ------ Menu in large screen -------- */}
        <ul className="hidden space-x-3 lg:flex items-center">
          {menu.map((item, index) => {
            if (item.private && userInfo) {
              return <ListItem key={index} item={item} index={index} />;
            }
            if (!item.private) {
              return <ListItem key={index} item={item} index={index} />;
            }
          })}
        </ul>
        {/* ------ Menu in small screen -------- */}
        <div
          className={`absolute top-16 space-y-4 lg:hidden bg-gray-100 text-gray-800 w-52 h-screen pl-4 py-4 ${
            showMenu ? "left-0" : "-left-64"
          } duration-500`}
        >
          {userInfo && (
            <div className="flex items-center space-x-2 mt-3">
              <img
                src={userInfo.photoURL || profileImage}
                alt={userInfo.displayName}
                onError={(e) => (e.currentTarget.src = profileImage)}
                className="w-10 h-10 border rounded-full dark:bg-gray-500 dark:border-gray-700"
              />
              <div>
                <h2 className="font-semibold">
                  {userInfo.displayName || "No Name"}
                </h2>
                <span className="flex items-center space-x-1">
                  <Link
                    rel="noopener noreferrer"
                    href="#"
                    className="text-xs hover:underline dark:text-gray-400"
                  >
                    View profile
                  </Link>
                </span>
              </div>
            </div>
          )}
          <ul className="pl-2 space-y-4">
            {menu.map((item, index) => {
              if (item.private && userInfo) {
                return <ListItem key={index} item={item} index={index} sm={true} />;
              }
              if (!item.private) {
                return <ListItem key={index} item={item} index={index} sm={true} />;
              }
            })}
            {userInfo ? (
              <li>
                <button
                  onClick={handleSignOut}
                  className="flex items-center gap-1 self-center rounded font-semibold hover:text-sky-600"
                >
                  <span>Sign-Out</span>
                  <RiLogoutCircleRLine />
                </button>
              </li>
            ) : (
              <>
                <Link
                  to="/signIn"
                  className="self-center px-6 py-2 font-semibold rounded bg-sky-600 hover:bg-sky-500 duration-500 text-gray-50 inline-block mt-3"
                >
                  Sign-In
                </Link>
                <br />
                <Link
                  to="signUp"
                  className="self-center px-6 py-2 font-semibold rounded bg-sky-600 hover:bg-sky-500 duration-500 text-gray-50 inline-block mt-3"
                >
                  Sign up
                </Link>
              </>
            )}
          </ul>
        </div>
        {/* -------- Sign up/in button -------- */}
        <div className="hidden lg:flex items-center flex-shrink-0">
          {userInfo ? (
            <>
              <button
                onClick={handleSignOut}
                className="flex items-center gap-1 self-center px-6 py-2 rounded font-semibold hover:text-sky-600"
              >
                <span>Sign-Out</span>
                <RiLogoutCircleRLine />
              </button>
              <Link className="flex-shrink-0">
                <img
                  src={userInfo.photoURL || profileImage}
                  alt={userInfo.displayName}
                  onError={(e) => (e.currentTarget.src = profileImage)}
                  className="w-10 h-10 border rounded-full dark:bg-gray-500 dark:border-gray-700"
                />
              </Link>
            </>
          ) : (
            <>
              <Link
                to="/signIn"
                className="self-center px-6 py-2 rounded font-semibold hover:text-sky-600"
              >
                Sign-In
              </Link>
              <Link
                to="signUp"
                className="self-center px-6 py-2 font-semibold rounded bg-sky-600 hover:bg-sky-500 duration-500 text-gray-50"
              >
                Sign up
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

const ListItem = ({ item, sm }) => {
  return (
    <li className="font-semibold">
      <NavLink
        to={item.to}
        end
        className={({ isActive }) =>
          `pb-1 hover:border-b-2 hover:text-sky-600 hover:border-sky-600 duration-100 ${
            isActive && "border-b-2 text-sky-600 border-sky-600"
          } ${sm ? "pr-2" : "px-2"} `
        }
      >
        {item.title}
      </NavLink>
    </li>
  );
};

export default Navbar;
