import { useQuery } from 'react-query';
import { QueryKeys } from '../../core/api/QueryKeys';
import TiltaksgjennomforingService from '../../core/api/TiltaksgjennomforingService';
import { Id } from '../../core/domain/Generic';
import { Tiltaksgjennomforing } from '../../core/domain/Tiltaksgjennomforing';

export default function useTiltaksgjennomforingerByTiltakstypeId(id: Id) {
  return useQuery<Tiltaksgjennomforing[]>([QueryKeys.Tiltaksgjennomforinger, { tiltakstypeId: id }], () =>
    TiltaksgjennomforingService.getTiltaksgjennomforingerByTiltakstypeId(id)
  );
}
