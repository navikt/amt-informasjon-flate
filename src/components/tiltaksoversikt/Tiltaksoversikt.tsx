import React from 'react';
import Tiltakskort, { TiltakProps } from './bildevisning/Tiltakskort';
import './Tiltak.less';
import { useSelector } from 'react-redux';
import '../visning/TiltakOgFilterOversikt.less';
import 'nav-frontend-tabell-style';
import Tiltaksliste from './listevisning/Tiltaksliste';
import { kategorivelger, Tiltakstype } from '../../data/Tiltakstyper';

const Tiltaksoversikt = () => {
  //TODO fjern når vi får koblet til backend
  const tiltaksliste = [
    {
      id: 1,
      tittel: 'Truckførerkurs',
      ingress: 'Lorem Ipsum dolor sit amet',
      tiltakstype: Tiltakstype.ARBEIDSMARKEDSOPPLAERING,
      kategori: kategorivelger(Tiltakstype.ARBEIDSMARKEDSOPPLAERING),
    },
    {
      id: 2,
      tittel: 'Funksjonsassistanse',
      ingress: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      tiltakstype: Tiltakstype.FUNKSJONSASSISTANSE,
      kategori: kategorivelger(Tiltakstype.FUNKSJONSASSISTANSE),
    },
    {
      id: 3,
      tittel: 'Utvidet oppfølging',
      ingress: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dignissim.',
      tiltakstype: Tiltakstype.UTVIDET_OPPFOLGING,
      kategori: kategorivelger(Tiltakstype.UTVIDET_OPPFOLGING),
    },
    {
      id: 4,
      tittel: 'Avklaring',
      ingress: 'Lorem Ipsum dolor sit amet',
      tiltakstype: Tiltakstype.AVKLARING,
      kategori: kategorivelger(Tiltakstype.AVKLARING),
    },
    {
      id: 5,
      tittel: 'Hundefrisør',
      ingress: 'Lorem Ipsum dolor sit amet',
      tiltakstype: Tiltakstype.ARBEIDSMARKEDSOPPLAERING,
      kategori: kategorivelger(Tiltakstype.ARBEIDSMARKEDSOPPLAERING),
    },
    {
      id: 6,
      tittel: 'Ekspertbistand',
      ingress: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      tiltakstype: Tiltakstype.EKSPERTBISTAND,
      kategori: kategorivelger(Tiltakstype.EKSPERTBISTAND),
    },
    {
      id: 7,
      tittel: 'Jobbklubb',
      ingress: 'Lorem Ipsum dolor sit amet',
      tiltakstype: Tiltakstype.JOBBKLUBB,
      kategori: kategorivelger(Tiltakstype.JOBBKLUBB),
    },
    {
      id: 8,
      tittel: 'Oppfølging',
      ingress: 'Lorem Ipsum dolor sit amet',
      tiltakstype: Tiltakstype.OPPFOLGING,
      kategori: kategorivelger(Tiltakstype.OPPFOLGING),
    },
    {
      id: 9,
      tittel: 'Digital jobbklubb',
      ingress: 'Lorem Ipsum dolor sit amet',
      tiltakstype: Tiltakstype.DIGITAL_JOBBKLUBB,
      kategori: kategorivelger(Tiltakstype.DIGITAL_JOBBKLUBB),
    },
    {
      id: 10,
      tittel: 'Fag- og yrkesopplæring',
      ingress: 'Lorem Ipsum dolor sit amet',
      tiltakstype: Tiltakstype.FAG_OG_YRKES_OPPLAERING,
      kategori: kategorivelger(Tiltakstype.FAG_OG_YRKES_OPPLAERING),
    },
    {
      id: 11,
      tittel: 'Arbeidstrening',
      ingress: 'Lorem Ipsum dolor sit amet',
      tiltakstype: Tiltakstype.ARBEIDSTRENING,
      kategori: kategorivelger(Tiltakstype.ARBEIDSTRENING),
    },
    {
      id: 12,
      tittel: 'Arbeidsforberedende trening',
      ingress: 'Lorem Ipsum dolor sit amet',
      tiltakstype: Tiltakstype.ARBEIDSFORBEDRENDE_TRENING,
      kategori: kategorivelger(Tiltakstype.ARBEIDSFORBEDRENDE_TRENING),
    },
    {
      id: 13,
      tittel: 'Midlertidig lønnstilskudd',
      ingress: 'Lorem Ipsum dolor sit amet',
      tiltakstype: Tiltakstype.MIDLERTIDIG_LONNSTILSKUDD,
      kategori: kategorivelger(Tiltakstype.MIDLERTIDIG_LONNSTILSKUDD),
    },
    {
      id: 14,
      tittel: 'Varig lønnstilskudd',
      ingress: 'Lorem Ipsum dolor sit amet',
      tiltakstype: Tiltakstype.VARIG_LONNSTILSKUDD,
      kategori: kategorivelger(Tiltakstype.VARIG_LONNSTILSKUDD),
    },
    {
      id: 15,
      tittel: 'Varig tilrettelagt arbeid i skjermet virksomhet',
      ingress: 'Lorem Ipsum dolor sit amet',
      tiltakstype: Tiltakstype.VARIG_TILRETTELAGT_ARBEID_I_SKJERMET_VIRKSOMHET,
      kategori: kategorivelger(Tiltakstype.VARIG_TILRETTELAGT_ARBEID_I_SKJERMET_VIRKSOMHET),
    },
    {
      id: 16,
      tittel: 'Varig tilrettelagt arbeid i ordinær virksomhet',
      ingress: 'Lorem Ipsum dolor sit amet',
      tiltakstype: Tiltakstype.VARIG_TILRETTELAGT_ARBEID_I_ORDINAER_VIRKSOMHET,
      kategori: kategorivelger(Tiltakstype.VARIG_TILRETTELAGT_ARBEID_I_ORDINAER_VIRKSOMHET),
    },
    {
      id: 17,
      tittel: 'Inkluderingstilskudd',
      ingress: 'Lorem Ipsum dolor sit amet',
      tiltakstype: Tiltakstype.INKLUDERINGSTILSKUDD,
      kategori: kategorivelger(Tiltakstype.INKLUDERINGSTILSKUDD),
    },
    {
      id: 18,
      tittel: 'Funksjonsassistanse',
      ingress: 'Lorem Ipsum dolor sit amet',
      tiltakstype: Tiltakstype.FUNKSJONSASSISTANSE,
      kategori: kategorivelger(Tiltakstype.FUNKSJONSASSISTANSE),
    },
    {
      id: 19,
      tittel: 'Mentor',
      ingress: 'Lorem Ipsum dolor sit amet',
      tiltakstype: Tiltakstype.MENTOR,
      kategori: kategorivelger(Tiltakstype.MENTOR),
    },
    {
      id: 20,
      tittel: 'Arbeidsrettet rehabilitering',
      ingress: 'Lorem Ipsum dolor sit amet',
      tiltakstype: Tiltakstype.ARBEIDSRETTET_REHABILITERING,
      kategori: kategorivelger(Tiltakstype.ARBEIDSRETTET_REHABILITERING),
    },
    {
      id: 21,
      tittel: 'Individuell jobbstøtte',
      ingress: 'Lorem Ipsum dolor sit amet',
      tiltakstype: Tiltakstype.INDIVIDUELL_JOBBSTOTTE,
      kategori: kategorivelger(Tiltakstype.INDIVIDUELL_JOBBSTOTTE),
    },
    {
      id: 22,
      tittel: 'Tilskudd til sommerjobb',
      ingress: 'Lorem Ipsum dolor sit amet',
      tiltakstype: Tiltakstype.TILSKUDD_TIL_SOMMERJOBB,
      kategori: kategorivelger(Tiltakstype.TILSKUDD_TIL_SOMMERJOBB),
    },
  ];

  const bildeToggle: boolean = useSelector((state: any) => state.bildeListeVisningsReducer.bildeListeVisning);

  return (
    <div className="tiltaksoversikt">
      {bildeToggle ? (
        <div className="tiltaksoversikt__bildevisning">
          {tiltaksliste.map((tiltak: TiltakProps) => (
            <Tiltakskort {...tiltak} key={tiltak.id} />
          ))}
        </div>
      ) : (
        <Tiltaksliste tiltaksliste={tiltaksliste} />
      )}
    </div>
  );
};

export default Tiltaksoversikt;
