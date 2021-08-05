import React from 'react';
import { useDispatch } from 'react-redux';
import { hentTiltakstypeFilter } from '../../redux/filtreringer/TiltakstypeFilterSlice';
import './Filtrering.less';
import DropdownFilter from './DropdownFilter';
import { Tiltakstype } from '../../data/Tiltakstyper';

//TODO hente dette fra et sted
const tiltakstyper: Tiltakstype[] = [
  Tiltakstype.ARBEIDSFORBEDRENDE_TRENING,
  Tiltakstype.ARBEIDSMARKEDSOPPLAERING,
  Tiltakstype.ARBEIDSRETTET_REHABILITERING,
  Tiltakstype.ARBEIDSTRENING,
  Tiltakstype.AVKLARING,
  Tiltakstype.DIGITAL_JOBBKLUBB,
  Tiltakstype.EKSPERTBISTAND,
  Tiltakstype.FAG_OG_YRKES_OPPLAERING,
  Tiltakstype.FUNKSJONSASSISTANSE,
  Tiltakstype.HOYERE_UTDANNING,
  Tiltakstype.INDIVIDUELL_JOBBSTOTTE,
  Tiltakstype.INKLUDERINGSTILSKUDD,
  Tiltakstype.JOBBKLUBB,
  Tiltakstype.MENTOR,
  Tiltakstype.MIDLERTIDIG_LONNSTILSKUDD,
  Tiltakstype.OPPFOLGING,
  Tiltakstype.TILSKUDD_TIL_SOMMERJOBB,
  Tiltakstype.UTVIDET_OPPFOLGING,
  Tiltakstype.VARIG_LONNSTILSKUDD,
  Tiltakstype.VARIG_TILRETTELAGT_ARBEID_I_ORDINAER_VIRKSOMHET,
  Tiltakstype.VARIG_TILRETTELAGT_ARBEID_I_SKJERMET_VIRKSOMHET,
];

const TiltakstypeFilter = () => {
  const dispatch = useDispatch();

  const oppdaterFiltere = (filter: string) => {
    dispatch(hentTiltakstypeFilter(filter));
  };

  return (
    <DropdownFilter
      filtreringsmuligheter={tiltakstyper}
      onChange={oppdaterFiltere}
      tittel="Tiltakstyper"
      className="custom__ekspanderbartpanel"
    />
  );
};

export default TiltakstypeFilter;
