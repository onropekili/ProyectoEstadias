import React, { useState } from 'react';
import Header from '../../components/Header';
import { FaUser} from 'react-icons/fa';

const DataComerciante = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
  <>
    <Header />
    {/* Contenido */}
    <div className="lg:mx-16 md:mx-8 m-6 lg:my-9">
      <div className="w-full flex-col md:flex-row flex justify-between gap-4 lg:gap-8">
        <button
          className={`w-full  relative px-4 pt-2 pb-10 text-xl md:text-2xl  text-start rounded-t-lg items-center font-Foco-Corp-Bold border-b-8 border-2 h-12 focus:outline-none ${
            activeTab === 1 
            ? 'bg-gray-50 text-gris border-naranja border-opacity-80 shadow-lg' 
            : 'bg-gray-100 shadow-md border-gray-300 text-gray-500 border-2 hover:border-gray-400 hover:text-gray-600 hover:shadow-lg'
          }`}
          onClick={() => handleTabClick(1)}
        >
          <span className="relative z-10 items-center flex">
            <FaUser
              className={`inline-block mr-2 h-5 w-5 md:h-6 md:w-6 ${
                activeTab === 1 
                ? 'text-gris' 
                : 'text-gray-500'
              }`}
            />
            Datos del comerciante
          </span>
        </button>
        <button
          className={`w-full relative px-4 pt-2 pb-10 text-xl md:text-2xl text-start rounded-t-lg items-center font-Foco-Corp-Bold border-b-8 border-2 h-12 focus:outline-none ${
            activeTab === 2 
            ? 'bg-gray-50 text-gris border-naranja border-opacity-80 shadow-lg' 
            : 'bg-gray-100 shadow-md border-gray-300 text-gray-500 border-2 hover:border-gray-400 hover:text-gray-600 hover:shadow-lg'
          }`}
          onClick={() => handleTabClick(2)}
        >
          <span className="relative z-10 items-center flex">
            <FaUser
              className={`inline-block mr-2 h-5 w-5 md:h-6 md:w-6 ${
                activeTab === 2 
                ? 'text-gris' 
                : 'text-gray-500'
              }`}
            />
            Datos del comercio
          </span>
        </button>
        </div>
        <div className="mt-4">
          {activeTab === 1 && 
          <div className=''>
            Contenido de la pestaña 1
          </div>
          }
          {activeTab === 2 && 
          <div>
            Contenido de la pestaña 2
          </div>}
        </div>
      </div>
    </>
  );
};

export default DataComerciante;
