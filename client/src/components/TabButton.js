import React from 'react';
import { GiCash } from 'react-icons/gi';

const TabButton = ({ label, isActive, onClick }) => {
  return (
    <div
      className={`bg-morado bg-opacity-80 border border-morado text-white font-semibold rounded-md shadow-md cursor-pointer ${
        isActive ? 'text-white bg-opacity-60 border-2 border-opacity-25 shadow-xl' : 'text-morado'
      }`}
      onClick={onClick}
    >
      <div className="flex flex-row py-4 px-4 justify-between">
        <div className="w-3/4 flex flex-col gap-2">
          <span className="text-4xl">{label.count}</span>
          <span className="text-sm">{label.text}</span>
        </div>
        <div className="w-1/4 text-center">
          <GiCash className={`text-7xl ${isActive ? 'text-white' : 'text-morado'}`} />
        </div>
      </div>
    </div>
  );
};

export default TabButton;
