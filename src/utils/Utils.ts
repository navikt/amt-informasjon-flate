export const erTomtObjekt = (objekt: Object): boolean => {
  return Object.keys(objekt).length === 0;
};

export const inneholderUrl = (string: string) => {
  return window.location.href.indexOf(string) > -1;
};

export const redigerTiltakstype = inneholderUrl('rediger-tiltakstype');
export const opprettTiltakstype = inneholderUrl('opprett-tiltakstype');
