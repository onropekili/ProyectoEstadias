import {useState} from "react";

const useParamsDataComerciante = () => {
  const [activeTab, setActiveTab] = useState(1);

  const [isMenuOpenTab1, setIsMenuOpenTab1] = useState(false);
  const [showButtonsTab1, setShowButtonsTab1] = useState(false);
  const [fieldsEditableTab1, setFieldsEditableTab1] = useState(false);

  const [isMenuOpenTab2, setIsMenuOpenTab2] = useState(false);
  const [showButtonsTab2, setShowButtonsTab2] = useState(false);
  const [fieldsEditableTab2, setFieldsEditableTab2] = useState(false);
  const [data, setData] = useState(null); // Almacena los datos modificados por el usuario
  const [originalData, setOriginalData] = useState(null); // Almacena los datos originales
  const [telefonos, setTelefonos] = useState([]); // Almacena el estado inicial de los telefonos
  const [telefono1, setTelefono1] = useState(""); // Almacena el telefono que se muestra en el campo de telefono 1
  const [telefono2, setTelefono2] = useState(""); // Almacena el telefono que se muestra en el campo de telefono 2
  const [fecha_inicio, setFecha_inicio] = useState(""); // Almacena la fecha de inicio del permiso
  const [fecha_termino, setFecha_termino] = useState(""); // Almacena la fecha de termino del permiso

  const [selectedClasificacion, setSelectedClasificacion] = useState(null);
  const [selectedHorario, setSelectedHorario] = useState(null);
  const [selectedTipo, setSelectedTipo] = useState(null);


  return {
    activeTab,
    setActiveTab,
    isMenuOpenTab1,
    setIsMenuOpenTab1,
    showButtonsTab1,
    setShowButtonsTab1,
    fieldsEditableTab1,
    setFieldsEditableTab1,
    isMenuOpenTab2,
    setIsMenuOpenTab2,
    showButtonsTab2,
    setShowButtonsTab2,
    fieldsEditableTab2,
    setFieldsEditableTab2,
    data,
    setData,
    originalData,
    setOriginalData,
    telefonos,
    setTelefonos,
    telefono1,
    setTelefono1,
    telefono2,
    setTelefono2,
    fecha_inicio,
    setFecha_inicio,
    fecha_termino,
    setFecha_termino,
    selectedClasificacion,
    setSelectedClasificacion,
    selectedHorario,
    setSelectedHorario,
    selectedTipo,
    setSelectedTipo
  }
}

export default useParamsDataComerciante;