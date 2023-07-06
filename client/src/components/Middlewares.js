import { useEffect } from "react";
import { Navigate } from "react-router-dom";

const admin = true;
const executive = false;

export const ExecutiveProtectedRoute = ({ user, children }) => {
  if (!user) {
    return <Navigate to={"/"} />;
  }
  if (user.tipo_usuario === executive) {
    return children;
  }
};

export const LogOut = ({ setuserData, children }) => {
  useEffect(() => {
    setuserData(null);
  }, [setuserData]);
  return children;
};
