import { AuthContext } from '../../contexts/AuthContext.tsx'
import React, { useContext } from 'react';


function Temas() {
    
    const {usuario} = useContext(AuthContext);

    return (
        <>
            <div className="h-96 mb-96">

                <h1 className='text-xl'>Temas</h1>

            </div>
        </>
    );
}

export default Temas;