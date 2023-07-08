import React, { useState } from 'react';
import { FiCheck, FiCalendar } from 'react-icons/fi';


const CheckboxInput = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDays, setSelectedDays] = useState([]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleDayToggle = (day) => {
    if (selectedDays.includes(day)) {
      setSelectedDays(selectedDays.filter((d) => d !== day));
    } else {
      setSelectedDays([...selectedDays, day]);
    }
  };

  const placeholderText = selectedDays.length > 0 ? selectedDays.join(', ') : 'Seleccionar días';

  return (
    <div className="relative inline-flex">
      <div className="relative w-full">
        <input
          type="text"
          placeholder={placeholderText}
          className="py-2 px-4 h-9 text-sm rounded-lg border-2 border-gray-300 hover:border-naranja focus:outline-none focus:border-naranja cursor-pointer w-full pr-10"
          readOnly
          onClick={toggleDropdown}
        />
        <FiCalendar
          className="absolute top-2 right-3 text-gray-400 cursor-pointer w-5 h-5"
          onClick={toggleDropdown}
        />
      </div>
      <div className={`absolute w-full top-full left-0 ${isOpen ? 'block' : 'hidden'}`}>
        <div className="mt-2 bg-white border rounded-md shadow-md p-2">
          <div className="grid grid-cols-2 gap-x-2">
            <CheckboxOption day="Lun" label="Lunes" handleToggle={handleDayToggle} selected={selectedDays.includes('Lun')} />
            <CheckboxOption day="Mar" label="Martes" handleToggle={handleDayToggle} selected={selectedDays.includes('Mar')} />
            <CheckboxOption day="Mie" label="Miércoles" handleToggle={handleDayToggle} selected={selectedDays.includes('Mie')} />
            <CheckboxOption day="Jue" label="Jueves" handleToggle={handleDayToggle} selected={selectedDays.includes('Jue')} />
            <CheckboxOption day="Vie" label="Viernes" handleToggle={handleDayToggle} selected={selectedDays.includes('Vie')} />
            <CheckboxOption day="Sab" label="Sábado" handleToggle={handleDayToggle} selected={selectedDays.includes('Sab')} />
            <CheckboxOption day="Dom" label="Domingo" handleToggle={handleDayToggle} selected={selectedDays.includes('Dom')} />
          </div>
        </div>
      </div>
    </div>
  );
};

const CheckboxOption = ({ day, label, handleToggle, selected }) => {
  return (
    <label className="flex items-center">
      <input
        type="checkbox"
        checked={selected}
        onChange={() => handleToggle(day)}
        className="mr-2 cursor-pointer"
      />
      {selected && <FiCheck className="text-naranja" />}
      {label}
    </label>
    
  );
};

export default CheckboxInput;
