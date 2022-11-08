import { useLoaderData } from "react-router-dom";
import Service from "../Shared_components/Service";

const Services = () => {
  const services = useLoaderData();

  return (
    <section className="my-10">
      <div className="container flex flex-col justify-center mx-auto max-w-screen-xl px-4 md:px-6 ">
        <h2 className="font-serif font-bold text-2xl text-yellow-500 border-b-2 border-slate-100 pb-2">
          All Service
        </h2>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 sm:grid-cols-2 justify-items-center py-6">
        {services.map((service) => (
            <Service key={service._id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
