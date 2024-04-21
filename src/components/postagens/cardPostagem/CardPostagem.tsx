import { Link } from 'react-router-dom'
import Postagem from '../../../models/Postagem'
import Avatar from '../../avatar/Avatar'
import { useContext } from 'react'
import { AuthContext } from '../../../contexts/AuthContext'

interface CardPostagemProps {
  post: Postagem
}

function CardPostagem({post}: CardPostagemProps) {

    const { usuario } = useContext(AuthContext)

  return (
    <div className='border-slate-300 border flex flex-col overflow-hidden justify-between rounded-md bg-gray-300' id="card" style={{ borderColor: 'black'}}>
      <div>
      <div className="rounded-md flex w-full border-1 bg-indigo-50 p-1 pl-5 items-center gap-2" id="card" style={{ borderColor: 'indigo', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

<Avatar foto={post.usuario?.foto} bordercolour="black" />

          <h3 className='text-base font-bold text-center uppercase'>{post.usuario?.nome}</h3>

          <div className='border bg-white rounded-md'>
          <p className='p-1 text-indigo-600 text-xl font-bold border rounded-md' style={{ borderColor: 'black'}}>Tema: {post.tema?.descricao}</p>
          </div>
        </div>
        <div className='p-4 '>
        <h4 className=' text-2xl font-semibold uppercase border-1 rounded-md mx-auto p-1' id="card" style={{ width: '400px' }}>{post.titulo}</h4>
        
        Texto:
        <div className=''>
          <p className='border rounded-md bg-white mx-auto p-1' id="card" style={{ borderColor: 'black', width: '400px' }}>{post.texto}</p>
        </div>
          <p className='pt-2' id="card">Data: {new Intl.DateTimeFormat(undefined, {
                    dateStyle: 'full',
                    timeStyle: 'medium',
                  }).format(new Date(post.data))}</p>
        </div>
      </div>
      <div className="flex">

      {(post.usuario?.id === usuario.id || usuario.id === 1) && (
     
      <Link to={`/editarPostagem/${post.id}`} className='text-white bg-indigo-600 hover:bg-indigo-400 w-full flex items-center justify-center py-2 rounded-md rounded-r-none rounded-b-none' id="card">
          <button>Editar</button>
        </Link>

)}

        {(post.usuario?.id === usuario.id || usuario.id === 1) && (
          

  <Link to={`/deletarPostagem/${post.id}`} className='text-white bg-red-500 hover:bg-red-700 w-full flex items-center justify-center rounded-md rounded-l-none rounded-b-none' id="card">
    <button>Deletar</button>
  </Link>

)}

      </div>
    </div>

    
  )
}

export default CardPostagem