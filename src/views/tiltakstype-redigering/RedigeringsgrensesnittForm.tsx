import { Input } from 'nav-frontend-skjema';
import { Fareknapp, Hovedknapp } from 'nav-frontend-knapper';
import { ReactComponent as Edit } from '../../ikoner/Edit.svg';
import { ReactComponent as Delete } from '../../ikoner/Delete.svg';
import NavFrontendSpinner from 'nav-frontend-spinner';
import React, { FormEvent, useState } from 'react';
import { feilValidering, InputValideringsError } from '../../utils/Validering';
import { erTomtObjekt } from '../../utils/Utils';
import AlertStripe from 'nav-frontend-alertstriper';
import { Stack, Row } from 'react-bootstrap';

interface RedigeringsgrensesnittFormProps {
  isLoading: boolean;
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
    const feilValideringsresponse: InputValideringsError = feilValidering(tittel, ingress, beskrivelse);
    setFeilmelding(feilValideringsresponse);
    if (erTomtObjekt(feilValideringsresponse)) {
      onSubmit();
    }
  };

  return (
    <form onSubmit={e => handleSubmit(e)} className="rediger-opprett-tiltakstype__form" data-testid='form__rediger-opprett'>
      <Input
        label="Tittel"
        onChange={e => handleChange(e, 'tittel')}
        value={tittel}
        feil={feilmelding.tittel}
        className="rediger-opprett-tiltakstype__form__tittel"
        data-testid="input_tittel"
      />
      <Input
        label="Ingress"
        onChange={e => handleChange(e, 'ingress')}
        value={ingress}
        feil={feilmelding.ingress}
        className="rediger-opprett-tiltakstype__form__ingress"
        data-testid="input_ingress"
      />
      <Input
        label="Beskrivelse"
        onChange={e => handleChange(e, 'beskrivelse')}
        value={beskrivelse}
        feil={feilmelding.beskrivelse}
        className="rediger-opprett-tiltakstype__form__beskrivelse"
        data-testid="input_beskrivelse"
      />
      <Row className="rediger-opprett-tiltakstype__form knapperad">
        <Stack direction="horizontal" gap={2}>
          <Hovedknapp
            htmlType="submit"
            data-testid={isEdit ? 'submit-knapp_rediger-tiltakstype' : 'submit-knapp_opprett-tiltakstype'}
          >
            {isEdit ? 'Rediger tiltakstype' : 'Opprett tiltakstype'} <Edit />
          </Hovedknapp>
          {isEdit && (
            <Fareknapp
              spinner={isLoading}
              onClick={() => setModalOpen(true)}
              htmlType="button"
              data-testid="slett-knapp_rediger-tiltakstype"
            >
              Slett tiltakstype <Delete />
            </Fareknapp>
          )}
        </Stack>
      </Row>
      {isLoading && <NavFrontendSpinner />}
      {isError && <AlertStripe type={'feil'}>Det har oppstått en feil</AlertStripe>}
    </form>
  );
};

export default RedigeringsgrensesnittForm;
