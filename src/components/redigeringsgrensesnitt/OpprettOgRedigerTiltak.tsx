import React, { useEffect, useState } from 'react';
import './OpprettOgRedigerTiltak.less';
import { useQuery } from 'react-query';
import { opprettTiltakstype, redigerTiltakstype } from '../../utils/Utils';
import { Innholdstittel, Undertittel } from 'nav-frontend-typografi';
import { useHistory, useParams } from 'react-router-dom';
import { Tilbakeknapp } from 'nav-frontend-ikonknapper';
import { deleteTiltakstype } from './Crud';
import Modal from '../modal/Modal';
import RedigeringsgrensesnittForm from './RedigeringsgrensesnittForm';

interface routeParams {
  id: string;
}

const OpprettOgRedigerTiltak = () => {
  const [tittel, setTittel] = useState<string>('');
  const [ingress, setIngress] = useState<string>('');
  const [beskrivelse, setBeskrivelse] = useState<string>('');

  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const { id }: routeParams = useParams();
  const history = useHistory();

  const { data, isLoading, isSuccess, isError } = useQuery('tiltakstyper' + id, () =>
    fetch(process.env.REACT_APP_BACKEND_API_ROOT + '/api/tiltakstyper/' + id).then(res => res.json())
  );

  useEffect(() => {
    if (redigerTiltakstype) {
      setTittel(data?.tittel);
      setIngress(data?.ingress);
      setBeskrivelse(data?.beskrivelse);
    }
  }, [data]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, input: string) => {
    if (input === 'tittel') {
      setTittel(e.target.value);
    } else if (input === 'ingress') {
      setIngress(e.target.value);
    } else if (input === 'beskrivelse') {
      setBeskrivelse(e.target.value);
    }
  };

  const handleDelete = () => {
    deleteTiltakstype(tittel, ingress, beskrivelse, id);
    setModalOpen(false);
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

        <RedigeringsgrensesnittForm
          isSuccess={isSuccess}
          isLoading={isLoading}
          isError={isError}
          handleChange={handleChange}
          setModalOpen={setModalOpen}
          id={id}
          tittel={tittel}
          ingress={ingress}
          beskrivelse={beskrivelse}
        />
      </div>

      <Modal
        tittel="Slett tiltak"
        modalOpen={modalOpen}
        onRequestClose={() => setModalOpen(false)}
        handleDelete={handleDelete}
      />
    </>
  );
};

export default OpprettOgRedigerTiltak;
