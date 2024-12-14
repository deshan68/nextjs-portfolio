import React from "react";

const Chip = ({ item }) => {
  return (
    <div
      key={item}
      className="rounded-full bg-teal-300/10 text-teal-300 px-3 leading-3 md:text-sm text-xs pt-2 pb-[4.5px]"
    >
      {item}
    </div>
  );
};

export default Chip;
