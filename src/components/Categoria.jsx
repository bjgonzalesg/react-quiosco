import useQuiosco from "../hooks/useQuiosco";

export default function Categoria({ categoria }) {
  const { id, nombre, icono } = categoria;
  const { handleClickCategoria, categoriaActual } = useQuiosco();

  const resaltarCategoriaActual = () =>
    categoriaActual.id === id ? "bg-amber-400" : "bg-white";

  return (
    <button
      className={`${resaltarCategoriaActual()} flex items-center gap-4 w-full p-3 hover:bg-amber-400 cursor-pointer duration-75`}
      onClick={() => handleClickCategoria(id)}
    >
      <img
        src={`/img/icono_${icono}.svg`}
        alt={`${icono}_image`}
        className="w-12"
      />
      <p className="text-lg truncate">{nombre}</p>
    </button>
  );
}
