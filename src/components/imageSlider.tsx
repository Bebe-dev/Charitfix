import { useState } from "react";
import { ImageSliderProps } from "../utils/types/imageSliderProps";

export default function Imageslider({ imageUrls }: ImageSliderProps) {
  const [imageIndex, setImageIndex] = useState(0);

  const autoSlideShow = () => {
    setImageIndex((prevIndex) =>
        prevIndex - 1 < 0 ? imageUrls.length - 1 : prevIndex - 1
      );
  };

  setTimeout(autoSlideShow, 2000);

//   const showNextImage = () => {
//     setImageIndex((prevIndex) =>
//       prevIndex + 1 === imageUrls.length ? 0 : prevIndex + 1
//     );
//   };

//   const showPrevImage = () => {
//     setImageIndex((prevIndex) =>
//       prevIndex - 1 < 0 ? imageUrls.length - 1 : prevIndex - 1
//     );
//   };

  const handleDotClick = (index: any) => {
    setImageIndex(index);
  };

  return (
    <div className="relative">
      <div>
        <img src={imageUrls[imageIndex]} key={imageIndex} />
        {/* <button
          onClick={showNextImage}
          className="absolute top-0 bottom-0 right-[50%]"
        >
          next
        </button>
        <button className="absolute top-0 bottom-0">
          previous
        </button> */}
      </div>

      <div className="absolute bottom-0 pb-10 pl-10 text-[#ffffff]">
        <div className="flex gap-8 hidden md:block">
          <p className="text-[#FFD502]">Education</p>
          <p>Africa</p>
        </div>
        <h2 className="font-semibold text-3xl hidden md:block w-3/4 py-4">
          Help differently abled children to feel confident
        </h2>

        <div className="flex gap-1 justify-center">
          {imageUrls.map((_, index) => (
            <div
              className={`cursor-pointer w-5 h-[5.5px] rounded-md dot ${
                imageIndex === index ? "bg-[#00715D]" : "bg-[#ffffff]"
              }`}
              key={index}
              onClick={() => handleDotClick(index)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}
