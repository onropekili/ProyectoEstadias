import React, { useState } from 'react';
import Header from '../components/Header';
import DatePickerInput from "../components/DatePickerInput";
import CheckboxInput from "../components/CheckboxInput";
import Swal from 'sweetalert2';

const Modal = ({ closeModal }) => {
  
  const handleRefrendarClick = () => {
    // Obtener el elemento del input
    const inputNumeroReferencia = document.getElementById('NoReferencia');

    // Obtener el valor del input
    const numeroReferencia = inputNumeroReferencia.value;
    
    // Comprobar si el número de referencia es correcto
    if (numeroReferencia === '1234') {
      // Mostrar SweetAlert de éxito y abrir en una nueva pestaña la vista de CedulaPDF
      Swal.fire({
        title: 'Refrendo exitoso',
        text: 'El comercio se ha refrendado correctamente',
        icon: 'success',
        confirmButtonText: 'Imprimir cédula',
        buttonsStyling: false,
        customClass: {
          confirmButton: 'w-40 bg-verde hover:bg-verde hover:opacity-80 text-white m-4 p-2 px-4 rounded-lg font-semibold shadow-lg',
        },
      }).then(() => {
        window.open('/Cedula-de-comercio', '_blank'); // Abrir la nueva vista
      });
    } else {
      // Mostrar SweetAlert de error
      Swal.fire({
        title: 'Algo anda mal',
        text: 'El número de referencia es incorrecto.',
        icon: 'error',
        confirmButtonText: 'Aceptar',
        buttonsStyling: false,
        customClass: {
          confirmButton: 'w-40 bg-rojo hover:bg-rojo hover:opacity-80 text-white m-4 p-2 px-4 rounded-lg font-semibold shadow-lg',
        },
      });
    }
  };

  return (
    <div className="fixed inset-0 flex items-start lg:items-center justify-center z-10 bg-gris bg-opacity-80 p-2 h-full overflow-auto">
      <div className="bg-white rounded-lg pt-2 h-auto">
        <Header/>
        <form>
          <div className='p-8'>
            <div className='mb-8'>
              <h2 className="text-3xl font-Foco-Corp-Bold text-naranja text-center">Refrendar comercio</h2>
            </div>
            <div className="flex flex-col text-start mb-6">
              <label
                htmlFor="NoReferencia"
                className="font-Foco-Corp-Bold text-gris text-lg mb-2"
              >
                No. Referencia de pago
              </label>
              <input
                id="NoReferencia"
                className="bg-gray-50 bg-opacity-10 text-lg text-gris rounded-lg border-gray-300 border-2 p-2 h-9 hover:border-naranja focus:border-naranja focus:bg-white focus:outline-none focus:shadow-lg focus:text-black"
                placeholder="Escribe algo"
              />
            </div>
            <div className="flex flex-col md:flex-row gap-x-4 gap-y-4 mb-3 text-start">
              <div className="w-full md:w-1/3">
                <div className="flex flex-col w-full">
                  <label className="font-Foco-Corp-Bold text-gris text-lg mb-2">
                    Fecha Inicio
                  </label>
                  <DatePickerInput />
                </div>
              </div>
              <div className="w-full md:w-1/3">
                <div className="flex flex-col">
                  <label className="font-Foco-Corp-Bold text-gris text-lg mb-2">
                    Fecha Termino
                  </label>
                  <DatePickerInput/>
                </div>
              </div>
              <div className="w-full md:w-1/3">
                <div className="flex flex-col ">
                  <label className="font-Foco-Corp-Bold text-gris text-lg mb-2">
                    Días
                  </label>
                  <CheckboxInput/>
                </div>
              </div>
            </div>
          </div>
          <div className='w-full flex flex-col md:flex-row py-2 md:py-8 px-4 rounded-b-lg gap-4 lg:gap-10 bg-gray-100 justify-center mb-1'>
            <button
              className="text-center text-lg w-full md:w-72 h-10 shadow-lg font-Foco-Corp-Bold border-2 bg-naranja border-naranja hover:bg-naranja hover:opacity-80 rounded-lg text-white"
              onClick={handleRefrendarClick}
            >
              Refrendar
            </button>
            <button
              className="text-center text-lg w-full md:w-72 h-10 shadow-lg font-Foco-Corp-Bold border-2 bg-rojo border-rojo hover:bg-rojo hover:opacity-80 rounded-lg text-white"
              onClick={closeModal}
            >
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
