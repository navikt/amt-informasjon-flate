import { useMutation, useQueryClient } from 'react-query';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { QueryKeys } from '../../core/api/QueryKeys';
import TiltakstypeService from '../../core/api/TiltakstypeService';
import { Id } from '../../core/domain/Generic';

export default function useTiltakstypeDelete(id: Id) {
  const history = useHistory();
  const queryClient = useQueryClient();
  return useMutation([QueryKeys.Tiltakstyper, id], () => TiltakstypeService.deleteTiltakstype(id), {
    onMutate: async newTiltakstype => {
      await queryClient.cancelQueries(QueryKeys.Tiltakstyper);
      const prevTiltakstyper = queryClient.getQueryData(QueryKeys.Tiltakstyper);
      queryClient.setQueryData(QueryKeys.Tiltakstyper, (old: any) => [...old, newTiltakstype]);
      return { prevTiltakstyper };
    },
    onSettled: (newTiltakstype, error, variables, context: any) => {
      if (error) {
        queryClient.setQueryData(QueryKeys.Tiltakstyper, context.prevTiltakstyper);
        toast.error('Sletting av tiltakstype feilet.');
      } else {
        newTiltakstype && queryClient.invalidateQueries(QueryKeys.Tiltakstyper);
        toast.success('Sletting av tiltakstype vellykket!');
        history.replace(`/tiltakstyper/${newTiltakstype?.id}`);
      }
    },
  });
}
