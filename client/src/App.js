import { BrowserRouter, Routes, Route } from "react-router-dom";
import * as React from "react";
import Login from "./views/Login";
import DashBoard_Executive from "./views/executiveViews/DashBoard_Executive";
import DashBoard_Admin from "./views/adminViews/DashBoard_Admin";
import NewComercianteView from "./views/executiveViews/NewComercianteView";
import NewComercianteEventView from "./views/executiveViews/NewComercianteEventView";
import NewComercioView from "./views/executiveViews/NewCommerce";
import NewComercioEventView from "./views/executiveViews/NewCommerceEvent";
import OrdenPago from "./views/executiveViews/OrdenPago";
import TerceraEdad from "./views/PDFViews/TerceraEdad";
import OrdenPagoPDF from "./views/PDFViews/OrdenPagoPDF";
import IncomeView from "./views/adminViews/IncomeView";
import { LogOut, ExecutiveProtectedRoute, AdminProtectedRoute } from "./components/Middlewares";
import { useState } from "react";
import DataComerciante from "./views/executiveViews/DataComerciante";
import Cedulacommerce from "./views/PDFViews/CedulaCommerce";
import BajaCommerce from "./views/PDFViews/BajaCommerce";
export default function App() {
  
  const [userData, setuserData] = useState(null);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <LogOut setuserData={setuserData}>
              <Login userData={userData} setUserData={setuserData} />
            </LogOut>
          }
        />

        <Route
          path="/DashBoard_E"
          element={
            <ExecutiveProtectedRoute user={userData}>
              <DashBoard_Executive />
            </ExecutiveProtectedRoute>
          }
        />
        <Route path="/DashBoard_A" element={
          <AdminProtectedRoute>
        <DashBoard_Admin/>
        </AdminProtectedRoute>} />
        <Route
          path="/Registrar-comerciante"
          element={
            <ExecutiveProtectedRoute >
              <NewComercianteView currentView={'NuevoComerciante'}/>
            </ExecutiveProtectedRoute>
          }
        />
        <Route
          path="/Registrar-comerciante-evento"
          element={
            <ExecutiveProtectedRoute >
              <NewComercianteView currentView={'NuevoComercianteEventual'}/>
            </ExecutiveProtectedRoute>
          }
        />
        <Route
          path="/Registrar-comercio"
          element={
            <ExecutiveProtectedRoute>
              <NewComercioView currentView={'NuevoComerciante'}/>
            </ExecutiveProtectedRoute>
          }
        />
        <Route
          path="/Registrar-comercio-evento"
          element={
            <ExecutiveProtectedRoute >
              <NewComercioView currentView={'NuevoComercianteEventual'}/>
            </ExecutiveProtectedRoute>
          }
        />
        <Route
          path="/Orden-de-Pago"
          element={
             <ExecutiveProtectedRoute >
              <OrdenPago />
             </ExecutiveProtectedRoute>
          }
        />
        <Route
          path="/TerceraEdad/:id_comerciante"
          element={
             <ExecutiveProtectedRoute >
              <TerceraEdad />
             </ExecutiveProtectedRoute>
          }
        />
        <Route
          path="/OrdenPagoPDF"
          element={
             <ExecutiveProtectedRoute >
              <OrdenPagoPDF />
             </ExecutiveProtectedRoute>
          }
        />
        <Route
          path="/Datos-Comerciante-Comercio/:folio"
          element={
             <ExecutiveProtectedRoute >
              <DataComerciante />
             </ExecutiveProtectedRoute>
          }
        />
        <Route
          path="/Cedula-de-comercio/:folio"
          element={
             <ExecutiveProtectedRoute >
              <Cedulacommerce/>
             </ExecutiveProtectedRoute>
          }
        />
        <Route
          path="/Formato-baja-comercio/:folio"
          element={
             <ExecutiveProtectedRoute >
              <BajaCommerce/>
             </ExecutiveProtectedRoute>
          }
        />
        <Route
          path="/Ingresos-Totales"
          element={
            // <ExecutiveProtectedRoute user={userData}>
              <IncomeView/>
            // </ExecutiveProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
