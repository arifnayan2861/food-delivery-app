import React from "react";
import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { BsFillCartFill } from "react-icons/bs";

const Navbar = () => {
  return (
    <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4">
      <div className="flex items-center">
        {/* menu */}
        <div className="cursor-pointer">
          <AiOutlineMenu size={30} />
        </div>

        {/* logo */}
        <h1 className="text-2xl sm:text-3xl lg:text-4xl mx-3">
          Best<span className="font-bold"> Eats</span>
        </h1>

        {/* delivery-pickup toggle */}
        <div className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px] cursor-pointer">
          <p className="bg-black text-white rounded-full p-2">Delivery</p>
          <p className="p-2">Pickup</p>
        </div>
      </div>

      {/* Search foods */}
      <div className="flex items-center bg-gray-200 rounded-full px-2 w-[200px] sm:w-[400px] lg:w-[500px]">
        <AiOutlineSearch size={25} />
        <input
          type="text"
          placeholder="Search foods"
          className="bg-gray-200 p-2 focus:outline-none w-full rounded-full"
        />
      </div>

      {/* cart button*/}
      <button className="bg-black text-white hidden md:flex items-center py-2 rounded-full">
        <BsFillCartFill size={20} className="mr-2" /> Cart
      </button>
    </div>
  );
};

export default Navbar;
