import { useState } from "react";

export const useConceptos = () => {
  const [conceptosPago, setConceptosPago] = useState([]);
  return { conceptosPago, setConceptosPago };
};

export const useSelectedData = () => {
  const [selectedDays, setSelectedDays] = useState([]);
  const [selectBeginDate, setSelectBeginDate] = useState(null);
  const [selectEndDate, setSelectEndDate] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);
  const [totalDaysWorked, setTotalDaysWorked] = useState(0);
  const [ListaDeConceptos, setListaDeConceptos] = useState([]);
  const [total, setTotal] = useState(0);

  return {
    selectedDays,
    setSelectedDays,
    selectBeginDate,
    setSelectBeginDate,
    selectEndDate,
    setSelectEndDate,
    selectedOption,
    setSelectedOption,
    totalDaysWorked,
    setTotalDaysWorked,
    ListaDeConceptos,
    setListaDeConceptos,
    total,
    setTotal,
  };
};

export const useLocationData = ({merchant, shop, setDateFormat, Data}) => {
  const phone = Data ? Data.phone : null;
  const metrosX = Number(shop.metraje?.split("x")[0]);
  const metrosY = Number(shop.metraje?.split("x")[1]);
  const totalMetraje = metrosX * metrosY;
  const vigencia = shop?.fecha_termino
    ? setDateFormat(shop.fecha_termino)
    : "sin refrendo";
  const merchantAdress = merchant
    ? merchant.calle
      .concat(" ", merchant.numero_exterior)
      .concat(
        merchant.numero_interior ? `, Int: ${merchant.numero_interior}, ` : ""
      )
      .concat(` Entre ${merchant.calle_colindante_uno}`)
      .concat(` y ${merchant.calle_colindante_dos}`)
    : "";

  const merchantFullName = merchant
    ? merchant.nombres.concat(
      " ",
      merchant.apellido_paterno,
      " ",
      merchant.apellido_materno
    )
    : "";

  return {
    phone,
    metrosX,
    metrosY,
    totalMetraje,
    vigencia,
    merchantAdress,
    merchantFullName,
  };
};
