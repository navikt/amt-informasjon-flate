export const stringFormatting = (str: string) => {
  const res = str.replaceAll('_', ' ').toLowerCase();
  return res.charAt(0).toUpperCase() + res.slice(1);
};

export const erTomtObjekt = (objekt: Object): boolean => {
  return Object.keys(objekt).length === 0;
};
