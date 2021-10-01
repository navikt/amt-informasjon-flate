import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import NavFrontendSpinner from 'nav-frontend-spinner';
import 'nav-frontend-tabell-style';
import { Tiltakstype } from '../../core/domain/Tiltakstype';
import Tiltaksliste from './listevisning/Tiltaksliste';
import { isSearchTextInFilter } from './TiltaksoversiktFilterUtils';
import './bildevisning/Tiltakskort.less';
import '../../views/tiltakstype-oversikt/TiltakOgFilterOversikt.less';

interface TiltaksoversiktProps {
  tiltakstyper?: Tiltakstype[];
}

const Tiltaksoversikt = (props: TiltaksoversiktProps) => {
  const { tiltakstyper } = props;
  const [tiltakslisteFiltrert, setTiltakslisteFiltrert] = useState<Tiltakstype[] | undefined>(tiltakstyper ?? []);
  const filterState = useSelector((state: any) => state.filterReducer);

  useEffect(() => {
    const filtrertListe = tiltakstyper?.filter((tiltak: any) => {
      return isSearchTextInFilter(tiltak, filterState.sokefelt);
    });
    setTiltakslisteFiltrert(filtrertListe);
  }, [filterState, tiltakstyper]);

  return <div className="tiltaksoversikt">{!tiltakstyper && <NavFrontendSpinner />}</div>;
};

export default Tiltaksoversikt;
