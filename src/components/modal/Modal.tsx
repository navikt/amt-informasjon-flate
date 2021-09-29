import NavFrontendModal from 'nav-frontend-modal';
import { Fareknapp, Flatknapp } from 'nav-frontend-knapper';
import React from 'react';
import './Modal.less';
import { ReactComponent as Delete } from '../../ikoner/Delete.svg';
import { Innholdstittel } from 'nav-frontend-typografi';

interface SlettModalProps {
  tittel: string;
  modalOpen: boolean;
  onRequestClose: () => void;
  handleDelete: () => void;
}

const Modal = ({ modalOpen, onRequestClose, handleDelete, tittel }: SlettModalProps) => {
  return (
    <NavFrontendModal
      contentLabel={tittel}
      isOpen={modalOpen}
      onRequestClose={onRequestClose}
      ariaHideApp={false}
      className="rediger-tiltakstype__slett-modal"
    >
      <Innholdstittel className="modal-info-tekst__overskrift">{tittel}</Innholdstittel>
      <div className="rediger-tiltakstype__slett-modal__tekst">Er du sikker på at du vil slette tiltakstypen?</div>
      <div className="rediger-tiltakstype__slett-modal__knapperad">
        <Fareknapp onClick={handleDelete}>
          Slett <Delete />
        </Fareknapp>
        <Flatknapp onClick={onRequestClose}>Avbryt</Flatknapp>
      </div>
    </NavFrontendModal>
  );
};

export default Modal;
