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
  INDIVIDUELL_JOBBSTOTTE = 'Individuell jobbstøtte',
  INKLUDERINGSTILSKUDD = 'Inkluderingstilskudd',
  JOBBKLUBB = 'Jobbklubb',
  MENTOR = 'Mentor',
  MIDLERTIDIG_LONNSTILSKUDD = 'Midlertidig lønnstilskudd',
  OPPFOLGING = 'Oppfølging',
  OPPLAERING = 'Opplæring',
  TILSKUDD_TIL_SOMMERJOBB = 'Tilskudd til sommerjobb',
  UTVIDET_OPPFOLGING = 'Utvidet oppfølging',
  VARIG_LONNSTILSKUDD = 'Varig lønnstilskudd',
  VARIG_TILRETTELAGT_ARBEID_I_ORDINAER_VIRKSOMHET = 'Varig tilrettelagt arbeid i ordinær virksomhet',
  VARIG_TILRETTELAGT_ARBEID_I_SKJERMET_VIRKSOMHET = 'Varig tilrettelagt arbeid i skjermet virksomhet',
}

export interface Tiltak {
  id: number;
  tittel: string;
  ingress: string;
  beskrivelse: string;
  tiltakstype: Tiltakstype;
}
