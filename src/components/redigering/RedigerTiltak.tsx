import React, { FormEvent, useState } from 'react';
import AlertStripe from 'nav-frontend-alertstriper';
import { Input } from 'nav-frontend-skjema';
import { Knapp } from 'nav-frontend-knapper';
import { feilValidering, InputValideringsError } from '../../utils/Validering';
import './RedigerTiltak.less';
import { useMutation, useQueryClient } from 'react-query';
import NavFrontendSpinner from 'nav-frontend-spinner';
import { erTomtObjekt } from '../../utils/Utils';

const postTiltak = (tittel: String, beskrivelse: String, ingress: String) => {
  return fetch(process.env.REACT_APP_BACKEND_API_ROOT + '/api/tiltakstyper', {
    method: 'POST',
    body: JSON.stringify({
      tittel,
      beskrivelse,
      ingress,
    }),
  }).then(res => {
    res.json();
  });
};

const RedigerTiltak = () => {
  const [tittel, setTittel] = useState<String>('');
  const [beskrivelse, setBeskrivelse] = useState<String>('');
  const [ingress, setIngress] = useState<String>('');
  const [feilmelding, setFeilmelding] = useState({} as InputValideringsError);

  const queryClient = useQueryClient();

  const mutation = useMutation('tiltakstyper', () => postTiltak(tittel, beskrivelse, ingress), {
    onSuccess: () => {
      queryClient.invalidateQueries('tiltakstyper');
    },
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const feilValideringsresponse: InputValideringsError = feilValidering(tittel, beskrivelse, ingress);
    setFeilmelding(feilValideringsresponse);

    if (erTomtObjekt(feilValideringsresponse)) {
      mutation.mutate({ tittel, beskrivelse } as any);
    }

    setTittel('');
    setBeskrivelse('');
    setIngress('')
  };

  return (
    <form onSubmit={e => handleSubmit(e)}>
      <Input
        label="tittel"
        onChange={e => setTittel(e.target.value)}
        value={tittel.valueOf()}
        feil={feilmelding.tittel}
      />

      <Input
        label="beskrivelse"
        onChange={e => setBeskrivelse(e.target.value)}
        value={beskrivelse.valueOf()}
        feil={feilmelding.beskrivelse}
      />
      <Input
        label="ingress"
        onChange={e => setIngress(e.target.value)}
        value={ingress.valueOf()}
        feil={feilmelding.ingress}
      />



      <Knapp htmlType="submit" spinner={mutation.isLoading}>
        Legg til tiltak
      </Knapp>

      {mutation.isLoading && <NavFrontendSpinner />}

      {mutation.isSuccess && <AlertStripe type="suksess">Tiltak redigert</AlertStripe>}

      {mutation.isError && (
        <AlertStripe type="feil" className="tiltak__alert-stripe__wrapper">
          Kunne ikke redigere tiltak. Det har oppstått en feil.
        </AlertStripe>
      )}
    </form>
  );
};

export default RedigerTiltak;
