export interface InputValideringsError {
  tittel?: string;
  ingress?: string;
  beskrivelse?: string;
}

export const feilValidering = (tittel: string, ingress: string, beskrivelse: string) => {
  const melding: InputValideringsError = {};

  tittel = tittel.trim();
  ingress = ingress.trim();
  beskrivelse = beskrivelse.trim();

  const tomtFelt = 'Dette feltet kan ikke være tomt';

  if (!tittel) {
    melding.tittel = tomtFelt;
  }
  if (tittel.length >= 50) {
    melding.tittel = 'Maks 50 tegn.';
  }
  if (!beskrivelse) {
    melding.beskrivelse = tomtFelt;
  }
  if (!ingress) {
    melding.ingress = tomtFelt;
  }

  return melding;
};
