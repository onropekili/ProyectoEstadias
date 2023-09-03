import React from 'react';

/**
 * @param selectedOption {JSON}
 * @param selectBeginDate {Date}
 * @param selectEndDate {Date}
 * @param selectedDays {Array<String>}
 * @param agregaConceptoPago {Function}
 * @returns {JSX.Element}
 * @description Componente que renderiza un botón que se deshabilita si no se ha seleccionado algun concepto
 * de pago; en caso de que el concepto sea diferente a pesos, se deshabilita si no se han seleccionado fechas
 * y dias.
 * */
const DisableableButton = ({
  selectedOption,
  selectBeginDate,
  selectEndDate,
  selectedDays,
  agregaConceptoPago,
}) => {
  const noOptionSelected = !selectedOption;
  const optionIsNotPesos = selectedOption && selectedOption.value.unidad !== 'PESOS';
  const missingBeginDate = !selectBeginDate;
  const missingEndDate = !selectEndDate;
  const noSelectedDays = selectedDays.length === 0;

  const isButtonDisabled = noOptionSelected || (optionIsNotPesos && (missingBeginDate || missingEndDate || noSelectedDays));

  return (
    <div className="w-full lg:w-1/5">
      <input
        type="submit"
        value="Agregar"
        className={`text-center w-full h-9 font-Foco-Corp-Bold border-2 bg-naranja border-naranja hover:bg-naranja hover:opacity-80 rounded-lg text-white ${
          isButtonDisabled ? 'opacity-50 cursor-not-allowed' : ''
        }`}
        onClick={agregaConceptoPago}
        disabled={isButtonDisabled}
      />
    </div>
  );
};

export default DisableableButton;
