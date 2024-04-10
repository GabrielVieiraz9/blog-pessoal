import React from 'react';
import './Home.css';

function Home() {
    return (
        <>
            <div className="w-full h-screen bg-white flex flex-col justify-start items-center mb-auto" style={{paddingTop: '70px'}}>

            <div className="flex flex-col gap-4 items-center justify-center py-4">
                        <h2 className='text-5xl font-bold'>Seja bem vindo!</h2>
                        <p className='text-xl'>Expresse aqui seus pensamentos e opiniões</p>
                        <div className="flex justify-around gap-4">
                        <button className='rounded bg-black text-white py-3 px-3 text-lg font-bold'>Ver postagens</button>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        {/* Conteúdo do outro lado, se houver */}
                    </div>
                </div>

        </>
    );
}

export default Home;