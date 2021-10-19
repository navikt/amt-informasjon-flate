import React, { useEffect, useState } from 'react';
import './OpprettOgRedigerTiltakstype.less';
import { useParams } from 'react-router-dom';
import SlettModal from '../../components/modal/SlettModal';
import RedigeringsgrensesnittForm from './RedigeringsgrensesnittForm';
import MainView from '../../layouts/MainView';
import useTiltakstypeCreate from '../../hooks/tiltakstype/useTiltakstypeCreate';
import useTiltakstypeUpdate from '../../hooks/tiltakstype/useTiltakstypeUpdate';
import useTiltakstypeDelete from '../../hooks/tiltakstype/useTiltakstypeDelete';
import useTiltakstype from '../../hooks/tiltakstype/useTiltakstype';
import { Tiltakstype } from '../../core/domain/Tiltakstype';

interface routeParams {
  id: string;
}

const OpprettOgRedigerTiltakstype = () => {
  const { id }: routeParams = useParams();
  const isEditMode = !!id;

  const [tittel, setTittel] = useState('');
  const [ingress, setIngress] = useState('');
  const [beskrivelse, setBeskrivelse] = useState('');
  const [modalOpen, setModalOpen] = useState(false);

  const { data, isLoading, isError } = useTiltakstype(id);

  useEffect(() => {
    if (data) {
      setTittel(data.tittel);
      setIngress(data.ingress);
      setBeskrivelse(data.beskrivelse);
    }
  }, [data]);

  const postMutation = useTiltakstypeCreate();
  const putMutation = useTiltakstypeUpdate(id);
  const deleteMutation = useTiltakstypeDelete(id);

  const handleSubmit = (tiltakstype: Tiltakstype) => {
    if (isEditMode) {
      putMutation.mutate({
        id: id,
        tittel: tiltakstype.tittel,
        beskrivelse: tiltakstype.beskrivelse,
        ingress: tiltakstype.ingress,
      });
    } else {
      postMutation.mutate(tiltakstype);
    }
  };

  const getTitle = () => (isEditMode ? 'Rediger tiltakstype' : 'Opprett tiltakstype');

  return (
    <MainView showBackButton title={getTitle()}>
      <div>
        <RedigeringsgrensesnittForm
          isLoading={isLoading}
          isError={isError}
          isEdit={isEditMode}
          onSubmit={handleSubmit}
          setModalOpen={setModalOpen}
          tittel={tittel}
          ingress={ingress}
          beskrivelse={beskrivelse}
        />
      </div>
      <SlettModal
        tittel="Slett tiltakstype"
        modalOpen={modalOpen}
        onRequestClose={() => setModalOpen(false)}
        handleDelete={() => deleteMutation.mutate()}
      />
    </MainView>
  );
};

export default OpprettOgRedigerTiltakstype;
