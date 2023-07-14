import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';

const TramiteImprimible = () => {
  const componentRef = useRef();

  const generatePDF = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div className='mx-6 lg:mx-28 my-10'>
      <div className='flex flex-col md:flex-row justify-between mb-5 gap-4'>
        <p className='text-xl md:text-3xl font-Foco-Corp-Bold text-naranja'>Formato de baja</p>
        <button className='h-9 w-full md:w-60 px-5 py-1 font-Foco-Corp-Bold shadow-md bg-naranja hover:opacity-80 text-white text-lg rounded-md' onClick={ generatePDF }>Imprimir</button>
      </div>
      <div className='border-2 lg:p-10'>
        {/* contenido que se imprime */}
        <div className="px-10 lg:px-16" ref={componentRef}>
          <div class="flex flex-col col-span-2 text-left pt-16 mb-8">
            <label class="font-Foco-Corp-Bold text-lg antialiased">JEFE DE MERCADOS</label>
            <label class="font-Foco-Corp-Bold text-lg antialiased">PRESENTE.</label>
          </div>
          <div className='font-Foco-Corp text-base text-justify text-justify-last antialiased leading-10 tracking-wide mb-10'>
            <p>POR MEDIO DE ESTE DOCUMENTO YO <span className='font-bold'>ANGELICA ARACELI SILVA PALMAS</span>, SOLICITO LA BAJA(SUSPENSIÓN DE ACTIVIDADES PERMANENTE), CON REFERENCIA A LA CEDULA CON NÚMERO DE <span className='font-bold'>FOLIO: 000000 </span> CON EL GIRO DE <span className='font-bold'>ALIMENTOS(TACOS DE ASADA)</span>, UBICADO <span className='font-bold'>HIGUERA #90 </span> FRACCIONAMIENTO <span className='font-bold'>PRADOS DE LA HIGUERA</span>, MUNICIPIO DE TLAJOMULCO DE ZUÑIGA.</p>
            <p className='mt-10'>EL MOTIVO DE LA SOLICITUD ES LA SIGUIENTE:</p>
            <div class="border border-gris w-FULL mx-auto mt-8"></div>
            <div class="border border-gris w-FULL mx-auto mt-8"></div>
            <div class="border border-gris w-FULL mx-auto mt-8"></div>
            <div class="border border-gris w-FULL mx-auto mt-8"></div>
            <div class="border border-gris w-FULL mx-auto mt-8"></div>
          </div>
          <div class="flex flex-col col-span-2 gap-0 text-center">
            <label class="font-Foco-Corp-Bold text-xl antialiased mb-24">ATENTAMENTE</label>
            <div class="border border-gris w-full md:w-96 mx-auto mt-8"></div>
            <label class="font-Foco-Corp-Bold text-lg antialiased mt-4">NOMBRE Y FIRMA</label>
          </div>
          <div class="flex flex-row text-start mb-8">
            <label class="font-Foco-Corp-Bold text-lg antialiased mt-12">TELÉFONO: <span className='font-bold'>3319698761</span></label>
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
