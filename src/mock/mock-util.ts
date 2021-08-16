import { Tiltak } from '../components/tiltaksvisning/Tiltaksvisning';
import faker from 'faker';

const createRandomTiltak = (size: number = 10): Tiltak[] => {
  return [...Array(size).keys()].map<Tiltak>(n => ({
    id: (n + 1).toString(),
    tittel: faker.lorem.words(6),
    beskrivelse: faker.lorem.paragraph(1),
    ingress: faker.lorem.sentence(1),
  }));
};

const getKategorier = ['KARTLEGGING', 'TILRETTELEGGING', 'KOMPETANSEHEVING'];

const getTiltaksTyper = [
  'AVKLARING',
  'ARBEIDSFORBEREDENDE_TRENING',
  'UTVIDET_OPPFØLGING_I_NAV',
  'OPPFØLGING',
  'JOBBKLUBB',
  'DIGITAL_JOBBKLUBB',
  'ARBEIDSMARKEDSOPPLÆRING',
  'FAG_OG_YRKESOPPLÆRING_PÅ_VIDEREGÅENDE_SKOLE_NIVÅ_ELLER_HØYERE_YRKESFAGLIG_UTDANNING',
  'HØYERE_UTDANNING',
  'ARBEIDSTRENING',
  'MIDLERTIDIG_LØNNSTILSKUDD',
  'VARIG_LØNNSTILSKUDD',
  'VARIG_TILRETTELAGT_ARBEID_I_ORDINÆR_VIRKSOMHET',
  'VARIG_TILRETTELAGT_ARBEID_I_SKJERMET_VIRKSOMHET',
  'EKSPERT_BISTAND',
  'INKLUDERINGSTILSKUDD',
  'FUNKSJONSASSISTANSE',
  'MENTOR',
  'ARBEIDSRETTET_REHABILITERING',
  'INDIVIDUELL_JOBBSTØTTE',
  'TILSKUDD_TIL_SOMMERJOBB',
];

export { createRandomTiltak, getKategorier, getTiltaksTyper };
