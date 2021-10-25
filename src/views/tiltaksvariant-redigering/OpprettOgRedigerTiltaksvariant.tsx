import React, { useState } from 'react';
import './OpprettOgRedigerTiltaksvariant.less';
import { useParams } from 'react-router-dom';
import SlettModal from '../../components/modal/SlettModal';
import RedigeringsgrensesnittForm from './RedigeringsgrensesnittForm';
import MainView from '../../layouts/MainView';
import useTiltaksvariantCreate from '../../hooks/tiltaksvariant/useTiltaksvariantCreate';
import useTiltaksvariantUpdate from '../../hooks/tiltaksvariant/useTiltaksvariantUpdate';
import useTiltaksvariantDelete from '../../hooks/tiltaksvariant/useTiltaksvariantDelete';
import useTiltaksvariant from '../../hooks/tiltaksvariant/useTiltaksvariant';
import { Tiltaksvariant } from '../../core/domain/Tiltaksvariant';

interface routeParams {
  id: string;
}

const OpprettOgRedigerTiltaksvariant = () => {
  const { id }: routeParams = useParams();
  const isEditMode = !!id;

  const [modalOpen, setModalOpen] = useState(false);

  const { data, isLoading, isError } = useTiltaksvariant(id);

  const postMutation = useTiltaksvariantCreate();
  const putMutation = useTiltaksvariantUpdate(id);
  const deleteMutation = useTiltaksvariantDelete(id);

  const handleSubmit = (tiltaksvariant: Tiltaksvariant) => {
    if (isEditMode) {
      putMutation.mutate(tiltaksvariant);
    } else {
      postMutation.mutate(tiltaksvariant);
    }
  };

  const getTitle = isEditMode ? 'Rediger tiltaksvariant' : 'Opprett tiltaksvariant';

  return (
    <MainView
      showBackButton
      title={getTitle}
      dataTestId={isEditMode ? 'header-rediger-tiltaksvariant' : 'header_opprett-tiltaksvariant'}
    >
      <div>
        <RedigeringsgrensesnittForm
          isLoading={isLoading}
          isError={isError}
          isEdit={isEditMode}
          onSubmit={handleSubmit}
          setModalOpen={setModalOpen}
          tiltaksvariant={data}
        />
      </div>
      <SlettModal
        tittel="Slett tiltaksvariant"
        modalOpen={modalOpen}
        onRequestClose={() => setModalOpen(false)}
        handleDelete={() => deleteMutation.mutate()}
      />
    </MainView>
  );
};

export default OpprettOgRedigerTiltaksvariant;
