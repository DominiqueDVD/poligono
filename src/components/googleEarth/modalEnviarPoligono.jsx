import React, { useState } from 'react';

function PoligonoInfoModal() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className={`modal ${showModal ? 'show' : ''}`} id="poligonoInfoModal" tabIndex="-1" aria-labelledby="poligonoInfoModal" aria-hidden={!showModal}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">Ingresar información</h5>
            <button type="button" className="btn-close" onClick={closeModal} aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <form>
              <div className="mb-3">
                <label htmlFor="project-name" className="col-form-label">Nombre del proyecto:</label>
                <input type="text" className="form-control" id="project-name" required />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="col-form-label">E-mail:</label>
                <input type="text" className="form-control" id="email" required />
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={closeModal} data-bs-dismiss="modal">Cancelar</button>
            <button type="button" id="btnEnviarPoligono" className="btn btn-primary" onClick={closeModal}>Enviar polígono</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PoligonoInfoModal;
