import { Input } from 'nav-frontend-skjema';
import { Fareknapp, Flatknapp, Hovedknapp } from 'nav-frontend-knapper';
import { ReactComponent as Edit } from '../../ikoner/Edit.svg';
import { ReactComponent as Delete } from '../../ikoner/Delete.svg';
import NavFrontendSpinner from 'nav-frontend-spinner';
import { Innholdstittel } from 'nav-frontend-typografi';
import React, { FormEvent, useState } from 'react';
import { feilValidering, InputValideringsError } from '../../utils/Validering';
import { erTomtObjekt } from '../../utils/Utils';
import AlertStripe from 'nav-frontend-alertstriper';

interface RedigeringsgrensesnittFormProps {
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  isEdit: boolean;
  onSubmit: () => void;
  tittel: string;
  ingress: string;
  beskrivelse: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>, input: string) => void;
  setModalOpen: (open: boolean) => void;
}

const RedigeringsgrensesnittForm = ({
  isLoading,
  isSuccess,
  isError,
  tittel,
  ingress,
  beskrivelse,
  isEdit,
  handleChange,
  onSubmit,
  setModalOpen,
}: RedigeringsgrensesnittFormProps) => {
  const [feilmelding, setFeilmelding] = useState({} as InputValideringsError);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isEdit) {
      const feilValideringsresponse: InputValideringsError = feilValidering(tittel, ingress, beskrivelse);
      setFeilmelding(feilValideringsresponse);
      if (erTomtObjekt(feilValideringsresponse)) {
        onSubmit();
      }
    } else {
      onSubmit();
    }
  };

  return (
    <form onSubmit={e => handleSubmit(e)} className="rediger-opprett-tiltakstype__form">
      <Input
        label="Tittel"
        onChange={e => handleChange(e, 'tittel')}
        value={tittel}
        feil={feilmelding.tittel}
        className="rediger-opprett-tiltakstype__form__tittel"
      />
      <Input
        label="Ingress"
        onChange={e => handleChange(e, 'ingress')}
        value={ingress}
        feil={feilmelding.ingress}
        className="rediger-opprett-tiltakstype__form__beskrivelse"
      />
      <Input
        label="Beskrivelse"
        onChange={e => handleChange(e, 'beskrivelse')}
        value={beskrivelse}
        feil={feilmelding.beskrivelse}
        className="rediger-opprett-tiltakstype__form__beskrivelse"
      />

      <div className="knapperad">
        <Hovedknapp htmlType="submit" spinner={isLoading}>
          {!isEdit ? 'Opprett tiltak' : 'Rediger tiltak'} <Edit />
        </Hovedknapp>
        {isEdit && (
          <>
            <Fareknapp spinner={isLoading} onClick={() => setModalOpen(true)} htmlType="button">
              Slett tiltak <Delete />
            </Fareknapp>
          </>
        )}
      </div>

      {isLoading && <NavFrontendSpinner />}

      {isSuccess && (
        <>
          <Innholdstittel className="topptekst__overskrift">{tittel}</Innholdstittel>
          <p>{ingress}</p>
          <p>{beskrivelse}</p>
        </>
      )}

      {isError && <AlertStripe type={'feil'}>Det har oppstått en feil</AlertStripe>}
    </form>
  );
};

export default RedigeringsgrensesnittForm;
