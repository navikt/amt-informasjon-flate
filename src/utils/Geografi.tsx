//TODO hente dette fra et sted
const regionerMedKommuner = new Map([
  ['Viken', ['Nordre Follo', 'Ås', 'Drøbak']],
  ['Agder', ['Kristiansand', 'Lindesnes', 'Flekkefjord']],
  ['Nordland', ['Narvik', 'Bindal', 'Brønnøy']],
]);

export const regioner = Array.from(regionerMedKommuner.keys());

export default regionerMedKommuner;
