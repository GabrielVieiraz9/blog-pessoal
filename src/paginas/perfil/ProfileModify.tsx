import { ChangeEvent, useState } from 'react';

function ProfileModify() {

  const [linkFoto, setLinkFoto] = useState<string>('');

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setLinkFoto(e.target.value);
  }

  function submitForm() {
    const valorInput = linkFoto; // Armazenando o valor do input na variável valorInput
    console.log('Link da foto:', valorInput);
    // Aqui você pode fazer o que desejar com o valor armazenado em valorInput
  }

  return (
    <div className="container flex flex-col mx-auto items-center">
      <h1 className="text-4xl text-center my-8">Alterar foto de perfil</h1>

      <form onSubmit={submitForm} className="flex flex-col w-1/2 gap-4">
        <div className="flex flex-col gap-2 mt-6">
          <label htmlFor="titulo">Link da foto</label>
          <input
            value={linkFoto}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            type="text"
            placeholder="Link da foto: .png, .jpg, .jpeg e etc..."
            name="titulo"
            required
            style={{ borderWidth: '3px' }} // Definindo a largura da borda manualmente
            className="border-gray-300 rounded-lg p-3 focus:outline-none focus:border-indigo-500 transition duration-300 hover:border-blue-300 hover:shadow-md w-full"
          />
        </div>

        <div className="mt-5">
          <button type="button" onClick={submitForm} className="rounded bg-indigo-400 hover:bg-indigo-800 text-white font-bold w-1/2 mx-auto block py-2">
            Alterar
          </button>
        </div>
      </form>
    </div>
  );
}

export default ProfileModify;