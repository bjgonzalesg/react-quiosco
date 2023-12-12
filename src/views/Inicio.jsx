import Producto from "../components/Producto";
import { productos as data } from "../data/productos";
import useQuiosco from "../hooks/useQuiosco";

export default function Inicio() {
  const { categoriaActual } = useQuiosco();
  const productos = data.filter(
    (producto) => producto.categoria_id === categoriaActual.id
  );

  return (
    <main className="flex-1 px-4 md:h-screen md:overflow-y-scroll relative">
      <div className="text-center my-6">
        <h2 className="text-3xl font-bold uppercase">
          {" "}
          {"Categoria actual: "}
          <span className="text-amber-400">{categoriaActual.nombre}</span>
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {productos.map((producto) => (
          <Producto key={producto.id} producto={producto} />
        ))}
      </div>
    </main>
  );
}
