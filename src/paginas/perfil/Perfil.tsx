import { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext'
import { toastAlerta } from '../../utils/toastAlerta'
import ModalPicture from '../../components/modal/ModalPicture'


function Perfil() {
  let navigate = useNavigate();

  const { usuario } = useContext(AuthContext);

  // Estado para armazenar os valores dos campos de entrada
  const [campos, setCampos] = useState({
    nome: '',
    senha: '',
    usuarioInput: '',
    confirmarSenha: '',
  });

  useEffect(() => {
    if (usuario.token === '') {
      toastAlerta('Dados inconsistentes. Verifique as informações de cadastro.', 'erro');
      navigate('/login');
    }
  }, [usuario.token]);

  // Função para limpar os campos
  const limparCampos = () => {
    setCampos({
      nome: '',
      senha: '',
      usuarioInput: '',
      confirmarSenha: '',
    });
  };

  return (
<>
<div className='min-h-[80vh]'>

<div className='w-full flex justify-center'>

<div id="smash" className='container w-80 rounded-2xl overflow-hidden mt-10' style={{ width: '1200px' }}></div>

  <div className='container mx-auto rounded-2xl overflow-hidden border-2 border-black p-5 mt-10'>
  <form className="">
  <div className="space-y-12 flex justify-center h-20">
  
        <p className="text-sm leading-6 text-gray-600">
        <h2 className="text-base font-semibold leading-7 text-gray-900">Perfil</h2>
        <span className="text-red-500">Essas informações serão exibidas publicamente, então tome cuidado com o que você compartilha!</span>
        </p>
  </div>
    
  <div className="flex justify-center space-x-12">

    
    
    <div className="p-5">
    <img
  src={usuario.foto}
  alt={`Foto de perfil de ${usuario.nome}`}
  className='rounded-full w-36 h-36 mx-auto border-8 border-black mb-4 object-cover'
/>
            <ModalPicture/>
    </div>

<div id ="separator" className='flex justify-center'>
      <div className="p-5">
        <div className="mt-3 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-3 pb-9">
            <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
              Nome
            </label>
            <div className="mt-2">
              <input
               value={campos.nome}
               onChange={(e) => setCampos({ ...campos, nome: e.target.value })}
               type='text'
               name='nome'
               id='nome'
               autoComplete='given-name'
               placeholder='Nome'
               style={{ borderWidth: '3px' }}
               className='border-gray-300 rounded-lg p-2 py-1.5 focus:outline-none focus:border-indigo-500 transition duration-300 hover:border-blue-300 hover:shadow-md w-72'
              />
            </div>
          </div>
          <div className="sm:col-span-3">
            <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
              Senha
            </label>
            <div className="mt-2">
            <input
                            value={campos.senha}
                            onChange={(e) => setCampos({ ...campos, senha: e.target.value })}
                            type='text'
                            name='senha'
                            id='senha'
                            autoComplete='family-name'
                            placeholder='Senha'
                            style={{ borderWidth: '3px' }}
                            className='border-gray-300 rounded-lg p-2 py-1.5 focus:outline-none focus:border-indigo-500 transition duration-300 hover:border-blue-300 hover:shadow-md w-72'
                          />
</div>
          </div>
        </div>
      </div>

      <div className="p-5">
        <div className="mt-3 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-3 pb-9">
            <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
            Usuário
            </label>
            <div className="mt-2">
            <input
                            value={campos.usuarioInput}
                            onChange={(e) => setCampos({ ...campos, usuarioInput: e.target.value })}
                            type='text'
                            name='usuario'
                            id='usuario'
                            autoComplete='given-name'
                            placeholder='usuario@email.com'
                            style={{ borderWidth: '3px' }}
                            className='border-gray-300 rounded-lg p-2 py-1.5 focus:outline-none focus:border-indigo-500 transition duration-300 hover:border-blue-300 hover:shadow-md w-72'
                          />
            </div>
          </div>
          <div className="sm:col-span-3">
            <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
              Confirmar Senha
            </label>
            <div className="mt-2">
            <input
                            value={campos.confirmarSenha}
                            onChange={(e) => setCampos({ ...campos, confirmarSenha: e.target.value })}
                            type='text'
                            name='confirmar-senha'
                            id='confirmar-senha'
                            autoComplete='family-name'
                            placeholder='Confirmar Senha'
                            style={{ borderWidth: '3px' }}
                            className='border-gray-300 rounded-lg p-2 py-1.5 focus:outline-none focus:border-indigo-500 transition duration-300 hover:border-blue-300 hover:shadow-md w-72'
                          />
            </div>
          </div>
        </div>
      </div>

      </div>
    </div>

  </form>
  </div>

<div id="smash" className='container w-80 rounded-2xl overflow-hidden mt-10' style={{ width: '1200px' }}></div>




</div>

<div className="w-full flex justify-center pt-4">

<div id ="smash" className=' overflow-hidden'></div>

<div className="flex justify-center items-center pl-8">



  </div>

  <div id ="smash" className='flex justify-center overflow-hidden'>
  <button
            type='button'
            className='text-sm font-semibold leading-6 text-gray-900 rounded-md px-3 py-2'
            onClick={limparCampos} // Chama a função para limpar os campos ao clicar no botão "Cancelar"
          >
            Cancelar
          </button>
  <button
    type="submit"
    className="ml-4 rounded-md bg-indigo-600 px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
  >
    Salvar
  </button>

  </div>

  </div>

  </div>
</>
  )
}

export default Perfil