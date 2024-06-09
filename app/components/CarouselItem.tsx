// components/CarouselItem.tsx
import React from 'react';

interface CarouselItemProps {
  id: string;
  title: string;
  subtitle: string;
  imgSrc: string;
}

const CarouselItem: React.FC<CarouselItemProps> = ({ id, title, subtitle, imgSrc }) => {
  return (
    <div id={id} className="carousel-item w-full bg-gray-100">
      <div className="card card-side bg-gray-100 w-full">
        <div className="card-body w-1/4 flex justify-center items-center">
          <div className="font-semibold">
            <h2 className="card-title text-6xl">{title}</h2>
            <br />
            <p className="text-xl">{subtitle}</p>
          </div>
        </div>
        <figure className="w-3/4 flex justify-center items-center p-40">
          <img src={imgSrc} alt={title} className="w-full border-2 border-gray-300"/>
        </figure>
      </div>
    </div>
  );
};

export default CarouselItem;
