import React, { FormEvent, useEffect, useState } from 'react';
import { Input } from 'nav-frontend-skjema';
import { Fareknapp, Flatknapp, Hovedknapp } from 'nav-frontend-knapper';
import { feilValidering, InputValideringsError } from '../../utils/Validering';
import './RedigerTiltak.less';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { erTomtObjekt, inneholderUrl } from '../../utils/Utils';
import { Innholdstittel, Undertittel } from 'nav-frontend-typografi';
import Lenke from 'nav-frontend-lenker';
import { useHistory, useParams } from 'react-router-dom';
import { ReactComponent as Edit } from '../../ikoner/Edit.svg';
import { ReactComponent as Delete } from '../../ikoner/Delete.svg';
import { Tilbakeknapp } from 'nav-frontend-ikonknapper';
import { putTiltakstype, postTiltakstype, deleteTiltakstype } from './Crud';
import NavFrontendSpinner from 'nav-frontend-spinner';

interface routeParams {
  id: string;
}

const OpprettOgRedigerTiltak = () => {
  const redigerTiltakstype = inneholderUrl('rediger-tiltakstype');
  const opprettTiltakstype = inneholderUrl('opprett-tiltakstype');

  const queryClient = useQueryClient();
  const { id }: routeParams = useParams();
  const history = useHistory();

  const { isLoading, data, isSuccess } = useQuery('tiltakstyper' + id, () =>
    fetch(process.env.REACT_APP_BACKEND_API_ROOT + '/api/tiltakstyper/' + id).then(res => res.json())
  );

  const [tittel, setTittel] = useState<string>('');
  const [ingress, setIngress] = useState<string>('');
  const [beskrivelse, setBeskrivelse] = useState<string>('');

  const [feilmelding, setFeilmelding] = useState({} as InputValideringsError);

  const mutation = useMutation('tiltakstype', () => postTiltakstype(tittel, ingress, beskrivelse), {
    onSuccess: () => {
      queryClient.invalidateQueries('tiltakstyper');
    },
  });

  useEffect(() => {
    if (redigerTiltakstype) {
      setTittel(data?.tittel);
      setIngress(data?.ingress);
      setBeskrivelse(data?.beskrivelse);
    }
  }, [redigerTiltakstype, data]);

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
    <>
      <Tilbakeknapp
        className="rediger-opprett-tiltakstype__tilbakeknapp"
        onClick={() => history.push(opprettTiltakstype ? '/' : '/tiltakstype/' + id)}
      />
      <div className="rediger-opprett-tiltakstype">
        <div className="rediger-opprett-tiltakstype__overskrift">
          <Innholdstittel>{opprettTiltakstype ? 'Opprett tiltakstype' : 'Rediger tiltakstype'}</Innholdstittel>
          {redigerTiltakstype && <Undertittel>Tiltaksnummer: {data?.id}</Undertittel>}
        </div>

        <form onSubmit={e => handleSubmit(e)} className="rediger-opprett-tiltakstype__form">
          <Input
            label="Tittel"
            onChange={e => setTittel(e.target.value)}
            // value={opprettTiltakstype ? tittel.valueOf() : data?.tittel + tittel.valueOf()}
            value={tittel}
            feil={feilmelding.tittel}
            className="rediger-opprett-tiltakstype__form__tittel"
          />
          <Input
            label="Ingress"
            onChange={e => setIngress(e.target.value)}
            // value={opprettTiltakstype ? ingress.valueOf() : data?.ingress + ingress.valueOf()}
            value={ingress}
            feil={feilmelding.ingress}
            className="rediger-opprett-tiltakstype__form__beskrivelse"
          />
          <Input
            label="Beskrivelse"
            onChange={e => setBeskrivelse(e.target.value)}
            // value={opprettTiltakstype ? beskrivelse.valueOf() : data?.beskrivelse + beskrivelse.valueOf()}
            value={beskrivelse}
            feil={feilmelding.beskrivelse}
            className="rediger-opprett-tiltakstype__form__beskrivelse"
          />

          <div className="knapperad">
            <Hovedknapp htmlType="submit" spinner={isLoading}>
              {opprettTiltakstype ? 'Opprett tiltak' : 'Rediger tiltak'} <Edit />
            </Hovedknapp>

            {redigerTiltakstype && (
              <Fareknapp
                spinner={isLoading}
                onClick={() => deleteTiltakstype(tittel, ingress, beskrivelse, id)}
                htmlType="button"
              >
                Slett tiltak <Delete />
              </Fareknapp>
            )}

            <Lenke href={'../'}>
              <Flatknapp htmlType="button">Avbryt</Flatknapp>
            </Lenke>
          </div>

          {/*tiltaksvisning, skal fjernes */}

          {isLoading && <NavFrontendSpinner />}
          {isSuccess && (
            <>
              <Innholdstittel className="topptekst__overskrift">{tittel}</Innholdstittel>
              <p>{ingress}</p>
              <p>{beskrivelse}</p>
            </>
          )}
        </form>
      </div>
    </>
  );
};

export default OpprettOgRedigerTiltak;
