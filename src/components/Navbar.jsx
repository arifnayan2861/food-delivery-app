import React, { useState } from "react";
import {
  AiFillTag,
  AiOutlineClose,
  AiOutlineMenu,
  AiOutlineSearch,
} from "react-icons/ai";
import { BsFillCartFill, BsFillSaveFill } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { MdFavorite, MdHelp } from "react-icons/md";
import { FaWallet, FaUserFriends } from "react-icons/fa";

const ListItems = ({ children, name }) => {
  return (
    <li className="text-xl py-4 flex">
      {children} {name}
    </li>
  );
};

const Navbar = () => {
  const [mobileNav, setMobileNav] = useState(false);
  const [deliveryToggle, setDeliveryToggle] = useState(true);

  return (
    <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4">
      {/* Desktop version */}
      <div className="flex items-center">
        {/* menu */}
        <div
          className="cursor-pointer"
          onClick={() => setMobileNav(!mobileNav)}
        >
          <AiOutlineMenu size={30} />
        </div>

        {/* logo */}
        <h1 className="text-2xl sm:text-3xl lg:text-4xl mx-3">
          Best<span className="font-bold"> Eats</span>
        </h1>

        {/* delivery-pickup toggle */}
        <div className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px] cursor-pointer">
          <p
            className={
              deliveryToggle ? "bg-black text-white rounded-full p-2" : "p-2"
            }
            onClick={() => setDeliveryToggle(true)}
          >
            Delivery
          </p>
          <p
            className={
              deliveryToggle ? "p-2" : "bg-black text-white rounded-full p-2"
            }
            onClick={() => setDeliveryToggle(false)}
          >
            Pickup
          </p>
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

      {/* Mobile version */}
      {/* Overlay */}
      {mobileNav ? (
        <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div>
      ) : (
        ""
      )}

      {/* Left side menus */}
      <div
        className={
          mobileNav
            ? "fixed top-0 left-0 bg-gray-200 w-[300px] h-screen z-20 duration-500"
            : "fixed top-0 left-[-100%] bg-gray-200 w-[300px] h-screen z-20 duration-300"
        }
      >
        <AiOutlineClose
          size={30}
          className="absolute right-4 top-4 cursor-pointer"
          onClick={() => setMobileNav(!mobileNav)}
        />
        <h2 className="text-2xl p-4">
          Best<span className="font-bold"> Eats</span>
        </h2>
        <nav>
          <ul className="flex flex-col p-4 text-gray-800">
            <ListItems name="Orders">
              <TbTruckDelivery size={25} className="mr-4" />
            </ListItems>
            <li className="text-xl py-4 flex">
              <MdFavorite size={25} className="mr-4" /> Favourites
            </li>
            <li className="text-xl py-4 flex">
              <FaWallet size={25} className="mr-4" /> Wallet
            </li>
            <li className="text-xl py-4 flex">
              <MdHelp size={25} className="mr-4" /> Help
            </li>
            <li className="text-xl py-4 flex">
              <AiFillTag size={25} className="mr-4" /> Promotions
            </li>
            <li className="text-xl py-4 flex">
              <BsFillSaveFill size={25} className="mr-4" /> Best Ones
            </li>
            <li className="text-xl py-4 flex">
              <FaUserFriends size={25} className="mr-4" /> Invite Friends
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
