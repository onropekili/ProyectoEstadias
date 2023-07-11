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
      <div className="border-2 mt-3 rounded-b-lg md:mt-0">
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
                    <div className="text-start">
                      <h4 className="text-2xl text-naranja font-Foco-Corp-Bold mb-4">
                        Datos personales:
                      </h4>
                    </div>
                    <div className="flex flex-col gap-x-4 gap-y-4 md:grid md:grid-cols-2 lg:grid lg:grid-cols-2 lg:gap-y-2">
                      <div className="flex flex-col col-span-1 ">
                        <label
                          htmlFor="apellidoPaterno"
                          className="font-Foco-Corp-Bold text-gris text-base mb-1"
                        >
                          Apellido Paterno
                        </label>
                        <input
                          id="apellidoPaterno"
                          className="bg-gris bg-opacity-10 text-gris rounded-lg border-gray-300 border-2 p-2 h-9 hover:border-gray-400 focus:border-naranja focus:bg-gray-50 focus:outline-none focus:shadow-lg focus:text-black"
                          placeholder="Escribe algo"
                        />
                      </div>
                      <div className="flex flex-col col-span-1">
                        <label
                          htmlFor="apellidoMaterno"
                          className="font-Foco-Corp-Bold text-gris text-base mb-1"
                        >
                          Apellido Materno
                        </label>
                        <input
                          id="apellidoMaterno"
                          className="bg-gris bg-opacity-10 text-gris rounded-lg border-gray-300 border-2 p-2 h-9 hover:border-gray-400 focus:border-naranja focus:bg-gray-50 focus:outline-none focus:shadow-lg focus:text-black"
                          placeholder="Escribe algo"
                        />
                      </div>
                      <div className="flex flex-col col-span-2">
                        <label
                          htmlFor="nombres"
                          className="font-Foco-Corp-Bold text-gris text-base mb-1"
                        >
                          Nombres
                        </label>
                        <input
                          id="nombres"
                          className="bg-gris bg-opacity-10 text-gris rounded-lg border-gray-300 border-2 p-2 h-9 hover:border-gray-400 focus:border-naranja focus:bg-gray-50 focus:outline-none focus:shadow-lg focus:text-black"
                          placeholder="Escribe algo"
                        />
                      </div>
                      <div className="flex flex-col col-span-1">
                        <label
                          htmlFor="telefono1"
                          className="font-Foco-Corp-Bold text-gris text-base mb-1"
                        >
                          Teléfono 1
                        </label>
                        <input
                          id="telefono1"
                          className="bg-gris bg-opacity-10 text-gris rounded-lg border-gray-300 border-2 p-2 h-9 hover:border-gray-400 focus:border-naranja focus:bg-gray-50 focus:outline-none focus:shadow-lg focus:text-black"
                          placeholder="Escribe algo"
                        />
                      </div>
                      <div className="flex flex-col col-span-1">
                        <label
                          htmlFor="telefono2"
                          className="font-Foco-Corp-Bold text-gris text-base mb-1"
                        >
                          Teléfono 2
                        </label>
                        <input
                          id="telefono2"
                          className="bg-gris bg-opacity-10 text-gris rounded-lg border-gray-300 border-2 p-2 h-9 hover:border-gray-400 focus:border-naranja focus:bg-gray-50 focus:outline-none focus:shadow-lg focus:text-black"
                          placeholder="Escribe algo"
                        />
                      </div>
                      <div className="flex flex-col col-span-2">
                        <label
                          htmlFor="email"
                          className="font-Foco-Corp-Bold text-gris text-base mb-1"
                        >
                          Correo Electrónico
                        </label>
                        <input
                          id="email"
                          className="bg-gris bg-opacity-10 text-gris rounded-lg border-gray-300 border-2 p-2 h-9 hover:border-gray-400 focus:border-naranja focus:bg-gray-50 focus:outline-none focus:shadow-lg focus:text-black"
                          placeholder="Escribe algo"
                        />
                      </div>
                      <div className="flex flex-col col-span-2">
                        <label
                          htmlFor="terceraEdad"
                          className="font-Foco-Corp-Bold text-gris text-base mb-1"
                        >
                          Comerciante de la tercera edad o discapacitado
                        </label>
                        <div className="flex items-center mb-4">
                          <input
                            id="terceraEdad"
                            type="checkbox"
                            className="h-4 w-4 rounded-full focus:bg-verde bg-verde"
                          />
                          <label
                            htmlFor="terceraEdad"
                            className="text-sm ml-2 font-Foco-Corp-Italic text-gris mt-1"
                          >
                            Selecciona la casilla solo si el comerciante es de la tercera
                            edad o tiene capacidades diferentes
                          </label>
                        </div>
                      </div>
                    </div>
                  </section>
                  <section className='col-span-1 px-4'>
                    <div className="text-start">
                      <h4 className="text-2xl text-naranja font-Foco-Corp-Bold mb-4">
                        Domicilio:
                      </h4>
                    </div>
                    <div className="md:grid md:grid-cols-4 gap-x-4 gap-y-2">
                      <div className="flex flex-col col-span-2 ">
                      <label
                        htmlFor="calle"
                        className="font-Foco-Corp-Bold text-gris text-base mb-1"
                      >
                        Calle
                      </label>
                      <input
                        id="calle"
                        className="bg-gris bg-opacity-10 text-gris rounded-lg border-gray-300 border-2 p-2 h-9 hover:border-gray-400 focus:border-naranja focus:bg-gray-50 focus:outline-none focus:shadow-lg focus:text-black"
                        placeholder="Escribe algo"
                      />
                      </div>
                      <div className="flex flex-col col-span-1">
                      <label
                        htmlFor="numeroExterior"
                        className="font-Foco-Corp-Bold text-gris text-base mb-1"
                      >
                        No. exterior
                      </label>
                      <input
                        id="numeroExterior"
                        className="bg-gris bg-opacity-10 text-gris rounded-lg border-gray-300 border-2 p-2 h-9 hover:border-gray-400 focus:border-naranja focus:bg-gray-50 focus:outline-none focus:shadow-lg focus:text-black"
                        placeholder="Escribe algo"
                      />
                      </div>
                      <div className="flex flex-col col-span-1">
                      <label
                        htmlFor="numeroInterior"
                        className="font-Foco-Corp-Bold text-gris text-base mb-1"
                      >
                        No. interior
                      </label>
                      <input
                        id="numeroInterior"
                        className="bg-gris bg-opacity-10 text-gris rounded-lg border-gray-300 border-2 p-2 h-9 hover:border-gray-400 focus:border-naranja focus:bg-gray-50 focus:outline-none focus:shadow-lg focus:text-black"
                        placeholder="Escribe algo"
                      />
                      </div>
                      <div className="flex flex-col col-span-3">
                      <label
                        htmlFor="colonia"
                        className="font-Foco-Corp-Bold text-gris text-base mb-1"
                      >
                        Colonia
                      </label>
                      <input
                        id="colonia"
                        className="bg-gris bg-opacity-10 text-gris rounded-lg border-gray-300 border-2 p-2 h-9 hover:border-gray-400 focus:border-naranja focus:bg-gray-50 focus:outline-none focus:shadow-lg focus:text-black"
                        placeholder="Escribe algo"
                      />
                      </div>
                      <div className="flex flex-col col-span-1">
                      <label
                        htmlFor="np"
                        className="font-Foco-Corp-Bold text-gris text-base mb-1"
                      >
                        C.P
                      </label>
                      <input
                        id="np"
                        className="bg-gris bg-opacity-10 text-gris rounded-lg border-gray-300 border-2 p-2 h-9 hover:border-gray-400 focus:border-naranja focus:bg-gray-50 focus:outline-none focus:shadow-lg focus:text-black"
                        placeholder="Escribe algo"
                      />
                      </div>
                      <div className="flex flex-col col-span-4">
                      <label
                        htmlFor="municipio"
                        className="font-Foco-Corp-Bold text-gris text-base mb-1"
                      >
                        Municipio
                      </label>
                      <input
                        id="municipio"
                        className="bg-gris bg-opacity-10 text-gris rounded-lg border-gray-300 border-2 p-2 h-9 hover:border-gray-400 focus:border-naranja focus:bg-gray-50 focus:outline-none focus:shadow-lg focus:text-black"
                        placeholder="Escribe algo"
                      />
                      </div>
                      <div className="flex flex-col col-span-4">
                      <label
                        htmlFor="observaciones"
                        className="font-Foco-Corp-Bold text-gris text-base mb-1"
                      >
                        Observaciones al comerciante
                      </label>
                      <input
                        id="observaciones"
                        className="bg-gris bg-opacity-10 text-gris rounded-lg border-gray-300 border-2 p-2 h-9 hover:border-gray-400 focus:border-naranja focus:bg-gray-50 focus:outline-none focus:shadow-lg focus:text-black"
                        placeholder="Escribe algo"
                      />
                      </div>
                    </div>
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
