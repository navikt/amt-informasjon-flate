import { Input } from 'nav-frontend-skjema';
import { Fareknapp, Flatknapp, Hovedknapp } from 'nav-frontend-knapper';
import { ReactComponent as Edit } from '../../ikoner/Edit.svg';
import { ReactComponent as Delete } from '../../ikoner/Delete.svg';
import Lenke from 'nav-frontend-lenker';
import NavFrontendSpinner from 'nav-frontend-spinner';
import { Innholdstittel } from 'nav-frontend-typografi';
import React, { FormEvent, useState } from 'react';
import { feilValidering, InputValideringsError } from '../../utils/Validering';
import { erTomtObjekt, opprettTiltakstype, redigerTiltakstype } from '../../utils/Utils';
import { postTiltakstype, putTiltakstype } from './Crud';
import { useMutation, useQueryClient } from 'react-query';

interface RedigeringsgrensesnittFormProps {
  isLoading: any;
  isSuccess: any;
  id: string;
  tittel: string;
  ingress: string;
  beskrivelse: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>, input: string) => void;
  setModalOpen: (open: boolean) => void;
}

const RedigeringsgrensesnittForm = ({
  isLoading,
  isSuccess,
  id,
  tittel,
  ingress,
  beskrivelse,
  handleChange,
  setModalOpen,
}: RedigeringsgrensesnittFormProps) => {
  const [feilmelding, setFeilmelding] = useState({} as InputValideringsError);
  const queryClient = useQueryClient();

  const mutation = useMutation('tiltakstype', () => postTiltakstype(tittel, ingress, beskrivelse), {
    onSuccess: () => {
      queryClient.invalidateQueries('tiltakstyper');
    },
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (opprettTiltakstype) {
      const feilValideringsresponse: InputValideringsError = feilValidering(tittel, ingress, beskrivelse);
      setFeilmelding(feilValideringsresponse);
      if (erTomtObjekt(feilValideringsresponse)) {
        mutation.mutate({ tittel, ingress, beskrivelse } as any);
      }
    } else if (redigerTiltakstype) {
      putTiltakstype(tittel, ingress, beskrivelse, id);
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
          {opprettTiltakstype ? 'Opprett tiltak' : 'Rediger tiltak'} <Edit />
        </Hovedknapp>

        {redigerTiltakstype && (
          <>
            <Fareknapp spinner={isLoading} onClick={() => setModalOpen(true)} htmlType="button">
              Slett tiltak <Delete />
            </Fareknapp>
          </>
        )}

        <Lenke href={'../'}>
          <Flatknapp className="" htmlType="button">
            Avbryt
          </Flatknapp>
        </Lenke>
      </div>

      {isLoading && <NavFrontendSpinner />}

      {isSuccess && (
        <>
          <Innholdstittel className="topptekst__overskrift">{tittel}</Innholdstittel>
          <p>{ingress}</p>
          <p>{beskrivelse}</p>
        </>
      )}
    </form>
  );
};

export default RedigeringsgrensesnittForm;
