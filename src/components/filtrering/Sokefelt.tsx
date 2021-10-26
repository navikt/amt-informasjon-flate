import React from 'react';
import { Input } from 'nav-frontend-skjema';
import '../../views/tiltaksvariant-oversikt/TiltaksvariantOversikt.less';
import { useAtom } from 'jotai';
import { tiltaksvariantOversiktSok } from '../../core/atoms/atoms';

const Sokefelt = () => {
  const [sok, setSok] = useAtom(tiltaksvariantOversiktSok);
  return (
    <Input
      className="sokefelt-tiltaksvariant"
      label="Søk etter tiltaksvariant:"
      onChange={e => setSok(e.currentTarget.value)}
      value={sok}
    />
  );
};

export default Sokefelt;
