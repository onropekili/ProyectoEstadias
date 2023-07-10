import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Select from "react-select";
import selectStyles from "../../components/StyleSelect";
import DatePickerInput from "../../components/DatePickerInput";
import CheckboxInput from "../../components/CheckboxInput";
import { Link, useLocation } from "react-router-dom";
import { tr } from "date-fns/locale";
import axios from "axios";
const moment = require("moment");

const OrdenPago = () => {
  const getoptions = useEffect(() => {
    axios
      .get("http://localhost:4000/conceptos")
      .then((res) => {
        options = res.data.options;
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  let options = null;
  const location = useLocation();
  const Data = location ? location.data : null;
  const merchant = Data ? Data.merchant : null;
  const shop = Data ? Data.shop : null;
  const phone = Data ? Data.phone : null;
  const [selectedDays, setSelectedDays] = useState([]);
  const [selectBeginDate, setSelectBeginDate] = useState(null);
  const [selectEndDate, setSelectEndDate] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);
  const [conceptosPago, setconceptosPago] = useState([]);
  const [totalDaysWorked, setTotalDaysWorked] = useState(null);

  //obtener la direccion si es que hay la info, a demas, si no hay numero interior, se omite.
  const merchantAdress = merchant
    ? merchant.calle.concat(
        ", ",
        merchant.numero_exterior,
        ", ",
        merchant.numero_interior ? merchant.numero_interior : merchant.colonia,
        ", C.P: ",
        merchant.codigo_postal,
        ", ",
        merchant.municipio
      )
    : "";
  const merchantFullName = merchant
    ? merchant.nombres.concat(
        " ",
        merchant.apellido_paterno,
        " ",
        merchant.apellido_materno
      )
    : "";

  const handleChange = (option) => {
    setSelectedOption(option);
  };

  const agregaConceptoPago = (e) => {
    setconceptosPago([...conceptosPago, selectedOption.value]);
  };

  const diccionarioDaysOfWeek = new Map();
  diccionarioDaysOfWeek.set("Lun", 1);
  diccionarioDaysOfWeek.set("Mar", 2);
  diccionarioDaysOfWeek.set("Mie", 3);
  diccionarioDaysOfWeek.set("Jue", 4);
  diccionarioDaysOfWeek.set("Vie", 5);
  diccionarioDaysOfWeek.set("Sab", 6);
  diccionarioDaysOfWeek.set("Dom", 0);
  const contarDiasDeLaSemana = (fechaInicialSinFormato, fechaFinalSinFormato, diaDeLaSemana) => {
    // Crear objetos moment a partir de las fechas
    const fechaInicialConFormato = formatearfechas(fechaInicialSinFormato);
    const fechaFinalConFormato = formatearfechas(fechaFinalSinFormato)
    let inicio = moment(fechaInicialConFormato);
    const fin = moment(fechaFinalConFormato);
    // Contador de días
    let contador = 0;


    // Iterar sobre cada día entre las fechas
    while (inicio.isSameOrBefore(fin)) {
      // Verificar si el día es el que estamos buscando
      if (inicio.day() === diccionarioDaysOfWeek.get(diaDeLaSemana) ) {
        contador++;
      }

      // Avanzar al siguiente día
      inicio.add(1, 'day');
    }
    return contador;
  };

  const calculateDays = useEffect(() => {
    if (selectBeginDate && selectEndDate && selectedDays.length > 0) {
      let diasTotales = 0;
      for (let i = 0; i <= selectedDays.length; i++) {
        diasTotales += contarDiasDeLaSemana(
          selectBeginDate,
          selectEndDate,
          selectedDays[i]
        );
      }
      console.log(diasTotales);
      setTotalDaysWorked(diasTotales);
    }
  }, [selectBeginDate, selectEndDate, selectedDays]);

  const formatearfechas = (fechaSinFormato) => {
    const fecha = new Date(fechaSinFormato);
    const anio = fecha.getFullYear();
    const mes = (fecha.getMonth() + 1).toString().padStart(2, "0");
    const dia = fecha.getDate().toString().padStart(2, "0");

    const fechaFormateada = `${anio}-${mes}-${dia}`;

    return fechaFormateada
  }

  return (
    <>
      <Header />
      {/* Contenido */}
      <div className="lg:flex lg:flex-row lg:mx-16 sm:mx-4 m-6 lg:my-9 gap-10">
        <div className="w-full lg:w-1/2 text-start">
          <h3 className="text-3xl font-Foco-Corp-Bold text-naranja opacity-80 mb-4 2xl:text-4xl">
            Orden de pago
          </h3>
          <div className="grid grid-cols-4 mb-2">
            <div className="flex flex-col col-span-3 font-Foco-Corp ">
              <h3 className="font-Foco-Corp-Bold text-xl text-gris 2xl:text-2xl">
                Datos del contribuyente
              </h3>
              <p className="text-lg text-black 2xl:text-xl">
                {merchantFullName}
              </p>
              <p className="text-lg text-black 2xl:text-xl">{merchantAdress}</p>
              <p className=" text-lg text-black 2xl:text-xl">
                {phone ? phone[0] : ""}
              </p>
            </div>
            <div className="flex flex-col col-span-1 items-end">
              <h3 className="font-Foco-Corp-Bold text-xl text-gris 2xl:text-2xl">
                Folio
              </h3>
              <p className="font-Foco-Corp text-lg text-black 2xl:text-xl">
                000000
              </p>
            </div>
          </div>
          <div className="mb-2 ">
            <h3 className="font-Foco-Corp-Bold text-xl text-gris 2xl:text-2xl">
              Datos del comercio
            </h3>
          </div>
          <div className="flex flex-col antialiased font-Foco-Corp text-black mb-2 lg:flex-row lg:mb-0 2xl:text-lg">
            <label className="w-full lg:w-1/4">CLASIFICACIÓN:</label>
            <label className="w-full lg:w-3/4">
              COMERCIO EN PUESTO SEMI-FIJO
            </label>
          </div>
          <div className="flex flex-col antialiased font-Foco-Corp text-black mb-2 lg:flex-row lg:mb-0 2xl:text-lg">
            <label className="w-full lg:w-1/4">GIRO/ACTIVIDAD:</label>
            <label className="w-full lg:w-3/4">
              ALIMENTOS (PAPAS Y SALCHIPULPOS)
            </label>
          </div>
          <div className="flex flex-col antialiased font-Foco-Corp text-black mb-2 lg:flex-row lg:mb-0 2xl:text-lg">
            <label className="w-full lg:w-1/4">METROS:</label>
            <label className="w-full lg:w-3/4">2x2:</label>
          </div>
          <div className="flex flex-col antialiased font-Foco-Corp text-black mb-2 lg:flex-row lg:mb-0 2xl:text-lg">
            <label className="w-full lg:w-1/4">HORARIO:</label>
            <label className="w-full lg:w-3/4">MAT:07:00 A 18:00</label>
          </div>
          <div className="flex flex-col antialiased font-Foco-Corp text-black mb-2 lg:flex-row lg:mb-0 2xl:text-lg">
            <label className="w-full lg:w-1/4">VIGENCIA:</label>
            <label className="w-full lg:w-3/4">09/03/2023:</label>
          </div>
          <div className="flex flex-col antialiased font-Foco-Corp text-black mb-2 lg:flex-row lg:mb-0 2xl:text-lg">
            <label className="w-full lg:w-1/4">UBICACIÓN:</label>
            <label className="w-full lg:w-3/4">
              AV. DE LAS ARTES 1343-66 ENTRE CANTAROS DE AGUA Y LA GUELAGUETZA
            </label>
          </div>
          <div className="flex flex-col antialiased font-Foco-Corp text-black mb-2 lg:flex-row lg:mb-0 2xl:text-lg">
            <label className="w-full lg:w-1/4">LOCALIDAD:</label>
            <label className="w-full lg:w-3/4">TLAJOMULCO DE ZUÑIGA</label>
          </div>
          <div className="flex flex-col mt-2 gap-2">
            <label className="font-Foco-Corp-Bold text-xl text-gris 2xl:text-2xl">
              Formato tercera edad/Discapacitados
            </label>
            <Link to="/TerceraEdad">
              <input
                type="button"
                value="GenerarPDF"
                className="w-full h-10 font-Foco-Corp-Bold text-base text-white text-center bg-azul rounded-lg hover:bg-azul hover:opacity-80 lg:w-56 lg:text-lg 2xl:w-72 2xl:text-xl"
              />
            </Link>
          </div>
        </div>
        <div className="w-full lg:w-1/2 text-start">
          <div className="mb-3">
            <h3 className="font-Foco-Corp-Bold text-xl text-gris 2xl:text-2xl">
              Agregar concepto de pago
            </h3>
          </div>
          <div className="flex flex-col items-center gap-4 mb-3 lg:flex-row ">
            <div className="w-full lg:w-4/5">
              <Select
                value={selectedOption}
                id="mostrar"
                styles={selectStyles}
                className=" antialiased text-sm"
                placeholder="Seleccione una concepto de pago"
                onChange={handleChange}
                options={options}
              ></Select>
            </div>
            <div className="w-full lg:w-1/5">
              <input
                type="submit"
                value={"Agregar"}
                className="text-center w-full h-9 font-Foco-Corp-Bold border-2 bg-naranja border-naranja hover:bg-naranja hover:opacity-80 rounded-lg text-white"
                onClick={agregaConceptoPago}
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-x-2 mb-3">
            <div className="w-full md:w-1/3">
              <div className="flex flex-col items-stretch w-full">
                <label className="font-Foco-Corp-Bold text-gris text-base mb-1">
                  Fecha Inicio
                </label>
                <DatePickerInput
                  setSelectedDate={setSelectBeginDate}
                  selectedDate={selectBeginDate}
                />
              </div>
            </div>
            <div className="w-full md:w-1/3">
              <div className="flex flex-col">
                <label className="font-Foco-Corp-Bold text-gris text-base mb-1">
                  Fecha Termino
                </label>
                <DatePickerInput
                  setSelectedDate={setSelectEndDate}
                  selectedDate={selectEndDate}
                />
              </div>
            </div>
            <div className="w-full md:w-1/3">
              <div className="flex flex-col ">
                <label className="font-Foco-Corp-Bold text-gris text-base mb-1">
                  Días
                </label>
                <CheckboxInput
                  selectedDays={selectedDays}
                  setSelectedDays={setSelectedDays}
                />
              </div>
            </div>
          </div>
          <div>
            <h3 className="font-Foco-Corp-Bold text-xl text-gris mb-1">
              Conceptos
            </h3>
          </div>
          <div className="flex flex-col h-20 overflow-y-auto md:h-16 lg:h-14">
            <div className="flex items-center justify-between gap-x-2 mb-2">
              <label className="font-Foco-Corp-Bold text-xs text-gris md:text-sm lg:text-base antialiased">
                USO DE PISO PARA ESPECTACULOS, DIVERSIONES PÚBLICAS Y JUEGOS
                MECANICOS EN TLAJOMULCO CABECERA
              </label>
              <button className="text-gray-500 hover:text-naranja">
                Eliminar
              </button>
            </div>
            <div className="flex items-center justify-between gap-x-2 mb-2">
              <label className="font-Foco-Corp-Bold text-xs text-gris md:text-sm lg:text-base antialiased">
                USO DE PISO PARA ESPECTACULOS, DIVERSIONES PÚBLICAS Y JUEGOS
                MECANICOS EN TLAJOMULCO CABECERA
              </label>
              <button className="text-gray-500 hover:text-naranja">
                Eliminar
              </button>
            </div>
          </div>
          <div className="bg-white w-full h-40 overflow-auto md:h-36 mt-4">
            <table className="table-auto">
              <thead className="bg-gray-100 border">
                <tr className="font-Foco-Corp text-sm text-black antialiased text-center">
                  <th className="w-2/12 border px-2 py-1">COSTO</th>
                  <th className="w-1/12 border px-2 py-1">CANTIDAD</th>
                  <th className="w-1/12 border px-2 py-1">METROS</th>
                  <th className="w-1/12 border px-2 py-1">DIA/MES</th>
                  <th className="w-1/12 border px-2 py-1">SUBTOTAL</th>
                  <th className="w-6/12 border px-2 py-1">UNIDAD</th>
                </tr>
              </thead>
              <tbody>
                <tr className="font-Foco-Corp text-sm text-black antialiased text-center">
                  <td className="w-2/12 px-2 py-1">$76.00</td>
                  <td className="w-1/12 px-2 py-1">1</td>
                  <td className="w-1/12 px-2 py-1"></td>
                  <td className="w-1/12 px-2 py-1"></td>
                  <td className="w-1/12 px-2 py-1">$76.00</td>
                  <td className="w-6/12 px-2 py-1 text-left">Pesos</td>
                </tr>
                <tr className="font-Foco-Corp text-sm text-black antialiased text-center">
                  <td className="w-2/12 px-2 py-1">$12.00</td>
                  <td className="w-1/12 px-2 py-1"></td>
                  <td className="w-1/12 px-2 py-1">4</td>
                  <td className="w-1/12 px-2 py-1">17</td>
                  <td className="w-1/12 px-2 py-1">$816.00</td>
                  <td className="w-6/12 px-2 py-1 text-left">
                    Pesos por metro cuadrado por día
                  </td>
                </tr>
                {conceptosPago.map((concepto) => {
                  <tr>
                    <td className="w-2/12 px-2 py-1">
                      $ {concepto.importe}.00
                    </td>
                    <td className="w-1/12 px-2 py-1">1</td>
                    <td className="w-1/12 px-2 py-1">
                      {concepto.unidad !== "PESOS"
                        ? shop
                          ? shop.metraje
                          : ""
                        : ""}
                    </td>
                    <td className="w-1/12 px-2 py-1">{totalDaysWorked > 0 ? totalDaysWorked : 0}</td>
                    <td className="w-1/12 px-2 py-1">${concepto.importe}</td>
                    <td className="w-6/12 px-2 py-1 text-left">
                      {concepto.unidad}
                    </td>
                  </tr>;
                })}
              </tbody>
            </table>
          </div>
          <div className="flex w-full gap-4 border-t-2">
            <div className="flex flex-col w-1/4 items-end gap-y-1">
              <span className="font-Foco-Corp-Bold text-lg antialiased">
                TOTAL
              </span>
            </div>
            <div className="flex w-3/4 justify-start">
              <span className="font-Foco-Corp-Bold text-lg antialiased">
                $816.00
              </span>
            </div>
          </div>
          <div className="w-full border-y-2 text-center">
            <p className="font-Foco-Corp text-xs antialiased">
              TRAMITE EN PROCESO DE AUTORIZACIÓN DE PERSMISO DE COMERCIO EN LA
              VIA PÚBLICA
            </p>
          </div>
        </div>
      </div>
      <footer className="flex flex-col m-6 sm:mx-4 md:grid md:grid-cols-2 md:gap-4 lg:mx-16 lg:grid lg:grid-cols-3 mt-16 2xl:mt-24">
        <div className="text-white text-xl font-Foco-Corp-Bold mb-5 lg:m-0">
          <input
            type="button"
            value="Volver"
            className="self-start text-center bg-verde w-full h-11 rounded-lg lg:w-40"
          />
        </div>
        <div className="flex flex-col text-white text-xl font-Foco-Corp-Bold">
          <Link to="/OrdenPagoPDF">
            <input
              type="submit"
              value={"Generar Orden"}
              className="self-center text-center bg-naranja w-full h-11 rounded-lg lg:w-80"
            />
          </Link>
        </div>
      </footer>
    </>
  );
};

export default OrdenPago;
