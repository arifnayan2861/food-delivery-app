import React from "react";

const Card = ({ imgSrc, heading, subHeading }) => {
  return (
    <div className="rounded-xl relative">
      {/* overlay */}
      <div className="w-full h-full absolute bg-black/50 text-white rounded-xl">
        <p className="font-bold text-2xl px-2 pt-4">{heading}</p>
        <p className="px-2">{subHeading}</p>
        <button className="border-white bg-white text-black mx-2 absolute bottom-4">
          Order Now
        </button>
      </div>
      <img
        className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
        src={imgSrc}
        alt="/"
      />
    </div>
  );
};

export default Card;
