import { Radio, RadioGruppe } from 'nav-frontend-skjema';
import React from 'react';
import { useQuery } from 'react-query';
import { Tiltakstype } from '../../domain/Domain';
import { stringFormatting } from '../../utils/Utils';
import NavFrontendSpinner from 'nav-frontend-spinner';
import AlertStripe from 'nav-frontend-alertstriper';

const RadiogruppeTiltakstype = () => {
  const { isLoading, data, isSuccess, isError } = useQuery('tiltakstyper', () =>
    fetch(process.env.REACT_APP_BACKEND_API_ROOT + '/api/tiltak/typer').then(res => res.json())
  );
  return (
    <RadioGruppe legend="Velg tiltakstype" className="radiogruppe__tiltakstype">
      {isSuccess &&
        data?.map((tiltakstype: Tiltakstype, index: number) => (
          <Radio key={index} label={stringFormatting(tiltakstype)} name='tiltakstype' />
        ))}
      {isLoading && <NavFrontendSpinner />}
      {isError && <AlertStripe type={'feil'}>Det har oppstått en feil.</AlertStripe>}
    </RadioGruppe>
  );
};

export default RadiogruppeTiltakstype;
