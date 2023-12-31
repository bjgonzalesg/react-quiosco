import Categoria from "./Categoria";
import useQuiosco from "../hooks/useQuiosco";
import { useAuth } from "../hooks/useAuth";

export default function Sidebard() {
  const { categorias } = useQuiosco();
  const { logout, user } = useAuth({ middleware: "auth" });
  return (
    <aside className="md:w-72 border border-r-2 relative">
      <div className="p-4 flex justify-center">
        <img src="/img/logo.svg" alt="logo_image" className="w-40" />
      </div>
      <p className="my-5 text-center text-xl">
        Hola <span className="font-bold">{user?.name}!</span>
      </p>
      <div>
        {categorias.map((categoria) => (
          <Categoria key={categoria.id} categoria={categoria} />
        ))}
      </div>
      <div className="p-3">
        <button
          onClick={logout}
          type="button"
          className="bg-red-500 w-full mt-10 p-3 text-white font-bold hover:bg-red-800"
        >
          Cancelar pedido
        </button>
      </div>
    </aside>
  );
}
