import React, { FormEvent, useState } from 'react';
import AlertStripe from 'nav-frontend-alertstriper';
import { Input } from 'nav-frontend-skjema';
import { Knapp } from 'nav-frontend-knapper';
import { feilValidering, InputValideringsError } from '../../utils/Validering';
import './OpprettTiltak.less';
import { useMutation, useQueryClient } from 'react-query';
import NavFrontendSpinner from 'nav-frontend-spinner';
import { erTomtObjekt } from '../../utils/Utils';

const postTiltak = (tittel: String, beskrivelse: String) => {
  return fetch(process.env.REACT_APP_BACKEND_API_ROOT + '/api/tiltak', {
    method: 'POST',
    body: JSON.stringify({
      tittel,
      beskrivelse,
    }),
  }).then(res => {
    res.json();
  });
};

const OpprettTiltak = () => {
  const [tittel, setTittel] = useState<String>('');
  const [beskrivelse, setBeskrivelse] = useState<String>('');
  const [feilmelding, setFeilmelding] = useState({} as InputValideringsError);

  const queryClient = useQueryClient();

  const mutation = useMutation('tiltak', () => postTiltak(tittel, beskrivelse), {
    onSuccess: () => {
      queryClient.invalidateQueries('tiltak');
    },
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const feilValideringsresponse: InputValideringsError = feilValidering(tittel, beskrivelse);
    setFeilmelding(feilValideringsresponse);

    if (erTomtObjekt(feilValideringsresponse)) {
      mutation.mutate({ tittel, beskrivelse } as any);
    }

    setTittel('');
    setBeskrivelse('');
  };

  return (
    <form onSubmit={e => handleSubmit(e)}>
      <Input
        label="tittel"
        onChange={e => setTittel(e.target.value)}
        value={tittel.valueOf()}
        feil={feilmelding.tittel}
      />
      <br />
      <Input
        label="beskrivelse"
        onChange={e => setBeskrivelse(e.target.value)}
        value={beskrivelse.valueOf()}
        feil={feilmelding.beskrivelse}
      />
      <br />
      <Knapp htmlType="submit" spinner={mutation.isLoading}>
        Legg til tiltak
      </Knapp>
      <br />

      {mutation.isLoading && <NavFrontendSpinner />}

      {mutation.isSuccess && <AlertStripe type="suksess">Tiltak opprettet</AlertStripe>}

      {mutation.isError && (
        <AlertStripe type="feil" className="tiltak__alert-stripe__wrapper">
          Kunne ikke opprette tiltak. Det har oppstått en feil.
        </AlertStripe>
      )}
    </form>
  );
};

export default OpprettTiltak;
