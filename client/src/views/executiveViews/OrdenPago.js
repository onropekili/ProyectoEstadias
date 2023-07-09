import React, { useState } from "react";
import Header from "../../components/Header";
import Select from 'react-select';
import selectStyles from '../../components/StyleSelect';
import DatePickerInput from "../../components/DatePickerInput";
import CheckboxInput from "../../components/CheckboxInput";
import { Link, useLocation } from "react-router-dom";

const OrdenPago = () => {

  
  const location = useLocation()
  const shopData = location.data ? location.data : null
  const [selectedDays, setSelectedDays] = useState([]);
  const [selectBeginDate, setSelectBeginDate] = useState(null)
  const [selectEndDate, setSelectEndDate] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    { value: 'credencial', label: 'CREDENCIAL OFICIAL DE COMERCIANTE' },
    { value: 'cedula', label: 'CÉDULA MUNICIPAL DE PERMISO EN VÍA PÚBLICA' },
    { value: 'usodepiso', label: 'USO DE PISO PARA PUESTOS FIJOS, SEMIFIJOS O MOVILES EN PRIMER CUADRO' },
    { value: 'usodepiso1', label: 'USO DE PISO PARA PUESTOS FIJOS, SEMIFIJOS O MOVILES FUERA DEL PRIMER CUADRO' },
    { value: 'usodepiso2', label: 'USO DE PISO EN SERVIDUMBRES, BANQUETAS, JARDINES, MACHUELOS Y OTROS.' },
    { value: 'usodepiso3', label: 'USO DE PISO EN ESPACIOS NO PREVISTOS - VENTA DE ALIMENTOS' },
    { value: 'modificacion', label: 'MODIFICACIÓN DE CÉDULA ORDINARIA - CAMBIO DE UBICACIÓN, GIRO, DIAS U HORARIO' },
    { value: 'modificacion1', label: 'MODIFICACIÓN DE CÉDULA EVENTUAL - CAMBIO DE UBICACIÓN, GIRO, DIAS U HORARIO' },
    { value: 'usodepiso4', label: 'USO DE PISO PARA PUESTOS FIJOS EN ESPACIOS DEPORTIVOS MUNICIPALES' },
    { value: 'usodepiso5', label: 'USO DE PISO PARA PUESTOS SEMI-FIJOS EN ESPACIOS DEPORTIVOS MUNICIPALES' },
    { value: 'usodepiso6', label: 'USO DE PISO PARA FUENTE DE SODAS EN ESPACIOS DEPORTIVOS MUNICIPALES' },
    { value: 'usodepiso7', label: 'USO DE PISO PARA PUESTOS MOVILES EN EVENTOS MUNICIPALES' },
    { value: 'usodepiso8', label: 'USO DE PISO PARA FESTIVIDADES EN PRIMER CUADRO' },
    { value: 'usodepiso9', label: 'USO DE PISO EN PERIODO ORDINARIO EN PRIMER CUADRO' },
    { value: 'usodepiso10', label: 'USO DE PISO PARA FESTIVIDADES FUERA DEL PRIMER CUADRO' },
    { value: 'usodepiso11', label: 'USO DE PISO EN PERIODO ORDINARIO FUERA DEL PRIMER CUADRO' },
    { value: 'usodepiso12', label: 'USO DE PISO PARA ESPECTACULOS, DIVERSIONES PÚBLICAS Y JUEGOS MECANICOS EN TLAJOMULCO CABECERA' },
    { value: 'usodepiso13', label: 'USO DE PISO PARA ESPECTACULOS, DIVERSIONES PÚBLICAS Y JUEGOS MECANICOS EN CAJITITLÁN DE LOS REYES' },
    { value: 'usodepiso14', label: 'USO DE PISO PARA ESPECTACULOS, DIVERSIONES PÚBLICAS Y JUEGOS MECANICOS EN SANTA CRUZ DE LAS FLORES' },
    { value: 'usodepiso15', label: 'USO DE PISO PARA ESPECTACULOS, DIVERSIONES PÚBLICAS Y JUEGOS MECANICOS EN BUENA VISTA' },
    { value: 'usodepiso16', label: 'USO DE PISO PARA ESPECTACULOS, DIVERSIONES PÚBLICAS Y JUEGOS MECANICOS EN RANCHO ALEGRE' },
    { value: 'usodepiso17', label: 'USO DE PISO PARA ESPECTACULOS, DIVERSIONES PÚBLICAS Y JUEGOS MECANICOS EN SAN AGUSTIN' },
    { value: 'usodepiso18', label: 'USO DE PISO PARA ESPECTACULOS, DIVERSIONES PÚBLICAS Y JUEGOS MECANICOS EN SAN SEBASTIAN EL GRANDE' },
    { value: 'usodepiso19', label: 'USO DE PISO PARA ESPECTACULOS, DIVERSIONES PÚBLICAS Y JUEGOS MECANICOS EN TULIPANES' },
    { value: 'usodepiso21', label: 'USO DE PISO PARA ESPECTACULOS, DIVERSIONES PÚBLICAS Y JUEGOS MECANICOS EN SANTA CRUZ DEL VALLE' },
    { value: 'usodepiso22', label: 'USO DE PISO PARA ESPECTACULOS, DIVERSIONES PÚBLICAS Y JUEGOS MECANICOS EN SAN MIGUEL CUYUTLÁN' },
    { value: 'usodepiso23', label: 'USO DE PISO PARA ESPECTACULOS, DIVERSIONES PÚBLICAS Y JUEGOS MECANICOS EN RESTO DEL MUNICIPIO' },
    { value: 'cesion', label: 'CESION DE DERECHOS POR METRO CUADRADO ORDINARIO' },
    { value: 'cesion1', label: 'CESION DE DERECHOS POR METRO CUADRADO 50% LINEA RECTA' },
    { value: 'cesion2', label: 'CESION DE DERECHOS POR METRO CUADRADO(80% LINEA COLATERAL' },
    { value: 'usodepiso24', label: 'USO DE PISO PARA TAPIALES, ANDAMIOS, MATERIALES, MAQUINARIA Y EQUIPO EN VÍA PÚBLICA' },
    { value: 'usodepiso25', label: 'USO DE PISO PARA GRADERIAS Y SILLERIAS EN VÍA PÚBLICA' },
    { value: 'usodepiso26', label: 'USO DE PISO PARA PUESTOS EVENTUALES NO PREVISTOS' },
    { value: 'excepciondepago', label: 'EXCEPCION DE PAGO PERSONAS DE LA 3RA EDAD Y/O CAPACIDADES DIFERENTES' },
  ];


  const handleChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <>
      <Header/>
      {/* Contenido */}
      <div className="lg:flex lg:flex-row lg:mx-16 sm:mx-4 m-6 lg:my-9 gap-10">
        <div className="w-full lg:w-1/2 text-start">
          <h3 className="text-3xl font-Foco-Corp-Bold text-naranja opacity-80 mb-4 2xl:text-4xl">
            Orden de pago
          </h3>
          <div className="grid grid-cols-4 mb-2">
            <div className="flex flex-col col-span-3 font-Foco-Corp ">
              <h3 className="font-Foco-Corp-Bold text-xl text-gris 2xl:text-2xl">Datos del contribuyente</h3>
              <p className="text-lg text-black 2xl:text-xl">JOSE LUIS  CARDENAS TORRES</p>
              <p className="text-lg text-black 2xl:text-xl">SILVANO RICO 324 SAN SEBASTIAN TLAJOMULCO DE ZUÑIGA</p>
              <p className=" text-lg text-black 2xl:text-xl">3319698761</p>
            </div>
            <div className="flex flex-col col-span-1 items-end">
              <h3 className="font-Foco-Corp-Bold text-xl text-gris 2xl:text-2xl">Folio</h3>
              <p className="font-Foco-Corp text-lg text-black 2xl:text-xl">000000</p>
            </div>
          </div>
          <div className="mb-2 ">
            <h3 className="font-Foco-Corp-Bold text-xl text-gris 2xl:text-2xl">Datos del comercio</h3>
          </div>
          <div className="flex flex-col antialiased font-Foco-Corp text-black mb-2 lg:flex-row lg:mb-0 2xl:text-lg">
            <label className="w-full lg:w-1/4">CLASIFICACIÓN:</label>
            <label className="w-full lg:w-3/4">COMERCIO EN PUESTO SEMI-FIJO</label>
          </div>
          <div className="flex flex-col antialiased font-Foco-Corp text-black mb-2 lg:flex-row lg:mb-0 2xl:text-lg">
            <label className="w-full lg:w-1/4">GIRO/ACTIVIDAD:</label>
            <label className="w-full lg:w-3/4">ALIMENTOS (PAPAS Y SALCHIPULPOS)</label>
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
            <label className="w-full lg:w-3/4">AV. DE LAS ARTES 1343-66 ENTRE CANTAROS DE AGUA Y LA GUELAGUETZA</label>
          </div>
          <div className="flex flex-col antialiased font-Foco-Corp text-black mb-2 lg:flex-row lg:mb-0 2xl:text-lg">
            <label className="w-full lg:w-1/4">LOCALIDAD:</label>
            <label className="w-full lg:w-3/4">TLAJOMULCO DE ZUÑIGA</label>
          </div>
          <div className="flex flex-col mt-2 gap-2">
            <label className="font-Foco-Corp-Bold text-xl text-gris 2xl:text-2xl">Formato tercera edad/Discapacitados</label>
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
            <h3 className="font-Foco-Corp-Bold text-xl text-gris 2xl:text-2xl">Agregar concepto de pago</h3>
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
                >
              </Select>
            </div>
            <div className="w-full lg:w-1/5">
              <input
                type="submit"
                value={"Agregar"}
                className="text-center w-full h-9 font-Foco-Corp-Bold border-2 bg-naranja border-naranja hover:bg-naranja hover:opacity-80 rounded-lg text-white"
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-x-2 mb-3">
            <div className="w-full md:w-1/3">
              <div className="flex flex-col items-stretch w-full">
                <label className="font-Foco-Corp-Bold text-gris text-base mb-1">
                  Fecha Inicio
                </label>
                <DatePickerInput setSelectedDate={setSelectBeginDate} selectedDate={selectBeginDate} />
              </div>
            </div>
            <div className="w-full md:w-1/3">
              <div className="flex flex-col">
                <label className="font-Foco-Corp-Bold text-gris text-base mb-1">
                  Fecha Termino
                </label>
                <DatePickerInput setSelectedDate={setSelectEndDate} selectedDate={selectEndDate}/>
              </div>
            </div>
            <div className="w-full md:w-1/3">
              <div className="flex flex-col ">
                <label className="font-Foco-Corp-Bold text-gris text-base mb-1">
                  Días
                </label>
                <CheckboxInput selectedDays={selectedDays} setSelectedDays={setSelectedDays}/>
              </div>
            </div>
          </div>
          <div>
            <h3 className="font-Foco-Corp-Bold text-xl text-gris mb-1">Conceptos</h3>
          </div>
          <div className="flex flex-col h-20 overflow-y-auto md:h-16 lg:h-14">
            <div className="flex items-center justify-between gap-x-2 mb-2">
              <label className="font-Foco-Corp-Bold text-xs text-gris md:text-sm lg:text-base antialiased">USO DE PISO PARA ESPECTACULOS, DIVERSIONES PÚBLICAS Y JUEGOS MECANICOS EN TLAJOMULCO CABECERA</label>
              <button className="text-gray-500 hover:text-naranja">Eliminar</button>
            </div>
            <div className="flex items-center justify-between gap-x-2 mb-2">
              <label className="font-Foco-Corp-Bold text-xs text-gris md:text-sm lg:text-base antialiased">USO DE PISO PARA ESPECTACULOS, DIVERSIONES PÚBLICAS Y JUEGOS MECANICOS EN TLAJOMULCO CABECERA</label>
              <button className="text-gray-500 hover:text-naranja">Eliminar</button>
            </div>
          </div>
          <div className="bg-white w-full h-40 overflow-auto md:h-36 mt-4">
            <table className="table-auto">
              <thead className='bg-gray-100 border'>
                <tr className='font-Foco-Corp text-sm text-black antialiased text-center'>
                  <th className="w-2/12 border px-2 py-1">COSTO</th>
                  <th className="w-1/12 border px-2 py-1">CANTIDAD</th>
                  <th className="w-1/12 border px-2 py-1">METROS</th>
                  <th className="w-1/12 border px-2 py-1">DIA/MES</th>
                  <th className="w-1/12 border px-2 py-1">SUBTOTAL</th>
                  <th className="w-6/12 border px-2 py-1">UNIDAD</th>
                </tr>
              </thead>
              <tbody>
                <tr className='font-Foco-Corp text-sm text-black antialiased text-center'>
                  <td className="w-2/12 px-2 py-1">$76.00</td>
                  <td className="w-1/12 px-2 py-1">1</td>
                  <td className="w-1/12 px-2 py-1"></td>
                  <td className="w-1/12 px-2 py-1"></td>
                  <td className="w-1/12 px-2 py-1">$76.00</td>
                  <td className="w-6/12 px-2 py-1 text-left">Pesos</td>
                </tr>
                <tr className='font-Foco-Corp text-sm text-black antialiased text-center'>
                  <td className="w-2/12 px-2 py-1">$12.00</td>
                  <td className="w-1/12 px-2 py-1"></td>
                  <td className="w-1/12 px-2 py-1">4</td>
                  <td className="w-1/12 px-2 py-1">17</td>
                  <td className="w-1/12 px-2 py-1">$816.00</td>
                  <td className="w-6/12 px-2 py-1 text-left">Pesos por metro cuadrado por día</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="flex w-full gap-4 border-t-2">
            <div className="flex flex-col w-1/4 items-end gap-y-1">
              <span className='font-Foco-Corp-Bold text-lg antialiased'>TOTAL</span>
            </div>
            <div className="flex w-3/4 justify-start">
              <span className='font-Foco-Corp-Bold text-lg antialiased'>$816.00</span>
            </div>
          </div>
          <div className='w-full border-y-2 text-center'>
            <p className='font-Foco-Corp text-xs antialiased'>TRAMITE EN PROCESO DE AUTORIZACIÓN  DE PERSMISO DE COMERCIO EN LA VIA PÚBLICA</p>
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
