import toast from "react-hot-toast";
import useScrollTop from "../../hook/useScrollTop";
import useSetTitle from "../../hook/useSetTitle";

const AddService = () => {
  useSetTitle("Add Service");
  useScrollTop();
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const img = form.photoURL.value;
    const price = form.price.value;
    const description = form.description.value;

    const service = {
      title,
      img,
      price,
      description,
      review: 0,
      ratings: 0,
    };

    fetch("https://mr-chef-server-ahmed-kaiser.vercel.app/add_service", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(service),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          form.reset();
          toast.success("New service added successfully....");
        }
      });
  };

  return (
    <section className="p-6 text-gray-600">
      <form
        onSubmit={handleSubmit}
        className="container w-full max-w-xl p-8 mx-auto space-y-6 rounded-md shadow ng-untouched ng-pristine ng-valid"
      >
        <h2 className="w-full text-3xl font-bold leading-tight text-gray-600">
          Add a New Service
        </h2>
        <div>
          <label htmlFor="name" className="block mb-1 ml-1">
            Title
          </label>
          <input
            type="text"
            name="title"
            placeholder="Service title"
            required
            className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-sky-600 border-gray-200"
          />
        </div>
        <div>
          <label htmlFor="name" className="block mb-1 ml-1">
            Photo URL
          </label>
          <input
            type="text"
            name="photoURL"
            placeholder="http://"
            required
            className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-sky-600 border-gray-200"
          />
        </div>
        <div>
          <label htmlFor="email" className="block mb-1 ml-1">
            Price
          </label>
          <input
            type="number"
            name="price"
            placeholder="100"
            min={1}
            required
            className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-sky-600 border-gray-200"
          />
        </div>
        <div>
          <label htmlFor="message" className="block mb-1 ml-1">
            Description
          </label>
          <textarea
            type="text"
            name="description"
            placeholder="About service..."
            required
            className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-sky-600 border-gray-200"
          ></textarea>
        </div>
        <div>
          <button
            type="submit"
            className="w-full px-4 py-2 font-bold rounded shadow focus:outline-none focus:ring-opacity-50 bg-sky-600 hover:bg-sky-500 text-gray-200 duration-300"
          >
            Add
          </button>
        </div>
      </form>
    </section>
  );
};

export default AddService;
