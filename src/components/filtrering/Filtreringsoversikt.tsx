import React, { useState } from 'react';
import './Filtrering.less';
import TiltakstypeFilter from './TiltakstypeFilter';

const Filtreringsoversikt = () => {
  const [tiltaksType, settiltaksType] = useState<string>('');

  return (
    <>
      <TiltakstypeFilter />
    </>
  );
};

export default Filtreringsoversikt;
