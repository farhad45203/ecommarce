import React, { useEffect, useRef, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";

import FirstImage from "../../images/Untitled.jpeg";
import SecondImage from "../../images/Untitled1.jpeg";
import ThirdImage from "../../images/Untitled2.jpeg";

export default function HeroSliders() {
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

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
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
    <div className="relative group overflow-hidden">
      <div
        style={{ backgroundImage: `url(${sliders[currentIndex].src.src})` }}
        className={`flex items-center justify-center w-full transition-all ease-in-out duration-400 relative h-[70vh] bg-cover bg-no-repeat`}
      >
        <h1 className="text-black text-5xl">{sliders[currentIndex].title}</h1>
      </div>
      <a
        className="absolute flex -left-1/2 top-1/2 transform transition-all ease duration-1000 -translate-y-1/2 h-16 w-16 group-hover:left-8 justify-center items-center bg-black/[.5] rounded-full"
        onClick={goToPrivious}
      >
        <ChevronLeftIcon className="h-10 w-10 text-white" aria-hidden="true" />
      </a>
      <a
        className="absolute flex -right-1/2 top-1/2 transform transition-all ease duration-1000 -translate-y-1/2 h-16 w-16 group-hover:right-8 justify-center items-center bg-black/[.5] rounded-full"
        onClick={goToNext}
      >
        <ChevronRightIcon className="h-10 w-10 text-white" aria-hidden="true" />
      </a>
      <div className="absolute flex -bottom-1/2 left-1/2 transition-all ease duration-1000 transform -translate-x-1/2 group-hover:bottom-10 gap-5">
        {sliders.map((slide, slideIndex) => (
          <div
            className="bg-black w-4 h-4 rounded-full cursor-pointer"
            key={slideIndex}
            onClick={() => {
              goToSlide(slideIndex);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}
