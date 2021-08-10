import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import DropdownFilter from './DropdownFilter';
import { velgKategori } from '../../redux/filtreringer/FiltreringSlice';

const KategoriFilter = () => {
  const dispatch = useDispatch();
  const [kategorier, setKategorier] = useState<string[]>([]);

  const hentAlleKategorierFraDB = (setKategorier: (value: []) => void) => {
    fetch(process.env.REACT_APP_BACKEND_API_ROOT + '/api/tiltak/kategorier')
      .then(res => res.json())
      .then(data => setKategorier(data));
  };

  useEffect(() => {
    hentAlleKategorierFraDB(setKategorier);
  }, []);

  return (
    <DropdownFilter
      filtreringsmuligheter={kategorier}
      onChange={filter => dispatch(velgKategori(filter))}
      tittel="Kategori"
      className="custom__ekspanderbartpanel"
    />
  );
};

export default KategoriFilter;
