import React from 'react';
import Panel from 'nav-frontend-paneler';
import Tabs from 'nav-frontend-tabs';
import { TabProps } from 'nav-frontend-tabs/lib/tab';
import { Link, useParams } from 'react-router-dom';
import './Tiltaksvisning.less';

const Tiltaksvisning = () => {
  const id: number = useParams();

  const tiltak = {
    id: id,
    tittel: 'Truckførerkurs',
    ingress:
      'Truckførerkurset gir grunnleggende sikkerhetsopplæring for førere av truck. Opplæringen er todelt, med én teoretisk del og én praktisk del, og er delt opp i fire moduler.',
    beskrivelse:
      'Modul 1, 2 og 3 må gjennomføres av oss som opplæringsvirksomhet, mens modul 4 kan gjennomføres enten som bedriftsintern opplæring, eller gjennom Kurs og Sikkerhet. Se beskrivelse under for mer utfyllende informasjon og et priseksempel.',
    bilde:
      'https://assets.website-files.com/5f0454ca439d52fef0fb4143/600e78d9b3db13ded972087f_shutterstock_1075806023-p-1600.jpeg',
    faner: new Map<string, Array<string>>([
      ['Formål og innhold', ['blablabla', 'Blabla blabla', 'Blablablabla bla']],
      ['Opptakskrav', ['blablabla', 'Blabla blabla', 'Blablablabla bla']],
      ['Tid og sted', ['blablabla', 'Blabla blabla', 'Blablablabla bla']],
      ['Øvrig informasjon', ['blablabla', 'Blabla blabla', 'Blablablabla bla']],
    ]),
  };

  const tabs: TabProps[] | { label: string }[] | undefined = [];
  Array.from(tiltak.faner.keys()).forEach(fane => tabs.push({ label: fane }));

  const endreInnholdsvisning = () => {};

  return (
    <>
      <Link to="/">Tilbake</Link>
      <div className="tiltaksvisning_grid">
        <div className="midten">
          <img src={tiltak.bilde} alt={'bilde av ' + tiltak.tittel} />

          <div className="beskrivelse">
            <h1>{tiltak.tittel}</h1>
            <p>{tiltak.ingress}</p>
            <p>{tiltak.beskrivelse}</p>
          </div>
        </div>

        <div className="fane_oversikt">
          <Tabs tabs={tabs} onChange={endreInnholdsvisning} />
        </div>
        <div className="fane_innhold">
          {/*
          
          <Panel border style={{ borderTop: 0, borderTopLeftRadius: 0, borderTopRightRadius: 0 }}>
            Innhold her.
          </Panel>
          */}

          <Panel>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras scelerisque nisl ac bibendum sagittis. Proin
            egestas in lorem et efficitur. Suspendisse in facilisis eros, faucibus fermentum magna. Praesent ante erat,
            sollicitudin porta finibus ut, volutpat id magna. Suspendisse malesuada volutpat nibh eu vestibulum.
            Maecenas mollis mauris id justo imperdiet fringilla. In interdum congue molestie. Pellentesque id tortor
            faucibus, viverra sapien at, tristique risus. Integer consectetur auctor sem nec pulvinar. Phasellus
            convallis risus risus, non hendrerit tellus ultrices nec. Vivamus sollicitudin viverra tellus, ut iaculis
            justo vestibulum ut. Mauris facilisis magna ac arcu efficitur consectetur. Aliquam a velit finibus sem
            aliquet mollis vel porta ipsum. Pellentesque a aliquam lorem.
          </Panel>

          <Panel>
            Curabitur aliquam felis a lectus placerat finibus. Fusce id mi quam. Praesent efficitur fringilla arcu, eget
            euismod arcu tempor in. Maecenas ornare ligula sit amet ex aliquet cursus. Phasellus imperdiet risus
            vulputate mi pulvinar tempor. Maecenas in libero porttitor, sodales arcu et, lacinia mi. Nulla turpis justo,
            blandit eu nibh eu, commodo feugiat purus. Donec nec nisi nisl. Quisque sapien dolor, egestas ut diam
            malesuada, viverra semper erat. Sed pellentesque purus sem, aliquet molestie ligula sagittis quis. Duis
            egestas, augue sit amet ornare ornare, sapien leo cursus tellus, ut feugiat risus augue non erat. Proin eu
            tortor magna. Mauris maximus quis neque vitae efficitur. Proin consectetur vitae nulla non rhoncus. Sed diam
            lectus, dignissim eget eros id, viverra hendrerit lacus. Quisque elementum ornare ante, sed pellentesque
            orci faucibus eget.
          </Panel>
        </div>
      </div>
    </>
  );
};

export default Tiltaksvisning;
