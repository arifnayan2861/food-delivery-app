import React from "react";

const FilterButton = ({ btnName, handlePriceBtnClick, handleTypeBtnClick }) => {
  const handleBtnClick = () => {
    handlePriceBtnClick();
    handleTypeBtnClick();
  };
  return (
    <button
      className="m-1 border-orange-600 text-orange-600 hover:text-white hover:bg-orange-600"
      onClick={handleBtnClick}
    >
      {btnName}
    </button>
  );
};

export default FilterButton;
