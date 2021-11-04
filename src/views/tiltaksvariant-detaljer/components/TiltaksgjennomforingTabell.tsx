import React from 'react';
import { Row } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import Link from '../../../components/link/Link';
import { Tiltaksgjennomforing } from '../../../core/domain/Tiltaksgjennomforing';
import './TiltaksgjennomforingTabell.less';

interface TiltaksgjennomforingTabellProps {
  tiltaksgjennomforinger?: Tiltaksgjennomforing[];
}

function TiltaksgjennomforingsTabell(props: TiltaksgjennomforingTabellProps) {
  const location = useLocation();
  const { tiltaksgjennomforinger } = props;

  return (
    <div style={{ margin: '2.5rem 0' }}>
      <Row>
        <table className="tabell tabell--stripet">
          <thead>
            <tr>
              <th>Tittel</th>
              <th>Tiltaksnummer</th>
              <th>Til dato</th>
              <th>Fra dato</th>
            </tr>
          </thead>
          <tbody>
            {tiltaksgjennomforinger?.map(t => {
              return (
                <tr key={t.id} className="tabell__row">
                  <td>
                    <Link to={`${location.pathname}/tiltaksgjennomforinger/${t.id}`}>{t.tittel}</Link>
                  </td>
                  <td>{t.tiltaksnummer}</td>
                  <td>{t.tilDato}</td>
                  <td>{t.fraDato}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Row>
    </div>
  );
}

export default TiltaksgjennomforingsTabell;
