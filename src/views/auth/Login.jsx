import { Link } from "react-router-dom";

export default function Login() {
  return (
    <>
      <div className="bg-white shadow-md rounded-md px-5 py-5">
        <h1 className="font-bold text-3xl text-center mb-4">Iniciar Sesion</h1>
        <form action="">
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
          <input
            type="submit"
            value="Iniciar sesion"
            className="mt-2 uppercase w-full bg-indigo-700 text-white font-bold p-3 hover:bg-indigo-900 cursor-pointer"
          />
        </form>
      </div>
      <nav className="mt-5">
        <span>¿No tienes una cuenta? </span>
        <Link
          to="/auth/register"
          className="text-blue-800 font-bold underline"
        >
          Registrate
        </Link>
      </nav>
    </>
  );
}
