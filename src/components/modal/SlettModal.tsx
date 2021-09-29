import NavFrontendModal from 'nav-frontend-modal';
import { Fareknapp, Flatknapp } from 'nav-frontend-knapper';
import React from 'react';
import './Modal.less';
import { ReactComponent as Delete } from '../../ikoner/Delete.svg';

interface SlettModalProps {
  modalOpen: boolean;
  onRequestClose: () => void;
  handleDelete: () => void;
}

const SlettModal = ({ modalOpen, onRequestClose, handleDelete }: SlettModalProps) => {
  return (
    <NavFrontendModal
      contentLabel="Slett tiltakstype"
      isOpen={modalOpen}
      onRequestClose={onRequestClose}
      ariaHideApp={false}
    >
      <div className="rediger-tiltakstype__slett-modal">
        <div className="rediger-tiltakstype__slett-modal__tekst">Er du sikker på at du vil slette tiltakstypen?</div>
        <div className="rediger-tiltakstype__slett-modal__knapperad">
          <Fareknapp onClick={handleDelete}>
            Slett <Delete />
          </Fareknapp>
          <Flatknapp onClick={onRequestClose}>Avbryt</Flatknapp>
        </div>
      </div>
    </NavFrontendModal>
  );
};

export default SlettModal;
