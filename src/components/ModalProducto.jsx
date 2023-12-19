import { useEffect, useState } from "react";
import { formatearDinero } from "../helpers";
import useQuiosco from "../hooks/useQuiosco";

export default function ModalProducto() {
  const { producto, handleClickModal, handleAgregarPedido, pedido } =
    useQuiosco();
  const [cantidad, setCantidad] = useState(1);
  const [edicion, setEdicion] = useState(false);

  const maxProducts = producto.max;
  const minProducts = 1;

  const aumentarCantidad = () => {
    if (cantidad >= maxProducts) return;
    else setCantidad(cantidad + 1);
  };

  const disminuirCantidad = () => {
    if (cantidad <= minProducts) return;
    else setCantidad(cantidad - 1);
  };

  useEffect(() => {
    // COMPRUEBA QUE EXISTA AL MENOS UNA VEZ
    if (pedido.some((pedidoState) => pedidoState.id === producto.id)) {
      // CAPTURA EL PRODUCTO QUE SE ESTA EDITANDO DENTRO DE PEDIDO
      const productoEditando = pedido.filter(
        (pedidoState) => pedidoState.id === producto.id
      )[0];
      setCantidad(productoEditando.cantidad);
      setEdicion(true);
    }
  }, [pedido]);

  return (
    <div className="md:flex gap-10">
      <div className="md:w-1/3">
        <img
          src={`/img/${producto.imagen}.jpg`}
          alt={`${producto.nombre}_product_image`}
        />
      </div>
      <div className="md:w-2/3 relative">
        <button className="right-0 absolute" onClick={() => handleClickModal()}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <div className="h-full flex justify-center flex-col">
          <div>
            <h1 className="text-3xl font-bold mb-5">{producto.nombre}</h1>
            <p className="font-black text-5xl text-amber-500 mb-5">
              {formatearDinero(producto.precio)}
            </p>
            <div className="flex gap-4">
              <button type="button" onClick={() => aumentarCantidad()}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
              </button>
              <p>{cantidad}</p>
              <button type="button" onClick={() => disminuirCantidad()}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 12h-15"
                  />
                </svg>
              </button>
            </div>
            <button
              type="button"
              className="px-5 py-2 mt-5 font-bold uppercase rounded text-white bg-amber-400 hover:bg-amber-500 "
              onClick={() => {
                handleAgregarPedido({ ...producto, cantidad });
                handleClickModal();
              }}
            >
              {edicion ? "Guardar cambios" : "Añadir al pedido"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
