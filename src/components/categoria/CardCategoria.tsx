import { Link } from "react-router-dom";
import Categoria from "../../models/Categoria";


interface CardCategoriaProps {
categoria: Categoria
}

function CardCategoria({categoria}: CardCategoriaProps) {
  return (
    <div className="border-2 border-black rounded-xl overflow-hidden">
      <h3 className="text-xl font-bold bg-red-600 text-white px-2 py-1">Categoria</h3>
      <p className="px-2 py-1">{categoria.descricao}</p>
      <p className="px-2 py-1">ID dessa categoria: {categoria.id}</p>
      <div className="flex">
        <Link to={`/editarCategoria/${categoria.id}`} className="py-2 font-bold text-white uppercase bg-indigo-400 hover:bg-indigo-800 w-full text-center">
          editar
        </Link>
        <Link to={`/deletarCategoria/${categoria.id}`} className="py-2 font-bold text-white uppercase bg-red-400 hover:bg-red-800 w-full text-center">
          deletar
        </Link>
      </div>
    </div>
  );
}

export default CardCategoria;