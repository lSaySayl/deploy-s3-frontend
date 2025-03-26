import "../../styles/Modal.css";

const Modal = ({ isOpen, onClose, searchQuery }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal">
                <h2>Resultado de Búsqueda</h2>
                <p>Buscando: <strong>{searchQuery}</strong></p>
                <button className="modal-close" onClick={onClose}>Cerrar</button>
            </div>
        </div>
    );
};

export default Modal;
