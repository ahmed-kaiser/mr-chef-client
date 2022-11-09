import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();

  return (
    <section className="flex items-center h-full p-16">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <div className="max-w-md text-center">
          <h2 className="mb-8 font-extrabold text-5xl md:text-7xl text-gray-600">
            <span className="sr-only">Error</span>Oops!
          </h2>
          <p className="text-2xl font-semibold md:text-3xl">
            Sorry, an unexpected error has occurred.
          </p>
          <i className="mt-4 mb-8 text-gray-400 block">
            {error.statusText || error.message}
          </i>
          <Link
            to="/"
            className="px-8 py-3 font-semibold rounded text-sky-500 hover:underline"
          >
            Back to homepage
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Error;
