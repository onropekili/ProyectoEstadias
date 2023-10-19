import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FiCalendar } from 'react-icons/fi';

/**
 * @param setSelectedDate
 * @param selectedDate
 * @returns {JSX.Element}
 * @description Este componente renderiza un input con un calendario para seleccionar una fecha
 */
const DatePickerInput = ({setSelectedDate, selectedDate}) => {

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
      <div className="relative inline-flex rounded-lg h-9 border-2 border-gray-300 hover:border-naranja focus:border-naranja cursor-pointer w-full">
        <DatePicker
          selected={selectedDate}
          onChange={handleDateChange}
          dateFormat="dd/MM/yyyy"
          placeholderText="Seleccione una fecha"
          className="py-2 px-4 h-8 pr-48 text-sm rounded-lg focus:outline-none  focus:border-naranja cursor-pointer w-full md:pr-10"
        />
        <FiCalendar className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
      </div>
  );
};

export default DatePickerInput;
