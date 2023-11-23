import React from "react";

const FilterButton = ({ btnName }) => {
  return (
    <button className="m-1 border-orange-600 text-orange-600 hover:text-white hover:bg-orange-600">
      {btnName}
    </button>
  );
};

export default FilterButton;
