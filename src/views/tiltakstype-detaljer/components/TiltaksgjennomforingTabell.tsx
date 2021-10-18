import React from 'react';
import { Row } from 'react-bootstrap';
import { Tiltaksgjennomforing } from '../../../core/domain/Tiltaksgjennomforing';

interface TiltaksgjennomforingTabellProps {
  tiltaksgjennomforinger?: Tiltaksgjennomforing[];
}

function TiltaksgjennomforingsTabell(props: TiltaksgjennomforingTabellProps) {
  const { tiltaksgjennomforinger } = props;

  return (
    <>
      <Row></Row>
      <Row>
        <table className="tabell tabell--stripet">
          <thead>
            <tr>
              <td>Tittel</td>
              <td>Tiltaksnummer</td>
              <td>Til dato</td>
              <td>Fra dato</td>
            </tr>
          </thead>
          <tbody>
            {tiltaksgjennomforinger?.map(t => {
              return (
                <tr key={t.id}>
                  <td>{t.tittel}</td>
                  <td>{t.tiltaksnummer}</td>
                  <td>{t.tilDato}</td>
                  <td>{t.fraDato}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Row>
    </>
  );
}

export default TiltaksgjennomforingsTabell;
