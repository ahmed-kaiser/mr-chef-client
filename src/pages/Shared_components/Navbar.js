import { Link } from "react-router-dom";
import logo from "../../assets/images/logo/logo.png";
import { RiMenuLine, RiCloseLine } from "react-icons/ri";
import { useState } from "react";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="py-2 bg-gray-100 text-gray-800 sticky top-0 z-10">
      <div className="container flex justify-between h-16 mx-auto max-w-screen-xl px-4 md:px-6">
        <Link
          to="/"
          aria-label="Back to homepage"
          className="flex items-center"
        >
          <img src={logo} alt="logo" className="w-40" />
        </Link>
        {/* ------ Menu in large screen -------- */}
        <ul className="hidden space-x-3 md:flex items-center">
          <li>
            <Link
              to="/"
              className="px-2 border-b-2 text-sky-600 border-sky-600"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to=""
              className="px-2 border-b-2 border-transparent"
            >
              My Review
            </Link>
          </li>
          <li>
            <Link
              to=""
              className="px-2 border-b-2 border-transparent"
            >
              Blog
            </Link>
          </li>
        </ul>
        {/* ------ Menu in small screen -------- */}
        <ul className={`absolute top-16 space-y-2 md:hidden items-center bg-gray-100 text-gray-800 w-52 h-screen pl-4 py-4 ${showMenu? 'left-0' : '-left-64'} duration-500`}>
          <li>
            <Link
              to="/"
              className="pr-2 border-b-2 text-sky-600 border-sky-600"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to=""
              className="pr-2 border-b-2 border-transparent"
            >
              My Review
            </Link>
          </li>
          <li>
            <Link
              to=""
              className="pr-2 border-b-2 border-transparent"
            >
              Blog
            </Link>
          </li>
        </ul>
        <div className="items-center flex-shrink-0 hidden md:flex">
          <button className="self-center px-6 py-2 rounded">Sign in</button>
          <button className="self-center px-6 py-2 font-semibold rounded bg-sky-600 text-gray-50">
            Sign up
          </button>
        </div>
        <button className="p-4 md:hidden">
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
