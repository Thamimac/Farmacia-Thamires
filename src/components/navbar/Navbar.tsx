import React from 'react'
import {Link} from 'react-router-dom'




function Navbar() {

    return (
     <div className='w-full bg-red-600 text-white flex justify-center py-4'>
          <div className="container flex justify-between text-lg">
          <Link to='/home' className='text-2xl font-bold uppercase'>Farmácia Thamires :D</Link>

            <div className='flex gap-4'>
            <Link to='/' className='hover:underline'>Home</Link>
            <Link to='/categorias' className='hover:underline'>Categorias</Link>
            <Link to='/produtos' className='hover:underline'>Produtos</Link>
            <Link to='/cadastroCategoria'className='hover:underline'>Cadastrar Categoria</Link>

            </div>
          </div>
        </div>
  )
}


export default Navbar