import React, { useState } from 'react';
import Header from '../../components/Header';
import {RiUser3Fill, RiMenuFill} from 'react-icons/ri';
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
      <div className="border-2 mt-3 md:mt-0">
        {/* Tab1 */}
          {activeTab === 1 &&
            <div className='w-full'>
              {/* Botón del menú */}
              <div className='w-full relative text-end py-4 px-4 md:pt-4 md:pb-0 2xl:py-4'>
                <button
                  className="bg-gray-100 hover:bg-gray-200 text-naranja hover:text-verde border-2 border-gray-200 py-2 px-2 rounded-lg shadow-md md:py-1 2xl:py-2"
                  onClick={toggleMenu}
                >
                  <span className='flex row-auto gap-2 items-center font-bold text-base'>
                    <p className='hidden md:block'>OPCIONES</p>
                    <RiMenuFill className="h-6 w-6 md:h-5 md:w-5 "/>
                  </span>
                </button>
                {/* Opciones del menú */}
                {isMenuOpen && (
                  <div className="absolute right-0 mt-2 w-full sm:w-96 lg:w-80">
                    <ul className="bg-white shadow-lg rounded-lg border-2 border-gray-300">
                      <li>
                        <button
                          className="block w-full text-left px-4 py-2 rounded-t-lg text-base md:text-lg font-medium text-gris hover:bg-naranja hover:bg-opacity-80 hover:text-white"
                          onClick={() => { /* Lógica para la opción 1 */ }}
                        >
                          Editar información
                        </button>
                      </li>
                      <li>
                        <button
                          className="block w-full text-left px-4 py-2 rounded-b-lg text-base md:text-lg font-medium text-gris hover:bg-naranja hover:bg-opacity-80 hover:text-white"
                          onClick={() => { /* Lógica para la opción 2 */ }}
                        >
                          Eliminar comerciante
                        </button>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
              {/* Datos del comerciante */}
              <form>
                <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-x-6'>
                  <section className='col-span-1 px-4'>
                    Contenido de la section 1
                  </section>
                  <section className='col-span-1 px-4'>
                    Contenido de la seccion 2
                  </section>
                </div>
              </form>
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
