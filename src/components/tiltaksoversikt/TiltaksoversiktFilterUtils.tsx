import { Tiltakstype } from '../../core/domain/Tiltakstype';

export const isSearchTextInFilter = (tiltakstype: Tiltakstype, searchText: string) => {
  return (
    tiltakstype.tittel.toLowerCase().includes(searchText.toLowerCase()) ||
    tiltakstype.ingress.toLowerCase().includes(searchText.toLowerCase())
  );
};
