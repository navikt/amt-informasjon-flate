import React, { SyntheticEvent, useState } from 'react';
import Panel from 'nav-frontend-paneler';
import Tabs from 'nav-frontend-tabs';
import { TabProps } from 'nav-frontend-tabs/lib/tab';
import { useHistory, useParams } from 'react-router-dom';
import './Tiltaksvisning.less';
import BrukerVisningsToggle from '../toggle/BrukerVisningsToggle';
import { Innholdstittel, Undertittel } from 'nav-frontend-typografi';
import { useSelector } from 'react-redux';
import { Tilbakeknapp } from 'nav-frontend-ikonknapper';
import { useQuery } from 'react-query';
import NavFrontendSpinner from 'nav-frontend-spinner';

interface routeParams {
  id: string;
}

export interface Tiltak {
  id: String;
  tittel: String;
  ingress: String;
  beskrivelse: String;
}

const Tiltaksvisning = () => {
  const brukervisningsToggle = useSelector((state: any) => state.brukerVisningsReducer.brukerVisning);

  const { id }: routeParams = useParams();

  const { isLoading, data, error } = useQuery('tiltak' + id, () =>
    fetch(process.env.REACT_APP_BACKEND_API_ROOT + '/api/tiltak/' + id).then(res => res.json())
  );

  const faner = Array.from(data?.faner.keys());

  const tabs: TabProps[] = data?.faner.map((fane: String) => ({ label: fane }));

  const [aktivFaneBeskrivelse, setAktivFaneBeskrivelse] = useState<Array<string>>(data?.faner.get(faner[0]) || []);

  const endreInnholdsvisning = (e: SyntheticEvent<EventTarget, Event>, index: number) => {
    setAktivFaneBeskrivelse(data?.faner.get(faner[index]) || []);
  };

  data.bilde =
    'https://assets.website-files.com/5f0454ca439d52fef0fb4143/600e78d9b3db13ded972087f_shutterstock_1075806023-p-1600.jpeg';

  const history = useHistory();

  if (isLoading) {
    return <NavFrontendSpinner />;
  }

  if (error) {
    return <p>Det skjedde en feil</p>;
  }

  return (
    <>
      <div className="tiltaksvisning__grid">
        <Tilbakeknapp className="tilbakeknapp" onClick={() => history.push('/')} />

        {brukervisningsToggle && <Undertittel className="tiltaksnummer">{`Tiltaksnummer: ${data?.id}`}</Undertittel>}
        <BrukerVisningsToggle className="tiltaksvisning__brukervisningstoggle info__brukervisningstoggle" />

        <div className="generell-informasjon">
          <img src={data?.bilde} alt={'bilde av ' + data?.tittel} />

          <div className="beskrivelse">
            <Innholdstittel>{data?.tittel}</Innholdstittel>
            <p>{data?.ingress}</p>
            <p>{data?.beskrivelse}</p>
          </div>
        </div>

        <div className="fane__oversikt">
          <Tabs tabs={tabs} onChange={endreInnholdsvisning} />
        </div>
        <div className="fane__innhold">
          {aktivFaneBeskrivelse?.map((fane, index) => (
            <Panel key={index}>{fane}</Panel>
          ))}
        </div>
      </div>
    </>
  );
};

export default Tiltaksvisning;
