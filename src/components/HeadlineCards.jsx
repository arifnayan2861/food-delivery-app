import React from "react";
import Card from "../utility/Card";

const HeadlineCards = () => {
  return (
    <div className="max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6">
      {/* card */}
      <Card
        imgSrc="https://images.unsplash.com/photo-1613769049987-b31b641f25b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGJyZWFrZmFzdHxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60"
        heading="Sun's Out, BOGO's Out"
        subHeading="Through 22/11"
      />
      <Card
        imgSrc="https://images.pexels.com/photos/6954063/pexels-photo-6954063.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        heading="Head Out Now"
        subHeading="With Friends"
      />
      <Card
        imgSrc="https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        heading="New Restaurants"
        subHeading="Added Daily"
      />
    </div>
  );
};

export default HeadlineCards;
