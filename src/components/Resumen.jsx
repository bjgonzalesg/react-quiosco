import { formatearDinero } from "../helpers";
import useQuiosco from "../hooks/useQuiosco";
import ResumenProducto from "./ResumenProducto";

export default function Resumen() {
  const { pedido, total } = useQuiosco();

  return (
    <div className="md:w-72 bg-white border p-5 md:h-screen md:overflow-y-scroll">
      {pedido.length !== 0 ? (
        <>
          <p className="text-xl font-bold text-center mb-5">Productos</p>
          {pedido.map((producto) => (
            <ResumenProducto key={producto.id} producto={producto} />
          ))}
          <p className="mb-2">{`Total: ${formatearDinero(total)}`}</p>
          <form className="w-full">
            <button
              type="submit"
              className="py-2 font-bold uppercase text-white bg-amber-400 hover:bg-amber-500 w-full rounded"
            >
              Guardar pedido
            </button>
          </form>
        </>
      ) : (
        <div className="md:h-full md:flex md:items-center md:justify-center">
          <p>Carrito vacio</p>
        </div>
      )}
    </div>
  );
}
