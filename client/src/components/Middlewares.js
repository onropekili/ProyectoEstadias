import { useEffect } from "react";
import { Navigate } from "react-router-dom";

const admin = true;
const executive = false;

export const ExecutiveProtectedRoute = ({children}) => {
  const userString = localStorage.getItem("tipo_usuario");
  const userBoolean = userString ? JSON.parse(userString) : null;
  if (userBoolean !== false) {
    return <Navigate to={"/"} />;
  } else  {
    return children;
  }
};

export const LogOut = ({ setuserData, children }) => {
  useEffect(() => {
    localStorage.clear()
  }, [setuserData]);
  return children;
};

export const AdminProtectedRoute = ({children}) => {
  const userString = localStorage.getItem("tipo_usuario");
  const userBoolean = userString ? JSON.parse(userString) : null;
  if (userBoolean !== true) {
    return <Navigate to={"/"} />;
  } else  {
    return children;
  }
};
