export const formatering = (ord: string) => {
  const res = ord.replaceAll('_', ' ').toLowerCase();
  return res.charAt(0).toUpperCase() + res.slice(1);
};
