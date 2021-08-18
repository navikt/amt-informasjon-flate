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

export interface Tiltak {
  id: String;
  tittel: String;
  ingress: String;
  beskrivelse: String;
  tiltakstype: Tiltakstype,
  kategori: Kategori

}

export interface Kommune{
  id: number,
  navn: string
}

export interface Region {
  id: number,
  navn: string,
  kommuner: Kommune[]
}