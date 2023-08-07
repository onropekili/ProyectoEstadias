import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import Header from "../../components/Header";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthMiddleware } from "../../middleware/ProtectedMiddleware";

const NewComercianteView = () => {
  const location = useLocation();
  const data = location.state && location.state.data;
  const user = data ? (data.user ? data.user : null) : null;
  const comerciante = data
    ? data.comerciante
      ? data.comerciante
      : null
    : null;
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();


  // useEffect(() => {
  //   AuthMiddleware(user, navigate);
  // }, [user, navigate]);

  const onSubmit = (data) => {
    console.log(data);
     navigate("/Registrar-comercio", {state : { comerciante: data }});
  };
  return (
    <>
      <Header useButton={true} currentPage={NewComercianteView} />

      {/* Contenido */}
      <div className="text-center lg:text-start md:text-start md:ms-3.5">
        <h3 className="text-3xl font-Foco-Corp-Bold text-naranja opacity-80 mt-9 lg:ms-12">
          Datos del comerciante
        </h3>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:ms-16  sm:mx-4 m-6">
          <section className="md:order-2 lg:mr-10">
            {/* seccion datos personales start */}
            <div className="lg:mt-2 m-0 text-center lg:text-start md:text-start">
              <h4 className="text-2xl text-gris font-Foco-Corp-Bold mb-6">
                Datos personales:
              </h4>
            </div>
            <div className="lg:grid lg:grid-cols-2 md:grid md:grid-cols-2 gap-4">
              <div className="flex flex-col mb-4">
                <label
                  htmlFor="apellidoPaterno"
                  className="font-Foco-Corp-Bold text-gris text-base mb-1"
                >
                  Apellido Paterno
                </label>
                <input
                  id="apellidoPaterno"
                  className="bg-gris bg-opacity-10 text-black rounded-lg border-gray-500 border p-2 h-9"
                  {...register("apellidoPaterno", { required: true })}
                  placeholder="Escribe algo"
                />
              </div>
              <div className="flex flex-col mb-4">
                <label
                  htmlFor="apellidoMaterno"
                  className="font-Foco-Corp-Bold text-gris text-base mb-1"
                >
                  Apellido Materno
                </label>
                <input
                  id="apellidoMaterno"
                  className="bg-gris bg-opacity-10 text-black rounded-lg border-gray-500 border p-2 h-9"
                  {...register("apellidoMaterno", {})}
                  placeholder="Escribe algo"
                />
              </div>
            </div>
            <div className="flex flex-col mb-4">
              <label
                htmlFor="nombres"
                className="font-Foco-Corp-Bold text-gris text-base mb-1"
              >
                Nombres
              </label>
              <input
                id="nombres"
                className="bg-gris bg-opacity-10 text-black rounded-lg border-gray-500 border p-2 w-full h-9"
                {...register("nombres", { required: true })}
                placeholder="Escribe algo"
              />
            </div>
            <div className="lg:grid lg:grid-cols-2 md:grid md:grid-cols-2 gap-4">
              <div className="flex flex-col mb-4">
                <label
                  htmlFor="telefono1"
                  className="font-Foco-Corp-Bold text-gris text-base mb-1"
                >
                  Teléfono 1
                </label>
                <input
                  id="telefono1"
                  className="bg-gris bg-opacity-10 text-black rounded-lg border-gray-500 border p-2 h-9"
                  {...register("telefono1", { required: true })}
                  placeholder="Escribe algo"
                />
              </div>
              <div className="flex flex-col mb-4">
                <label
                  htmlFor="telefono2"
                  className="font-Foco-Corp-Bold text-gris text-base mb-1"
                >
                  Teléfono 2
                </label>
                <input
                  id="telefono2"
                  className="bg-gris bg-opacity-10 text-black rounded-lg border-gray-500 border p-2 h-9"
                  {...register("telefono2")}
                  placeholder="Escribe algo"
                />
              </div>
            </div>
            <div className="flex flex-col mb-4">
              <label
                htmlFor="email"
                className="font-Foco-Corp-Bold text-gris text-base mb-1"
              >
                Correo Electrónico
              </label>
              <input
                id="email"
                className="bg-gris bg-opacity-10 text-black rounded-lg border-gray-500 border p-2 h-9"
                {...register("email", { required: true })}
                placeholder="Escribe algo"
              />
            </div>
            <div className="flex flex-col mb-4">
              <label
                htmlFor="terceraEdad"
                className="font-Foco-Corp-Bold text-gris text-base mb-1"
              >
                Comerciante de la tercera edad o discapacitado
              </label>
              <div className="flex items-center mb-4">
                <input
                  id="terceraEdad"
                  type="checkbox"
                  {...register("terceraEdad")}
                  className="h-4 w-4 rounded-full focus:bg-verde bg-verde"
                />
                <label
                  htmlFor="terceraEdad"
                  className="text-sm ml-2 font-Foco-Corp-Italic text-gris mt-1"
                >
                  Selecciona la casilla solo si el comerciante es de la tercera
                  edad o tiene capacidades diferentes
                </label>
              </div>
            </div>
          </section>
          {/* seccion datos personales end */}

          {/* seccion direccion start */}
          <section className="md:order-2 lg:mr-10">
            <div className="lg:mt-2 m-0 text-center lg:text-start md:text-start">
              <h4 className="text-2xl text-gris font-Foco-Corp-Bold mb-6">
                Domicilio
              </h4>
            </div>
            <div className="lg:grid lg:grid-cols-4 md:grid md:grid-cols-3 gap-4">
              <div className="flex flex-col mb-4 col-span-2">
                <label
                  htmlFor="calle"
                  className="font-Foco-Corp-Bold text-gris text-base mb-1"
                >
                  Calle
                </label>
                <input
                  id="calle"
                  className="bg-gris bg-opacity-10 text-black rounded-lg border-gray-500 border p-2 h-9 "
                  {...register("calle", { required: true })}
                  placeholder="Escribe algo"
                />
              </div>
              <div className="flex flex-col mb-4 w-auto">
                <label
                  htmlFor="numeroExterior"
                  className="font-Foco-Corp-Bold text-gris text-base mb-1"
                >
                  No. exterior
                </label>
                <input
                  id="numeroExterior"
                  className="bg-gris bg-opacity-10 text-black rounded-lg border-gray-500 border p-2 h-9"
                  {...register("numeroExterior", { required: true })}
                  placeholder="Escribe algo"
                />
              </div>
              <div className="flex flex-col mb-4">
                <label
                  htmlFor="numeroInterior"
                  className="font-Foco-Corp-Bold text-gris text-base mb-1"
                >
                  No. interior
                </label>
                <input
                  id="numeroInterior"
                  className="bg-gris bg-opacity-10 text-black rounded-lg border-gray-500 border p-2 h-9 "
                  {...register("numeroInterior", { required: false })}
                  placeholder="Escribe algo"
                />
              </div>
            </div>
            <div className="lg:grid lg:grid-cols-4 md:grid md:grid-cols-2 gap-4">
              <div className="flex flex-col mb-4 col-span-3">
                <label
                  htmlFor="colonia"
                  className="font-Foco-Corp-Bold text-gris text-base mb-1"
                >
                  Colonia
                </label>
                <input
                  id="colonia"
                  className="bg-gris bg-opacity-10 text-black rounded-lg border-gray-500 border p-2 h-9 "
                  {...register("colonia", { required: true })}
                  placeholder="Escribe algo"
                />
              </div>
              <div className="flex flex-col mb-4">
                <label
                  htmlFor="np"
                  className="font-Foco-Corp-Bold text-gris text-base mb-1"
                >
                  C.P
                </label>
                <input
                  id="np"
                  className="bg-gris bg-opacity-10 text-black rounded-lg border-gray-500 border p-2 h-9"
                  {...register("np", { required: true })}
                  placeholder="Escribe algo"
                />
              </div>
            </div>
            <div className="flex flex-col mb-4">
              <label
                htmlFor="municipio"
                className="font-Foco-Corp-Bold text-gris text-base mb-1"
              >
                Municipio
              </label>
              <input
                id="municipio"
                className="bg-gris bg-opacity-10 text-black rounded-lg border-gray-500 border p-2 h-9"
                {...register("municipio", { required: true })}
                placeholder="Escribe algo"
              />
            </div>
            <div className="flex flex-col mb-4">
              <label
                htmlFor="observaciones"
                className="font-Foco-Corp-Bold text-gris text-base mb-1"
              >
                Observaciones al comerciante
              </label>
              <input
                id="observaciones"
                className="bg-gris bg-opacity-10 text-black rounded-lg border-gray-500 border p-2 h-9"
                {...register("observaciones")}
                placeholder="Escribe algo"
              />
            </div>
          </section>
        </div>

        <footer className="lg:grid lg:grid-cols-3 md:grid md:grid-cols-2 gap-4">
          <div className="flex flex-col ml-16 text-white text-xl font-Foco-Corp-Bold hover:opacity-75">
            <input
              type="button"
              value="Volver"
              onClick={() => navigate("/DashBoard_E")}
              className="self-start text-center bg-verde w-40 h-11 rounded-lg"
            />
          </div>
          <div className="flex flex-col text-white text-xl font-Foco-Corp-Bold ">
            <input
              type="submit"
              value={"Siguiente"}
              className="self-center text-center bg-naranja w-40 h-11 rounded-lg hover:opacity-75"
            />
          </div>
        </footer>
      </form>
    </>
  );
};

export default NewComercianteView;
