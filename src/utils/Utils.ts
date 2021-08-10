export const formatering = (ord: string) => {
  const res = ord.replaceAll('_', ' ').toLowerCase();
  return res.charAt(0).toUpperCase() + res.slice(1);
};

//ulik kodestil på denne og den over, noe vi skal endre på?
export function erTomtObjekt(objekt: Object): boolean {
  return Object.keys(objekt).length === 0;
}
