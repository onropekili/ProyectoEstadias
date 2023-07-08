import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import logoEmpresa from '../../assets/images/logoEmpresa.jpg';

const TramiteImprimible = () => {
  const componentRef = useRef();

  const generatePDF = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div className='mx-5 lg:mx-28 my-10'>
      <div className='flex flex-col md:flex-row justify-between mb-5 gap-4'>
        <p className='text-xl md:text-3xl font-Foco-Corp-Bold text-naranja'>Orden de pago vía pública</p>
        <button className='h-9 w-full md:w-60 px-5 py-1 font-Foco-Corp-Bold shadow-md bg-naranja hover:opacity-80 text-white text-lg rounded-md' onClick={ generatePDF }>Imprimir</button>
      </div>
      <div className='border-2'>
        {/* contenido que se imprime */}
        <div className="px-4" ref={componentRef}>
          <div className="flex gap-x-2 py-4 justify-between">
            <div className="w-1/5 "></div>
            <div className="w-3/5 items-center text-center flex flex-col text-black">
              <p className='font-Foco-Corp text-sm antialiased'>MUNICIPIO DE TLAJOMULCO DE ZUÑIGA, JALISCO</p>
              <p className='font-Foco-Corp text-xs antialiased'>DIRECCIÓN GENERAL DE PADRÓN Y LICENCIAS</p>
              <p className='font-Foco-Corp antialiased'style={{fontSize:'10px'}}>MERCADOS Y TIANGUIS </p>
              <p className='font-Foco-Corp-Bold text-lg antialiased'>ORDEN DE PAGO </p>
              <p className='font-Foco-Corp antialiased' style={{fontSize:'10px'}}>POR DERECHOS PARA EJERCER COMERCIO EN LA VÍA PÚBLICA</p>
            </div>
            <div className="w-1/5 items-end flex flex-col mt-10">
              <label className='font-Foco-Corp-Bold text-sm antialiased'>NO. REFERENCIA</label>
              <label className='font-Foco-Corp text-sm antialiased'>000000000</label>
            </div>
          </div>
          <div className="flex gap-x-2 py-auto">
            <div className="w-3/4 text-left flex flex-col text-black">
              <label className='font-Foco-Corp-Bold text-xs antialiased'>DATOS DEL CONTRIBUYENTE:</label>
              <label className='font-Foco-Corp text-sm antialiased'>JOSE LUIS  CARDENAS TORRES</label>
              <label className='font-Foco-Corp text-sm antialiased'>DOMICILIO: SILVANO RICO 324 SAN SEBASTIAN TLAJOMULCO DE ZUÑIGA</label>
              <label className='font-Foco-Corp text-sm antialiased'>TELÉFONO: 3319698761</label>
            </div>
            <div className="w-1/4 items-end flex flex-col">
              <label className='font-Foco-Corp-Bold text-xs antialiased'>FOLIO</label>
              <label className='font-Foco-Corp text-sm antialiased'>000000</label>
              <label className='font-Foco-Corp text-sm antialiased'>20/06/2023</label>
            </div>
          </div>
          <div className="bg-white mt-2 mb-14 container overflow-auto">
            <table className="table-auto w-full">
              <thead className='bg-gray-100 border'>
                <tr className='font-Foco-Corp text-xs text-black antialiased text-center'>
                  <th className="w-5/12 border px-2 text-left">CONCEPTO</th>
                  <th className="w-1/12 border px-2">COSTO</th>
                  <th className="w-1/12 border px-2">CANTIDAD</th>
                  <th className="w-1/12 border px-2">METROS</th>
                  <th className="w-1/12 border px-2">DIA/MES</th>
                  <th className="w-1/12 border px-2">SUBTOTAL</th>
                  <th className="w-2/12 border px-2 text-left">UNIDAD</th>
                </tr>
              </thead>
              <tbody>
                <tr className='font-Foco-Corp text-xs text-black antialiased text-center'>
                  <td className="w-5/12 px-2 text-left">CÉDULA MUNICIPAL DE PERMISO EN VÍA PÚBLICA</td>
                  <td className="w-1/12 px-2">$76.00</td>
                  <td className="w-1/12 px-2">1</td>
                  <td className="w-1/12 px-2"></td>
                  <td className="w-1/12 px-2"></td>
                  <td className="w-1/12 px-2">$76.00</td>
                  <td className="w-2/12 px-2 text-left">Pesos</td>
                </tr>
                <tr className='font-Foco-Corp text-xs text-black antialiased text-center'>
                  <td className="w-5/12 px-2 text-left">USO DE PISO PARA PUESTOS FIJOS, SEMIFIJOS O MOVILES FUERA DEL PRIMER CUADRO</td>
                  <td className="w-1/12 px-2">$12.00</td>
                  <td className="w-1/12 px-2"></td>
                  <td className="w-1/12 px-2">4</td>
                  <td className="w-1/12 px-2">17</td>
                  <td className="w-1/12 px-2">$816.00</td>
                  <td className="w-2/12 px-2 text-left">Pesos por metro cuadrado por día</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="flex mb-4">
            <div className="w-6/12 justify-end flex flex-col">
              <div className="w-full items-center flex flex-col">
                <label className='font-Foco-Corp-Bold text-xs antialiased'>LIC. ALAN ISRAEL RODRIGUEZ MONTAÑEZ</label>
                <label className='font-Foco-Corp text- antialiased' style={{fontSize:'10px'}}>DIRECCIÓN GENERAL DE PADRON Y LICENCIAS - JEFATURA DE MERCADOS</label>
                <label className='font-Foco-Corp antialiased' style={{fontSize:'10px'}}>FIRMA AUTORIZADA</label>
                <img
                  className="h-8"
                  src={logoEmpresa}
                  alt="Logo de la empresa"
                />
              </div>
              <div className="w-full items-start flex flex-col">
                <label className='font-Foco-Corp antialiased' style={{fontSize:'10px'}}>USUARIO:_______________________</label>
                <label className='font-Foco-Corp antialiased' style={{fontSize:'8px'}}>NO TIRES LA TOALLA PORQUE TUVISTE UN FRACASO, SIGUE ADELANTE...TU PUEDES, BUEN DÍA!</label>
              </div>
            </div>
            <div className="w-6/12">
              <div className="flex w-full gap-4 border-t-2">
                <div className="flex flex-col w-1/4 items-end gap-y-1">
                  <label className='font-Foco-Corp-Bold text-lg antialiased'>TOTAL</label>
                </div>
                <div className="flex w-3/4 justify-start">
                  <label className='font-Foco-Corp-Bold text-lg antialiased'>$ 816.00</label>
                </div>
              </div>
              <div className='w-full border-y-2 text-center mb-2'>
                <label className='font-Foco-Corp antialiased' style={{fontSize:'10px'}}>TRAMITE EN PROCESO DE AUTORIZACIÓN DE PERSMISO DE COMERCIO EN LA VIA PÚBLICA</label>
              </div>
              <div className="flex w-full gap-4">
                <div className="flex flex-col w-1/4 items-end" >
                  <label className='font-Foco-Corp antialiased' style={{fontSize:'10px'}}>CLASIFICACIÓN:</label>
                  <label className='font-Foco-Corp antialiased' style={{fontSize:'10px'}}>GIRO/ACTIVIDAD:</label>
                  <label className='font-Foco-Corp antialiased' style={{fontSize:'10px'}}>METROS:</label>
                  <label className='font-Foco-Corp antialiased' style={{fontSize:'10px'}}>HORARIO:</label>
                  <label className='font-Foco-Corp antialiased' style={{fontSize:'10px'}}>VIGENCIA:</label>
                  <label className='font-Foco-Corp antialiased' style={{fontSize:'10px'}}>UBICACIÓN:</label>
                  <label className='font-Foco-Corp antialiased' style={{fontSize:'10px'}}>LOCALIDAD</label>
                </div>
                <div className="flex flex-col w-3/4 items-start">
                  <label className='font-Foco-Corp antialiased' style={{fontSize:'10px'}}>COMERCIO EN PUESTO SEMIFIJO </label>
                  <label className='font-Foco-Corp antialiased' style={{fontSize:'10px'}}>ALIMENTOS (PAPAS Y SALCHIPULPOS)</label>
                  <label className='font-Foco-Corp antialiased' style={{fontSize:'10px'}}>2x2</label>
                  <label className='font-Foco-Corp antialiased' style={{fontSize:'10px'}}>MAT:07:00 A 18:00</label>
                  <label className='font-Foco-Corp antialiased' style={{fontSize:'10px'}}>25/06/23</label>
                  <label className='font-Foco-Corp antialiased' style={{fontSize:'10px'}}>EMILIANO ZAPATA ENTRE GARCIA BARRAGAN Y JUAREZ</label>
                  <label className='font-Foco-Corp antialiased' style={{fontSize:'10px'}}>SAN SEBASTIAN EL GRANDE</label>
                </div>
              </div>
            </div>
          </div>
          <div className="border-dashed border border-gray-400"></div>
          <div className="flex gap-x-2 py-4 justify-between">
            <div className="w-1/5 "></div>
            <div className="w-3/5 items-center text-center flex flex-col text-black">
              <p className='font-Foco-Corp text-sm antialiased'>MUNICIPIO DE TLAJOMULCO DE ZUÑIGA, JALISCO</p>
              <p className='font-Foco-Corp text-xs antialiased'>DIRECCIÓN GENERAL DE PADRÓN Y LICENCIAS</p>
              <p className='font-Foco-Corp antialiased'style={{fontSize:'10px'}}>MERCADOS Y TIANGUIS </p>
              <p className='font-Foco-Corp-Bold text-lg antialiased'>ORDEN DE PAGO </p>
              <p className='font-Foco-Corp antialiased' style={{fontSize:'10px'}}>POR DERECHOS PARA EJERCER COMERCIO EN LA VÍA PÚBLICA</p>
            </div>
            <div className="w-1/5 items-end flex flex-col mt-10">
              <label className='font-Foco-Corp-Bold text-sm antialiased'>NO. REFERENCIA</label>
              <label className='font-Foco-Corp text-sm antialiased'>000000000</label>
            </div>
          </div>
          <div className="flex gap-x-2 py-auto">
            <div className="w-3/4 text-left flex flex-col text-black">
              <label className='font-Foco-Corp-Bold text-xs antialiased'>DATOS DEL CONTRIBUYENTE:</label>
              <label className='font-Foco-Corp text-sm antialiased'>JOSE LUIS  CARDENAS TORRES</label>
              <label className='font-Foco-Corp text-sm antialiased'>DOMICILIO: SILVANO RICO 324 SAN SEBASTIAN TLAJOMULCO DE ZUÑIGA</label>
              <label className='font-Foco-Corp text-sm antialiased'>TELÉFONO: 3319698761</label>
            </div>
            <div className="w-1/4 items-end flex flex-col">
              <label className='font-Foco-Corp-Bold text-xs antialiased'>FOLIO</label>
              <label className='font-Foco-Corp text-sm antialiased'>000000</label>
              <label className='font-Foco-Corp text-sm antialiased'>20/06/2023</label>
            </div>
          </div>
          <div className="bg-white mt-2 mb-14 container overflow-auto">
            <table className="table-auto w-full">
              <thead className='bg-gray-100 border'>
                <tr className='font-Foco-Corp text-xs text-black antialiased text-center'>
                  <th className="w-5/12 border px-2 text-left">CONCEPTO</th>
                  <th className="w-1/12 border px-2">COSTO</th>
                  <th className="w-1/12 border px-2">CANTIDAD</th>
                  <th className="w-1/12 border px-2">METROS</th>
                  <th className="w-1/12 border px-2">DIA/MES</th>
                  <th className="w-1/12 border px-2">SUBTOTAL</th>
                  <th className="w-2/12 border px-2 text-left">UNIDAD</th>
                </tr>
              </thead>
              <tbody>
                <tr className='font-Foco-Corp text-xs text-black antialiased text-center'>
                  <td className="w-5/12 px-2 text-left">CÉDULA MUNICIPAL DE PERMISO EN VÍA PÚBLICA</td>
                  <td className="w-1/12 px-2">$76.00</td>
                  <td className="w-1/12 px-2">1</td>
                  <td className="w-1/12 px-2"></td>
                  <td className="w-1/12 px-2"></td>
                  <td className="w-1/12 px-2">$76.00</td>
                  <td className="w-2/12 px-2 text-left">Pesos</td>
                </tr>
                <tr className='font-Foco-Corp text-xs text-black antialiased text-center'>
                  <td className="w-5/12 px-2 text-left">USO DE PISO PARA PUESTOS FIJOS, SEMIFIJOS O MOVILES FUERA DEL PRIMER CUADRO</td>
                  <td className="w-1/12 px-2">$12.00</td>
                  <td className="w-1/12 px-2"></td>
                  <td className="w-1/12 px-2">4</td>
                  <td className="w-1/12 px-2">17</td>
                  <td className="w-1/12 px-2">$816.00</td>
                  <td className="w-2/12 px-2 text-left">Pesos por metro cuadrado por día</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="flex mb-4">
            <div className="w-6/12 justify-end flex flex-col">
              <div className="w-full items-center flex flex-col">
                <label className='font-Foco-Corp-Bold text-xs antialiased'>LIC. ALAN ISRAEL RODRIGUEZ MONTAÑEZ</label>
                <label className='font-Foco-Corp text- antialiased' style={{fontSize:'10px'}}>DIRECCIÓN GENERAL DE PADRON Y LICENCIAS - JEFATURA DE MERCADOS</label>
                <label className='font-Foco-Corp antialiased' style={{fontSize:'10px'}}>FIRMA AUTORIZADA</label>
                <img
                  className="h-8"
                  src={logoEmpresa}
                  alt="Logo de la empresa"
                />
              </div>
              <div className="w-full items-start flex flex-col">
                <label className='font-Foco-Corp antialiased' style={{fontSize:'10px'}}>USUARIO:_______________________</label>
                <label className='font-Foco-Corp antialiased' style={{fontSize:'8px'}}>NO TIRES LA TOALLA PORQUE TUVISTE UN FRACASO, SIGUE ADELANTE...TU PUEDES, BUEN DÍA!</label>
              </div>
            </div>
            <div className="w-6/12">
              <div className="flex w-full gap-4 border-t-2">
                <div className="flex flex-col w-1/4 items-end gap-y-1">
                  <label className='font-Foco-Corp-Bold text-lg antialiased'>TOTAL</label>
                </div>
                <div className="flex w-3/4 justify-start">
                  <label className='font-Foco-Corp-Bold text-lg antialiased'>$ 816.00</label>
                </div>
              </div>
              <div className='w-full border-y-2 text-center mb-2'>
                <label className='font-Foco-Corp antialiased' style={{fontSize:'10px'}}>TRAMITE EN PROCESO DE AUTORIZACIÓN DE PERSMISO DE COMERCIO EN LA VIA PÚBLICA</label>
              </div>
              <div className="flex w-full gap-4">
                <div className="flex flex-col w-1/4 items-end" >
                  <label className='font-Foco-Corp antialiased' style={{fontSize:'10px'}}>CLASIFICACIÓN:</label>
                  <label className='font-Foco-Corp antialiased' style={{fontSize:'10px'}}>GIRO/ACTIVIDAD:</label>
                  <label className='font-Foco-Corp antialiased' style={{fontSize:'10px'}}>METROS:</label>
                  <label className='font-Foco-Corp antialiased' style={{fontSize:'10px'}}>HORARIO:</label>
                  <label className='font-Foco-Corp antialiased' style={{fontSize:'10px'}}>VIGENCIA:</label>
                  <label className='font-Foco-Corp antialiased' style={{fontSize:'10px'}}>UBICACIÓN:</label>
                  <label className='font-Foco-Corp antialiased' style={{fontSize:'10px'}}>LOCALIDAD</label>
                </div>
                <div className="flex flex-col w-3/4 items-start">
                  <label className='font-Foco-Corp antialiased' style={{fontSize:'10px'}}>COMERCIO EN PUESTO SEMIFIJO </label>
                  <label className='font-Foco-Corp antialiased' style={{fontSize:'10px'}}>ALIMENTOS (PAPAS Y SALCHIPULPOS)</label>
                  <label className='font-Foco-Corp antialiased' style={{fontSize:'10px'}}>2x2</label>
                  <label className='font-Foco-Corp antialiased' style={{fontSize:'10px'}}>MAT:07:00 A 18:00</label>
                  <label className='font-Foco-Corp antialiased' style={{fontSize:'10px'}}>25/06/23</label>
                  <label className='font-Foco-Corp antialiased' style={{fontSize:'10px'}}>EMILIANO ZAPATA ENTRE GARCIA BARRAGAN Y JUAREZ</label>
                  <label className='font-Foco-Corp antialiased' style={{fontSize:'10px'}}>SAN SEBASTIAN EL GRANDE</label>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* fin */}
      </div>
    </div>
  );
};

function OrdenPago() {
  return (
    <div>
      <TramiteImprimible/>
    </div>
  );
}

export default OrdenPago;
