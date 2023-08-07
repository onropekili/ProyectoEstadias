import React, { useEffect, useState } from 'react';
import { AuthMiddleware } from '../../middleware/ProtectedMiddleware';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from "../../components/Header";
import Sidebar from '../../components/Sidebar';
import { IoGrid, IoPerson, IoChevronForwardCircle, IoPeopleSharp, IoStorefrontSharp} from 'react-icons/io5';

function DashBoard_Admin() {
  const location = useLocation();
  const user = location.state && location.state.data;
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    AuthMiddleware(user, navigate);
  }, [user, navigate]);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Header/>
      <div className='flex flex-row'>
        <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar}/>
        <div className='w-full bg-white overflow-auto'>
          <div className='px-8 pt-8 flex flex-row justify-between items-center'>
            <h3 className="text-2xl md:text-3xl font-Foco-Corp-Bold text-gris 2xl:text-4xl">
              Bienvenido Administrador
            </h3>
            <button className='md:hidden' onClick={toggleSidebar}>
              {isOpen ? <IoGrid className="text-3xl text-verde hover:text-opacity-80" /> : <IoGrid className="text-3xl text-naranja hover:text-opacity-80" />}
            </button>
          </div>
          <div className="flex flex-col md:grid md:grid-cols-2 xl:grid-cols-4 gap-x-4 gap-y-4 px-8 pt-6">
            <div className=" bg-naranja bg-opacity-80 border border-naranja text-white font-semibold rounded-md shadow-md">
              <div className='flex flex-row py-4 px-4 justify-between '>
                <div className="w-3/4 flex flex-col gap-2">
                  <span className='text-4xl'>2</span>
                  <span className='text-sm'>Ejecutivos registrados</span>
                </div>
                <div className="w-1/4 text-center ">
                  <IoPerson className="text-7xl text-naranja"/>
                </div>
              </div>
              <button className="w-full flex justify-center items-center gap-2 py-1 rounded-b-md  bg-naranja hover:bg-opacity-60 text-white font-semibold">
                <span className='text-sm'>Ver todos</span>
                <IoChevronForwardCircle className="text-2xl"/>
              </button>
            </div>
            <div className=" bg-verde bg-opacity-80 border border-verde text-white font-semibold rounded-md shadow-md">
              <div className='flex flex-row py-4 px-4 justify-between '>
                <div className="w-3/4 flex flex-col gap-2">
                    <span className='text-4xl'>3000</span>
                    <span className='text-sm'>Comercios registrados</span>
                </div>
                <div className="w-1/4 text-center ">
                  <IoStorefrontSharp className="text-7xl text-verde"/>
                </div>
              </div>
              <button className="w-full flex justify-center items-center gap-2 py-1 rounded-b-md  bg-verde hover:bg-opacity-60 text-white font-semibold">
                <span className='text-sm'>Ver todos</span>
                <IoChevronForwardCircle className="text-2xl"/>
              </button>
            </div>
            <div className=" bg-azul bg-opacity-80 border border-azul text-white font-semibold rounded-md shadow-md">
              <div className='flex flex-row py-4 px-4 justify-between '>
                <div className="w-3/4 flex flex-col gap-2">
                    <span className='text-4xl'>3000</span>
                    <span className='text-sm'>Comerciantes registrados</span>
                </div>
                <div className="w-1/4 text-center ">
                  <IoPeopleSharp className="text-7xl text-azul"/>
                </div>
              </div>
              <button className="w-full flex justify-center items-center gap-2 py-1 rounded-b-md  bg-azul hover:bg-opacity-60 text-white font-semibold">
                <span className='text-sm'>Ver todos</span>
                <IoChevronForwardCircle className="text-2xl"/>
              </button>
            </div>
            <div className=" bg-morado bg-opacity-80 border border-morado text-white font-semibold rounded-md shadow-md">
              <div className='flex flex-row py-4 px-4 justify-between '>
                <div className="w-3/4 flex flex-col gap-2">
                    <span className='text-4xl'>3000</span>
                    <span className='text-sm'>Ingresos totales</span>
                </div>
                <div className="w-1/4 text-center ">
                  <IoStorefrontSharp className="text-7xl text-morado"/>
                </div>
              </div>
              <button className="w-full flex justify-center items-center gap-2 py-1 rounded-b-md  bg-morado hover:bg-opacity-60 text-white font-semibold">
                <span className='text-sm'>Ver todos</span>
                <IoChevronForwardCircle className="text-2xl"/>
              </button>
            </div>
          </div>
          <div className='px-8 py-4 2xl:py-8'>
            <h3 className="text-xl font-Foco-Corp-Bold text-gris 2xl:text-2xl">
              Últimos ingresos
            </h3>
          </div>
          <div className='flex flex-col lg:grid lg:grid-cols-3 px-8 gap-5'>
            <div className='w-full flex flex-col p-4 border-2 border-gray-200 rounded-md gap-4 shadow-md'>
              <span className='text-base text-left font-Foco-Corp-Bold text-gris'>Hace 5 días</span>
              
            </div>
            <div className='w-full flex flex-col p-4 border-2 border-gray-200 rounded-md gap-4 shadow-md'>
              <span className='text-base text-left font-Foco-Corp-Bold text-gris'>Últimas 4 semanas</span>
              
            </div>
            <div className='w-full flex flex-col p-4 border-2 border-gray-200 rounded-md gap-4 shadow-md'>
              <span className='text-base text-left font-Foco-Corp-Bold text-gris'>Últimos 6 meses</span>
              
            </div>
          </div>
          <div className='px-8 flex flex-row justify-between items-center pt-6 2xl:pt-8 mb-5 2xl:mb-10'>
            <button className="w-full h-10 flex justify-center items-center gap-2 py-1 rounded-b-md  bg-naranja bg-opacity-80 hover:bg-naranja text-white font-semibold">
              <span className='text-sm'>Ver todos los ingresos</span>
              <IoChevronForwardCircle className="text-2xl"/>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default DashBoard_Admin;