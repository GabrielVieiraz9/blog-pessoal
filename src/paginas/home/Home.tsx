import { useContext } from 'react';
import homeLogo from '../../assets/home.png'
import './Home.css';
import { AuthContext } from '../../contexts/AuthContext';
import ListaPostagens from '../../components/postagens/listaPostagens/ListaPostagens';
import ModalPostagem from '../../components/postagens/modalPostagem/ModalPostagem';


function Home() {
  
  const {usuario} = useContext(AuthContext);

    return (
        <>
        <div className="bg-indigo-900 flex justify-center">
          <div className='container grid grid-cols-2 text-white'>
            <div className="flex flex-col gap-4 items-center justify-center py-4">
              <h2 className='text-5xl font-bold'>Olá, {usuario.nome}</h2>
              <p className='text-xl'>Expresse aqui seus pensamentos e opniões</p>
  
              <div className="flex justify-around gap-4">
              <ModalPostagem />
                <button className='rounded bg-white text-blue-800 py-2 px-4'>Ver postagens</button>
              </div>
            </div>
  
            <div className="flex justify-center ">
              <img src={homeLogo} alt="" className='w-2/3' />
      
              </div>
          </div>
        </div>
        <ListaPostagens />
      </>
    );
}

export default Home;