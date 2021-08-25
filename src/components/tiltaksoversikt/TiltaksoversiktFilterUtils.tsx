import { Kategori, Kommune, Region, Tiltakstype } from '../../domain/Domain';

export const isTiltaktypeInFilter = (tiltakstype: Tiltakstype, filterlistetiltakstype: Tiltakstype[]): boolean => {
  return filterlistetiltakstype.length === 0 || filterlistetiltakstype.includes(tiltakstype);
};

export const isKategoriInFilter = (kategori: Kategori, filterlisteKategori: Kategori[]): boolean => {
  return filterlisteKategori.length === 0 || filterlisteKategori.includes(kategori);
};

export const isRegionInFilter = (region: Region, filterlisteRegion: Region[]): boolean => {
  return (
    filterlisteRegion.length === 0 ||
    filterlisteRegion.some((filterRegion: Region) => filterRegion.navn === region.navn)
  );
};

export const isKommuneInFilter = (kommuner: Kommune[], filterlisteKommune: Kommune[]): boolean => {
  return (
    filterlisteKommune.length === 0 ||
    filterlisteKommune.some(
      (kommune: Kommune) => kommune && kommuner.some((tiltakKommune: Kommune) => tiltakKommune.navn === kommune.navn)
    )
  );
};
