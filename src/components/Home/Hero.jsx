import React, { useEffect, useRef, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";

import FirstImage from "../../images/Untitled.jpeg";
import SecondImage from "../../images/Untitled1.jpeg";
import ThirdImage from "../../images/Untitled2.jpeg";
import Image from "next/image";

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const sliders = [
    {
      src: FirstImage,
      title: "First Image",
    },
    {
      src: SecondImage,
      title: "Second Image",
    },
    {
      src: ThirdImage,
      title: "Third Image",
    },
  ];

  const timerRef = useRef(null);

  const goToPrivious = () => {
    const isFirstSlider = currentIndex === 0;
    const newIndex = isFirstSlider ? sliders.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isFirstSlider = currentIndex === sliders.length - 1;
    const newIndex = isFirstSlider ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    timerRef.current = setTimeout(() => {
      goToNext();
    }, 2000);

    return () => clearTimeout(timerRef.current);
  });
  return (
    <div className="">
      <div className="relative">
        <div
          className={`flex w-full transition ease-in-out duration-300 relative h-[70vh] overflow-hidden`}
        >
          <Image
            src={sliders[currentIndex].src}
            className="w-full h-full opacity-[.6]"
            alt={sliders[currentIndex].src}
            height={"100%"}
            width={"100%"}
          />
          <h1 className="absolute left-1/2 bottom-20 transform -translate-x-1/2 text-black text-5xl">
            {sliders[currentIndex].title}
          </h1>
        </div>
        <a
          className="absolute left-3 top-1/2 transform -translate-y-1/2 h-20 w-20 flex justify-center items-center bg-black rounded-lg"
          onClick={goToPrivious}
        >
          <ChevronLeftIcon
            className="h-10 w-10 text-white"
            aria-hidden="true"
          />
        </a>
        <a
          className="absolute right-3 top-1/2 transform -translate-y-1/2 h-20 w-20 flex justify-center items-center bg-black rounded-lg"
          onClick={goToNext}
        >
          <ChevronRightIcon
            className="h-10 w-10 text-white"
            aria-hidden="true"
          />
        </a>
      </div>
    </div>
  );
}
