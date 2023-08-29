import axios from "axios";
import React, { useEffect, useState } from "react";
import { AuthMiddleware } from "../../middleware/ProtectedMiddleware";
import { useLocation, useNavigate } from "react-router-dom";
import { InfoComponent } from "../../components/InfoComponent";
import Header from "../../components/Header";

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

  // useEffect(() => {
  //   AuthMiddleware(user, navigate);
  // }, [user, navigate]);

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
      <div className="px-8 pt-7">
        <div className="flex flex-col lg:grid lg:grid-cols-4 items-start gap-4">
          <div className="col-span-2 flex flex-col lg:grid lg grid-cols-2 gap-4">
            <div className=" flex flex-col gap-2 w-full">
              <div className="relative flex items-center">
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
              <div className="relative flex items-center">
                <input
                  value={colonia}
                  id="colonia"
                  type="text"
                  className="pl-14 px-4 py-2.5 w-96 max-w-lg rounded-lg font-Foco-Corp text-gris placeholder:text-base placeholder:text-gris placeholder:text-opacity-70 shadow-sm ring-2 ring-inset ring-gris focus:drop-shadow-lg focus:ring-2 focus:ring-gris focus:ring-opacity-75 focus:outline-none sm:text-sm sm:leading-6"
                  placeholder="Buscar por colonia"
                  onInput={HandleInputChanges}
                />
                <img
                  src={require("../../assets/images/search.png")}
                  alt="Img"
                  className="absolute left-0 w-11 h-11 p-2 border border-gris rounded-lg rounded-r-none"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2 w-full">
              <select
                id="filtrar"
                value={filtrarPor}
                name="filtrar"
                className="px-4 py-3.5 w-64 h-11 rounded-lg font-Foco-Corp text-gris placeholder:text-gris placeholder:text-opacity-70 shadow-sm ring-2 ring-inset ring-gris focus:drop-shadow-lg focus:ring-2 focus:ring-gris focus:ring-opacity-75 focus:outline-none sm:text-sm sm:leading-6"
                onInput={HandleInputChanges}
              >
                <option  value="">
                  Filtrar por
                </option>
                <option value="terceraEdad">
                  Tercera edad/Capacidades diferentes
                </option>
                <option value="refrendados">Refrendados</option>
                <option value="noRefrendados">No Refrendados</option>
                <option value="conObservacion">Con Observaciones</option>
              </select>
              <select
                value={Mostrar}
                id="mostrar"
                className=" px-4 py-3.5 w-64 h-11 rounded-lg font-Foco-Corp text-gris placeholder:text-gris placeholder:text-opacity-70 shadow-sm ring-2 ring-inset ring-gris focus:drop-shadow-lg focus:ring-2 focus:ring-gris focus:ring-opacity-75 focus:outline-none sm:text-sm sm:leading-6"
                onChange={HandleInputChanges}
              >
                <option value="">Todos</option>
                <option value="permanentes">Permanentes</option>
                <option value="eventuales">Eventuales</option>
              </select>
            </div>
          </div>
          <div className="col-span-2 flex flex-col w-full">
            <div className="flex flex-col lg:grid lg:grid-cols-2 gap-4">
              <div className="flex">
                <div className="relative flex items-center w-full">
                  <button
                    onClick={() => navigate("/Registrar-comerciante")}
                    className="bg-naranja hover:bg-naranja hover:opacity-75 text-white font-bold w-full py-2 px-20 rounded"
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
              <div className="flex">
                <div className="relative flex items-center w-full">
                  <button
                    onClick={() => navigate("/Registrar-comerciante-evento")}
                    className="bg-verde hover:bg-verde hover:opacity-75 text-white font-bold w-full py-2 px-20 rounded"
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
        <div className="justify-center items-center flex flex-wrap gap-5 py-5">
          {ComerciantesComponents}
        </div>
      </div>
    </>
  );
}

export default DashBoard_Ejecutivo;
