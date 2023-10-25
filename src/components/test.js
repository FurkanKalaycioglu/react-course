import React from "react";

function Test() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 group  rouned-lg ">
      <p className="bg-red-500 hover:bg-blue-500 hover:text-lg hover:text-white">
        first item
      </p>
      <p className="group-hover:bg-blue-500 border-x-8 border-y-4">
        second item
      </p>
      <p className="group-hover:bg-blue-500 border-8">third item</p>
      <p className="group-hover:bg-blue-500 border-8">forth item</p>
      <p className="group-hover:bg-blue-500 border-8">fifth item</p>
      <p className="group-hover:bg-blue-500 border-8">sixth item</p>
    </div>
  );
}

export default Test;
