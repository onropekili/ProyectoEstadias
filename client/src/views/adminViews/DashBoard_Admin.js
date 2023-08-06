import React, { useEffect } from 'react';
import { AuthMiddleware } from '../../middleware/ProtectedMiddleware';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from "../../components/Header";

function DashBoard_Admin() {
  const location = useLocation();
  const user = location.state && location.state.data;
  const navigate = useNavigate();

  useEffect(() => {
    AuthMiddleware(user, navigate);
  }, [user, navigate]);

  return (
    <>
    <Header/>
    </>
  );
}

export default DashBoard_Admin;