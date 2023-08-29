import React, { useEffect, useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";
import cintillo from "../../assets/images/Cintillo_comercio_via_publica _pages-to-jpg-0001.jpg"
import logoEmpresa from "../../assets/images/logoEmpresa.jpg";
import layuoutp from "../../assets/images/layuoutp.png";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { setDateFormat } from "../../components/formatDates";

const TramiteImprimible = () => {
  const componentRef = useRef();
  const { folio } = useParams();
  const [data, setData] = useState({});
  const [vigencia, setVigencia] = useState("");
  const [expedicion, setExpedicion] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const folioValue = folio; // Reemplaza YOUR_FOLIO_VALUE con el valor del folio que deseas consultar

    axios
      .get(`http://${process.env.REACT_APP_HOST}:4000/getCedulaData`, {
        params: { folio: folioValue },
      })
      .then((res) => {
        setData(res.data);
        setVigencia(setDateFormat(res.data.fecha_termino));
        setExpedicion(setDateFormat(res.data.fecha_expedicion));
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const generatePDF = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div className="mx-6 lg:mx-28 my-10 overflow-auto h-auto">
      <div className="flex flex-col md:flex-row justify-between mb-5 gap-4">
        <p className="text-xl md:text-3xl font-Foco-Corp-Bold text-naranja">
          Cédula de comercio
        </p>
        <button
          className="h-9 w-full md:w-60 px-5 py-1 font-Foco-Corp-Bold shadow-md bg-naranja hover:opacity-80 text-white text-lg rounded-md"
          onClick={generatePDF}
        >
          Imprimir
        </button>
        <button 
        className='h-9 w-full md:w-60 px-5 py-1 font-Foco-Corp-Bold shadow-md bg-verde hover:opacity-80 text-white text-lg rounded-md' 
        onClick={ () => {navigate('/DashBoard_E')} }
        >
          Inicio
        </button>
      </div>
      {/* contenido que se imprime */}
      <div className="border-2 lg:p-10 overflow-auto h-auto">
        <div ref={componentRef}>
          <div className="flex mb-8">
            <img className="h-auto" src={cintillo} alt="Logo de la empresa" />
          </div>
          <div className=" flex-col inline-grid md:grid md:grid-cols-4 gap-x-1 gap-y-2 px-6 lg:px-16 pt-10 mb-32">
            <div className="col-span-1 hidden md:block"></div>
            <div className="flex flex-col col-span-2 text-left">
              <label className="font-Foco-Corp-Bold text-lg antialiased">
                Nombre
              </label>
              <label className="font-Foco-Corp text-lg antialiased">
                {data.nombre_completo}
              </label>
            </div>
            <div className="col-span-1 hidden md:block"></div>
            <div className="col-span-1 hidden md:block"></div>
            <div className="flex flex-col col-span-2 text-left">
              <label className="font-Foco-Corp-Bold text-lg antialiased">
                Clasificacíon
              </label>
              <label className="font-Foco-Corp text-lg antialiased">
                {data.tipo_comercio}
              </label>
            </div>
            <div className="flex flex-col col-span-1 text-left">
              <label className="font-Foco-Corp-Bold text-lg antialiased">
                Vigencia
              </label>
              <label className="font-Foco-Corp text-lg antialiased">
                {vigencia ? vigencia : ""}
              </label>
            </div>
            <div className="flex flex-row col-span-1 text-left gap-2 items-center">
              <label className="font-Foco-Corp-Bold text-lg antialiased">
                Folio
              </label>
              <label className="font-Foco-Corp text-2xl antialiased text-red-700">
              {String(data.folio).padStart(6, '0')}
              </label>
            </div>
            <div className="flex flex-col col-span-2 text-left">
              <label className="font-Foco-Corp-Bold text-lg antialiased">
                Giro
              </label>
              <label className="font-Foco-Corp text-lg antialiased">
                {data.giro}
              </label>
            </div>
            <div className="col-span-1 hidden md:block"></div>
            <div className="flex flex-col col-span-1 text-left">
              <label className="font-Foco-Corp-Bold text-lg antialiased">
                Tipo
              </label>
              <label className="font-Foco-Corp text-lg antialiased">
                {data.tipo_comercio}
              </label>
            </div>
            <div className="flex flex-col col-span-2 text-left">
              <label className="font-Foco-Corp-Bold text-lg antialiased">
                Ubicación
              </label>
              <label className="font-Foco-Corp text-lg antialiased">
               {data.direccion_comercio}
              </label>
            </div>
            <div className="col-span-1 hidden md:block"></div>
            <div className="flex flex-col col-span-1 text-left">
              <label className="font-Foco-Corp-Bold text-lg antialiased">
                Zona
              </label>
              <label className="font-Foco-Corp text-lg antialiased">{data.zona}</label>
            </div>
            <div className="flex flex-col col-span-2 text-left">
              <label className="font-Foco-Corp-Bold text-lg antialiased">
                Metros
              </label>
              <label className="font-Foco-Corp text-lg antialiased">{data.metraje}</label>
            </div>
            <div className="flex flex-col col-span-1 text-left">
              <label className="font-Foco-Corp-Bold text-lg antialiased">
                Horario
              </label>
              <label className="font-Foco-Corp text-lg antialiased">
                {data.horario}
              </label>
            </div>
            <div className="col-span-1 hidden md:block"></div>
            <div className="flex flex-col col-span-2 text-left">
              <label className="font-Foco-Corp-Bold text-lg antialiased">
                Observaciones
              </label>
              <label className="font-Foco-Corp text-lg antialiased">
                {data.obervaciones_comercio || "Sin observaciones"}
              </label>
            </div>
            <div className="col-span-1 hidden md:block"></div>
            <div className="col-span-1 hidden md:block"></div>
            <div className="flex flex-col col-span-2 text-left">
              <label className="font-Foco-Corp-Bold text-lg antialiased">
                Fecha de Expedición
              </label>
              <label className="font-Foco-Corp text-lg antialiased">
                {expedicion || ""}
              </label>
            </div>
            <div className="col-span-1 hidden md:block"></div>
          </div>
          <div className="flex flex-col px-6 lg:px-16 text-center mb-8 ">
            <div className="border border-gris w-full md:w-96 mx-auto "></div>
            <label className="font-Foco-Corp-Bold text-lg antialiased mt-4">
              Jefe de Mercados
            </label>
          </div>
          <div className="px-6 lg:px-16 font-Foco-Corp text-sm text-justify text-justify-last antialiased mb-8">
            <p className="mb-2">
              El presente permiso es personal e intransferible y solo puede ser
              ejercido por su titular en el lugar autorizado, en consecuencia no
              es objeto de comercio, arrendamiento, venta, donación, comodato,
              permuta, garantía, hipoteca no explotación del mismo por terceros.
            </p>
            <p>
              En facultad exclusiva del municipio por medio de la oficialía
              mayor de padrón y licencias la autorización, permisos o
              reubicación de comercio en la vía pública.
            </p>
          </div>
          <div className="flex flex-row justify-between items-center">
            <img
              className="h-14 md:h-24"
              src={logoEmpresa}
              alt="Logo de la empresa"
            />
            <img
              className="h-14 md:h-24"
              src={layuoutp}
              alt="Logo de la empresa"
            />
          </div>
        </div>
      </div>
      {/* fin */}
    </div>
  );
};

function Cedulacommerce() {
  return (
    <div>
      <TramiteImprimible />
    </div>
  );
}

export default Cedulacommerce;
