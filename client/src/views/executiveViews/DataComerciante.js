import React, { useState } from 'react';
import Header from '../../components/Header';
import {RiUser3Fill, RiMenuFill, RiMenu2Fill, RiMenu3Fill, RiMenu4Fill} from 'react-icons/ri';
import { MdStore} from 'react-icons/md';


const DataComerciante = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
  <>
    <Header />
    {/* Contenido */}
    <div className="lg:mx-16 md:mx-8 m-6 lg:my-9">
      <div className="w-full flex-col md:flex-row flex justify-between gap-2 lg:gap-8">
        <button
          className={`w-full  relative px-4 pt-2 pb-10 text-xl md:text-2xl  text-start rounded-t-lg items-center font-Foco-Corp-Bold border-b-8 border-2 h-12 focus:outline-none ${
            activeTab === 1 
            ? 'bg-gray-50 text-gris border-naranja border-opacity-80 shadow-lg' 
            : 'bg-gray-100 shadow-md border-gray-300 text-gray-500 border-2 hover:border-gray-400 hover:text-gray-600 hover:shadow-lg'
          }`}
          onClick={() => handleTabClick(1)}
        >
          <span className="relative z-10 items-center flex">
            <RiUser3Fill
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
            <MdStore
              className={`inline-block mr-2 h-6 w-6 md:h-7 md:w-7 ${
                activeTab === 2 
                ? 'text-gris' 
                : 'text-gray-500'
              }`}
            />
            Datos del comercio
          </span>
        </button>
        </div>
        {/* Tabs*/}
        <div className="p-4">
          {/* Tab1 */}
          {activeTab === 1 &&
            <div className='w-full relative text-end'>
              {/* Botón del menú */}
              <button
                className="bg-gray-100 hover:bg-gray-200 text-naranja hover:text-verde border-2 border-gray-200 py-2 px-2 rounded-lg shadow-md"
                onClick={toggleMenu}
              >
                <span className='flex row-auto gap-2 items-center font-bold text-base'>
                  OPCIONES
                  <RiMenuFill className="h-5 w-5 md:h-6 md:w-6 "/>
                </span>
              </button>
              {/* Opciones del menú */}
              {isMenuOpen && (
                <div className="absolute right-0 mt-2 w-full sm:w-96 lg:w-80">
                  <ul className="bg-white shadow-lg rounded-lg border border-gray-200">
                    <li>
                      <button
                        className="block w-full text-left px-4 py-2 rounded-t-lg text-lg text-gris hover:bg-naranja hover:bg-opacity-80 hover:text-white"
                        onClick={() => { /* Lógica para la opción 1 */ }}
                      >
                        Editar información
                      </button>
                    </li>
                    <li>
                      <button
                        className="block w-full text-left px-4 py-2 rounded-b-lg text-lg text-gris hover:bg-naranja hover:bg-opacity-80 hover:text-white"
                        onClick={() => { /* Lógica para la opción 2 */ }}
                      >
                        Eliminar comerciante
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          }
          {activeTab === 2 && 
            <div>
              Contenido de la pestaña 2
            </div>
          }
        </div>
      </div>
    </>
  );
};

export default DataComerciante;
