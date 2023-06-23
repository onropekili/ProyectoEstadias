import axios from "axios";
import React, { useEffect, useState } from "react";
import { AuthMiddleware } from "../../middleware/ProtectedMiddleware";
import { useLocation, useNavigate } from "react-router-dom";
import { InfoComponent } from "../../components/InfoComponent";
import Header from "../../components/Header";

function DashBoard_Ejecutivo() {
  const location = useLocation();
  const user = location.state && location.state.data;
  let comerciantes = location.state && location.state.comerciante;
  const navigate = useNavigate();
  let ComerciantesComponents

  const [nameOrId, setNameOrId] = useState("");
  const [Mostrar, setMostrar] = useState("");
  const [filtrarPor, setFiltrarPor] = useState("");
  const [colonia, setColonia] = useState("");

  useEffect(() => {
    AuthMiddleware(user, navigate);
  }, [user, navigate]);

  const setInfoComponent = (comerciantes) => {
    ComerciantesComponents = comerciantes.map((comerciante) => (
      <InfoComponent
        key={comerciante.id_comercio}
        folio={comerciante.id_comercio}
        nombre={
          comerciante.apellido_paterno +
          " " +
          comerciante.apellido_materno +
          " " +
          comerciante.nombres
        }
        giroActivo={comerciante.giro}
        observaciones={comerciante.observaciones_comerciante}
        fecha_termino={comerciante.fecha_termino}
        tercera_edad={comerciante.tercera_edad}
      />
    ));
  }

  setInfoComponent(comerciantes);

  

  const HandleInputChanges = (event) => {
    const inputId = event.target.id
    const newValue = event.target.value
    switch (inputId) {
      case "mostrar":
        onChangeMostrar(newValue);
        break;

      case "colonia":
        onChangeColonia(newValue);
        break;

      case "nameOrId":
        onChangeNameOrId(newValue);

        break;

      case "filtrar":
        onChangeFiltrar(newValue);
        break;

      default:
        break;
    }
    const data = {
      isNameOrId : nameOrId,
      filtrarPor : filtrarPor,
      mostrar: Mostrar,
      colonia: colonia
    };

   axios.get('http://localhost:4000/dashboard/find_by_name_or_id/', {params : data} )
   .then((res) => {
    console.log(res.data.result.rows);
    // setInfoComponent(res.data)
   })
  };

  const onChangeMostrar = (newValue) => {
    setColonia("");
    setMostrar(newValue);
  };

  const onChangeColonia = (newValue) => {
    setNameOrId("");
    setMostrar("");
    setFiltrarPor("");
    setColonia(newValue);
  };

  const onChangeNameOrId = (newValue) => {
    setColonia("");
    setNameOrId(newValue);
  };

  const onChangeFiltrar = (newValue) => {
    setColonia("");
    setFiltrarPor(newValue);
  };

  return (
    <>
      <Header useButton={true} currentPage={DashBoard_Ejecutivo} />
      <div className="flex px-8 pt-7">
        <div className="flex flex-col">
          <div className="mb-4 flex flex-wrap">
            <div className="relative flex items-center mr-4">
              <input
                value={nameOrId}
                id="nameOrId"
                type="text"
                className="pl-14 px-4 py-2.5 w-96 max-w-lg rounded-lg font-Foco-Corp text-gris placeholder:text-base placeholder:text-gris placeholder:text-opacity-70 shadow-sm ring-2 ring-inset ring-gris focus:drop-shadow-lg focus:ring-2 focus:ring-gris focus:ring-opacity-75 focus:outline-none sm:text-sm sm:leading-6"
                placeholder="Nombre O No. de folio"
                onChange={HandleInputChanges}
              />
              <img
                src={require("../../assets/images/search.png")}
                alt="Img"
                className="absolute left-0 w-11 h-11 p-2 border border-gris rounded-lg rounded-r-none"
              />
            </div>
            <select
              value={Mostrar}
              id="mostrar"
              className=" px-4 py-3.5 w-64 rounded-lg font-Foco-Corp text-gris placeholder:text-gris placeholder:text-opacity-70 shadow-sm ring-2 ring-inset ring-gris focus:drop-shadow-lg focus:ring-2 focus:ring-gris focus:ring-opacity-75 focus:outline-none sm:text-sm sm:leading-6"
              onChange={HandleInputChanges}
            >
              <option value="">Todos</option>
              <option value="permanentes">Permanentes</option>
              <option value="eventuales">Eventuales</option>
            </select>
          </div>

          <div className="mb-4 flex flex-wrap">
            <div className="relative flex items-center mr-4">
              <input
                value={colonia}
                id="colonia"
                type="text"
                className="pl-14 px-4 py-2.5 w-96 max-w-lg rounded-lg font-Foco-Corp text-gris placeholder:text-base placeholder:text-gris placeholder:text-opacity-70 shadow-sm ring-2 ring-inset ring-gris focus:drop-shadow-lg focus:ring-2 focus:ring-gris focus:ring-opacity-75 focus:outline-none sm:text-sm sm:leading-6"
                placeholder="Buscar por colonia"
                onChange={HandleInputChanges}
              />
              <img
                src={require("../../assets/images/search.png")}
                alt="Img"
                className="absolute left-0 w-11 h-11 p-2 border border-gris rounded-lg rounded-r-none"
              />
            </div>
            <select
              id="filtrar"
              value={filtrarPor}
              name="filtrar"
              className="px-4 py-3.5 w-64 rounded-lg font-Foco-Corp text-gris placeholder:text-gris placeholder:text-opacity-70 shadow-sm ring-2 ring-inset ring-gris focus:drop-shadow-lg focus:ring-2 focus:ring-gris focus:ring-opacity-75 focus:outline-none sm:text-sm sm:leading-6"
              onChange={HandleInputChanges}
            >
              <option hidden value={""}>Filtrar por</option>
              <option value="terceraEdad">
                Tercera edad/Capacidades diferentes
              </option>
              <option value="refrendados">Refrendados</option>
              <option value="noRefrendados">No Refrendados</option>
              <option value="conObservacion">Con Observaciones</option>
            </select>
          </div>
        </div>

        <div className="flex flex-col ml-auto justify-end">
          <div className="flex mb-auto">
            <div className="mb-4 flex flex-wrap">
              <div className="relative flex items-center mr-4">
                <button
                  onClick={() => navigate("/Registrar-comerciante")}
                  className="bg-naranja hover:bg-naranja hover:opacity-75 text-white font-bold py-2 px-20 rounded"
                >
                  Alta vía pública
                </button>
                <img
                  src={require("../../assets/images/edit.png")}
                  alt="Img"
                  className="absolute left-0 w-11 h-11 p-2 border-2 border-white rounded-md rounded-r-none"
                />
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
                <img
                  src={require("../../assets/images/edit.png")}
                  alt="Img"
                  className="absolute left-0 w-11 h-11 p-2 border-2 border-white rounded-md rounded-r-none"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="justify-center items-center flex flex-wrap">
        {ComerciantesComponents}
      </div>
    </>
  );
}

export default DashBoard_Ejecutivo;
