import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";

function Carousel({ images }) {
  const [current, setCurrent] = useState(0);
  const length = images.length;

  const nextImage = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const previousImage = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <div className="relative">
      {length > 1 ? (
        <ChevronLeftIcon
          className="w-8 absolute -left-4 top-1/2 -mt-4 z-10 cursor-pointer hover:text-gray-500"
          onClick={previousImage}
        />
      ) : null}
      {images.map((image, index) => {
        return (
          <div
            className={
              index === current
                ? "opacity-1 duration-1000 px-4"
                : "opacity-0 duration-1000 px-4"
            }
          >
            {index === current && (
              <Image src={image} width={800} height={440} layout="responsive" />
            )}
          </div>
        );
      })}
      {length > 1 ? (
        <ChevronRightIcon
          className="w-8 absolute -right-4 top-1/2 -mt-4 z-10 cursor-pointer"
          onClick={nextImage}
        />
      ) : null}
    </div>
  );
}

export default Carousel;
