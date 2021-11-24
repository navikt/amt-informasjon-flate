import { useMutation, useQueryClient } from 'react-query';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { QueryKeys } from '../../core/api/QueryKeys';
import TiltaksvariantService from '../../core/api/TiltaksvariantService';
import { Id } from '../../core/domain/Generic';

export default function useTiltaksvariantDelete(id: Id) {
  const history = useHistory();
  const queryClient = useQueryClient();
  return useMutation(() => TiltaksvariantService.deleteTiltaksvariant(id), {
    onMutate: async () => {
      await queryClient.cancelQueries(QueryKeys.Tiltaksvarianter);
      const prevTiltaksvarianter = queryClient.getQueryData(QueryKeys.Tiltaksvarianter);
      return { prevTiltaksvarianter };
    },
    onSettled: (tiltaksvariant, error, variables, context: any) => {
      if (error) {
        queryClient.setQueryData(QueryKeys.Tiltaksvarianter, context.prevTiltaksvarianter);
        toast.error('Sletting feilet.');
      } else {
        toast.success('Sletting vellykket!');
        history.replace(`/`);
      }
    },
  });
}
