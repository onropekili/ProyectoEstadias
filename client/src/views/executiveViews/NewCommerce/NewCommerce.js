import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Header from "../../../components/Header";
import { useLocation, useNavigate } from "react-router-dom";
import { showInfoAlert } from "../../../components/SwAlerts";
import axios from "axios";
import Swal from "sweetalert2";

const NewComercioView = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const comercianteData = location.state && location.state.comerciante;

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    if(!(/^\d{0,10}x\d{0,10}$/.test(data.metraje))){
      Swal.fire({
          title: "Metraje inválido",
          text: "El formato debe ser \"numeroxnumero\". Ejemplo: 2x2",
          icon: "warning",
          confirmButtonText: "Aceptar"
        }
      )
      return
    }
    console.log({ datos: { data: data, comerciante: comercianteData } });
    axios
      .post(`http://${process.env.REACT_APP_HOST}:4000/createCostumer`, {
        comerciante: comercianteData,
        comercio: data,
      })
      .then((res) => {
        const tittle = "Registro exitoso";
        const message = "La alta se ha completado exitosamente";
        const uri = "/DashBoard_E";
        Swal.fire({
          icon: "success",
          title: tittle,
          text: message,
        }).then((result) => {
          if (result.isConfirmed) {
            axios
              .get(`http://${process.env.REACT_APP_HOST}:4000/dashboard/find_by_name_or_id/`)
              .then((res) => {
                console.log(res.data);
                navigate(uri, {
                  state: { comerciante: res.data.result.rows },
                });
              })
              .catch((err) => {
                console.log(err);
              });
          }
        });
      });
  };

  return (
    <>
      <Header />

      {/* Contenido */}
      <div className="text-center lg:text-start md:text-start md:ms-3.5">
        <h3 className="text-3xl font-Foco-Corp-Bold text-naranja opacity-80 mt-9 lg:ms-12">
          Datos del comercio
        </h3>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:ms-16  sm:mx-4 m-6">
          <section className="md:order-1 mr-12 w-11/12">
            {/* seccion datos personales start */}
            <div className="lg:mt-2 m-0 text-center lg:text-start md:text-start">
              <h4 className="text-2xl text-gris font-Foco-Corp-Bold mb-6">
                Información
              </h4>
            </div>
            <div className="lg:grid lg:grid-cols-4 md:grid md:grid-cols-2 gap-4">
              <div className="flex flex-col mb-4 col-span-2">
                <label
                  htmlFor="tipo"
                  className="font-Foco-Corp-Bold text-gris text-base mb-1"
                >
                  Clasificación
                </label>
                <select
                  type=""
                  id="tipo"
                  className="bg-gris bg-opacity-10 text-gris rounded-lg border-gray-500 border p-2 h-9"
                  {...register("tipo", { required: true })}
                  placeholder="Escribe algo"
                >
                  <option value={""} hidden className="text-gris">
                    Selecciona una opcion
                  </option>
                  <option value={"COMERCIO AMBULANTE"} className="text-gris">
                    Comercio ambulante
                  </option>
                  <option
                    value={"COMERCIO EN PUESTO FIJO"}
                    className="text-gris"
                  >
                    Comercio en puesto fijo
                  </option>
                  <option
                    value={"COMERCIO EN PUESTO SEMI-FIJO"}
                    className="text-gris"
                  >
                    Comercio en puesto semi-fijo
                  </option>
                  <option
                    value={"COMERCIO EN FESTIVIDADES"}
                    className="text-gris"
                  >
                    Comercios en festividades
                  </option>
                </select>
              </div>
              <div className="flex flex-col mb-4 col-span-1">
                <label
                  htmlFor="permiso"
                  className="font-Foco-Corp-Bold text-gris text-base mb-1"
                >
                  Tipo de permiso
                </label>
                <select
                  type=""
                  id="permiso"
                  className="bg-gris bg-opacity-10 text-gris rounded-lg border-gray-500 border p-2 h-9"
                  {...register("permiso", { required: true })}
                  placeholder="Escribe algo"
                >
                  <option value={""} hidden className="text-gris">
                    Seleccionar
                  </option>
                  <option value={"EVENTUAL"} className="text-gris">
                    Eventual
                  </option>
                  <option value={"ESPECIAL"} className="text-gris">
                    Especial
                  </option>
                  <option value={"PERMANENTE"} className="text-gris">
                    Permanente
                  </option>
                </select>
              </div>
              <div className="flex flex-col mb-4 col-span-1">
                <label
                  htmlFor="metraje"
                  className="font-Foco-Corp-Bold text-gris text-base mb-1"
                >
                  Metros
                </label>
                <input
                  id="metraje"
                  className="bg-gris bg-opacity-10 text-black rounded-lg border-gray-500 border p-2 h-9"
                  {...register("metraje")}
                  placeholder="Escribe algo"
                />
              </div>
            </div>
            <div className="lg:grid lg:grid-cols-2 md:grid md:grid-cols-2 gap-4">
              <div className="flex flex-col mb-4">
                <label
                  htmlFor="giro"
                  className="font-Foco-Corp-Bold text-gris text-base mb-1"
                >
                  Tipo de Giro/Actividad
                </label>
                <input
                  id="giro"
                  className="bg-gris bg-opacity-10 text-black rounded-lg border-gray-500 border p-2 h-9"
                  {...register("giro", { required: true })}
                  placeholder="Escribe algo"
                />
              </div>
              <div className="flex flex-col mb-4">
                <label
                  htmlFor="horario"
                  className="font-Foco-Corp-Bold text-gris text-base mb-1"
                >
                  Horario
                </label>
                <select
                  type=""
                  id="horario"
                  className="bg-gris bg-opacity-10 text-gris rounded-lg border-gray-500 border p-2 h-9"
                  {...register("horario", { required: true })}
                  placeholder="Escribe algo"
                >
                  <option value={""} hidden className="text-gris">
                    Seleccionar
                  </option>
                  <option value={"Mat: 07:00 a 18:00"} className="text-gris">
                    Mat: 07:00 a 18:00
                  </option>
                  <option value={"Vesp: 18:00 a 22:00"} className="text-gris">
                    Vesp: 18:00 a 22:00
                  </option>
                  <option value={"Vesp: 18:01 a 23:00"} className="text-gris">
                    Vesp: 18:01 a 23:00
                  </option>
                  <option value={"Mixto variable"} className="text-gris">
                    Mixto variable
                  </option>
                  <option value={"otro"} className="text-gris">
                    Otro horario
                  </option>
                </select>
              </div>
            </div>
            <div className="flex flex-col mb-4">
              <label
                htmlFor="observaciones"
                className="font-Foco-Corp-Bold text-gris text-base mb-1"
              >
                Observaciones
              </label>
              <input
                id="observaciones"
                className="bg-gris bg-opacity-10 text-black rounded-lg border-gray-500 border p-2 h-9"
                {...register("observaciones")}
                placeholder="Escribe algo"
              />
            </div>
          </section>
          {/* seccion datos personales end */}

          {/* seccion direccion start */}
          <section className="md:order-2 mr-10">
            <div className="lg:mt-2 m-0 text-center lg:text-start md:text-start">
              <h4 className="text-2xl text-gris font-Foco-Corp-Bold mb-6">
                Domicilio
              </h4>
            </div>
            <div className="flex flex-col mb-4">
              <label
                htmlFor="calle"
                className="font-Foco-Corp-Bold text-gris text-base mb-1"
              >
                Calle
              </label>
              <input
                id="calle"
                className="bg-gris bg-opacity-10 text-black rounded-lg border-gray-500 border p-2 h-9"
                {...register("calle", { required: true })}
                placeholder="Escribe algo"
              />
            </div>
            <div className="lg:grid lg:grid-cols-2 md:grid md:grid-cols-2 gap-4">
              <div className="flex flex-col mb-4">
                <label
                  htmlFor="calleColindanteUno"
                  className="font-Foco-Corp-Bold text-gris text-base mb-1"
                >
                  Entre
                </label>
                <input
                  id="calleColindanteUno"
                  className="bg-gris bg-opacity-10 text-black rounded-lg border-gray-500 border p-2 h-9 "
                  {...register("calleColindanteUno", { required: true })}
                  placeholder="Escribe algo"
                />
              </div>
              <div className="flex flex-col mb-4">
                <label
                  htmlFor="calleColindanteDos"
                  className="font-Foco-Corp-Bold text-gris text-base mb-1"
                >
                  Y
                </label>
                <input
                  id="calleColindanteDos"
                  className="bg-gris bg-opacity-10 text-black rounded-lg border-gray-500 border p-2 h-9"
                  {...register("calleColindanteDos")}
                  placeholder="Escribe algo"
                />
              </div>
            </div>
            <div className="lg:grid lg:grid-cols-3 md:grid md:grid-cols-2 gap-4">
              <div className="flex flex-col mb-4 col-span-2">
                <label
                  htmlFor="colonia"
                  className="font-Foco-Corp-Bold text-gris text-base mb-1"
                >
                  Localidad
                </label>
                <input
                  id="colonia"
                  className="bg-gris bg-opacity-10 text-black rounded-lg border-gray-500 border p-2 h-9 "
                  {...register("colonia", { required: true })}
                  placeholder="Escribe algo"
                />
              </div>
              <div className="flex flex-col mb-4 col-span-1">
                <label
                  htmlFor="zona"
                  className="font-Foco-Corp-Bold text-gris text-base mb-1"
                >
                  Zona
                </label>
                <input
                  id="zona"
                  className="bg-gris bg-opacity-10 text-black rounded-lg border-gray-500 border p-2 h-9"
                  {...register("zona")}
                  placeholder="Escribe algo"
                />
              </div>
            </div>
          </section>
        </div>

        <footer className="lg:grid lg:grid-cols-3 md:grid md:grid-cols-2 gap-4 mt-48">
          <div className="flex flex-col ml-16 text-white text-xl font-Foco-Corp-Bold">
            <input
              type="button"
              value="Volver"
              className="self-start text-center bg-verde w-40 h-11 rounded-lg"
            />
          </div>
          <div className="flex flex-col text-white text-xl font-Foco-Corp-Bold">
            <input
              type="submit"
              value={"Siguiente"}
              className="self-center text-center bg-naranja w-40 h-11 rounded-lg"
            />
          </div>
        </footer>
      </form>
    </>
  );
};

export default NewComercioView;
