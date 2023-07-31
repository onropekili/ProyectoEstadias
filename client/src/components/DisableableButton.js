import React from 'react';

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
