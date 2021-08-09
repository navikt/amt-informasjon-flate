export enum Innsatsgruppe {
  STANDARD = 'Standard',
  SITUASJONSBESTEMT = 'Situasjonsbestemt',
  SPESIELT_TILPASSET = 'Spesielt tilpasset',
  VARIG_TILPASSET = 'Varig tilpasset',
}

export enum Kategori {
  KARTLEGGING = 'Kartlegging',
  KOMPETANSEHEVING = 'Kompetanseheving',
  TILRETTELEGGING = 'Tilrettelegging',
}

export enum Tiltakstype {
  ARBEIDSFORBEDRENDE_TRENING = 'Arbeidsforberedende trening',
  ARBEIDSMARKEDSOPPLAERING = 'Arbeidsmarkedsopplæring',
  ARBEIDSRETTET_REHABILITERING = 'Arbeidsrettet rehabilitering',
  ARBEIDSTRENING = 'Arbeidstrening',
  AVKLARING = 'Avklaring',
  DIGITAL_JOBBKLUBB = 'Digital jobbklubb',
  EKSPERTBISTAND = 'Ekspertbistand',
  FAG_OG_YRKES_OPPLAERING = 'Fag- og yrkesopplæring',
  FUNKSJONSASSISTANSE = 'Funksjonsassistanse',
  HOYERE_UTDANNING = 'Høyere utdanning',
  INDIVIDUELL_JOBBSTOTTE = 'Individuell jobbstøtte',
  INKLUDERINGSTILSKUDD = 'Inkluderingstilskudd',
  JOBBKLUBB = 'Jobbklubb',
  MENTOR = 'Mentor',
  MIDLERTIDIG_LONNSTILSKUDD = 'Midlertidig lønnstilskudd',
  OPPFOLGING = 'Oppfølging',
  TILSKUDD_TIL_SOMMERJOBB = 'Tilskudd til sommerjobb',
  UTVIDET_OPPFOLGING = 'Utvidet oppfølging',
  VARIG_LONNSTILSKUDD = 'Varig lønnstilskudd',
  VARIG_TILRETTELAGT_ARBEID_I_ORDINAER_VIRKSOMHET = 'Varig tilrettelagt arbeid i ordinær virksomhet',
  VARIG_TILRETTELAGT_ARBEID_I_SKJERMET_VIRKSOMHET = 'Varig tilrettelagt arbeid i skjermet virksomhet',
}

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
