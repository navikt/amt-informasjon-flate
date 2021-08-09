import React, { useState, useEffect } from 'react';
import Tiltakskort, { TiltakProps } from './bildevisning/Tiltakskort';
import './Tiltak.less';
import { useSelector } from 'react-redux';
import '../visning/TiltakOgFilterOversikt.less';
import 'nav-frontend-tabell-style';
import Tiltaksliste from './listevisning/Tiltaksliste';

const Tiltaksoversikt = () => {
  const [data, setData] = useState([]);

  const fetchAllTiltakFromDB = (setData: (value: []) => void) => {
    fetch(process.env.REACT_APP_BACKEND_API_ROOT + '/api/tiltak')
      .then(res => res.json())
      .then(data => setData(data));
  };

  useEffect(() => {
    fetchAllTiltakFromDB(setData);
  }, []);

  const bildeToggle: boolean = useSelector((state: any) => state.bildeListeVisningsReducer.bildeListeVisning);

  return (
    <div className="tiltaksoversikt">
      {bildeToggle ? (
        <div className="tiltaksoversikt__bildevisning">
          {data && data.map((tiltak: TiltakProps) => <Tiltakskort {...tiltak} key={tiltak.id} />)}
        </div>
      ) : (
        <Tiltaksliste tiltaksliste={data} />
      )}
    </div>
  );
};

export default Tiltaksoversikt;
