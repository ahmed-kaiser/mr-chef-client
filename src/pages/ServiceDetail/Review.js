import { RiStarLine } from "react-icons/ri";

const Review = () => {
  return (
    <div className="container flex flex-col w-full max-w-3xl p-4 mx-auto divide-y rounded-md bg-gray-100 divide-gray-300">
      <div className="flex justify-between p-4">
        <div className="flex space-x-4">
          <div>
            <img
              src="https://source.unsplash.com/100x100/?portrait"
              alt=""
              className="object-cover w-12 h-12 rounded-full bg-gray-500"
            />
          </div>
          <div>
            <h4 className="font-bold">Leroy Jenkins</h4>
            <span className="text-xs text-gray-400">2 days ago</span>
          </div>
        </div>
        <div className="flex items-center space-x-2 text-yellow-500">
          <RiStarLine className="h-6 w-6" />
          <span className="text-xl font-bold">4.5</span>
        </div>
      </div>
      <div className="p-4 space-y-2 text-sm text-gray-800">
        <p>
          Vivamus sit amet turpis leo. Praesent varius eleifend elit, eu dictum
          lectus consequat vitae. Etiam ut dolor id justo fringilla finibus.
        </p>
        <p>
          Donec eget ultricies diam, eu molestie arcu. Etiam nec lacus eu mauris
          cursus venenatis. Maecenas gravida urna vitae accumsan feugiat.
          Vestibulum commodo, ante sit urna purus rutrum sem.
        </p>
      </div>
    </div>
  );
};

export default Review;
