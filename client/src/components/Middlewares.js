import { useEffect } from "react";
import { Navigate } from "react-router-dom";

const admin = true;
const executive = false;

/**
 * @param {JSX.Element} children
 * @returns {JSX.Element}
 * @description Este componente renderiza un componente hijo si el usuario es un ejecutivo, de lo contrario
 * lo redirige a la página de inicio
 */
export const ExecutiveProtectedRoute = ({children}) => {
  const userString = localStorage.getItem("tipo_usuario");
  const userBoolean = userString ? JSON.parse(userString) : null;
  if (userBoolean !== executive) {
    return <Navigate to={"/"} />;
  } else  {
    return children;
  }
};

/**
 * @param {JSX.Element} children
 * @returns {JSX.Element}
 * @description Este componente renderiza un componente hijo despues de limpiar el localStorage
 */
export const LogOut = ({ children }) => {
  useEffect(() => {
    localStorage.clear()
  }, []);
  return children;
};

/**
 *
 * @param {JSX.Element} children
 * @returns {JSX.Element}
 * @description Este componente renderiza un componente hijo si el usuario es un administrador, de lo contrario
 * lo redirige a la página de inicio
 */
export const AdminProtectedRoute = ({children}) => {
  const userString = localStorage.getItem("tipo_usuario");
  const userBoolean = userString ? JSON.parse(userString) : null;
  if (userBoolean !== admin) {
    return <Navigate to={"/"} />;
  } else  {
    return children;
  }
};
