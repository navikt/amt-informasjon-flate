export interface InputValideringsError {
  tittel?: String;
  beskrivelse?: String;
}

export const feilValidering = (tittel: String, beskrivelse: String) => {
  const melding: InputValideringsError = {};

  tittel = tittel.trim();
  beskrivelse = beskrivelse.trim();

  if (!tittel) {
    melding.tittel = 'Dette feltet kan ikke være tomt';
  }
  if (tittel.length >= 10) {
    melding.tittel = 'Maks 10 tegn.';
  }
  if (!beskrivelse) {
    melding.beskrivelse = 'Dette feltet kan ikke være tomt';
  }

  return melding;
};
