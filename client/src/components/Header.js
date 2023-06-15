import React from 'react'
import logoEmpresa from '../assets/images/logoEmpresa.jpg';
export default function Header() {
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
          <h1 className="text-gris md:text-4xl lg:text-4xl whitespace-nowrap mr-3 md:mr-3 lg:mr-5 font-Foco-Corp-Bold">
            Alta en vía pública
          </h1>
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
