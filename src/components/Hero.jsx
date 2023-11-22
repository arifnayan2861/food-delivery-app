import React from "react";

const Hero = () => {
  return (
    <div className="max-w-[1640px] mx-auto p-4">
      <div className="max-h-[500px] relative">
        {/* Overlay */}
        <div className="absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center">
          <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
            The<span className="text-orange-400"> Best</span>
          </h1>
          <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
            <span className="text-orange-400">Foods </span> Delivered
          </h1>
        </div>
        <img
          src="https://images.pexels.com/photos/6660068/pexels-photo-6660068.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="hero-img"
          className="w-full max-h-[500px] object-cover"
        />
      </div>
    </div>
  );
};

export default Hero;
