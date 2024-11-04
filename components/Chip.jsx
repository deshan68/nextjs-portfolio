import React from "react";

const Chip = ({ item }) => {
  return (
    <div
      key={item}
      className="rounded-full bg-teal-300/10 text-teal-300 px-3 leading-3 text-base pt-2 pb-[4.5px]"
    >
      {item}
    </div>
  );
};

export default Chip;
