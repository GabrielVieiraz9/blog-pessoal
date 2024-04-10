
import React from 'react';
import './App.css';
import Home from './paginas/home/Home';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './paginas/login/Login';
import Postagens from './components/navbar/Postagens';
import Temas from './components/navbar/Temas';
import CadastrarTema from './components/navbar/CadastrarTema';
import Perfil from './components/navbar/Perfil';
import Sair from './components/navbar/Sair';

function App() {
  return (
    <>
    <BrowserRouter>
        <Navbar />
          <div className='min-h-[80vh]'>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/home" element={<Home />} />
              <Route path="/postagens" element={<Postagens />} />
              <Route path="/temas" element={<Temas />} />
              <Route path="/cadastrar_tema" element={<CadastrarTema />} />
              <Route path="/perfil" element={<Perfil />} />
              <Route path="/sair" element={<Sair />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
    </>
);
}
export default App;
