import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import * as React from "react";
import Login from "./views/Login";
import DashBoard_Executive from "./views/executiveViews/DashBoard_Executive";
import DashBoard_Admin from "./views/adminViews/DashBoard_Admin"
import { authMiddleware } from "./middleware/ProtectedMiddleware";

export default function App() {

  const [user, setUser] = React.useState('');

  const validateUser = (userData) => {
    setUser(userData);
  };
  
  const protectedRoute = (component, allowedRoles = []) => {
    if (user) {
      console.log(user)
      return authMiddleware(user, allowedRoles) && component
    } else {
      console.log(user)
      return <Navigate to="/" />
    }

    // return user ? (() =>{
    //   authMiddleware(user, allowedRoles) && component
    //   console.log(user)
    // } ) : (() => {
    //   <Navigate to="/" />
    //   console.log(user)
    // })
  };

  //el commit fixme LoginController client

  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login onLogin={validateUser}/>}/>
          <Route path="/DashBoard_E" element={protectedRoute(<DashBoard_Executive />, ['false'])} />
          <Route path="/DashBoard_A" element={protectedRoute(<DashBoard_Admin />, ['true'])} />
          
        </Routes>
    </BrowserRouter>
  );
}