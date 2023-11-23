import React, { useState } from "react";
import FilterButton from "../utility/FilterButton.jsx";
import { data, categories } from "../data/data.js";

const Food = () => {
  //   console.log(data, categories);
  const [foods, setFoods] = useState(data);

  return (
    <div className="max-w-[1640px] m-auto p-4 py-12">
      <h1 className="text-orange-600 font-bold text-4xl text-center">
        Top Rated Menu Items
      </h1>
      {/* Filter Row */}
      <div className="flex flex-col lg:flex-row justify-between">
        {/* Filter by type */}
        <div>
          <p className="font-bold text-gray-700">Filter by Type</p>
          <div className="flex justify-between flex-wrap">
            <FilterButton btnName="All" />
            <FilterButton btnName="Burgers" />
            <FilterButton btnName="Chicken" />
            <FilterButton btnName="Salads" />
            <FilterButton btnName="Pizza" />
          </div>
        </div>
        {/* Filter by Price */}
        <div>
          <p className="font-bold text-gray-700">Filter by Price</p>
          <div className="flex justify-between max-w-[390px] w-full">
            <FilterButton btnName="$" />
            <FilterButton btnName="$$" />
            <FilterButton btnName="$$$" />
            <FilterButton btnName="$$$$" />
          </div>
        </div>
      </div>

      {/* Display foods */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
        {foods.map((item) => (
          <div
            key={item.id}
            className="border shadow-lg hover:scale-105 duration-300 rounded-lg cursor-pointer"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-[200px] object-cover rounded-t-lg"
            />
            <div className="flex justify-between px-2 py-4">
              <p className="font-bold">{item.name}</p>
              <p className="font-bold">
                <span className="bg-orange-500 text-white p-1 rounded-lg">
                  {item.price}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Food;
