import React from 'react';
import './App.css';
import Home from './pages/home/Home';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ListaCategoria from './components/categoria/ListaCategoria';
import FormularioCategoria from './components/categoria/FormularioCategoria';
import DeletarCategoria from './components/categoria/DeletarCategoria';

function App() {
  return (
    <>
    <BrowserRouter>
          <Navbar />
          <div className='min-h-[90vh]'>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/categorias" element={<ListaCategoria />} />
              <Route path="/cadastroCategoria" element={<FormularioCategoria/>} />
              <Route path="/editarCategoria/:id" element={<FormularioCategoria />} />
              <Route path="/deletarCategoria/:id" element={<DeletarCategoria />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
    </>
);
}
export default App;