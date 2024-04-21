import { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext'
import { toastAlerta } from '../../utils/toastAlerta'
import ModalPicture from '../../components/modal/ModalPicture'
import { atualizar } from '../../services/Service';
import Usuario from '../../models/Usuario'


function Perfil() {
  let navigate = useNavigate();

  const { usuario } = useContext(AuthContext);
  const token = usuario.token

  // Estado para armazenar os valores dos campos de entrada
  const [campos, setCampos] = useState({
    nome: '',
    senha: '',
    usuario: '',
    novaSenha: '',
  });

  const dadosParaAtualizar: Usuario = {
    id: usuario.id,
    nome: campos.nome,
    usuario: campos.usuario,
    senha: campos.novaSenha, // make sure this is the updated password
    foto: usuario.foto,
  };

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
      usuario: '',
      novaSenha: '',
    });
  };

    // Função para lidar com a submissão do formulário
    const handleSubmit = async (event: any) => {
      event.preventDefault();
    
      try {
        await atualizar('/usuarios/atualizar', dadosParaAtualizar, setCampos, {
          headers: {
              'Authorization': token
          }
        });
        toastAlerta('Perfil atualizado com sucesso!', 'sucesso');
      } catch (error: any) {
        if (error.response) {
          // O servidor respondeu com um status diferente de 2xx
          const status = error.response.status;
          if (status === 400) {
            toastAlerta('Erro 400: Solicitação inválida. Por favor, verifique os dados enviados.', 'erro');
          } else if (status === 401) {
            toastAlerta('Erro 401: Não autorizado. Por favor, faça login novamente.', 'erro');
          } else if (status === 404) {
            toastAlerta('Erro 404: Recurso não encontrado. Por favor, verifique a URL da requisição.', 'erro');
          } else if (status === 500) {
            toastAlerta('Erro 500: Erro interno do servidor. Por favor, tente novamente mais tarde.', 'erro');
          } else {
            toastAlerta(`Erro ${status}: O servidor respondeu com um erro. Por favor, tente novamente mais tarde.`, 'erro');
          }
        } else {
          // Erro de rede ou erro de código no lado do cliente
          console.error('Erro ao atualizar perfil:', error);
          toastAlerta('Ocorreu um erro ao tentar atualizar o perfil. Por favor, tente novamente mais tarde.', 'erro');
        }
      }
    };

  return (
<>
<div className='min-h-[80vh]'>

<div className='w-full flex justify-center'>

<div id="smash" className='container w-80 rounded-2xl overflow-hidden mt-10' style={{ width: '1000px' }}></div>

  <div className='container mx-auto rounded-2xl overflow-hidden border-2 border-black p-5 mt-10'>
  <form onSubmit={handleSubmit}>
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
               style={{ borderWidth: '2px' }}
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
                            style={{ borderWidth: '2px' }}
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
                            value={campos.usuario}
                            onChange={(e) => setCampos({ ...campos, usuario: e.target.value })}
                            type='text'
                            name='usuario'
                            id='usuario'
                            autoComplete='given-name'
                            placeholder='usuario@email.com'
                            style={{ borderWidth: '2px' }}
                            className='border-gray-300 rounded-lg p-2 py-1.5 focus:outline-none focus:border-indigo-500 transition duration-300 hover:border-blue-300 hover:shadow-md w-72'
                          />
            </div>
          </div>
          <div className="sm:col-span-3">
            <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
              Nova Senha
            </label>
            <div className="mt-2">
            <input
                            value={campos.novaSenha}
                            onChange={(e) => setCampos({ ...campos, novaSenha: e.target.value })}
                            type='text'
                            name='nova-senha'
                            id='nova-senha'
                            autoComplete='family-name'
                            placeholder='Nova Senha'
                            style={{ borderWidth: '2px' }}
                            className='border-gray-300 rounded-lg p-2 py-1.5 focus:outline-none focus:border-indigo-500 transition duration-300 hover:border-blue-300 hover:shadow-md w-72'
                          />
            </div>
          </div>
        </div>
      </div>

      </div>
    </div>

    <div id ="smash" className='flex justify-center overflow-hidden'>
  <button
            type='button'
            className='text-sm border font-semibold leading-6 text-gray-900 rounded-md px-3 py-2 hover:bg-gray-700'
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

  </form>
  </div>

<div id="smash" className='container w-80 rounded-2xl overflow-hidden mt-10' style={{ width: '1000px' }}></div>




</div>

<div className="w-full flex justify-center pt-4">

<div id ="smash" className=' overflow-hidden'></div>

<div className="flex justify-center items-center pl-8">



  </div>



  </div>

  </div>
</>
  )
}

export default Perfil