import useSWR from "swr";
import Producto from "../components/Producto";
import useQuiosco from "../hooks/useQuiosco";
import axiosClient from "../utils/axios";
import { ClipLoader } from "react-spinners";
import { toast } from "react-toastify";
import { useState } from "react";

const override = {
  display: "block",
  margin: "auto auto",
  borderColor: "#FBBF24",
};

export default function Inicio() {
  const { categoriaActual } = useQuiosco();

  // Consulta SWR
  const fetcher = () => axiosClient("/api/productos").then((data) => data.data);
  const { data, error, isLoading } = useSWR("/api/productos", fetcher, {
    refreshInterval: 1000,
  });

  if (error) {
    return <p className="flex-1">Error pes imbecil</p>;
  }

  if (isLoading)
    return (
      <ClipLoader
        cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    );

  const productos = data.data.filter(
    (producto) => producto.categoria_id === categoriaActual.id
  );

  return (
    <main className="flex-1 px-4 md:h-screen md:overflow-y-scroll">
      <div className="text-center my-6">
        <h2 className="text-3xl font-bold uppercase">
          Categoria actual:
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
