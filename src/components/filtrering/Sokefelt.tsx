import React from 'react';
import { Input } from 'nav-frontend-skjema';
import '../../views/tiltakstype-oversikt/TiltakstypeOversikt.less';
import { useAtom } from 'jotai';
import { tiltakstypeOversiktSok } from '../../core/atoms/atoms';

const Sokefelt = () => {
  const [sok, setSok] = useAtom(tiltakstypeOversiktSok);
  return (
    <Input label="Søk etter tiltakstype:" onChange={e => setSok(e.currentTarget.value)} value={sok} data-testid="sokefelt_tiltakstype" />
  );
};

export default Sokefelt;
