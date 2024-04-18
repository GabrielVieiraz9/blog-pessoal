import { ChangeEvent, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Usuario from '../../models/Usuario'
import { cadastrarUsuario } from '../../services/Service'
import './Cadastro.css'
import imagemCadastro from './cadastro.png';

function Cadastro() {

  let navigate = useNavigate()

  const [confirmaSenha, setConfirmaSenha] = useState<string>("")

  const [usuario, setUsuario] = useState<Usuario>({
    id: 0,
    nome: '',
    usuario: '',
    senha: '',
    foto: ''
  })

  const [usuarioResposta, setUsuarioResposta] = useState<Usuario>({
    id: 0,
    nome: '',
    usuario: '',
    senha: '',
    foto: ''
  })

  useEffect(() => {
    if (usuarioResposta.id !== 0) {
      back()
    }
  }, [usuarioResposta])

  function back() {
    navigate('/login')
  }

  function handleConfirmarSenha(e: ChangeEvent<HTMLInputElement>) {
    setConfirmaSenha(e.target.value)
  }

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value
    })
  }

  async function cadastrarNovoUsuario(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault()

    if (confirmaSenha === usuario.senha && usuario.senha.length >= 8) {

      try {
        await cadastrarUsuario(`/usuarios/cadastrar`, usuario, setUsuarioResposta)
        alert('Usuário cadastrado com sucesso')

      } catch (error) {
        alert('Erro ao cadastrar o Usuário')
      }

    } else {
      alert('Dados inconsistentes. Verifique as informações de cadastro.')
      setUsuario({ ...usuario, senha: "" })
      setConfirmaSenha("")
    }
  }

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 h-screen place-items-center font-bold">
        <div className="fundoCadastro hidden lg:block">
          <img src={imagemCadastro} alt="Descrição da imagem" className="imagemFundo" />
        </div>
        <form style={{ width: '100%', maxWidth: '600px' }} className='flex flex-col justify-center items-center gap-6 border p-6 bg-gray-50 rounded-lg shadow-md ' onSubmit={cadastrarNovoUsuario}>
  <h2 className='text-gray-800 text-3xl font-semibold mb-4'>Cadastrar</h2>
  
  <div className="flex flex-col w-full">
    <label htmlFor="nome" className="text-gray-700">Nome<span className="text-red-500">*</span></label>
    <input
      type="text"
      id="nome"
      name="nome"
      placeholder="Nome"
      style={{ borderWidth: '3px' }} // Definindo a largura da borda manualmente
      className="border-gray-300 rounded-lg p-3 focus:outline-none focus:border-indigo-500 transition duration-300 hover:border-blue-300 hover:shadow-md w-full"
      value={usuario.nome} 
      onChange={(e) => atualizarEstado(e)}
    />
  </div>

  <div className="flex flex-col w-full">
    <label htmlFor="usuario" className="text-gray-700">Usuário<span className="text-red-500">*</span></label>
    <input
      type="text"
      id="usuario"
      name="usuario"
      placeholder="usuario@email.com"
      style={{ borderWidth: '3px' }} // Definindo a largura da borda manualmente
      className="border-gray-300 rounded-lg p-3 focus:outline-none focus:border-indigo-500 transition duration-300 hover:border-blue-300 hover:shadow-md w-full"
      value={usuario.usuario} 
      onChange={(e) => atualizarEstado(e)}
    />
  </div>

  <div className="flex flex-col w-full">
    <label htmlFor="foto" className="text-gray-700">Foto</label>
    <input
      type="text"
      id="foto"
      name="foto"
      placeholder="Foto"
      style={{ borderWidth: '3px' }} // Definindo a largura da borda manualmente
      className="border-gray-300 rounded-lg p-3 focus:outline-none focus:border-indigo-500 transition duration-300 hover:border-blue-300 hover:shadow-md w-full"
      value={usuario.foto} 
      onChange={(e) => atualizarEstado(e)}
    />
  </div>

  <div className="flex flex-col w-full">
    <label htmlFor="senha" className="text-gray-700">Senha<span className="text-red-500">*</span></label>
    <input
      type="password"
      id="senha"
      name="senha"
      placeholder="Senha"
      style={{ borderWidth: '3px' }} // Definindo a largura da borda manualmente
      className="border-gray-300 rounded-lg p-3 focus:outline-none focus:border-indigo-500 transition duration-300 hover:border-blue-300 hover:shadow-md w-full"
      value={usuario.senha} 
      onChange={(e) => atualizarEstado(e)}
    />
  </div>

  <div className="flex flex-col w-full">
    <label htmlFor="confirmarSenha" className="text-gray-700">Confirmar Senha<span className="text-red-500">*</span></label>
    <input
      type="password"
      id="confirmarSenha"
      name="confirmarSenha"
      placeholder="Confirmar Senha"
      style={{ borderWidth: '3px' }} // Definindo a largura da borda manualmente
      className="border-gray-300 rounded-lg p-3 focus:outline-none focus:border-indigo-500 transition duration-300 hover:border-blue-300 hover:shadow-md w-full"
      value={confirmaSenha}
      onChange={(e) => handleConfirmarSenha(e)}
    />
  </div>

  <div className="flex justify-around w-full gap-6 pt-6">
    <button className='rounded text-white bg-red-400 hover:bg-red-700 w-full lg:w-1/2 py-3 transition duration-300 ease-in-out' onClick={back}>
      Cancelar
    </button>
    <button className='rounded text-white bg-indigo-400 hover:bg-indigo-700 w-full lg:w-1/2 py-3 transition duration-300 ease-in-out' type='submit'>
      Cadastrar
    </button>
  </div>
</form>

      </div>
    </>
  )
}

export default Cadastro