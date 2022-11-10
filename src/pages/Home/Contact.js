import img from "../../assets/images/other/personal-chef.jpg";

const Contact = () => {
  return (
    <section className="max-w-screen-xl px-4 md:px-6 mx-auto my-16">
    <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 bg-gray-50">
      <div className="flex flex-col justify-between">
        <div className="space-y-2">
          <h2 className="text-4xl font-bold leading-tight lg:text-5xl text-gray-600">
            Let's talk!
          </h2>
          <div className="text-gray-400">Feel free to contact......</div>
        </div>
        <div className="pt-4 sm:pr-4 grow flex items-center">
            <img src={img} alt="" className="w-full h-full rounded-xl" />
        </div>
      </div>
      <form
        className="space-y-6 ng-untouched ng-pristine ng-valid"
      >
        <div>
          <label htmlFor="name" className="text-sm">
            Full name
          </label>
          <input
            id="name"
            type="text"
            placeholder="Your name"
            className="w-full p-3 rounded border-gray-200"
          />
        </div>
        <div>
          <label htmlFor="email" className="text-sm">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="example@gmail.com"
            className="w-full p-3 rounded border-gray-200"
          />
        </div>
        <div>
          <label htmlFor="message" className="text-sm">
            Message
          </label>
          <textarea
            id="message"
            rows="3"
            placeholder="Your message....."
            className="w-full p-3 rounded border-gray-200"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded bg-sky-600 hover:bg-sky-500 text-gray-100 duration-300"
        >
          Send Message
        </button>
      </form>
    </div>
    </section>
  );
};

export default Contact;
