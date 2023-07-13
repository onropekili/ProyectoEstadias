import React, { useState } from 'react';
import Header from '../../components/Header';
import {RiUser3Fill, RiMenuFill} from 'react-icons/ri';
import { MdStore} from 'react-icons/md';
import Select from 'react-select';
import selectStylesForm from '../../components/StyleSelectForm';


const DataComerciante = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showButtons, setShowButtons] = useState(false);

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setShowButtons(false); // Reiniciar la visibilidad de los botones al cerrar el menú
  };

  const handleOptionClick = () => {
    setIsMenuOpen(false); // Cerrar el menú de opciones
    setShowButtons(true); // Mostrar los botones
  };

  const handleSaveClick = () => {
    // Lógica para guardar
  };

  const handleCancelClick = () => {
    setShowButtons(false);
  };

  const optionsClasificacion = [
    { value: 'ambulante', label: 'COMERCIO AMBULANTE' },
    { value: 'fijo', label: 'COMERCIO EN PUESTO FIJO' },
    { value: 'semifijo', label: 'COMERCIO EN PUESTO SEMI-FIJO' },
    { value: 'festividades', label: 'COMERCIO EN FESTIVIDADES' },
  ];

  const optionsHorario = [
    { value: 'mat', label: 'Mat: 07:00 a 18:00' },
    { value: 'vesp', label: 'Vesp: 18:00 a 22:00' },
    { value: 'vesp2', label: 'Vesp: 18:01 a 23:00' },
    { value: 'mixto', label: 'MIXTO VARIABLE' },
    // { value: 'otro', label: 'OTRO' },
  ];

  const optionsTipo = [
    { value: 'eventual', label: 'EVENTUAL' },
    { value: 'especial', label: 'ESPECIAL' },
    { value: 'permanente', label: 'PERMANENTE' },
  ];

  const [selectedClasificacion, setSelectedClasificacion] = useState(null);
  const [selectedHorario, setSelectedHorario] = useState(null);
  const [selectedTipo, setSelectedTipo] = useState(null);

  const handleClasificacionChange = (selectedOption) => {
    setSelectedClasificacion(selectedOption);
  };

  const handleHorarioChange = (selectedOption) => {
    setSelectedHorario(selectedOption);
  };

  const handleTipoChange = (selectedOption) => {
    setSelectedTipo(selectedOption);
  };
  
  return (
  <>
    <Header/>
      {/* Contenido */}
      <div className='overflow-auto mb-40 md:mb-0 h-full'>
        <div className="lg:mx-16 md:mx-8 m-6 lg:mt-9">
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
          <div className={`border-2 mt-3 rounded-b-lg md:mt-0 ${showButtons ? '2xl:pb-0' : '2xl:pb-14'}`}>
            {/* Tab 1 Datos del comerciante */}
            {activeTab === 1 &&
              <div className='w-full'>
                {/* Botón del menú */}
                <div className='w-full relative text-end py-4 px-4 md:pt-4 md:pb-0 2xl:py-4'>
                  <button
                    className="bg-gray-100 hover:bg-gray-200 text-gris hover:text-naranja focus:text-verde border-2 border-gray-200 py-2 px-2 rounded-lg shadow-md md:py-1 2xl:py-2"
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
                            onClick={handleOptionClick}
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
                  <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-x-6 pb-8 lg:pb-0'>
                    {/* Seccion 1 Datos Personales */}
                    <section className='col-span-1 px-4 mb-6 md:mb-0'>
                      <div className="text-start">
                        <h4 className="text-2xl text-naranja font-Foco-Corp-Bold mb-6 md:mb-4">
                          Datos personales:
                        </h4>
                      </div>
                      <div className="flex flex-col gap-x-4 gap-y-4 xl:grid xl:grid-cols-2 lg:gap-y-2 2xl:gap-y-3">
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
                        <div className="flex flex-col col-span-2 mb-2">
                          <label
                            htmlFor="terceraEdad"
                            className="font-Foco-Corp-Bold text-gris text-base mb-1"
                          >
                            Comerciante de la tercera edad o discapacitado
                          </label>
                          <div className="flex items-center mb-3">
                            <input
                              id="terceraEdad"
                              type="checkbox"
                              className="h-4 w-4 rounded-lg focus:bg-verde bg-verde focus:outline-none focus:bg-none focus:border-violet-600"
                            />
                            <label
                              htmlFor="terceraEdad"
                              className="text-base ml-2 font-Foco-Corp-Italic text-gris mt-1 text-justify"
                            >
                              Selecciona la casilla solo si el comerciante es de la tercera
                              edad o tiene capacidades diferentes
                            </label>
                          </div>
                        </div>
                      </div>
                    </section>
                    {/*Seccion 2 Domicilio Comerciante*/}
                    <section className='col-span-1 px-4'>
                      <div className="text-start">
                        <h4 className="text-2xl text-naranja font-Foco-Corp-Bold mb-6 md:mb-4">
                          Domicilio:
                        </h4>
                      </div>
                      <div className="flex flex-col gap-x-4 gap-y-4 xl:grid xl:grid-cols-4 lg:gap-y-2">
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
                            No. Exterior
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
                            No. Interior
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
                  {/* Botones Guardar y Cancelar */}
                  {showButtons && (
                    <div>
                      <div className='w-full flex flex-col md:flex-row py-8 md:py-4 2xl:py-8 px-4 rounded-b-lg gap-4 lg:gap-10 bg-gray-50 justify-end'>
                        <button 
                          className="text-center text-lg w-full md:w-72  h-9 2xl:h-12 font-Foco-Corp-Bold border-2 bg-verde border-verde hover:bg-verde hover:opacity-80 rounded-lg text-white"
                          onClick={handleSaveClick}
                        >
                          Guardar
                        </button>
                        <button
                          className="text-center text-lg w-full md:w-72 h-9 2xl:h-12 font-Foco-Corp-Bold border-2 bg-rojo border-rojo hover:bg-rojo hover:opacity-80 rounded-lg text-white"
                          onClick={handleCancelClick}>Cancelar</button>
                      </div>
                    </div>
                  )}
                </form>
              </div>
            }
            {/* Tab 2 Datos del comercio */}
            {activeTab === 2 &&
              <div className='w-full'>
                {/* Botón del menú */}
                <div className='w-full relative text-end py-4 px-4 md:pt-4 md:pb-0 2xl:py-4'>
                  <button
                    className="bg-gray-100 hover:bg-gray-200 text-gris hover:text-naranja focus:text-verde border-2 border-gray-200 py-2 px-2 rounded-lg shadow-md md:py-1 2xl:py-2"
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
                            className="block w-full text-left px-4 py-2 text-base md:text-lg font-medium text-gris hover:bg-naranja hover:bg-opacity-80 hover:text-white"
                            onClick={() => { /* Lógica para la opción 2 */ }}
                          >
                            Orden de pago
                          </button>
                        </li>
                        <li>
                          <button
                            className="block w-full text-left px-4 py-2 text-base md:text-lg font-medium text-gris hover:bg-naranja hover:bg-opacity-80 hover:text-white"
                            onClick={() => { /* Lógica para la opción 2 */ }}
                          >
                            Refrendar
                          </button>
                        </li>
                        <li>
                          <button
                            className="block w-full text-left px-4 py-2 rounded-b-lg text-base md:text-lg font-medium text-gris hover:bg-naranja hover:bg-opacity-80 hover:text-white"
                            onClick={() => { /* Lógica para la opción 2 */ }}
                          >
                            Dar de baja
                          </button>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
                {/* Datos del comercio */}
                <form>
                  <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-x-6 pb-8 lg:pb-1 2xl:pb-2'>
                    {/* Seccion 1 Informaciòn de comercio */}
                    <section className='col-span-1 px-4 mb-6 md:mb-0'>
                      <div className="text-start">
                        <h4 className="text-2xl text-naranja font-Foco-Corp-Bold mb-6 md:mb-4">
                          Información:
                        </h4>
                      </div>
                      <div className="flex flex-col gap-x-4 gap-y-4 xl:grid xl:grid-cols-4 lg:gap-y-2 2xl:gap-y-3">
                        <div className="flex flex-col col-span-2 ">
                          <label
                            htmlFor="clasificacion"
                            className="font-Foco-Corp-Bold text-gris text-base mb-1"
                          >
                            Clasificación
                          </label>
                          <Select
                            value={selectedClasificacion}
                            id="clasificacion"
                            styles={selectStylesForm}
                            className=" antialiased text-gris h-9 md:text-sm"
                            placeholder="Seleccione una opción"
                            onChange={handleClasificacionChange}
                            options={optionsClasificacion}
                            >
                          </Select>
                        </div>
                        <div className="flex flex-col col-span-1">
                          <label
                            htmlFor="fechaInicio"
                            className="font-Foco-Corp-Bold text-gris text-base mb-1"
                          >
                            Fecha de inicio
                          </label>
                          <input
                            id="fechaInicio"
                            className="bg-gris bg-opacity-10 text-sm text-gris rounded-lg border-gray-300 border-2 p-2 h-9 hover:border-gray-400 focus:border-naranja focus:bg-gray-50 focus:outline-none focus:shadow-lg focus:text-black"
                            placeholder="Escribe algo"
                          />
                        </div>
                        <div className="flex flex-col col-span-1">
                          <label
                            htmlFor="fechaTermino"
                            className="font-Foco-Corp-Bold text-gris text-base mb-1"
                          >
                            Fecha de termino
                          </label>
                          <input
                            id="fechaTermino"
                            className="bg-gris bg-opacity-10 text-gris rounded-lg border-gray-300 border-2 p-2 h-9 hover:border-gray-400 focus:border-naranja focus:bg-gray-50 focus:outline-none focus:shadow-lg focus:text-black"
                            placeholder="Escribe algo"
                          />
                        </div>
                        <div className="flex flex-col col-span-3">
                          <label
                            htmlFor="tipoGiro"
                            className="font-Foco-Corp-Bold text-gris text-base mb-1"
                          >
                            Tipo de giro/Actividad
                          </label>
                          <input
                            id="tipoGiro"
                            className="bg-gris bg-opacity-10 text-gris rounded-lg border-gray-300 border-2 p-2 h-9 hover:border-gray-400 focus:border-naranja focus:bg-gray-50 focus:outline-none focus:shadow-lg focus:text-black"
                            placeholder="Escribe algo"
                          />
                        </div>
                        <div className="flex flex-col col-span-1">
                          <label
                            htmlFor="metros"
                            className="font-Foco-Corp-Bold text-gris text-base mb-1"
                          >
                            Metros
                          </label>
                          <input
                            id="metros"
                            className="bg-gris bg-opacity-10 text-gris rounded-lg border-gray-300 border-2 p-2 h-9 hover:border-gray-400 focus:border-naranja focus:bg-gray-50 focus:outline-none focus:shadow-lg focus:text-black"
                            placeholder="Escribe algo"
                          />
                        </div>
                        <div className="flex flex-col col-span-2">
                          <label
                            htmlFor="email"
                            className="font-Foco-Corp-Bold text-gris text-base mb-1"
                          >
                            Horario
                          </label>
                          <Select
                            value={selectedHorario}
                            id="horario"
                            styles={selectStylesForm}
                            className=" antialiased text-gris h-9 md:text-sm"
                            placeholder="Seleccione una opción"
                            onChange={handleHorarioChange}
                            options={optionsHorario}
                            >
                          </Select>
                        </div>
                        <div className="flex flex-col col-span-1">
                          <label
                            htmlFor="tipo"
                            className="font-Foco-Corp-Bold text-gris text-base mb-1"
                          >
                            Tipo
                          </label>
                          <Select
                            value={selectedTipo}
                            id="tipo"
                            styles={selectStylesForm}
                            className=" antialiased text-gris h-9 md:text-sm"
                            placeholder="Seleccionar"
                            onChange={handleTipoChange}
                            options={optionsTipo}
                            >
                          </Select>
                        </div>
                        <div className="flex flex-col col-span-1">
                          <label
                            htmlFor="dias"
                            className="font-Foco-Corp-Bold text-gris text-base mb-1"
                          >
                            Días
                          </label>
                          <input
                            id="dias"
                            className="bg-gris bg-opacity-10 text-gris rounded-lg border-gray-300 border-2 p-2 h-9 hover:border-gray-400 focus:border-naranja focus:bg-gray-50 focus:outline-none focus:shadow-lg focus:text-black"
                            placeholder="Escribe algo"
                          />
                        </div>
                        <div className="flex flex-col col-span-4 mb-20">
                          <label
                            htmlFor="email"
                            className="font-Foco-Corp-Bold text-gris text-base mb-1"
                          >
                            Observaciones del comercio
                          </label>
                          <input
                            id="email"
                            className="bg-gris bg-opacity-10 text-gris rounded-lg border-gray-300 border-2 p-2 h-9 hover:border-gray-400 focus:border-naranja focus:bg-gray-50 focus:outline-none focus:shadow-lg focus:text-black"
                            placeholder="Escribe algo"
                          />
                        </div>
                      </div>
                    </section>
                    {/*Seccion 2 Ubicaciòn del comercio*/}
                    <section className='col-span-1 px-4'>
                      <div className="text-start">
                        <h4 className="text-2xl text-naranja font-Foco-Corp-Bold mb-6 md:mb-4">
                          Ubicación del comercio:
                        </h4>
                      </div>
                      <div className="flex flex-col gap-x-4 gap-y-4 xl:grid xl:grid-cols-4 lg:gap-y-2">
                        <div className="flex flex-col col-span-4">
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
                        <div className="flex flex-col col-span-2">
                          <label
                            htmlFor="cruce1"
                            className="font-Foco-Corp-Bold text-gris text-base mb-1"
                          >
                            Entre 
                          </label>
                          <input
                            id="cruce1"
                            className="bg-gris bg-opacity-10 text-gris rounded-lg border-gray-300 border-2 p-2 h-9 hover:border-gray-400 focus:border-naranja focus:bg-gray-50 focus:outline-none focus:shadow-lg focus:text-black"
                            placeholder="Escribe algo"
                          />
                        </div>
                        <div className="flex flex-col col-span-2">
                          <label
                            htmlFor="cruce2"
                            className="font-Foco-Corp-Bold text-gris text-base mb-1"
                          >
                           Y 
                          </label>
                          <input
                            id="cruce2"
                            className="bg-gris bg-opacity-10 text-gris rounded-lg border-gray-300 border-2 p-2 h-9 hover:border-gray-400 focus:border-naranja focus:bg-gray-50 focus:outline-none focus:shadow-lg focus:text-black"
                            placeholder="Escribe algo"
                          />
                        </div>
                        <div className="flex flex-col col-span-3">
                          <label
                            htmlFor="localidad"
                            className="font-Foco-Corp-Bold text-gris text-base mb-1"
                          >
                            Localidad
                          </label>
                          <input
                            id="localidad"
                            className="bg-gris bg-opacity-10 text-gris rounded-lg border-gray-300 border-2 p-2 h-9 hover:border-gray-400 focus:border-naranja focus:bg-gray-50 focus:outline-none focus:shadow-lg focus:text-black"
                            placeholder="Escribe algo"
                          />
                        </div>
                        <div className="flex flex-col col-span-1">
                          <label
                            htmlFor="zona"
                            className="font-Foco-Corp-Bold text-gris text-base mb-1"
                          >
                            Zona
                          </label>
                          <input
                            id="zona"
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
          </div>
          {!showButtons && (
            <footer className="flex flex-col md:grid md:grid-cols-2 md:gap-4 mt-6">
              <div className="text-white text-xl font-Foco-Corp-Bold lg:m-0">
                <input
                  type="button"
                  value="Volver"
                  className="self-start text-center bg-verde w-full h-11 rounded-lg lg:w-40"
                />
              </div>
            </footer>
          )}
        </div>
      </div>
    </>
  );
};

export default DataComerciante;
