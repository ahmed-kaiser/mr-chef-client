import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { RiStarLine, RiArrowRightLine } from "react-icons/ri";

const TopServices = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/services?limit=${3}`)
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <section className="my-10">
      <div className="container flex flex-col justify-center mx-auto max-w-screen-xl px-4 md:px-6 ">
        <h2 className="font-serif font-bold text-2xl text-yellow-500 border-b-2 border-slate-100 pb-2">
          Top Service
        </h2>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 sm:grid-cols-2 justify-items-center py-6">
          {services.map((service) => (
            <Card key={service._id} service={service} />
          ))}
        </div>
        <div className="flex items-center gap-4">
          <p className="grow border border-slate-100"></p>
          <Link className="font-semibold text-sky-600 hover:text-sky-700 hover:underline">
            {" "}
            Show All{" "}
          </Link>
          <p className="grow border border-slate-100"></p>
        </div>
      </div>
    </section>
  );
};

const Card = ({ service }) => {
  const { _id, img, title, description, ratings } = service;
  return (
    <div className="max-w-xs rounded-md shadow-md bg-gray-100 text-gray-700">
      <img
        src={img}
        alt=""
        className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500"
      />
      <div className="flex flex-col justify-between p-6 space-y-5">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold tracking-wide">{title}</h2>
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

export default TopServices;
