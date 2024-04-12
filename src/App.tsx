import React from 'react';
import './App.css';

import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './paginas/login/Login';
import Cadastro from './paginas/cadastro/Cadastro';
import Home from './paginas/home/Home';
import { AuthProvider } from './contexts/AuthContext';
import Perfil from './components/navbar/Perfil';
import CadastrarTema from './components/navbar/CadastrarTema';
import Temas from './components/navbar/Temas';
import Postagens from './components/navbar/Postagens';


function App() {
  return (
    <>
    <AuthProvider>
        <BrowserRouter>
          <Navbar />
          <div className='min-h-[80vh]'>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/login" element={<Login />} />
              <Route path="/cadastro" element={<Cadastro />} />
              <Route path="/home" element={<Home />} />
              <Route path="/perfil" element={<Perfil />} />
              <Route path="/cadastrar_tema" element={<CadastrarTema />} />
              <Route path="/temas" element={<Temas />} />
              <Route path="/postagens" element={<Postagens />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
        </AuthProvider>
    </>
  );
}
export default App;