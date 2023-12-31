import { createRef, useState } from "react";
import { Link } from "react-router-dom";
import axiosClient from "../../utils/axios";
import Alerta from "../../components/Alerta";
import { useAuth } from "../../hooks/useAuth";

export default function Register() {
  const nameRef = createRef();
  const emailRef = createRef();
  const passwordRef = createRef();
  const passwordConfimationRef = createRef();

  const { register } = useAuth({ middleware: "guest", url: "/" });

  const [errores, setErrores] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const datos = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      password_confirmation: passwordConfimationRef.current.value,
    };
    await register(datos, setErrores);
  };

  return (
    <>
      <div className="bg-white shadow-md rounded-md px-5 py-5 w-full">
        <h1 className="font-bold text-3xl text-center mb-4">Crear cuenta</h1>
        <form onSubmit={handleSubmit} noValidate>
          {errores && (
            <div className="mb-4">
              {errores.map((error, index) => (
                <Alerta key={index}>{error}</Alerta>
              ))}
            </div>
          )}
          <div className="mb-4">
            <label htmlFor="name" className="text-slate-800">
              Nombre
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="bg-gray-50 w-full mt-2 p-3"
              ref={nameRef}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="text-slate-800">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="bg-gray-50 w-full mt-2 p-3"
              ref={emailRef}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="text-slate-800">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="bg-gray-50 w-full mt-2 p-3"
              ref={passwordRef}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password_confirmation" className="text-slate-800">
              Repetir Password
            </label>
            <input
              type="password"
              id="password_confirmation"
              name="password_confirmation"
              className="bg-gray-50 w-full mt-2 p-3"
              ref={passwordConfimationRef}
            />
          </div>
          <input
            type="submit"
            value="Registrarse"
            className="mt-2 uppercase w-full bg-indigo-700 text-white font-bold p-3 hover:bg-indigo-900 cursor-pointer"
          />
        </form>
      </div>
      <nav className="mt-5">
        <span>¿Ya tienes una cuenta? </span>
        <Link to="/auth/login" className="text-blue-800 font-bold underline">
          Inicia sesion
        </Link>
      </nav>
    </>
  );
}
