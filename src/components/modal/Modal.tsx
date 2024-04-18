type ModalProps = {
  showModal: boolean;
  children: React.ReactNode;
};

const Modal: React.FC<ModalProps> = ({ showModal, children }) => {
  if (!showModal) {
    return null;
  }

  return (
    <>
    
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto flex justify-center items-start pt-10">
      <div className="bg-white p-8 rounded-lg shadow-lg w-1/2 h-auto m-auto">
        {children}
      </div>
    </div>
    </>
  );
};

export default Modal;
