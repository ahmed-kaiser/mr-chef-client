import { Link } from "react-router-dom";
import logo from "../../assets/images/logo/logo.png";
import {
  RiFacebookCircleFill,
  RiInstagramFill,
  RiYoutubeFill,
} from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-800 mt-16">
      <div className="mx-auto max-w-screen-xl px-4 md:px-6">
        <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
          <div className="lg:w-1/3">
            <Link
              to="/"
              className="flex justify-center space-x-3 lg:justify-start"
            >
              <img src={logo} alt="logo" className="w-40" />
            </Link>
          </div>
          <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
            <div className="space-y-3">
              <h3 className="tracking-wide uppercase font-semibold">Product</h3>
              <ul className="space-y-1">
                <li>
                  <Link>Features</Link>
                </li>
                <li>
                  <Link>Integrations</Link>
                </li>
                <li>
                  <Link>Pricing</Link>
                </li>
                <li>
                  <Link>FAQ</Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="tracking-wide uppercase font-semibold">Company</h3>
              <ul className="space-y-1">
                <li>
                  <Link>Privacy</Link>
                </li>
                <li>
                  <Link>Terms of Service</Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="uppercase font-semibold">Developers</h3>
              <ul className="space-y-1">
                <li>
                  <Link>Public API</Link>
                </li>
                <li>
                  <Link>Documentation</Link>
                </li>
                <li>
                  <Link>Guides</Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <div className="uppercase text-gray-50">Social media</div>
              <div className="flex justify-start space-x-3">
                <button>
                  <RiFacebookCircleFill className="h-6 w-6" />
                </button>
                <button>
                  <RiYoutubeFill className="h-6 w-6" />
                </button>
                <button>
                  <RiInstagramFill className="h-6 w-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="py-6 text-sm text-center text-gray-400">
          All rights reserved. @ 2022
        </div>
      </div>
    </footer>
  );
};

export default Footer;
