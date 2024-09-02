import React from "react";

const Loader = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-gray-900">
      <div className="h-16 w-16 animate-spin rounded-full border-[6px] border-solid border-primary border-t-transparent border-teal-300" />
    </div>
  );
};

export default Loader;
