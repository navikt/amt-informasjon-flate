import React from 'react';
import { useDispatch } from 'react-redux';
import './Filtrering.less';
import DropdownFilter from './DropdownFilter';
import { Tiltakstype } from '../../data/Tiltakstyper';
import { velgTiltakstype } from '../../redux/filtreringer/FiltreringSlice';
import Ekspanderbartpanel from 'nav-frontend-ekspanderbartpanel';
import { Checkbox } from 'nav-frontend-skjema';
import { Normaltekst } from 'nav-frontend-typografi';

const tiltakstypeKartlegging: Tiltakstype[] = [Tiltakstype.ARBEIDSFORBEDRENDE_TRENING, Tiltakstype.AVKLARING];
const tiltakstypeKompetanseheving: Tiltakstype[] = [
  Tiltakstype.ARBEIDSMARKEDSOPPLAERING,
  Tiltakstype.ARBEIDSTRENING,
  Tiltakstype.DIGITAL_JOBBKLUBB,
  Tiltakstype.FAG_OG_YRKES_OPPLAERING,
  Tiltakstype.HOYERE_UTDANNING,
  Tiltakstype.JOBBKLUBB,
  Tiltakstype.OPPFOLGING,
  Tiltakstype.UTVIDET_OPPFOLGING,
];

const tiltakstypeTilrettelegging: Tiltakstype[] = [
  Tiltakstype.ARBEIDSRETTET_REHABILITERING,
  Tiltakstype.EKSPERTBISTAND,
  Tiltakstype.FUNKSJONSASSISTANSE,
  Tiltakstype.INDIVIDUELL_JOBBSTOTTE,
  Tiltakstype.INKLUDERINGSTILSKUDD,
  Tiltakstype.MENTOR,
  Tiltakstype.MIDLERTIDIG_LONNSTILSKUDD,
  Tiltakstype.TILSKUDD_TIL_SOMMERJOBB,
  Tiltakstype.VARIG_LONNSTILSKUDD,
  Tiltakstype.VARIG_TILRETTELAGT_ARBEID_I_ORDINAER_VIRKSOMHET,
  Tiltakstype.VARIG_TILRETTELAGT_ARBEID_I_SKJERMET_VIRKSOMHET,
];

const TiltakstypeFilter = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <Ekspanderbartpanel renderContentWhenClosed={true} tittel="Tiltakstyper" className="custom__ekspanderbartpanel">
        <Normaltekst>Kartlegging</Normaltekst>
        {tiltakstypeKartlegging.map((filtreringsmulighet, index) => (
          <Checkbox
            label={filtreringsmulighet}
            value={filtreringsmulighet}
            key={index}
            className="ekspanderbartpanel__checkbox"
            onChange={() => dispatch(velgTiltakstype(filtreringsmulighet))}
          />
        ))}
        <br />
        <Normaltekst>Kompetanseheving</Normaltekst>
        {tiltakstypeKompetanseheving.map((filtreringsmulighet, index) => (
          <Checkbox
            label={filtreringsmulighet}
            value={filtreringsmulighet}
            key={index}
            className="ekspanderbartpanel__checkbox"
            onChange={() => dispatch(velgTiltakstype(filtreringsmulighet))}
          />
        ))}
        <br />
        <Normaltekst>Tilrettelegging</Normaltekst>
        {tiltakstypeTilrettelegging.map((filtreringsmulighet, index) => (
          <Checkbox
            label={filtreringsmulighet}
            value={filtreringsmulighet}
            key={index}
            className="ekspanderbartpanel__checkbox"
            onChange={() => dispatch(velgTiltakstype(filtreringsmulighet))}
          />
        ))}
      </Ekspanderbartpanel>
    </div>
  );
};

export default TiltakstypeFilter;
