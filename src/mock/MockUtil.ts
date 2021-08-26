import faker from 'faker';

import { kategorivelger } from '../utils/Kategorivelger';
import { Kategori, Region, Tiltak, Tiltakstype } from '../domain/Domain';

const tiltakslisteMock: Tiltak[] = [
  {
    id: 1,
    tittel: 'Truckførerkurs',
    beskrivelse: faker.lorem.paragraph(1),
    ingress: faker.lorem.sentence(1),
    tiltakstype: 'ARBEIDSMARKEDSOPPLAERING' as Tiltakstype,
    kategori: 'KOMPETANSEHEVING' as Kategori,
    region: {
      id: 1,
      navn: 'Romerike',
      kommuner: [
        {
          id: 2,
          navn: 'Eidsvoll',
        },
        { id: 3, navn: 'Hurdal' },
      ],
    },
  },
  {
    id: 2,
    tittel: 'Funksjonsassistanse',
    beskrivelse: faker.lorem.paragraph(1),
    ingress: faker.lorem.sentence(1),
    tiltakstype: 'FUNKSJONSASSISTANSE' as Tiltakstype,
    kategori: 'TILRETTELEGGING' as Kategori,
    region: {
      id: 1,
      navn: 'Romerike',
      kommuner: [
        {
          id: 2,
          navn: 'Eidsvoll',
        },
        { id: 3, navn: 'Hurdal' },
      ],
    },
  },
  {
    id: 3,
    tittel: 'Utvidet oppfølging',
    beskrivelse: faker.lorem.paragraph(1),
    ingress: faker.lorem.sentence(1),
    tiltakstype: 'UTVIDET_OPPFOLGING' as Tiltakstype,
    kategori: 'KOMPETANSEHEVING' as Kategori,
    region: {
      id: 1,
      navn: 'Romerike',
      kommuner: [
        {
          id: 2,
          navn: 'Eidsvoll',
        },
        { id: 3, navn: 'Hurdal' },
      ],
    },
  },
  {
    id: 4,
    tittel: 'Avklaring',
    beskrivelse: faker.lorem.paragraph(1),
    ingress: faker.lorem.sentence(1),
    tiltakstype: 'AVKLARING' as Tiltakstype,
    kategori: 'KARTLEGGING' as Kategori,
    region: {
      id: 1,
      navn: 'Romerike',
      kommuner: [
        {
          id: 2,
          navn: 'Eidsvoll',
        },
        { id: 3, navn: 'Hurdal' },
      ],
    },
  },
  {
    id: 5,
    tittel: 'Hundefrisør',
    beskrivelse: faker.lorem.paragraph(1),
    ingress: faker.lorem.sentence(1),
    tiltakstype: 'ARBEIDSMARKEDSOPPLAERING' as Tiltakstype,
    kategori: 'KOMPETANSEHEVING' as Kategori,
    region: {
      id: 1,
      navn: 'Romerike',
      kommuner: [
        {
          id: 2,
          navn: 'Eidsvoll',
        },
        { id: 3, navn: 'Hurdal' },
      ],
    },
  },
  {
    id: 6,
    tittel: 'Ekspertbistand',
    beskrivelse: faker.lorem.paragraph(1),
    ingress: faker.lorem.sentence(1),
    tiltakstype: 'EKSPERTBISTAND' as Tiltakstype,
    kategori: 'TILRETTELEGGING' as Kategori,
    region: {
      id: 1,
      navn: 'Romerike',
      kommuner: [
        {
          id: 2,
          navn: 'Eidsvoll',
        },
        { id: 3, navn: 'Hurdal' },
      ],
    },
  },
  {
    id: 7,
    tittel: 'Jobbklubb',
    beskrivelse: faker.lorem.paragraph(1),
    ingress: faker.lorem.sentence(1),
    tiltakstype: 'JOBBKLUBB' as Tiltakstype,
    kategori: 'KOMPETANSEHEVING' as Kategori,
    region: {
      id: 1,
      navn: 'Romerike',
      kommuner: [
        {
          id: 2,
          navn: 'Eidsvoll',
        },
        { id: 3, navn: 'Hurdal' },
      ],
    },
  },
  {
    id: 8,
    tittel: 'Oppfølging',
    beskrivelse: faker.lorem.paragraph(1),
    ingress: faker.lorem.sentence(1),
    tiltakstype: 'OPPFOLGING' as Tiltakstype,
    kategori: 'KOMPETANSEHEVING' as Kategori,
    region: {
      id: 1,
      navn: 'Romerike',
      kommuner: [
        {
          id: 2,
          navn: 'Eidsvoll',
        },
        { id: 3, navn: 'Hurdal' },
      ],
    },
  },
  {
    id: 9,
    tittel: 'Digital jobbklubb',
    beskrivelse: faker.lorem.paragraph(1),
    ingress: faker.lorem.sentence(1),
    tiltakstype: 'DIGITAL_JOBBKLUBB' as Tiltakstype,
    kategori: kategorivelger(Tiltakstype.DIGITAL_JOBBKLUBB),
    region: {
      id: 1,
      navn: 'Romerike',
      kommuner: [
        {
          id: 2,
          navn: 'Eidsvoll',
        },
        { id: 3, navn: 'Hurdal' },
      ],
    },
  },
  {
    id: 10,
    tittel: 'Fag- og yrkesopplæring',
    beskrivelse: faker.lorem.paragraph(1),
    ingress: faker.lorem.sentence(1),
    tiltakstype: 'FAG_OG_YRKES_OPPLAERING' as Tiltakstype,
    kategori: 'KARTLEGGING' as Kategori,
    region: {
      id: 1,
      navn: 'Romerike',
      kommuner: [
        {
          id: 2,
          navn: 'Eidsvoll',
        },
        { id: 3, navn: 'Hurdal' },
      ],
    },
  },
  {
    id: 11,
    tittel: 'Arbeidstrening',
    beskrivelse: faker.lorem.paragraph(1),
    ingress: faker.lorem.sentence(1),
    tiltakstype: 'ARBEIDSTRENING' as Tiltakstype,
    kategori: 'TILRETTELEGGING' as Kategori,
    region: {
      id: 1,
      navn: 'Romerike',
      kommuner: [
        {
          id: 2,
          navn: 'Eidsvoll',
        },
        { id: 3, navn: 'Hurdal' },
      ],
    },
  },
  {
    id: 12,
    tittel: 'Arbeidsforberedende trening',
    beskrivelse: faker.lorem.paragraph(1),
    ingress: faker.lorem.sentence(1),
    tiltakstype: 'ARBEIDSFORBEDRENDE_TRENING' as Tiltakstype,
    kategori: 'TILRETTELEGGING' as Kategori,
    region: {
      id: 1,
      navn: 'Romerike',
      kommuner: [
        {
          id: 2,
          navn: 'Eidsvoll',
        },
        { id: 3, navn: 'Hurdal' },
      ],
    },
  },
  {
    id: 13,
    tittel: 'Midlertidig lønnstilskudd',
    beskrivelse: faker.lorem.paragraph(1),
    ingress: faker.lorem.sentence(1),
    tiltakstype: 'MIDLERTIDIG_LONNSTILSKUDD' as Tiltakstype,
    kategori: 'TILRETTELEGGING' as Kategori,
    region: {
      id: 1,
      navn: 'Romerike',
      kommuner: [
        {
          id: 2,
          navn: 'Eidsvoll',
        },
        { id: 3, navn: 'Hurdal' },
      ],
    },
  },
  {
    id: 14,
    tittel: 'Varig lønnstilskudd',
    beskrivelse: faker.lorem.paragraph(1),
    ingress: faker.lorem.sentence(1),
    tiltakstype: 'VARIG_LONNSTILSKUDD' as Tiltakstype,
    kategori: 'TILRETTELEGGING' as Kategori,
    region: {
      id: 1,
      navn: 'Romerike',
      kommuner: [
        {
          id: 2,
          navn: 'Eidsvoll',
        },
        { id: 3, navn: 'Hurdal' },
      ],
    },
  },
  {
    id: 15,
    tittel: 'Varig tilrettelagt arbeid i skjermet virksomhet',
    beskrivelse: faker.lorem.paragraph(1),
    ingress: faker.lorem.sentence(1),
    tiltakstype: 'VARIG_TILRETTELAGT_ARBEID_I_SKJERMET_VIRKSOMHET' as Tiltakstype,
    kategori: kategorivelger(Tiltakstype.VARIG_TILRETTELAGT_ARBEID_I_SKJERMET_VIRKSOMHET),
    region: {
      id: 1,
      navn: 'Romerike',
      kommuner: [
        {
          id: 2,
          navn: 'Eidsvoll',
        },
        { id: 3, navn: 'Hurdal' },
      ],
    },
  },
  {
    id: 16,
    tittel: 'Varig tilrettelagt arbeid i ordinær virksomhet',
    beskrivelse: faker.lorem.paragraph(1),
    ingress: faker.lorem.sentence(1),
    tiltakstype: 'VARIG_TILRETTELAGT_ARBEID_I_ORDINAER_VIRKSOMHET' as Tiltakstype,
    kategori: 'TILRETTELEGGING' as Kategori,
    region: {
      id: 1,
      navn: 'Romerike',
      kommuner: [
        {
          id: 2,
          navn: 'Eidsvoll',
        },
        { id: 3, navn: 'Hurdal' },
      ],
    },
  },
  {
    id: 17,
    tittel: 'Inkluderingstilskudd',
    beskrivelse: faker.lorem.paragraph(1),
    ingress: faker.lorem.sentence(1),
    tiltakstype: 'INKLUDERINGSTILSKUDD' as Tiltakstype,
    kategori: 'TILRETTELEGGING' as Kategori,
    region: {
      id: 1,
      navn: 'Romerike',
      kommuner: [{ id: 3, navn: 'Hurdal' }],
    },
  },
  {
    id: 18,
    tittel: 'Funksjonsassistanse',
    beskrivelse: faker.lorem.paragraph(1),
    ingress: faker.lorem.sentence(1),
    tiltakstype: 'FUNKSJONSASSISTANSE' as Tiltakstype,
    kategori: 'TILRETTELEGGING' as Kategori,
    region: {
      id: 1,
      navn: 'Romerike',
      kommuner: [{ id: 3, navn: 'Hurdal' }],
    },
  },
  {
    id: 19,
    tittel: 'Mentor',
    beskrivelse: faker.lorem.paragraph(1),
    ingress: faker.lorem.sentence(1),
    tiltakstype: 'MENTOR' as Tiltakstype,
    kategori: 'TILRETTELEGGING' as Kategori,
    region: {
      id: 1,
      navn: 'Romerike',
      kommuner: [{ id: 3, navn: 'Hurdal' }],
    },
  },
  {
    id: 20,
    tittel: 'Arbeidsrettet rehabilitering',
    beskrivelse: faker.lorem.paragraph(1),
    ingress: faker.lorem.sentence(1),
    tiltakstype: 'ARBEIDSRETTET_REHABILITERING' as Tiltakstype,
    kategori: 'TILRETTELEGGING' as Kategori,
    region: {
      id: 1,
      navn: 'Romerike',
      kommuner: [{ id: 3, navn: 'Hurdal' }],
    },
  },
  {
    id: 21,
    tittel: 'Individuell jobbstøtte',
    beskrivelse: faker.lorem.paragraph(1),
    ingress: faker.lorem.sentence(1),
    tiltakstype: 'INDIVIDUELL_JOBBSTOTTE' as Tiltakstype,
    kategori: 'TILRETTELEGGING' as Kategori,
    region: {
      id: 2,
      navn: 'Østre-Viken',
      kommuner: [{ id: 3, navn: 'Sarpsborg' }],
    },
  },
  {
    id: 22,
    tittel: 'Tilskudd til sommerjobb',
    beskrivelse: faker.lorem.paragraph(1),
    ingress: faker.lorem.sentence(1),
    tiltakstype: 'TILSKUDD_TIL_SOMMERJOBB' as Tiltakstype,
    kategori: 'TILRETTELEGGING' as Kategori,
    region: {
      id: 2,
      navn: 'Østre-Viken',
      kommuner: [
        {
          id: 2,
          navn: 'Ullensaker',
        },
        { id: 3, navn: 'Sarpsborg' },
      ],
    },
  },
];

const regionlisteMock: Region[] = [
  {
    id: 2,
    navn: 'Østre-Viken',
    kommuner: [
      {
        id: 2,
        navn: 'Ullensaker',
      },
      { id: 3, navn: 'Sarpsborg' },
    ],
  },
  {
    id: 1,
    navn: 'Romerike',
    kommuner: [
      {
        id: 2,
        navn: 'Eidsvoll',
      },
      { id: 3, navn: 'Hurdal' },
    ],
  },
];

export { tiltakslisteMock, regionlisteMock };
