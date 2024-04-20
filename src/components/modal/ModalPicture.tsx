

import 'reactjs-popup/dist/index.css';
import Popup from 'reactjs-popup';

import ProfileModify from '../../paginas/perfil/ProfileModify';

function ModalPicture() {
  return (
    <>
      <Popup 
      trigger={            <button
        type="button"
        className="rounded-md bg-white w-32 h-10 px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
      >
          
        Alterar
      </button>} modal>
        <div>
          <ProfileModify />
        </div>
      </Popup>
    </>
  );
}

export default ModalPicture;