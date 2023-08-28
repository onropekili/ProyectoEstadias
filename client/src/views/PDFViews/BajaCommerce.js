import React, {useEffect, useRef, useState} from 'react';
import { useReactToPrint } from 'react-to-print';
import {useParams, useNavigate} from "react-router-dom";
import axios from "axios";

const TramiteImprimible = () => {
  const {folio} = useParams();
  const [data, setData] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://${process.env.REACT_APP_HOST}:4000/getFormatoBajaInfo?id_comercio=${folio}`)
    .then((res) => {
      setData(res.data);
    })
    .catch((err) => {
      console.log(err);
    })
  }, [folio]);

  const componentRef = useRef();

  const generatePDF = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div className='mx-6 lg:mx-28 my-10'>
      <div className='flex flex-col md:flex-row justify-between mb-5 gap-4'>
        <p className='text-xl md:text-3xl font-Foco-Corp-Bold text-naranja'>Formato de baja</p>
        <button 
        className='h-9 w-full md:w-60 px-5 py-1 font-Foco-Corp-Bold shadow-md bg-naranja hover:opacity-80 text-white text-lg rounded-md' 
        onClick={ generatePDF }
        >
          Imprimir
        </button>
        <button 
        className='h-9 w-full md:w-60 px-5 py-1 font-Foco-Corp-Bold shadow-md bg-verde hover:opacity-80 text-white text-lg rounded-md' 
        onClick={ () => {navigate('/DashBoard_E')}  }
        >
          Inicio
        </button>
      </div>
      <div className='border-2 lg:p-10'>
        {/* contenido que se imprime */}
        <div className="px-10 lg:px-16" ref={componentRef}>
          <div className="flex flex-col col-span-2 text-left pt-16 mb-8">
            <label className="font-Foco-Corp-Bold text-lg antialiased">JEFE DE MERCADOS</label>
            <label className="font-Foco-Corp-Bold text-lg antialiased">PRESENTE.</label>
          </div>
          <div className='font-Foco-Corp text-base text-justify text-justify-last antialiased leading-10 tracking-wide mb-10'>
            <p>POR MEDIO DE ESTE DOCUMENTO YO <span className='font-bold'>{data?.nombre || ''}</span>, SOLICITO LA BAJA(SUSPENSIÓN DE ACTIVIDADES PERMANENTE), CON REFERENCIA A LA CEDULA CON NÚMERO DE <span className='font-bold'>FOLIO: {String(folio).padStart(6, '0')} </span> CON EL GIRO DE <span className='font-bold'>{data?.giro || ''}</span>, UBICADO EN <span className='font-bold'>{data?.domicilio || ''}</span>, {data?.colonia || ''}</p>
            <p className='mt-10'>EL MOTIVO DE LA SOLICITUD ES LA SIGUIENTE:</p>
            <div className="border border-gris w-FULL mx-auto mt-8"></div>
            <div className="border border-gris w-FULL mx-auto mt-8"></div>
            <div className="border border-gris w-FULL mx-auto mt-8"></div>
            <div className="border border-gris w-FULL mx-auto mt-8"></div>
            <div className="border border-gris w-FULL mx-auto mt-8"></div>
          </div>
          <div className="flex flex-col col-span-2 gap-0 text-center">
            <label className="font-Foco-Corp-Bold text-xl antialiased mb-24">ATENTAMENTE</label>
            <div className="border border-gris w-full md:w-96 mx-auto mt-8"></div>
            <label className="font-Foco-Corp-Bold text-lg antialiased mt-4">NOMBRE Y FIRMA</label>
          </div>
          <div className="flex flex-row text-start mb-8">
            <label className="font-Foco-Corp-Bold text-lg antialiased mt-12">TELÉFONO: <span className='font-bold'>3319698761</span></label>
          </div>
        </div>
      </div>
      {/* fin */}
    </div>
  );
};


function BajaCommerce() {
  return (
    <div>
      <TramiteImprimible/>
    </div>
  );
}

export default BajaCommerce;
