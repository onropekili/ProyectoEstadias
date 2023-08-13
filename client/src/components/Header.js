import React from 'react'
import logoEmpresa from '../assets/images/logoEmpresa.jpg';
import NewComercianteEventView from '../views/executiveViews/NewComercianteEventView';
import DashBoard_Ejecutivo from '../views/executiveViews/DashBoard_Executive';
import NewComercianteView from '../views/executiveViews/NewComercianteView';
import {useNavigate} from "react-router-dom";
export default function Header({ useButton, currentPage }) {
  const navigate = useNavigate();
  let title = "";

  if (currentPage === DashBoard_Ejecutivo) {
    useButton = true;
    title = "Cerrar sesión"
  } else if (currentPage === NewComercianteView) {
    useButton = false;
    title = "Alta en vía pública";
  } else if (currentPage === NewComercianteEventView) {
    useButton = false;
    title = "Alta por evento";
  }
const cerrarSesion = () => {
    navigate("/");
}
  return (
    <header>
      <div className="flex items-center justify-between bg-white">
        <div className="w-44 h-12 md:w-full md:h-min">
          <img
            className="w-96 h-78"
            src={logoEmpresa}
            alt="Logo de la empresa"
          />
        </div>
        {useButton ? (
          
            <button onClick={cerrarSesion} className="p-1 w-48 text-black text-lg font-Foco-Corp-Bold flex items-center hover:opacity-70">
              {title}
              <img src={require('../assets/images/close-circle.png')} alt="Img" className="ml-1 w-8 h-8" />
            </button>
          
        ) : (
          <h1 className="text-gris md:text-4xl lg:text-4xl whitespace-nowrap mr-3 md:mr-3 lg:mr-5 font-Foco-Corp-Bold">
            {title}
          </h1>
        )}
      </div>

      {/* linea de colores */}
      <div>
        <div className="flex justify-between">
          <div className="h-2 w-1/5 bg-naranja"></div>
          <div className="h-2 w-1/5 bg-rojo"></div>
          <div className="h-2 w-1/5 bg-verde"></div>
          <div className="h-2 w-1/5 bg-azul"></div>
          <div className="h-2 w-1/5 bg-purple-400"></div>
        </div>
      </div>
    </header>
  )
}