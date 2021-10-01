import { Input } from 'nav-frontend-skjema';
import { Fareknapp, Flatknapp, Hovedknapp } from 'nav-frontend-knapper';
import { ReactComponent as Edit } from '../../ikoner/Edit.svg';
import { ReactComponent as Delete } from '../../ikoner/Delete.svg';
import { Link, useHistory } from 'react-router-dom';
import NavFrontendSpinner from 'nav-frontend-spinner';
import { Innholdstittel } from 'nav-frontend-typografi';
import React, { FormEvent, useState } from 'react';
import { feilValidering, InputValideringsError } from '../../utils/Validering';
import { erTomtObjekt, opprettTiltakstype, redigerTiltakstype } from '../../utils/Utils';
import { putTiltakstype } from './Crud';
import { useMutation, useQueryClient } from 'react-query';
import AlertStripe from 'nav-frontend-alertstriper';
import { QueryKeys } from '../../core/api/QueryKeys';
import TiltakstypeService from '../../core/api/TiltakstypeService';

interface RedigeringsgrensesnittFormProps {
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
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
  isError,
  id,
  tittel,
  ingress,
  beskrivelse,
  handleChange,
  setModalOpen,
}: RedigeringsgrensesnittFormProps) => {
  const [feilmelding, setFeilmelding] = useState({} as InputValideringsError);
  const queryClient = useQueryClient();
  const history = useHistory();

  const mutation = useMutation(
    QueryKeys.Tiltakstyper,
    () => TiltakstypeService.postTiltakstype({ tittel: tittel, beskrivelse: beskrivelse, ingress: ingress }),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(QueryKeys.Tiltakstyper);
        history.replace('/');
      },
    }
  );

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

        <Link to="/">
          <Flatknapp htmlType="button">Avbryt</Flatknapp>
        </Link>
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
