import React from 'react';
import Header from '../components/Header';
import DatePickerInput from "../components/DatePickerInput";
import CheckboxInput from "../components/CheckboxInput";
import Swal from 'sweetalert2';
import axios from 'axios';
import {Spinner} from 'reactstrap'
import 'bootstrap'

const Modal = ({ closeModal }) => {

  const [pendding, setPendding] = React.useState(true);

  const handleRefrendarClick = (event) => {
    setPendding(false);
    
    event.preventDefault();// Evitar el envío del formulario y la recarga de la página

    // Obtener el elemento del input
    const inputNumeroReferencia = document.getElementById('NoReferencia');

    // Obtener el valor del input
    const numeroReferencia = inputNumeroReferencia.value;

    axios.get(`http://${process.env.REACT_APP_HOST}:4000/refrendarComercio?numeroReferencia=${numeroReferencia}`)
      .then((response) => {
        setPendding(true);
        if (!(isNaN(response.data))) {
          openCedula(response.data);
          closeModal();
        } else if (response.data === 'Comerciante refrendado') {
          refrendarComerciante();
          closeModal();
        } else if (response.data === 'Orden de pago pagada') {
          otherCases();
          closeModal();
        }
      })
      .catch((error) => {
        setPendding(true);
        showErrorAlert(error);
      });

    const openCedula = (folio) => {
      window.open(`/Cedula-de-comercio/${folio}`, '_blank');
    }
  };

  const refrendarComerciante = () => {
    Swal.fire({
      title: 'Comerciante refrendado',
      text: 'El comerciante ha sido refrendado exitosamente.',
      icon: 'success',
      confirmButtonText: 'Aceptar',
      buttonsStyling: false,
      customClass: {
        confirmButton: 'w-40 bg-naranja hover:bg-naranja hover:opacity-80 text-white m-4 p-2 px-4 rounded-lg font-semibold shadow-lg',
      },
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.reload();
      }
    });
  }

  const otherCases = () => {
    Swal.fire({
      title: 'Orden de pago registrada',
      text: 'Puede proceder con la accion necesaria.',
      icon: 'success',
      confirmButtonText: 'Aceptar',
      buttonsStyling: false,
      customClass: {
        confirmButton: 'w-40 bg-naranja hover:bg-naranja hover:opacity-80 text-white m-4 p-2 px-4 rounded-lg font-semibold shadow-lg',
      },
    });
  }

  const showErrorAlert = (error) => {
    console.log(error);
    Swal.fire({
      title: 'Error',
      text: error.response.data,
      icon: 'error',
      confirmButtonText: 'Aceptar',
      buttonsStyling: false,
      customClass: {
        confirmButton: 'w-40 bg-rojo hover:bg-rojo hover:opacity-80 text-white m-4 p-2 px-4 rounded-lg font-semibold shadow-lg',
      },
    });
  }

  return (

    <div className="fixed inset-0 flex items-start lg:items-center justify-center z-10 bg-gris bg-opacity-80 p-2 h-full overflow-auto">
      <div className="bg-white rounded-lg pt-2 h-auto">
        <Header />
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
                Referencia de pago
              </label>
              <input
                id="NoReferencia"
                className="bg-gray-50 bg-opacity-10 text-lg text-gris rounded-lg border-gray-300 border-2 p-2 h-9 hover:border-naranja focus:border-naranja focus:bg-white focus:outline-none focus:shadow-lg focus:text-black"
                placeholder="Escribe algo"
              />
            </div>
            <div className="flex flex-col md:flex-row gap-x-4 gap-y-4 mb-3 text-start">
              <div className="w-full md:w-1/3">

              </div>
              <div className="w-full md:w-1/3">

              </div>
              <div className="w-full md:w-1/3">

              </div>
            </div>
          </div>
          <div className='w-full flex flex-col md:flex-row py-2 md:py-8 px-4 rounded-b-lg gap-4 lg:gap-10 bg-gray-100 justify-center mb-1'>

              
            <button
              className="text-center text-lg w-full md:w-72 h-10 shadow-lg font-Foco-Corp-Bold border-2 bg-naranja border-naranja hover:bg-naranja hover:opacity-80 rounded-lg text-white"
              onClick={handleRefrendarClick}
            >
              {pendding ? 'Refrendar' : <Spinner >Loading...</Spinner>}
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
