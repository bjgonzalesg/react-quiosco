import { Link } from "react-router-dom";

export default function Register() {
  return (
    <>
      <div className="bg-white shadow-md rounded-md px-5 py-5">
        <h1 className="font-bold text-3xl text-center mb-4">Crear cuenta</h1>
        <form action="">
          <div className="mb-4">
            <label htmlFor="name" className="text-slate-800">
              Nombre
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="bg-gray-50 w-full mt-2 p-3"
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
