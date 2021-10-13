import { Id } from './Generic';

export interface Tiltaksgjennomforing {
  id?: Id;
  tiltakstypeId: Id;
  tiltaksnummer: Id;
  tittel: string;
  beskrivelse: string;
  fraDato: Date;
  tilDato: Date;
}
