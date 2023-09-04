import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { InfoComponent } from "../../../components/InfoComponent";
import Header from "../../../components/Header";
import { AiFillCaretDown } from 'react-icons/ai';

function DashBoard_Ejecutivo() {
  const location = useLocation();
  const [comerciantes, setComerciantes] = useState([]);
  const [ComerciantesComponents, setComerciantesComponents] = useState([]);

  //Inputs values
  const [nameOrId, setNameOrId] = useState("");
  const [Mostrar, setMostrar] = useState("");
  const [filtrarPor, setFiltrarPor] = useState("");
  const [colonia, setColonia] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    if (location.state && location.state.comerciante) {
      setComerciantes(location.state.comerciante);
    } else {
      setComerciantes([]);
    }
  }, [location.state]);

  useEffect(() => {
    setInfoComponent(comerciantes);
  }, [comerciantes]);

  useEffect(() => {
    const fetchCustomer = async () => {
      const data = {
        isNameOrId: nameOrId,
        filtrarPor: filtrarPor,
        mostrar: Mostrar,
        colonia: colonia,
      };
      if (
        nameOrId !== "" ||
        filtrarPor !== "" ||
        Mostrar !== "" ||
        colonia !== ""
      ) {
        try {
          const res = await axios.get(
            `http://${process.env.REACT_APP_HOST}:4000/dashboard/find_by_name_or_id/`,
            { params: data }
          );
          setInfoComponent(res.data.result.rows);
        } catch (error) {
          console.error(error);
        }
      } else {
        try {
          const res = await axios.get(
            `http://${process.env.REACT_APP_HOST}:4000/dashboard/find_by_name_or_id/`
          );
          setInfoComponent(res.data.result.rows);
        } catch (error) {
          console.error(error);
        }
      }
    };

    fetchCustomer();
  }, [nameOrId, Mostrar, filtrarPor, colonia]);

  const setInfoComponent = (comerciantes) => {
    const components = comerciantes.map((comerciante) => (
      <InfoComponent 
        key={comerciante.id_comercio}
        folio={comerciante.id_comercio}
        nombre={comerciante.nombre_completo}
        giroActivo={comerciante.giro}
        observaciones={comerciante.observaciones_comerciante}
        fecha_termino={comerciante.fecha_termino}
        tercera_edad={comerciante.tercera_edad}
      />
    ));
    setComerciantesComponents(components);
  };

  const HandleInputChanges = async (event) => {
    const inputId = event.target.id;
    const newValue = event.target.value;

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
      <div className="px-4 lg:px-8 pt-8 mb-10">
        <div className="flex flex-col lg:grid lg:grid-cols-4 items-start gap-6">
          <div className="col-span-2 w-full flex flex-col lg:grid lg grid-cols-2 gap-5">
            <div className=" flex flex-col gap-3">
              <div className="relative flex items-center w-full">
                <input
                  value={nameOrId}
                  id="nameOrId"
                  type="text"
                  className="w-full h-11 pl-14 px-4 text-lg rounded-lg font-Foco-Corp text-gris placeholder:text-opacity-70 shadow-sm ring-2 ring-inset ring-gris focus:drop-shadow-lg focus:ring-2 focus:ring-gris focus:ring-opacity-75 focus:outline-none"
                  placeholder="Nombre O No. de folio"
                  onChange={HandleInputChanges}
                />
                <img
                  src={require("../../../assets/images/search.png")}
                  alt="Img"
                  className="absolute left-0 w-11 h-11 p-2 border-r-2 border-gris bg-gris bg-opacity-5"
                />
              </div>
              <div className="relative flex items-center w-full">
                <input
                  value={colonia}
                  id="colonia"
                  type="text"
                  className="w-full h-11 pl-14 px-4 text-lg rounded-lg font-Foco-Corp text-gris placeholder:text-opacity-70 shadow-sm ring-2 ring-inset ring-gris focus:drop-shadow-lg focus:ring-2 focus:ring-gris focus:ring-opacity-75 focus:outline-none"
                  placeholder="Buscar por colonia"
                  onInput={HandleInputChanges}
                />
                <img
                  src={require("../../../assets/images/search.png")}
                  alt="Img"
                  className="absolute left-0 w-11 h-11 p-2 border-r-2 border-gris bg-gris bg-opacity-5"
                />
              </div>
            </div>
            <div className="flex flex-col gap-3 w-full">
              <div className="relative flex items-center w-full">
                <select
                  id="filtrar"
                  value={filtrarPor}
                  name="filtrar"
                  className="w-full h-11 px-4 text-lg rounded-lg font-Foco-Corp text-gris placeholder:text-gris placeholder:text-opacity-70 shadow-sm ring-2 ring-inset ring-gris focus:drop-shadow-lg focus:ring-2 focus:ring-gris focus:ring-opacity-75 focus:outline-none appearance-none"
                  onInput={HandleInputChanges}
                >
                  <option value="">Filtrar por</option>
                  <option value="terceraEdad">Tercera edad/Capacidades diferentes</option>
                  <option value="refrendados">Refrendados</option>
                  <option value="noRefrendados">No Refrendados</option>
                  <option value="conObservacion">Con Observaciones</option>
                </select>
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 pointer-events-none border-l-2 border-gris px-2 py-2 bg-gris bg-opacity-5">
                  <AiFillCaretDown size={26} color="#9CA3AF" /> {/* Icono de flecha */}
                </div>
              </div>
              <div className="relative flex items-center w-full">
                <select
                  value={Mostrar}
                  id="mostrar"
                  className="w-full h-11 px-4 text-lg rounded-lg font-Foco-Corp text-gris placeholder:text-gris placeholder:text-opacity-70 shadow-sm ring-2 ring-inset ring-gris focus:drop-shadow-lg focus:ring-2 focus:ring-gris focus:ring-opacity-75 focus:outline-none appearance-none bg-transparent"
                  onChange={HandleInputChanges}
                >
                  <option value="">Todos</option>
                  <option value="permanentes">Permanentes</option>
                  <option value="eventuales">Eventuales</option>
                </select>
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 pointer-events-none border-l-2 border-gris px-2 py-2 bg-gris bg-opacity-5">
                  <AiFillCaretDown size={26} color="#9CA3AF" /> {/* Icono de flecha */}
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-2 flex flex-col w-full">
            <div className="flex flex-col lg:grid lg:grid-cols-2 gap-4">
              <div className="relative flex items-center w-full">
                <button
                  onClick={() => navigate("/Registrar-comerciante")}
                  className="w-full h-11 bg-naranja hover:bg-naranja hover:opacity-75 text-white font-bold rounded"
                >
                  Alta vía pública
                </button>
                <img
                  src={require("../../../assets/images/edit.png")}
                  alt="Img"
                  className="absolute left-0 w-11 h-11 p-2 border-r-2 border-white"
                />
              </div>
              <div className="relative flex items-center w-full">
                <button
                  onClick={() => navigate("/Registrar-comerciante-evento")}
                  className="w-full h-11 bg-verde hover:bg-verde hover:opacity-75 text-white font-bold rounded"
                >
                  Alta por evento
                </button>
                <img
                  src={require("../../../assets/images/edit.png")}
                  alt="Img"
                  className="absolute left-0 w-11 h-11 p-2 border-r-2 border-white"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="justify-center items-start flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 overflow-auto px-1 py-6">
          {ComerciantesComponents}
        </div>
      </div>
    </>
  );
}

export default DashBoard_Ejecutivo;
