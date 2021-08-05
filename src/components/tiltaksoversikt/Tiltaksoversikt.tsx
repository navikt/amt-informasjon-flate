import React from 'react';
import Tiltakskort, { TiltakskortProps } from './bildevisning/Tiltakskort';
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
  ];

  const bildeToggle: boolean = useSelector((state: any) => state.bildeListeVisningsReducer.bildeListeVisning);

  return (
    <div className="tiltaksoversikt">
      {bildeToggle ? (
        <div className="tiltaksoversikt__bildevisning">
          {tiltaksliste.map((tiltak: TiltakskortProps) => (
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
