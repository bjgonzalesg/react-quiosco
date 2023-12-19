import useSWR from "swr";
import Producto from "../components/Producto";
import { productos as dataX } from "../data/productos";
import useQuiosco from "../hooks/useQuiosco";
import axiosClient from "../utils/axios";

export default function Inicio() {
  const { categoriaActual } = useQuiosco();

  // Consulta SWR
  const fetcher = () => axiosClient("/api/productos").then((data) => data.data);
  const { data, error, isLoading } = useSWR("/api/productos", fetcher);

  if (isLoading) return "cargando...";

  const productos = data.data.filter(
    (producto) => producto.categoria_id === categoriaActual.id
  );

  return (
    <main className="flex-1 px-4 md:h-screen md:overflow-y-scroll">
      <div className="text-center my-6">
        <h2 className="text-3xl font-bold uppercase">
          {" "}
          {"Categoria actual: "}
          <span className="text-amber-400">{categoriaActual.nombre}</span>
        </h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
        {productos.map((producto) => (
          <Producto key={producto.id} producto={producto} />
        ))}
      </div>
    </main>
  );
}
