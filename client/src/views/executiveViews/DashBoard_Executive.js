import React, { useEffect } from 'react';
import { AuthMiddleware } from '../../middleware/ProtectedMiddleware';
import { useLocation, useNavigate } from 'react-router-dom';

function DashBoard_Ejecutivo() {
  const location = useLocation();
  const user = location.state && location.state.data;
  const navigate = useNavigate();

  useEffect(() => {
    AuthMiddleware(user, navigate);
  }, [user, navigate]);


  return (
    <div>hola ejecutivirijillo</div>
  )
}

export default DashBoard_Ejecutivo