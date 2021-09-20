import { Tiltakstype } from '../../domain/Domain';

export const isTiltaktypeInFilter = (tiltakstype: Tiltakstype, filterlistetiltakstype: Tiltakstype[]): boolean => {
  return filterlistetiltakstype.length === 0 || filterlistetiltakstype.includes(tiltakstype);
};
