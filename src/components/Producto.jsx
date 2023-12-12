import { formatearDinero } from "../helpers";

export default function Producto({ producto }) {
  return (
    <div className="w-full flex flex-col justify-center p-4 shadow-md hover:border">
      <img src={`img/${producto.imagen}.jpg`} alt="" />
      <div className="flex-1 mt-4 flex items-center justify-center">
        <p className="text-lg font-bold text-center">{producto.nombre}</p>
      </div>
      <div className="mt-4">
        <p className="text-4xl font-bold text-amber-400">{formatearDinero(producto.precio)}</p>
      </div>
      <button
        type="button"
        className="mt-4 p-3 bg-amber-400 hover:bg-amber-500 cursor-pointer rounded font-bold uppercase text-white"
      >
        Agregar al carrito
      </button>
    </div>
  );
}
