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

interface routeParams {
  id: string;
}

const Tiltaksvisning = () => {
  const veilederToggle = useSelector((state: any) => state.brukerVisningsReducer.brukerVisning);

  const { id }: routeParams = useParams();

  const tiltak = {
    id,
    tittel: 'Truckførerkurs',
    ingress:
      'Truckførerkurset gir grunnleggende sikkerhetsopplæring for førere av truck. Opplæringen er todelt, med én teoretisk del og én praktisk del, og er delt opp i fire moduler.',
    beskrivelse:
      'Modul 1, 2 og 3 må gjennomføres av oss som opplæringsvirksomhet, mens modul 4 kan gjennomføres enten som bedriftsintern opplæring, eller gjennom Kurs og Sikkerhet. Se beskrivelse under for mer utfyllende informasjon og et priseksempel.',
    bilde:
      'https://assets.website-files.com/5f0454ca439d52fef0fb4143/600e78d9b3db13ded972087f_shutterstock_1075806023-p-1600.jpeg',
    faner: new Map<string, Array<string>>([
      [
        'Formål og innhold',
        [
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec iaculis lacus. Sed facilisis risus eu elit condimentum porttitor eu a eros. Fusce ut interdum justo.',
          'Suspendisse id est erat. Morbi non euismod diam. Pellentesque eu gravida diam. Cras ultricies ipsum maximus tempus fringilla.',
          'Pellentesque sagittis ligula nisi, et mollis neque eleifend in. Phasellus nec velit a dui convallis hendrerit et aliquam diam. Aenean ut dui sollicitudin, malesuada risus vel, feugiat nulla.',
        ],
      ],
      [
        'Opptakskrav',
        [
          'Suspendisse id est erat. Morbi non euismod diam. Pellentesque eu gravida diam. Cras ultricies ipsum maximus tempus fringilla.',
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec iaculis lacus. Sed facilisis risus eu elit condimentum porttitor eu a eros. Fusce ut interdum justo.',
          'Vivamus metus massa, vehicula ac euismod non, dapibus imperdiet sapien. Nullam id viverra neque. Fusce ut justo volutpat, consequat lacus a, elementum dolor. Aenean vel pellentesque massa. Fusce accumsan erat at blandit imperdiet. Praesent convallis nisl est, vel finibus justo commodo id.',
        ],
      ],
      [
        'Tid og sted',
        [
          'Suspendisse id est erat. Morbi non euismod diam. Pellentesque eu gravida diam. Cras ultricies ipsum maximus tempus fringilla.',
          'Vivamus metus massa, vehicula ac euismod non, dapibus imperdiet sapien. Nullam id viverra neque. Fusce ut justo volutpat, consequat lacus a, elementum dolor. Aenean vel pellentesque massa. Fusce accumsan erat at blandit imperdiet. Praesent convallis nisl est, vel finibus justo commodo id.',
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec iaculis lacus. Sed facilisis risus eu elit condimentum porttitor eu a eros. Fusce ut interdum justo.',
        ],
      ],
      [
        'Øvrig informasjon',
        [
          'Vivamus metus massa, vehicula ac euismod non, dapibus imperdiet sapien. Nullam id viverra neque. Fusce ut justo volutpat, consequat lacus a, elementum dolor. Aenean vel pellentesque massa. Fusce accumsan erat at blandit imperdiet. Praesent convallis nisl est, vel finibus justo commodo id.',
          'Suspendisse id est erat. Morbi non euismod diam. Pellentesque eu gravida diam. Cras ultricies ipsum maximus tempus fringilla.',
          'Pellentesque sagittis ligula nisi, et mollis neque eleifend in. Phasellus nec velit a dui convallis hendrerit et aliquam diam. Aenean ut dui sollicitudin, malesuada risus vel, feugiat nulla.',
        ],
      ],
    ]),
  };

  const faner = Array.from(tiltak.faner.keys());

  const tabs: TabProps[] = faner.map(fane => ({ label: fane }));

  const [aktivFaneBeskrivelse, setAktivFaneBeskrivelse] = useState<Array<string>>(tiltak.faner.get(faner[0]) || []);

  const endreInnholdsvisning = (e: SyntheticEvent<EventTarget, Event>, index: number) => {
    setAktivFaneBeskrivelse(tiltak.faner.get(faner[index]) || []);
  };

  const history = useHistory();

  return (
    <>
      <div className="tiltaksvisning__grid">
        <Tilbakeknapp className="tilbakeknapp" onClick={() => history.push('/')} />

        {veilederToggle && <Undertittel className="tiltaksnummer">{`Tiltaksnummer: ${tiltak.id}`}</Undertittel>}
        <div className="veiledervisning__toggle__container">
          <BrukerVisningsToggle />
        </div>

        <div className="generell-informasjon">
          <img src={tiltak.bilde} alt={'bilde av ' + tiltak.tittel} />

          <div className="beskrivelse">
            <Innholdstittel>{tiltak.tittel}</Innholdstittel>
            <p>{tiltak.ingress}</p>
            <p>{tiltak.beskrivelse}</p>
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
