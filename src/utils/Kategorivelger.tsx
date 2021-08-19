import { Kategori, Tiltakstype } from '../domain/domain';

export const kategorivelger = (tiltakstype: string) => {
  const kompetansehevingsliste: Array<string> = [
    Tiltakstype.UTVIDET_OPPFOLGING,
    Tiltakstype.OPPFOLGING,
    Tiltakstype.JOBBKLUBB,
    Tiltakstype.DIGITAL_JOBBKLUBB,
    Tiltakstype.ARBEIDSMARKEDSOPPLAERING,
    Tiltakstype.FAG_OG_YRKES_OPPLAERING,
    Tiltakstype.HOYERE_UTDANNING,
    Tiltakstype.ARBEIDSTRENING,
  ];
  const kartleggingsliste: Array<string> = [Tiltakstype.AVKLARING, Tiltakstype.ARBEIDSFORBEDRENDE_TRENING];

  const tilretteleggingsliste: Array<string> = [
    Tiltakstype.MIDLERTIDIG_LONNSTILSKUDD,
    Tiltakstype.VARIG_LONNSTILSKUDD,
    Tiltakstype.VARIG_TILRETTELAGT_ARBEID_I_SKJERMET_VIRKSOMHET,
    Tiltakstype.VARIG_TILRETTELAGT_ARBEID_I_ORDINAER_VIRKSOMHET,
    Tiltakstype.EKSPERTBISTAND,
    Tiltakstype.INKLUDERINGSTILSKUDD,
    Tiltakstype.FUNKSJONSASSISTANSE,
    Tiltakstype.MENTOR,
    Tiltakstype.ARBEIDSRETTET_REHABILITERING,
    Tiltakstype.INDIVIDUELL_JOBBSTOTTE,
    Tiltakstype.TILSKUDD_TIL_SOMMERJOBB,
  ];

  if (kompetansehevingsliste.includes(tiltakstype)) {
    return Kategori.KOMPETANSEHEVING;
  } else if (kartleggingsliste.includes(tiltakstype)) {
    return Kategori.KARTLEGGING;
  } else if (tilretteleggingsliste.includes(tiltakstype)) {
    return Kategori.TILRETTELEGGING;
  } else {
    throw new Error('Tiltakstypen har ingen tildelt kategori');
  }
};