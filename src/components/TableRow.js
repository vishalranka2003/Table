import React from "react";

const TableRow = ({ title, jodi, startTime, endTime }) => {
  return (
    <div className="flex border border-red-500  hover:bg-yellow-300">
      {/* Jodi Button Part */}
      <div className="p-2 w-1/4 border-l   border-red-500 flex justify-center items-center">
        <button className="bg-blue-950 text-white px-3 py-1 rounded">
          Jodi
        </button>
      </div>
      {/* Description Part */}
      <div className="p-2 w-1/2  border-red-500 flex-grow flex flex-col justify-center items-center">
        <p className="font-bold text-blue-900">{title}</p>
        <p className="font-bold text-purple-800">{jodi}</p>
        <p>
          {startTime} - {endTime}
        </p>
      </div>
      {/* Panel Content Part */}
      <div className="p-2 w-1/4 border-r border-red-500 flex justify-center items-center">
        <button className="bg-blue-950 text-white px-3 py-1 rounded ">
          Panel
        </button>
      </div>
    </div>
  );
};

export default TableRow;
