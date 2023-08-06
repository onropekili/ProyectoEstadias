import React, { useEffect, useState } from 'react';
import { AuthMiddleware } from '../../middleware/ProtectedMiddleware';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from "../../components/Header";
import Sidebar from '../../components/Sidebar';
import { IoGrid } from 'react-icons/io5';

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
        <div className='w-full bg-white'>
          <div className='px-8 pt-8 flex flex-row justify-between items-center'>
            <h3 className="text-2xl md:text-3xl font-Foco-Corp-Bold text-gris 2xl:text-4xl">
              Bienvenido Administrador
            </h3>
            <button onClick={toggleSidebar}>
              {isOpen ? <IoGrid className="text-3xl text-verde hover:text-opacity-80" /> : <IoGrid className="text-3xl text-naranja hover:text-opacity-80" />}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default DashBoard_Admin;