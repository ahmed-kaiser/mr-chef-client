import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { RiArrowRightSLine, RiArrowLeftSLine } from "react-icons/ri";
import img1 from "../../assets/images/slider-image/img1.jpg";
import img2 from "../../assets/images/slider-image/img2.jpg";
import img3 from "../../assets/images/slider-image/img3.jpg";
import img4 from "../../assets/images/slider-image/img4.jpg";

const imageList = [img1, img2, img3, img4];
let count = 0;

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideRef = useRef();

  const handlePrevClick = () => {
    const imageListLength = imageList.length;
    count = (currentIndex + imageListLength - 1) % imageListLength;
    setCurrentIndex(count);
  };

  const handleNextClick = () => {
    count = (count + 1) % imageList.length;
    setCurrentIndex(count);
  };

  useEffect(() => {
    const sliderInterval = setInterval(() => {
      handleNextClick();
    }, 6000);

    return () => clearInterval(sliderInterval);
  }, []);

  return (
    <div className="mx-auto max-w-screen-xl px-4 md:px-6 mt-2">
      <div
        ref={slideRef}
        className="w-full select-none relative bg-gradient-to-r from-slate-700 to-slate-800 overflow-hidden rounded-lg"
      >
        <div className="aspect-w-16 aspect-h-12 sm:aspect-h-7 mix-blend-overlay">
          <img src={imageList[currentIndex]} alt="..." className="rounded-lg" />
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 w-full flex justify-between items-start gap-3 px-1 sm:px-3 z-10">
          <Button handleClick={handlePrevClick}>
            <RiArrowLeftSLine className="w-4 sm:w-6 h-4 sm:h-6" />
          </Button>
          <Button handleClick={handleNextClick}>
            <RiArrowRightSLine className="w-4 sm:w-6 h-4 sm:h-6" />
          </Button>
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 min-w-[250px] sm:max-w-sm text-white text-center">
          <h1 className="font-serif font-bold text-2xl sm:text-4xl md:text-5xl text-yellow-700">
            Your Personal Chef
          </h1>
          <p className="font-semibold py-2 sm:py-4 block text-sm sm:text-base max-w-[200px] sm:max-w-xs mx-auto text-slate-300">
            A recipe has no soul, as the cook it's my duty to bring soul to the recipe.
          </p>
        </div>
      </div>
    </div>
  );
};

const Button = ({ children, handleClick }) => {
  return (
    <button
      onClick={handleClick}
      className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300 font-medium rounded-full text-sm p-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
    >
      {children}
    </button>
  );
};

export default Slider;
