import { Link } from "react-router-dom";
import { createRef, useState } from "react";
import Alerta from "../../components/Alerta";
import { useAuth } from "../../hooks/useAuth";

export default function Login() {
  const emailRef = createRef();
  const passwordRef = createRef();

  const [errores, setErrores] = useState([]);
  const { login } = useAuth({
    middleware: "guest",
    url: "/",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const datos = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };
    login(datos, setErrores);
  };

  return (
    <>
      <div className="bg-white shadow-md rounded-md px-5 py-5">
        <h1 className="font-bold text-3xl text-center mb-4">Iniciar Sesion</h1>
        <form onSubmit={handleSubmit} noValidate>
          {errores && (
            <div className="mb-4">
              {errores.map((error, index) => (
                <Alerta key={index}>{error}</Alerta>
              ))}
            </div>
          )}
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
          <input
            type="submit"
            value="Iniciar sesion"
            className="mt-2 uppercase w-full bg-indigo-700 text-white font-bold p-3 hover:bg-indigo-900 cursor-pointer"
          />
        </form>
      </div>
      <nav className="mt-5">
        <span>¿No tienes una cuenta? </span>
        <Link to="/auth/register" className="text-blue-800 font-bold underline">
          Registrate
        </Link>
      </nav>
    </>
  );
}
