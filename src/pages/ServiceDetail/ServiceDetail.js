import { useLoaderData } from "react-router-dom";
import { RiStarLine } from "react-icons/ri";
import Review from "./Review";
import ReviewForm from "./ReviewForm";
import { useState } from "react";

const ServiceDetail = () => {
  const [showForm, setShoeForm] = useState(false);
  const service = useLoaderData();

  const handleShowForm = () => {
    setShoeForm(!showForm);
  }

  return (
    <section className="text-gray-800 py-10">
      <div className="container flex flex-col lg:flex-row gap-4 mx-auto max-w-screen-xl px-4 md:px-6 pb-10">
        <div className="w-full lg:w-1/3 rounded-md overflow-hidden">
            <img src={service.img} alt="" />
        </div>
        <div className="flex flex-col w-full lg:w-2/3 md:pl-4">
          <h2 className="text-3xl font-semibold leading-none capitalize">
            {service.title}
          </h2>
          <p className="flex items-center gap-1 py-2">
            <RiStarLine className="h-5 w-5 text-yellow-500" />
            <span className="font-semibold">{service.ratings}</span>
          </p>
          <p className="mt-1 mb-3 max-w-2xl">
            {service.description}
          </p>
          <p className="flex items-center gap-1 mb-5 mt-2 bg-slate-200 p-1 bg-gradient-to-r from-yellow-50 to-white">
            <span className="font-semibold">Price:</span>
            ${service.price}
          </p>
          <button className="self-start px-10 py-2.5 text-lg font-medium rounded-md bg-sky-600 text-gray-100">
            Make a Booking
          </button>
        </div>
      </div>
      <div className="container mx-auto max-w-screen-xl px-4 md:px-6 py-10">
       <div className="flex items-center border-b-2 border-slate-100 pb-1 justify-between relative">
       <h3 className="font-bold font-serif text-xl text-yellow-600">Reviews</h3>
       <button onClick={handleShowForm} className="absolute right-0 -bottom-10 bg-slate-100 pl-6 pr-3 py-2 rounded-bl-full font-semibold text-sky-500 hover:underline underline-offset-4">Make Review</button>
       </div>
       <div className="mt-16">
        <ReviewForm show={showForm} serviceId={service._id} />
        <Review />
       </div>
      </div>
    </section>
  );
};

export default ServiceDetail;
