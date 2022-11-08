import { RiArrowRightLine, RiStarLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const Service = ({service}) => {
  const { _id, img, title, description, ratings } = service;

  return (
    <div className="max-w-sm rounded-md shadow-md bg-gray-100 text-gray-700">
      <img
        src={img}
        alt=""
        className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500"
      />
      <div className="flex flex-col justify-between p-6 space-y-5">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold tracking-wide capitalize">{title}</h2>
          <p>{description.split("", 60)} ....</p>
          <p className="flex items-center gap-1">
            <RiStarLine className="h-5 w-5 text-yellow-500" />
            <span className="font-semibold">{ratings}</span>
          </p>
        </div>
        <Link
          to={`/services/${_id}`}
          type="button"
          className="flex items-center justify-center gap-2 w-full p-3 font-semibold tracking-wide rounded-md bg-sky-600 text-gray-100"
        >
          <span>Explore</span>
          <RiArrowRightLine className="h-6 w-6" />
        </Link>
      </div>
    </div>
  );
};

export default Service;
