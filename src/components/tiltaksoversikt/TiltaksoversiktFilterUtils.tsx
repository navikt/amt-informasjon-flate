import {  Tiltakstype } from '../../domain/Domain';

export const isSearchTextInFilter  = (tiltak: Tiltakstype, searchText: string)=>{
  return tiltak.tittel.toLowerCase().includes(searchText.toLowerCase()) || tiltak.ingress.toLowerCase().includes((searchText.toLowerCase()))
}

