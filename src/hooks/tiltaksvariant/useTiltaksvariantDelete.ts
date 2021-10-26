import { useMutation, useQueryClient } from 'react-query';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { QueryKeys } from '../../core/api/QueryKeys';
import TiltaksvariantService from '../../core/api/TiltaksvariantService';
import { Id } from '../../core/domain/Generic';

export default function useTiltaksvariantDelete(id: Id) {
  const history = useHistory();
  const queryClient = useQueryClient();
  return useMutation([QueryKeys.Tiltaksvarianter, id], () => TiltaksvariantService.deleteTiltaksvariant(id), {
    onMutate: async newTiltaksvariant => {
      await queryClient.cancelQueries(QueryKeys.Tiltaksvarianter);
      const prevTiltaksvarianter = queryClient.getQueryData(QueryKeys.Tiltaksvarianter);
      queryClient.setQueryData(QueryKeys.Tiltaksvarianter, (old: any) => [...old, newTiltaksvariant]);
      return { prevTiltaksvarianter };
    },
    onSettled: (newTiltaksvariant, error, variables, context: any) => {
      if (error) {
        queryClient.setQueryData(QueryKeys.Tiltaksvarianter, context.prevTiltaksvarianter);
        toast.error('Sletting feilet.');
      } else {
        newTiltaksvariant && queryClient.invalidateQueries(QueryKeys.Tiltaksvarianter);
        toast.success('Sletting vellykket!');
        history.replace(`/tiltaksvarianter/${newTiltaksvariant?.id}`);
      }
    },
  });
}
