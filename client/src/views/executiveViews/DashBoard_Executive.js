import React, { useEffect } from 'react';
import { AuthMiddleware } from '../../middleware/ProtectedMiddleware';
import { useLocation, useNavigate } from 'react-router-dom';
import { InfoComponent } from '../../components/InfoComponent';
import Header from '../../components/Header';

function DashBoard_Ejecutivo() {
  const location = useLocation();
  const user = location.state && location.state.data;
  const navigate = useNavigate();

  useEffect(() => {
    AuthMiddleware(user, navigate);
  }, [user, navigate]);



  return (
    <>
      <Header useButton={true} currentPage={DashBoard_Ejecutivo} />
      <div className="flex p-6">
        <div className="flex flex-col">
          <div className="mb-4 flex flex-wrap">
            <div className="relative flex items-center mr-4">
              <input
                type="text"
                className="pl-14 px-4 py-2.5 w-96 max-w-lg rounded-lg font-Foco-Corp text-gris placeholder:text-base placeholder:text-gris placeholder:text-opacity-70 shadow-sm ring-2 ring-inset ring-gris focus:drop-shadow-lg focus:ring-2 focus:ring-gris focus:ring-opacity-75 focus:outline-none sm:text-sm sm:leading-6"
                placeholder="Nombre O No. de folio"
              />
              <img src={require("../../assets/images/search.png")} alt="Img" className="absolute left-0 w-11 h-11 p-2 border border-gris rounded-lg rounded-r-none" />
            </div>
            <select
              className=" px-4 py-3.5 w-64 rounded-lg font-Foco-Corp text-gris placeholder:text-gris placeholder:text-opacity-70 shadow-sm ring-2 ring-inset ring-gris focus:drop-shadow-lg focus:ring-2 focus:ring-gris focus:ring-opacity-75 focus:outline-none sm:text-sm sm:leading-6"
            >
              <option hidden>Mostrar</option>
              <option value="option1">Todos</option>
              <option value="option2">Permanentes</option>
              <option value="option3">Eventuales</option>
            </select>
          </div>

          <div className="mb-4 flex flex-wrap">
            <div className="relative flex items-center mr-4">
              <input
                type="text"
                className="pl-14 px-4 py-2.5 w-96 max-w-lg rounded-lg font-Foco-Corp text-gris placeholder:text-base placeholder:text-gris placeholder:text-opacity-70 shadow-sm ring-2 ring-inset ring-gris focus:drop-shadow-lg focus:ring-2 focus:ring-gris focus:ring-opacity-75 focus:outline-none sm:text-sm sm:leading-6"
                placeholder="Buscar por colonia"
              />
              <img src={require("../../assets/images/search.png")} alt="Img" className="absolute left-0 w-11 h-11 p-2 border border-gris rounded-lg rounded-r-none" />

            </div>
            <select
              className="px-4 py-3.5 w-64 rounded-lg font-Foco-Corp text-gris placeholder:text-gris placeholder:text-opacity-70 shadow-sm ring-2 ring-inset ring-gris focus:drop-shadow-lg focus:ring-2 focus:ring-gris focus:ring-opacity-75 focus:outline-none sm:text-sm sm:leading-6"
            >
              <option hidden>Filtrar por</option>
              <option value="option1">Tercera edad/Capacidades diferentes</option>
              <option value="option2">Refrendados</option>
              <option value="option3">No Refrendados</option>
              <option value="option4">Con Observaciones</option>
            </select>
          </div>
        </div>

        <div className="flex flex-col ml-auto justify-end">
          <div className="flex mb-auto">
            <div className="mb-4 flex flex-wrap">
              <div className="relative flex items-center mr-4">
                <button
                  onClick={() => navigate("/Registrar-comerciante")}
                  className="bg-naranja hover:bg-naranja hover:opacity-75 text-white font-bold py-2 px-20 rounded">
                  Alta vía pública
                </button>
                <img src={require("../../assets/images/edit.png")} alt="Img" className="absolute left-0 w-11 h-11 p-2 border-2 border-white rounded-md rounded-r-none" />
              </div>
            </div>
            <div className="mb-4 flex flex-wrap">
              <div className="relative flex items-center">
                <button
                  onClick={() => navigate("/Registrar-comerciante-evento")}
                  className="bg-verde hover:bg-verde hover:opacity-75 text-white font-bold py-2 px-20 rounded"
                >
                  Alta por evento
                </button>
                <img src={require("../../assets/images/edit.png")} alt="Img" className="absolute left-0 w-11 h-11 p-2 border-2 border-white rounded-md rounded-r-none" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/**/}

      <div className='p-6'>
        <InfoComponent folio={1} nombre={"Brau Israel Fernández Márquez"} giroActivo={"Alimentos: Tacos de barbacoa "} observaciones={false} fecha_termino={"12/12/2023"} tercera_edad={true} />
      </div>
    </>
  )
}

export default DashBoard_Ejecutivo