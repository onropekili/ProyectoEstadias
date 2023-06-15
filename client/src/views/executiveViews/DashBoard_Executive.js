import React, { useEffect } from 'react';
import { AuthMiddleware } from '../../middleware/ProtectedMiddleware';
import { useLocation, useNavigate } from 'react-router-dom';
import { InfoComponent } from '../../components/InfoComponent';
import {format} from 'date-fns'

function DashBoard_Ejecutivo() {
  const location = useLocation();
  const user = location.state && location.state.data;
  const navigate = useNavigate();

  useEffect(() => {
    AuthMiddleware(user, navigate);
  }, [user, navigate]);


  return (
    <InfoComponent folio={1} nombre={"Brau el menso"} giroActivo={"tacos"} observaciones={false} fecha_termino={"12/12/2022"} tercera_edad={true} />
  )
}

export default DashBoard_Ejecutivo