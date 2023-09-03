import { useEffect, useState } from "react";
import axios from "axios";

export const useConceptosPago = () => {
  const [conceptos, setConceptos] = useState([]);

  useEffect(() => {
    axios
      .get(`http://${process.env.REACT_APP_HOST}:4000/conceptos`)
      .then((res) => {
        setConceptos(res.data.options);
      })
      .catch((error) => {
        // Manejo de errores aquí
      });
  }, []);
  return conceptos;
};
