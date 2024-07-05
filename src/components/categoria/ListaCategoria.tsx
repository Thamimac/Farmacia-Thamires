import { useEffect, useState } from 'react';
import CardCategoria from '../categoria/CardCategoria';
import Categoria from '../../models/Categoria';
import { buscar } from '../../service/Service';


function ListaCategoria() {

const [categoria, setCategoria] = useState<Categoria[]>([])


  async function buscarCategoria(){
    try {
      await buscar('/categorias', setCategoria);
    } catch (error) {
      alert('Erro')
      console.log(error);
    }
  }

  useEffect(() => {
    buscarCategoria()
  }, [categoria.length])

  return (
    <>
    
    <div className="container mx-auto my-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {categoria.map(categoria => (
              <CardCategoria key={categoria.id} categoria={categoria} />
          ))}
        </div>
      </div>
    </>
  );
}

export default ListaCategoria;