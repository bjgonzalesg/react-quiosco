import { formatearDinero } from "../helpers";
import useQuiosco from "../hooks/useQuiosco";

export default function Producto({ producto }) {
  const { id, nombre, precio, imagen } = producto;
  const { handleClickModal, handleSetProducto } = useQuiosco();

  const handleClickProducto = () => {
    handleClickModal();
    handleSetProducto(producto);
  };

  return (
    <div className="w-full flex flex-col justify-center p-4 shadow-md hover:border">
      <img
        src={`img/${imagen}.jpg`}
        alt={`${imagen}_product_image`}
        loading="lazy"
      />
      <div className="flex-1 mt-4 flex items-center justify-center">
        <p className="text-lg font-bold text-center">{nombre}</p>
      </div>
      <div className="mt-4">
        <p className="text-4xl font-bold text-amber-400">
          {formatearDinero(precio)}
        </p>
      </div>
      <button
        type="button"
        className="px-5 py-2 mt-5 font-bold uppercase text-white bg-amber-400 hover:bg-amber-500"
        onClick={handleClickProducto}
      >
        Añadir producto
      </button>
    </div>
  );
}
