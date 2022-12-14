import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Service from "../Shared_components/Service";
import Loading from "../Shared_components/Loading";

const TopServices = () => {
  const [services, setServices] = useState([]);
  const [isDataLoading, setIsDataLoading] = useState(true);

  useEffect(() => {
    fetch(`https://mr-chef-server-ahmed-kaiser.vercel.app/services?limit=${3}`)
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
        setIsDataLoading(false);
      });
  }, []);

  return (
    <section className="my-10">
      <div className="container flex flex-col justify-center mx-auto max-w-screen-xl px-4 md:px-6 ">
        <h2 className="font-serif font-bold text-2xl text-yellow-600 border-b-2 border-slate-100 pb-2">
          Top Service
        </h2>
        {
          isDataLoading && <Loading />
        }
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 sm:grid-cols-2 justify-items-center py-6">
          {services.map((service) => (
            <Service key={service._id} service={service} />
          ))}
        </div>
        <div className="flex items-center gap-4">
          <p className="grow border border-slate-100"></p>
          <Link to="/services" className="font-semibold text-sky-600 hover:text-sky-700 hover:underline">
            {" "}
            Show All{" "}
          </Link>
          <p className="grow border border-slate-100"></p>
        </div>
      </div>
    </section>
  );
};

export default TopServices;
