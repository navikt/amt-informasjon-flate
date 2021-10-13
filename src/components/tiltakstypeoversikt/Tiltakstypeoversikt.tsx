import React, { useEffect, useState } from 'react';
import 'nav-frontend-tabell-style';
import { Tiltakstype } from '../../core/domain/Tiltakstype';
import Tiltakstypeliste from './listevisning/Tiltakstypeliste';
import '../../views/tiltakstype-oversikt/TiltakstypeOversikt.less';
import { tiltakstypeOversiktSok } from '../../core/atoms/atoms';
import { useAtom } from 'jotai';
import Fuse from 'fuse.js';

interface TiltaksoversiktProps {
  tiltakstyper?: Tiltakstype[];
}

const Tiltakstypeoversikt = (props: TiltaksoversiktProps) => {
  const { tiltakstyper } = props;
  const fuse = new Fuse(tiltakstyper ?? [], {
    keys: ['id', 'tittel', 'ingress'],
    shouldSort: true,
    threshold: 0.3,
  });
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

  return <>{tiltakstyper && <Tiltakstypeliste tiltakstypeliste={queriedTiltakstyper} />}</>;
};

export default Tiltakstypeoversikt;