import faker from 'faker';
import { Region, Tiltak, Tiltakstype } from '../domain/Domain';
import { kategorivelger } from '../utils/Kategorivelger';

const tiltakslisteMock: Tiltak[] = [
  {
    id: 1,
    tittel: 'Truckførerkurs',
    beskrivelse: faker.lorem.paragraph(1),
    ingress: faker.lorem.sentence(1),
    tiltakstype: Tiltakstype.ARBEIDSMARKEDSOPPLAERING,
    kategori: kategorivelger(Tiltakstype.ARBEIDSMARKEDSOPPLAERING),
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
    tiltakstype: Tiltakstype.FUNKSJONSASSISTANSE,
    kategori: kategorivelger(Tiltakstype.FUNKSJONSASSISTANSE),
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
    tiltakstype: Tiltakstype.UTVIDET_OPPFOLGING,
    kategori: kategorivelger(Tiltakstype.UTVIDET_OPPFOLGING),
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
    tiltakstype: Tiltakstype.AVKLARING,
    kategori: kategorivelger(Tiltakstype.AVKLARING),
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
    tiltakstype: Tiltakstype.ARBEIDSMARKEDSOPPLAERING,
    kategori: kategorivelger(Tiltakstype.ARBEIDSMARKEDSOPPLAERING),
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
    tiltakstype: Tiltakstype.EKSPERTBISTAND,
    kategori: kategorivelger(Tiltakstype.EKSPERTBISTAND),
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
    tiltakstype: Tiltakstype.JOBBKLUBB,
    kategori: kategorivelger(Tiltakstype.JOBBKLUBB),
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
    tiltakstype: Tiltakstype.OPPFOLGING,
    kategori: kategorivelger(Tiltakstype.OPPFOLGING),
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
    tiltakstype: Tiltakstype.DIGITAL_JOBBKLUBB,
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
    tiltakstype: Tiltakstype.FAG_OG_YRKES_OPPLAERING,
    kategori: kategorivelger(Tiltakstype.FAG_OG_YRKES_OPPLAERING),
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
    tiltakstype: Tiltakstype.ARBEIDSTRENING,
    kategori: kategorivelger(Tiltakstype.ARBEIDSTRENING),
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
    tiltakstype: Tiltakstype.ARBEIDSFORBEDRENDE_TRENING,
    kategori: kategorivelger(Tiltakstype.ARBEIDSFORBEDRENDE_TRENING),
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
    tiltakstype: Tiltakstype.MIDLERTIDIG_LONNSTILSKUDD,
    kategori: kategorivelger(Tiltakstype.MIDLERTIDIG_LONNSTILSKUDD),
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
    tiltakstype: Tiltakstype.VARIG_LONNSTILSKUDD,
    kategori: kategorivelger(Tiltakstype.VARIG_LONNSTILSKUDD),
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
    tiltakstype: Tiltakstype.VARIG_TILRETTELAGT_ARBEID_I_SKJERMET_VIRKSOMHET,
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
    tiltakstype: Tiltakstype.VARIG_TILRETTELAGT_ARBEID_I_ORDINAER_VIRKSOMHET,
    kategori: kategorivelger(Tiltakstype.VARIG_TILRETTELAGT_ARBEID_I_ORDINAER_VIRKSOMHET),
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
    tiltakstype: Tiltakstype.INKLUDERINGSTILSKUDD,
    kategori: kategorivelger(Tiltakstype.INKLUDERINGSTILSKUDD),
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
    tiltakstype: Tiltakstype.FUNKSJONSASSISTANSE,
    kategori: kategorivelger(Tiltakstype.FUNKSJONSASSISTANSE),
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
    tiltakstype: Tiltakstype.MENTOR,
    kategori: kategorivelger(Tiltakstype.MENTOR),
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
    tiltakstype: Tiltakstype.ARBEIDSRETTET_REHABILITERING,
    kategori: kategorivelger(Tiltakstype.ARBEIDSRETTET_REHABILITERING),
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
    tiltakstype: Tiltakstype.INDIVIDUELL_JOBBSTOTTE,
    kategori: kategorivelger(Tiltakstype.INDIVIDUELL_JOBBSTOTTE),
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
    tiltakstype: Tiltakstype.TILSKUDD_TIL_SOMMERJOBB,
    kategori: kategorivelger(Tiltakstype.TILSKUDD_TIL_SOMMERJOBB),
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