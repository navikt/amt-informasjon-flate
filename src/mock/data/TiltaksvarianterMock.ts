import faker from 'faker';
import { Tiltaksvariant } from '../../core/domain/Tiltaksvariant';

const tiltaksvarianterMock: Tiltaksvariant[] = [
  {
    id: 1,
    tittel: 'Opplæring',
    beskrivelse: faker.lorem.paragraph(1),
    ingress: faker.lorem.sentence(10),
  },
  {
    id: 2,
    tittel: 'Funksjonsassistanse',
    beskrivelse: faker.lorem.paragraph(1),
    ingress: faker.lorem.sentence(10),
  },
  {
    id: 3,
    tittel: 'Utvidet oppfølging',
    beskrivelse: faker.lorem.paragraph(1),
    ingress: faker.lorem.sentence(10),
  },
  {
    id: 4,
    tittel: 'Avklaring',
    beskrivelse: faker.lorem.paragraph(1),
    ingress: faker.lorem.sentence(10),
  },
  {
    id: 5,
    tittel: 'Arbeidsmarkedsopplæring (AMO)',
    beskrivelse: faker.lorem.paragraph(1),
    ingress: faker.lorem.sentence(10),
  },
  {
    id: 6,
    tittel: 'Ekspertbistand',
    beskrivelse: faker.lorem.paragraph(1),
    ingress: faker.lorem.sentence(10),
  },
  {
    id: 7,
    tittel: 'Jobbklubb',
    beskrivelse: faker.lorem.paragraph(1),
    ingress: faker.lorem.sentence(10),
  },
  {
    id: 8,
    tittel: 'Oppfølging',
    beskrivelse: faker.lorem.paragraph(1),
    ingress: faker.lorem.sentence(10),
  },
  {
    id: 9,
    tittel: 'Digital jobbklubb',
    beskrivelse: faker.lorem.paragraph(1),
    ingress: faker.lorem.sentence(10),
  },
  {
    id: 10,
    tittel: 'Fag- og yrkesopplæring',
    beskrivelse: faker.lorem.paragraph(1),
    ingress: faker.lorem.sentence(10),
  },
  {
    id: 11,
    tittel: 'Arbeidstrening',
    beskrivelse: faker.lorem.paragraph(1),
    ingress: faker.lorem.sentence(10),
  },
  {
    id: 12,
    tittel: 'Arbeidsforberedende trening',
    beskrivelse: faker.lorem.paragraph(1),
    ingress: faker.lorem.sentence(10),
  },
  {
    id: 13,
    tittel: 'Midlertidig lønnstilskudd',
    beskrivelse: faker.lorem.paragraph(1),
    ingress: faker.lorem.sentence(10),
  },
  {
    id: 14,
    tittel: 'Varig lønnstilskudd',
    beskrivelse: faker.lorem.paragraph(1),
    ingress: faker.lorem.sentence(10),
  },
  {
    id: 15,
    tittel: 'Varig tilrettelagt arbeid i skjermet virksomhet',
    beskrivelse: faker.lorem.paragraph(1),
    ingress: faker.lorem.sentence(10),
  },
  {
    id: 16,
    tittel: 'Varig tilrettelagt arbeid i ordinær virksomhet',
    beskrivelse: faker.lorem.paragraph(1),
    ingress: faker.lorem.sentence(10),
  },
  {
    id: 17,
    tittel: 'Inkluderingstilskudd',
    beskrivelse: faker.lorem.paragraph(1),
    ingress: faker.lorem.sentence(10),
  },
  {
    id: 18,
    tittel: 'Funksjonsassistanse i arbeidslivet',
    beskrivelse: faker.lorem.paragraph(1),
    ingress: faker.lorem.sentence(10),
  },
  {
    id: 19,
    tittel: 'Mentor',
    beskrivelse: faker.lorem.paragraph(1),
    ingress: faker.lorem.sentence(10),
  },
  {
    id: 20,
    tittel: 'Arbeidsrettet rehabilitering',
    beskrivelse: faker.lorem.paragraph(1),
    ingress: faker.lorem.sentence(10),
  },
  {
    id: 21,
    tittel: 'Individuell jobbstøtte',
    beskrivelse: faker.lorem.paragraph(1),
    ingress: faker.lorem.sentence(10),
  },
  {
    id: 22,
    tittel: 'Tilskudd til sommerjobb',
    beskrivelse: faker.lorem.paragraph(1),
    ingress: faker.lorem.sentence(10),
  },
];

export { tiltaksvarianterMock };
