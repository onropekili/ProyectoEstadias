import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import * as React from "react";
import Login from "./views/Login";
import DashBoard_Executive from "./views/executiveViews/DashBoard_Executive";
import DashBoard_Admin from "./views/adminViews/DashBoard_Admin";
import NewComercianteView from "./views/executiveViews/NewComercianteView";
import NewComercianteEventView from "./views/executiveViews/NewComercianteEventView";
import NewComercioView from "./views/executiveViews/NewCommerce";
import NewComercioEventView from "./views/executiveViews/NewCommerceEvent";
import { InfoComponent } from "./components/InfoComponent";
import { LogOut, ExecutiveProtectedRoute } from "./components/Middlewares";
import { useState } from "react";
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
        <Route path="/DashBoard_A" element={<DashBoard_Admin />} />
        <Route
          path="/Registrar-comerciante"
          element={
            <ExecutiveProtectedRoute>
              <NewComercianteView />
            </ExecutiveProtectedRoute>
          }
        />
        <Route
          path="/Registrar-comerciante-evento"
          element={
            <ExecutiveProtectedRoute>
              <NewComercianteEventView />
            </ExecutiveProtectedRoute>
          }
        />
        <Route
          path="/Registrar-comercio"
          element={
            <ExecutiveProtectedRoute>
              <NewComercioView />
            </ExecutiveProtectedRoute>
          }
        />
        <Route
          path="/Registrar-comercio-evento"
          element={
            <ExecutiveProtectedRoute>
              <NewComercioEventView />
            </ExecutiveProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
