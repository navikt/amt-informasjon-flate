import React, { useState } from 'react';
import AlertStripe from 'nav-frontend-alertstriper';
import { Input } from 'nav-frontend-skjema';
import { Knapp } from 'nav-frontend-knapper';
import { useDispatch, useSelector } from 'react-redux';
import { TiltakState } from '../../redux/slice/OpprettTiltakSlice';
import { leggTilTiltak } from '../../redux/ApiService';
import { erTomtObjekt } from '../../utils/Utils';
import { feilValidering, InputValideringsError } from '../../utils/Validering';
import './OpprettTiltak.less';
import { useMutation } from 'react-query';

const OpprettTiltak = () => {
  const dispatch = useDispatch();
  const [tittel, setTittel] = useState<String>('');
  const [beskrivelse, setBeskrivelse] = useState<String>('');
  const [feilmelding, setFeilmelding] = useState({} as InputValideringsError);
  const leggTilTiltakLoading: boolean = useSelector((state: any) => state.opprettTiltakReducer.loading);
  const leggTilTiltakError: string | null = useSelector((state: any) => state.opprettTiltakReducer.error);

  const submit = (e: Event) => {
    e.preventDefault();

    const feilValideringsresponse: InputValideringsError = feilValidering(tittel, beskrivelse);
    setFeilmelding(feilValideringsresponse);

    if (erTomtObjekt(feilValideringsresponse)) {
      dispatch(
        leggTilTiltak({
          tittel: tittel.trim(),
          beskrivelse: beskrivelse.trim(),
        } as TiltakState)
      );

      setTittel('');
      setBeskrivelse('');
    }
  };
  //trenger kanskje id for å poste?
  //   const requestOptions = {
  //       method: 'POST',
  //       headers: { 'Content-Type': 'application/json' },
  //       body: JSON.stringify({ title: 'React POST Request Example' })
  //   };

  const { isLoading, data, error } = useMutation(
    'opprettTiltak',
    () => fetch(process.env.REACT_APP_BACKEND_API_ROOT + '/api/tiltak').then(res => res.json())
    // .then(data => setpostId({ postId: data.id }))
  );

  // useQuery(
  // 'opprettTiltak',
  // () => postMessage(process.env.REACT_APP_BACKEND_API_ROOT + '/api/tiltak').then(res => res.json())
  // fetch(process.env.REACT_APP_BACKEND_API_ROOT + '/api/tiltak').then(res => res.json())
  // );

  return (
    <form onSubmit={(e: any) => submit(e)}>
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
      <Knapp htmlType="submit" spinner={leggTilTiltakLoading} disabled={leggTilTiltakLoading}>
        Legg til tiltak
      </Knapp>
      <br />
      {leggTilTiltakError && (
        <AlertStripe type="feil" className="tiltak__alert-stripe__wrapper">
          {leggTilTiltakError}
        </AlertStripe>
      )}
    </form>
  );
};

export default OpprettTiltak;
