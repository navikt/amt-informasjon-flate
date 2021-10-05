import React, { useEffect, useState } from 'react';
import NavFrontendSpinner from 'nav-frontend-spinner';
import 'nav-frontend-tabell-style';
import { Tiltakstype } from '../../core/domain/Tiltakstype';
import Tiltaksliste from './listevisning/Tiltaksliste';
import '../../views/tiltakstype-oversikt/TiltakstypeOversikt.less';
import { tiltakstypeOversiktSok } from '../../core/atoms/atoms';
import { useAtom } from 'jotai';
import Fuse from 'fuse.js';

interface TiltaksoversiktProps {
  tiltakstyper?: Tiltakstype[];
}

const Tiltaksoversikt = (props: TiltaksoversiktProps) => {
  const { tiltakstyper } = props;
  const fuse = new Fuse(tiltakstyper ?? [], { keys: ['id', 'tittel', 'ingress'], shouldSort: false });
  const [sok] = useAtom(tiltakstypeOversiktSok);
  const [queriedTiltakstyper, setQueriedTiltakstyper] = useState(tiltakstyper);

  useEffect(() => {
    if (tiltakstyper) {
      if (sok.length > 0) {
        setQueriedTiltakstyper(fuse.search(sok).map(r => r.item));
      } else {
        setQueriedTiltakstyper(tiltakstyper);
      }
    }
  }, [tiltakstyper, sok]);

  return (
    <div className="tiltaksoversikt">
      {!tiltakstyper && <NavFrontendSpinner />}
      {tiltakstyper && <Tiltaksliste tiltaksliste={queriedTiltakstyper} />}
    </div>
  );
};

export default Tiltaksoversikt;
