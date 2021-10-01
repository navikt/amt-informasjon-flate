import React, { useEffect, useState } from 'react';
import './OpprettOgRedigerTiltak.less';
import { useMutation, useQuery } from 'react-query';
import { Innholdstittel, Undertittel } from 'nav-frontend-typografi';
import { useHistory, useParams } from 'react-router-dom';
import { Tilbakeknapp } from 'nav-frontend-ikonknapper';
import SlettModal from '../../components/modal/SlettModal';
import RedigeringsgrensesnittForm from './RedigeringsgrensesnittForm';
import { QueryKeys } from '../../core/api/QueryKeys';
import TiltakstypeService from '../../core/api/TiltakstypeService';
import { Tiltakstype } from '../../core/domain/Tiltakstype';
import { toast } from 'react-toastify';

interface routeParams {
  id: string;
}

const OpprettOgRedigerTiltak = () => {
  const [tittel, setTittel] = useState<string>('');
  const [ingress, setIngress] = useState<string>('');
  const [beskrivelse, setBeskrivelse] = useState<string>('');

  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const { id }: routeParams = useParams();
  const isEditMode = !!id;
  const history = useHistory();

  const { data, isLoading, isSuccess, isError } = useQuery(
    QueryKeys.Tiltakstyper,
    () => TiltakstypeService.getTiltakstypeById(id),
    {
      enabled: !!id,
      onSuccess: data => {
        setTittel(data.tittel);
        setIngress(data.ingress);
        setBeskrivelse(data.beskrivelse);
      },
    }
  );

  // TODO: Finn en bedre måte å gjøre dette på, vi vil helst ha kun EN mutation per domene-objekt i context. Mulig vi må lage en HTTP method mapping.
  // Lag potensielt egene hooks for disse så de kan gjenbrukes flere steder. Blir veldig mye likt som skjer, unødvendig for øya.
  const postMutation = useMutation(
    QueryKeys.Tiltakstyper,
    (tiltakstype: Tiltakstype) => TiltakstypeService.postTiltakstype(tiltakstype),
    {
      onSuccess: () => {
        toast.success('Oppretting var vellykket.');
      },
      onError: () => {
        toast.error('Oops! Oppretting feilet.');
      },
    }
  );
  const putMutation = useMutation(
    QueryKeys.Tiltakstyper,
    (tiltakstype: Tiltakstype) => TiltakstypeService.putTiltakstype(tiltakstype),
    {
      onSuccess: () => {
        toast.success('Endring var vellykket.');
      },
      onError: () => {
        toast.error('Oops! Endring feilet.');
      },
    }
  );
  const deleteMutation = useMutation(QueryKeys.Tiltakstyper, () => TiltakstypeService.deleteTiltakstype(id), {
    onSuccess: () => {
      setModalOpen(false);
      toast.success('Sletting var vellykket.');
      history.replace('/');
    },
    onError: () => {
      toast.error('Oops! Sletting feilet.');
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, input: string) => {
    if (input === 'tittel') {
      setTittel(e.target.value);
    } else if (input === 'ingress') {
      setIngress(e.target.value);
    } else if (input === 'beskrivelse') {
      setBeskrivelse(e.target.value);
    }
  };

  const handleSubmit = () => {
    if (isEditMode) {
      putMutation.mutate({ id: id, tittel: tittel, beskrivelse: beskrivelse, ingress: ingress });
    } else {
      postMutation.mutate({ tittel: tittel, beskrivelse: beskrivelse, ingress: ingress });
    }
  };

  return (
    <>
      <Tilbakeknapp className="rediger-opprett-tiltakstype__tilbakeknapp" onClick={() => history.goBack()} />
      <div className="rediger-opprett-tiltakstype">
        <div className="rediger-opprett-tiltakstype__overskrift">
          <Innholdstittel>{!isEditMode ? 'Opprett tiltakstype' : 'Rediger tiltakstype'}</Innholdstittel>
          {isEditMode && <Undertittel>Tiltaksnummer: {data?.id}</Undertittel>}
        </div>

        <RedigeringsgrensesnittForm
          isSuccess={isSuccess}
          isLoading={isLoading}
          isError={isError}
          isEdit={isEditMode}
          onSubmit={handleSubmit}
          handleChange={handleChange}
          setModalOpen={setModalOpen}
          tittel={tittel}
          ingress={ingress}
          beskrivelse={beskrivelse}
        />
      </div>

      <SlettModal
        tittel="Slett tiltak"
        modalOpen={modalOpen}
        onRequestClose={() => setModalOpen(false)}
        handleDelete={() => deleteMutation.mutate()}
      />
    </>
  );
};

export default OpprettOgRedigerTiltak;
