import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { showInfoAlert, showErrorAlert } from "../components/SwAlerts";
import { useNavigate } from "react-router-dom";

export default function Login() {
  useEffect(() => {
    // Enfoque inicial en el campo de usuario cuando se renderiza el componente
    usernameRef.current.focus();
  }, []);

  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const onChangeUsername = (event) => {
    setUsername(event.target.value);
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();

      if (e.target === usernameRef.current) {
        passwordRef.current.focus();
      } else if (e.target === passwordRef.current) {
        // Aquí puedes realizar la acción de inicio de sesión
        handleLogin();
      }
    }
  };

  const handleLogin = () => {
    let data = { username, password };
    if ([username, password].includes("")) {
      showInfoAlert("Algo anda mal", "Por favor ingrese usuario y contraseña");
    } else {
      axios
        .post("http://localhost:4000/login", data)
        .then((response) => {
          const admin = true;
          let isCorrect = 200;
          console.log(response.status)

          if (response.status === isCorrect) {
            const user = response.data.user;
            if (user.tipo_usuario === admin) {
              navigate("/DashBoard_A", { state: { data: user } });
            } else {
              navigate("/DashBoard_E", { state: { data: user } });
            }

            console.log(200);
          } else {
            setPassword("");
            passwordRef.current.focus();
            showErrorAlert(
              "Algo anda mal",
              "El usuario y/o contraseña son incorrectos, inténtelo de nuevo"
            );
            console.log(204, "Missing data");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  //la api retorna codigo 200 y data de usuario que el usuario si existe y no retorna data si el usuario no existe codigo 204

  return (
    <>
      <div className="flex w-44 h-12 md:w-full md:h-min  top-0 bg-white">
        <img
          className="w-96 h-78"
          src={require("../assets/images/logoEmpresa.jpg")}
          alt="Logo de la empresa"
        />
      </div>

      <div className="flex w-auto left-0 top-119">
        <img
          className=""
          src={require("../assets/images/banner.jpg")}
          alt="Logo de la empresa"
        />
      </div>

      <div className="relative min-h flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-20 w-20 mt drop-shadow-lg"
            src={require("../assets/images/tlj-logox.png")}
            alt="My Company"
          />
          <h2 className="mt-5 text-center text-2xl font-Foco-Corp-Bold leading-9 tracking-tight text-gray-500">
            Inicia Sesión
          </h2>
        </div>

        <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
          <div>
            <div className="mt-5">
              <input
                id="username"
                name="username"
                type="text"
                autoComplete="username"
                placeholder="Usuario"
                value={username}
                onChange={onChangeUsername}
                required
                className="block mx-auto w-60 p-4 rounded-md font-Foco-Corp border-1 py-2 text-gris  placeholder:text-gris placeholder:text-opacity-70 shadow-sm ring-2 ring-inset ring-gris focus:ring-2 focus:drop-shadow-lg focus:ring-gris focus:ring-opacity-75 focus:outline-none sm:text-sm sm:leading-6"
                ref={usernameRef}
                onKeyDown={handleKeyDown}
              />
            </div>
          </div>

          <div>
            <div className="mt-5">
              <input
                id="password"
                name="password"
                type="password"
                placeholder="Contraseña"
                autoComplete="current-password"
                value={password}
                onChange={onChangePassword}
                required
                className="block mx-auto w-60 p-4 rounded-md font-Foco-Corp border-1 py-2 text-gris placeholder:text-gris placeholder:text-opacity-70 shadow-sm ring-2 ring-inset ring-gris focus:drop-shadow-lg focus:ring-2 focus:ring-gris focus:ring-opacity-75 focus:outline-none sm:text-sm sm:leading-6"
                ref={passwordRef}
                onKeyDown={handleKeyDown}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              onClick={handleLogin}
              className="mt-5 flex mx-auto w-60 justify-center rounded-md bg-naranja px-3 py-1.5 text-sm font-Foco-Corp-Bold leading-6 text-white shadow-sm hover:bg-naranja hover:opacity-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-naranja"
            >
              Iniciar
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
