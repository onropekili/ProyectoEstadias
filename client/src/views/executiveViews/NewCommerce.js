import React from "react";
import { useForm } from "react-hook-form";
import Header from "../../components/Header";

const NewComercioView = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
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
                  htmlFor="apellidoPaterno"
                  className="font-Foco-Corp-Bold text-gris text-base mb-1"
                >
                  Clasificación
                </label>
                <select
                  type=""
                  id="apellidoPaterno"
                  className="bg-gris bg-opacity-10 text-gris rounded-lg border-gray-500 border p-2 h-9"
                  {...register("apellidoPaterno", { required: true })}
                  placeholder="Escribe algo"
                >
                  <option value={""} hidden className="text-gris">Selecciona una opcion</option>
                  <option value={"option1"} className="text-gris">Comercio ambulante</option>
                  <option value={"option1"} className="text-gris">Comercio en puesto fijo</option>
                  <option value={"option1"} className="text-gris">Comercio en puesto semifijo</option>
                  <option value={"option1"} className="text-gris">Comercios en festividades</option>
                </select>
              </div>
              <div className="flex flex-col mb-4 col-span-1">
                <label
                  htmlFor="apellidoMaterno"
                  className="font-Foco-Corp-Bold text-gris text-base mb-1"
                >
                  Tipo
                </label>
                <select
                  type=""
                  id="apellidoPaterno"
                  className="bg-gris bg-opacity-10 text-gris rounded-lg border-gray-500 border p-2 h-9"
                  {...register("apellidoPaterno", { required: true })}
                  placeholder="Escribe algo"
                >
                  <option value={""} hidden className="text-gris">Seleccionar</option>
                  <option value={"option1"} className="text-gris">Eventual</option>
                  <option value={"option1"} className="text-gris">Especial</option>
                  <option value={"option1"} className="text-gris">Permanente</option>
                </select>
              </div>
              <div className="flex flex-col mb-4 col-span-1">
                <label
                  htmlFor="apellidoMaterno"
                  className="font-Foco-Corp-Bold text-gris text-base mb-1"
                >
                  Metros
                </label>
                <input
                  id="apellidoMaterno"
                  className="bg-gris bg-opacity-10 text-black rounded-lg border-gray-500 border p-2 h-9"
                  {...register("apellidoMaterno")}
                  placeholder="Escribe algo"
                />
              </div>
            </div>
            <div className="lg:grid lg:grid-cols-2 md:grid md:grid-cols-2 gap-4">
              <div className="flex flex-col mb-4">
                <label
                  htmlFor="apellidoPaterno"
                  className="font-Foco-Corp-Bold text-gris text-base mb-1"
                >
                  Tipo de Giro/Actividad
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
                  Horario
                </label>
                <select
                  type=""
                  id="apellidoPaterno"
                  className="bg-gris bg-opacity-10 text-gris rounded-lg border-gray-500 border p-2 h-9"
                  {...register("apellidoPaterno", { required: true })}
                  placeholder="Escribe algo"
                >
                  <option value={""} hidden className="text-gris">Seleccionar</option>
                  <option value={"option1"} className="text-gris">Mat: 07:00 a 18:00</option>
                  <option value={"option1"} className="text-gris">Vesp: 18:00 a 22:00</option>
                  <option value={"option1"} className="text-gris">Vesp: 18:01 a 23:00</option>
                  <option value={"option1"} className="text-gris">Mixto variable</option>
                  <option value={"option1"} className="text-gris">Otro horario</option>


                </select>
              </div>
            </div>
            <div className="flex flex-col mb-4">
              <label
                htmlFor="email"
                className="font-Foco-Corp-Bold text-gris text-base mb-1"
              >
                Observaciones
              </label>
              <input
                id="email"
                className="bg-gris bg-opacity-10 text-black rounded-lg border-gray-500 border p-2 h-9"
                {...register("email", { required: true })}
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
                htmlFor="email"
                className="font-Foco-Corp-Bold text-gris text-base mb-1"
              >
                Calle
              </label>
              <input
                id="email"
                className="bg-gris bg-opacity-10 text-black rounded-lg border-gray-500 border p-2 h-9"
                {...register("email", { required: true })}
                placeholder="Escribe algo"
              />
            </div>
            <div className="lg:grid lg:grid-cols-2 md:grid md:grid-cols-2 gap-4">
              <div className="flex flex-col mb-4">
                <label
                  htmlFor="colonia"
                  className="font-Foco-Corp-Bold text-gris text-base mb-1"
                >
                  Entre
                </label>
                <input
                  id="colonia"
                  className="bg-gris bg-opacity-10 text-black rounded-lg border-gray-500 border p-2 h-9 "
                  {...register("apellidoPaterno", { required: true })}
                  placeholder="Escribe algo"
                />
              </div>
              <div className="flex flex-col mb-4">
                <label
                  htmlFor="cp"
                  className="font-Foco-Corp-Bold text-gris text-base mb-1"
                >
                  Y
                </label>
                <input
                  id="cp"
                  className="bg-gris bg-opacity-10 text-black rounded-lg border-gray-500 border p-2 h-9"
                  {...register("apellidoMaterno")}
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
                  {...register("apellidoPaterno", { required: true })}
                  placeholder="Escribe algo"
                />
              </div>
              <div className="flex flex-col mb-4 col-span-1">
                <label
                  htmlFor="cp"
                  className="font-Foco-Corp-Bold text-gris text-base mb-1"
                >
                  Zona
                </label>
                <input
                  id="cp"
                  className="bg-gris bg-opacity-10 text-black rounded-lg border-gray-500 border p-2 h-9"
                  {...register("apellidoMaterno")}
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
