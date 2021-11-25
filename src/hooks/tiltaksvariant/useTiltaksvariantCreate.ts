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
      onMutate: async () => {
        await queryClient.cancelQueries(QueryKeys.Tiltaksvarianter);
      },
      onSettled: (newTiltaksvariant, error) => {
        if (error) {
          toast.error('Oppretting feilet.');
        } else {
          newTiltaksvariant && queryClient.invalidateQueries(QueryKeys.Tiltaksvarianter);
          toast.success('Oppretting vellykket!');
          history.replace(`/tiltaksvarianter/${newTiltaksvariant?.id}`);
        }
      },
    }
  );
}
