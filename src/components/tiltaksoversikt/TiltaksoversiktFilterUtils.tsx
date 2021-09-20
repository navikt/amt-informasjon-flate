import { Tiltak, Tiltakstype } from '../../domain/Domain';

export const isTiltaktypeInFilter = (tiltakstype: Tiltakstype, filterlistetiltakstype: Tiltakstype[]): boolean => {
  return filterlistetiltakstype.length === 0 || filterlistetiltakstype.includes(tiltakstype);
};

export const isSearchTextInFilter  = (tiltak: Tiltak, searchText: string)=>{
  return tiltak.tittel.toLowerCase().includes(searchText.toLowerCase()) || tiltak.beskrivelse.toLowerCase().includes((searchText.toLowerCase()))
}

