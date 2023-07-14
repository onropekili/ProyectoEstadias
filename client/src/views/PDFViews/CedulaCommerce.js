import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import tljlogox from '../../assets/images/tlj-logox.png';
import logoEmpresa from '../../assets/images/logoEmpresa.jpg'
import layuoutp from '../../assets/images/layuoutp.png'

const TramiteImprimible = () => {
  const componentRef = useRef();

  const generatePDF = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div className='mx-6 lg:mx-28 my-10 overflow-auto h-auto'>
      <div className='flex flex-col md:flex-row justify-between mb-5 gap-4'>
        <p className='text-xl md:text-3xl font-Foco-Corp-Bold text-naranja'>Cédula de comercio</p>
        <button className='h-9 w-full md:w-60 px-5 py-1 font-Foco-Corp-Bold shadow-md bg-naranja hover:opacity-80 text-white text-lg rounded-md' onClick={ generatePDF }>Imprimir</button>
      </div>
      {/* contenido que se imprime */}
      <div className='border-2 lg:p-10 overflow-auto h-auto'>
        <div ref={componentRef}>
          <div className="flex gap-x-2 py-4 items-center">
            <div className="w-1/4"></div>
            <div className="w-2/4 items-center text-center flex flex-col">
              <label className='font-Foco-Corp text-xl antialiased'>Dirección General de Padrón y Licencias</label>
              <label className='font-Foco-Corp text-base antialiased'>Gobierno Municipal de Tlajomulco 2018-2023</label>
              <label className='font-Foco-Corp text-lg text-gris antialiased'>PERMISO PARA COMERCIO EN VÍA PÚBLICA</label>
            </div>
            <div className="w-1/4 flex justify-center">
              <img
                className="w-14 h-14"
                src={tljlogox}
                alt="Logo"
              />
            </div>
          </div>
          <div className="flex justify-between">
            <div className="h-2 w-1/5 bg-naranja"></div>
            <div className="h-2 w-1/5 bg-rojo"></div>
            <div className="h-2 w-1/5 bg-verde"></div>
            <div className="h-2 w-1/5 bg-azul"></div>
            <div className="h-2 w-1/5 bg-purple-400"></div>
          </div>
          <div className=" flex-col inline-grid md:grid md:grid-cols-4 gap-x-1 gap-y-2 px-6 lg:px-16 pt-10 mb-32">
            <div className="col-span-1 hidden md:block"></div>
            <div className="flex flex-col col-span-2 text-left">
              <label className="font-Foco-Corp-Bold text-lg antialiased">Nombre</label>
              <label className="font-Foco-Corp text-lg antialiased">Angelica Araceli Silva Palmas</label>
            </div>
            <div className="col-span-1 hidden md:block"></div>
            <div className="col-span-1 hidden md:block"></div>
            <div className="flex flex-col col-span-2 text-left">
              <label className="font-Foco-Corp-Bold text-lg antialiased">Clasificacíon</label>
              <label className="font-Foco-Corp text-lg antialiased">Comercio en puesto semifijo</label>
            </div>
            <div className="flex flex-col col-span-1 text-left">
              <label className="font-Foco-Corp-Bold text-lg antialiased">Vigencia</label>
              <label className="font-Foco-Corp text-lg antialiased">23/06/2023</label>
            </div>
            <div className="flex flex-row col-span-1 text-left gap-2 items-center">
              <label className="font-Foco-Corp-Bold text-lg antialiased">Folio</label>
              <label className="font-Foco-Corp text-2xl antialiased text-red-700">00000</label>
            </div>
            <div className="flex flex-col col-span-2 text-left">
              <label className="font-Foco-Corp-Bold text-lg antialiased">Giro</label>
              <label className="font-Foco-Corp text-lg antialiased">Alimentos(Tacos de barbacoa)</label>
            </div>
            <div className="col-span-1 hidden md:block"></div>
            <div className="flex flex-col col-span-1 text-left">
              <label className="font-Foco-Corp-Bold text-lg antialiased">Tipo</label>
              <label className="font-Foco-Corp text-lg antialiased">Permanente</label>
            </div>
            <div className="flex flex-col col-span-2 text-left">
              <label className="font-Foco-Corp-Bold text-lg antialiased">Ubicación</label>
              <label className="font-Foco-Corp text-lg antialiased">Calle higuera #47 Prados de la higuera 44640</label>
            </div>
            <div className="col-span-1 hidden md:block"></div>
            <div className="flex flex-col col-span-1 text-left">
              <label className="font-Foco-Corp-Bold text-lg antialiased">Zona</label>
              <label className="font-Foco-Corp text-lg antialiased">C</label>
            </div>
            <div className="flex flex-col col-span-2 text-left">
              <label className="font-Foco-Corp-Bold text-lg antialiased">Metros</label>
              <label className="font-Foco-Corp text-lg antialiased">2x2</label>
            </div>
            <div className="flex flex-col col-span-1 text-left">
              <label className="font-Foco-Corp-Bold text-lg antialiased">Horario</label>
              <label className="font-Foco-Corp text-lg antialiased">Mat:07:00 a 18:00</label>
            </div>
            <div className="col-span-1 hidden md:block"></div>
            <div className="flex flex-col col-span-2 text-left">
              <label className="font-Foco-Corp-Bold text-lg antialiased">Observaciones</label>
              <label className="font-Foco-Corp text-lg antialiased">Sin observación</label>
            </div>
            <div className="col-span-1 hidden md:block"></div>
            <div className="col-span-1 hidden md:block"></div>
            <div className="flex flex-col col-span-2 text-left">
              <label className="font-Foco-Corp-Bold text-lg antialiased">Fecha de Expedición</label>
              <label className="font-Foco-Corp text-lg antialiased">26/05/2023</label>
            </div>
            <div className="col-span-1 hidden md:block"></div>
          </div>
          <div className="flex flex-col px-6 lg:px-16 text-center mb-8 ">
            <div className="border border-gris w-full md:w-96 mx-auto "></div>
            <label className="font-Foco-Corp-Bold text-lg antialiased mt-4">Jefe de Mercados</label>
          </div>
          <div className='px-6 lg:px-16 font-Foco-Corp text-sm text-justify text-justify-last antialiased mb-4'>
            <p className='mb-2'>El presente permiso es personal e intransferible y solo puede ser ejercido por su titular en el lugar autorizado, en consecuencia no es objeto de comercio, arrendamiento, venta, donación, comodato, permuta, garantía, hipoteca no explotación del mismo por terceros.</p>
            <p>En facultad exclusiva del municipio por medio de la oficialía mayor de padrón y licencias la autorización, permisos o reubicación de comercio en la vía pública.</p>
          </div>
          <div className='flex flex-row justify-between items-center'>
            <img
              className="h-14 md:h-24"
              src={logoEmpresa}
              alt="Logo de la empresa"
            />
            <img
              className="h-14 md:h-24"
              src={layuoutp}
              alt="Logo de la empresa"
            />
          </div>
        </div>
      </div>
      {/* fin */}
    </div>
  );
};

function Cedulacommerce() {
  return (
    <div>
      <TramiteImprimible/>
    </div>
  );
}

export default Cedulacommerce;

