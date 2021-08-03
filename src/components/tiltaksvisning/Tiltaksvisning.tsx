import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './Tiltaksvisning.less';

const Tiltaksvisning = () => {
  const id: number = useParams();

  //use id to fetch data
  const tiltak = {
    id: id,
    tittel: 'Truckførerkurs',
    ingress:
      'Truckførerkurset gir grunnleggende sikkerhetsopplæring for førere av truck. Opplæringen er todelt, med én teoretisk del og én praktisk del, og er delt opp i fire moduler.',
    beskrivelse:
      'Modul 1, 2 og 3 må gjennomføres av oss som opplæringsvirksomhet, mens modul 4 kan gjennomføres enten som bedriftsintern opplæring, eller gjennom Kurs og Sikkerhet. Se beskrivelse under for mer utfyllende informasjon og et priseksempel.',
    bilde:
      'https://assets.website-files.com/5f0454ca439d52fef0fb4143/600e78d9b3db13ded972087f_shutterstock_1075806023-p-1600.jpeg',
  };

  return (
    <>
      <Link to="/">Tilbake</Link>
      <div className="intro">
        <div className="midten">
          <img src={tiltak.bilde} alt={'bilde av ' + tiltak.tittel} />

          <div className="beskrivelse">
            <h1>{tiltak.tittel}</h1>
            <p>{tiltak.ingress}</p>
            <p>{tiltak.beskrivelse}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tiltaksvisning;
