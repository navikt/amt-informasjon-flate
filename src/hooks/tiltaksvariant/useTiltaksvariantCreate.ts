import { useMutation, useQueryClient } from 'react-query';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { QueryKeys } from '../../core/api/QueryKeys';
import TiltaksvariantService from '../../core/api/TiltaksvariantService';
import { Tiltaksvariant } from '../../core/domain/Tiltaksvariant';

export default function useTiltaksvariantCreate() {
  const history = useHistory();
  const queryClient = useQueryClient();
  return useMutation(
    QueryKeys.Tiltaksvarianter,
    (tiltaksvariant: Tiltaksvariant) => TiltaksvariantService.postTiltaksvariant(tiltaksvariant),
    {
      onMutate: async newTiltaksvariant => {
        await queryClient.cancelQueries(QueryKeys.Tiltaksvarianter);
        const prevTiltaksvarianter = queryClient.getQueryData(QueryKeys.Tiltaksvarianter);
        queryClient.setQueryData(QueryKeys.Tiltaksvarianter, (old: any) => [...old, newTiltaksvariant]);
        return { prevTiltaksvarianter };
      },
      onSettled: (newTiltaksvariant, error, variables, context: any) => {
        if (error) {
          queryClient.setQueryData(QueryKeys.Tiltaksvarianter, context.prevTiltaksvarianter);
          toast.error('Oops! Oppretting feilet.');
        } else {
          newTiltaksvariant && queryClient.invalidateQueries(QueryKeys.Tiltaksvarianter);
          toast.success('Oppretting vellykket!');
          history.replace(`/tiltaksvarianter/${newTiltaksvariant?.id}`);
        }
      },
    }
  );
}
