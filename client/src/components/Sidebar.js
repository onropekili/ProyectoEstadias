import React from 'react';
import { IoStorefrontSharp, IoHome, IoStatsChartSharp } from 'react-icons/io5';
import { CgArrowLeftR } from "react-icons/cg";

const Sidebar = ({ isOpen }) => {
  return (
    <div className={`bg-white border-r-zinc-100 shadow-md border-r-2 w-44 h-screen py-8 fixed top-14 md:top-28 left-0 ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform z-50 md:static md:w-44 md:py-8 md:translate-x-0 shadow-xl`}>
      <ul className="space-y-4 flex flex-col flex-grow">
        {/* Contenido del sidebar */}
        <li className="flex flex-col items-center cursor-pointer text-gris hover:text-naranja hover:bg-gray-50 px-2 py-4">
          <IoHome className="text-3xl mb-2 "/> 
          <span className='text-xl font-Foco-Corp-Bold'>Inicio</span>
        </li>
        <li className="flex flex-col items-center cursor-pointer text-gris hover:text-morado hover:bg-gray-50 px-2 py-4">
          <IoStatsChartSharp className="text-3xl mb-2 "/> 
          <span className='text-xl font-Foco-Corp-Bold'>Ingresos</span>
        </li>
        <li className="flex flex-col items-center cursor-pointer text-gris hover:text-azul hover:bg-gray-50 px-2 py-4">
          <IoStorefrontSharp className="text-3xl mb-2 "/> 
          <span className='text-xl font-Foco-Corp-Bold'>Comercios</span>
        </li>
      </ul>
      <div className="mt-48">
        <li className="flex flex-col items-center cursor-pointer text-gris hover:text-rojo hover:bg-gray-50 px-2 py-4">
          <CgArrowLeftR className="text-3xl mb-2 "/> 
          <span className='text-xl font-Foco-Corp-Bold'>Cerrar Sesión</span>
        </li>
      </div>
    </div>
  );
};

export default Sidebar;
