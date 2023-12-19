import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import axiosClient from "../utils/axios";

const QuioscoContext = createContext();

const QuioscoProvider = ({ children }) => {
  // CATEGORIAS
  const [categorias, setCategorias] = useState([]);
  const [categoriaActual, setCategoriaActual] = useState({});
  const handleClickCategoria = (id) => {
    const categoria = categorias.filter((categoria) => categoria.id === id)[0];
    setCategoriaActual(categoria);
  };

  // MODALES
  const [modal, setModal] = useState(false);
  const handleClickModal = () => {
    setModal(!modal);
  };

  // PRODUCTOS
  const [producto, setProducto] = useState({});
  const handleSetProducto = (producto) => {
    setProducto(producto);
  };

  // PEDIDO
  const [pedido, setPedido] = useState([]);
  const [total, setTotal] = useState(0);
  const handleAgregarPedido = ({ categoria_id, max, ...producto }) => {
    // COMPROBAMOS SI EL PRODUCTO EXISTE AL MENOS UNA VEZ
    if (pedido.some((pedidoState) => pedidoState.id === producto.id)) {
      // CAPTURA EL PRODUCTO QUE SE ESTA EDITANDO DENTRO DE PEDIDO
      const pedidoActualizado = pedido.map((pedidoState) =>
        pedidoState.id === producto.id ? producto : pedidoState
      );
      setPedido(pedidoActualizado);
      toast.success("Pedido actualizado");
    } else {
      setPedido([...pedido, producto]);
      toast.success("Agregado al pedido");
    }
  };

  const handleEditarCantidad = (id) => {
    const productoActualizar = pedido.filter(
      (producto) => producto.id === id
    )[0];
    setProducto(productoActualizar);
    setModal(!modal);
  };

  const handleEliminarProducto = (id) => {
    const nuevoPedido = pedido.filter((producto) => producto.id !== id);
    setPedido(nuevoPedido);
    toast.success("Producto eliminado");
  };

  // AXIOS
  const obtenerCategorias = async () => {
    try {
      const { data } = await axiosClient.get("/api/categorias");
      setCategorias(data.data);
      setCategoriaActual(data.data[0]);
    } catch (error) {}
  };

  useEffect(() => {
    obtenerCategorias();
  }, []);

  useEffect(() => {
    const nuevoTotal = pedido.reduce(
      (total, producto) => producto.precio * producto.cantidad + total,
      0
    );
    setTotal(nuevoTotal);
  }, [pedido]);

  return (
    <QuioscoContext.Provider
      value={{
        categorias,
        categoriaActual,
        modal,
        producto,
        pedido,
        total,
        handleClickCategoria,
        handleClickModal,
        handleSetProducto,
        handleAgregarPedido,
        handleEditarCantidad,
        handleEliminarProducto,
      }}
    >
      {children}
    </QuioscoContext.Provider>
  );
};

export default QuioscoContext;
export { QuioscoProvider };
