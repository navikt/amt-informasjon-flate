import { useMutation, useQueryClient } from 'react-query';
import { toast } from 'react-toastify';
import { QueryKeys } from '../../core/api/QueryKeys';
import TiltaksvariantService from '../../core/api/TiltaksvariantService';
import { Id } from '../../core/domain/Generic';
import { Tiltaksvariant } from '../../core/domain/Tiltaksvariant';

export default function useTiltaksvariantUpdate(id: Id) {
  const queryClient = useQueryClient();
  return useMutation(
    [QueryKeys.Tiltaksvarianter, id],
    (tiltaksvariant: Tiltaksvariant) => TiltaksvariantService.putTiltaksvariant(tiltaksvariant),
    {
      onMutate: async updatedTiltaksvariant => {
        await queryClient.cancelQueries([QueryKeys.Tiltaksvarianter, id]);
        const prevTiltaksvariant = queryClient.getQueryData([QueryKeys.Tiltaksvarianter, id]);
        queryClient.setQueryData([QueryKeys.Tiltaksvarianter, id], updatedTiltaksvariant);
        return { prevTiltaksvariant, updatedTiltaksvariant };
      },
      onSettled: (updatedTiltaksvariant, error, variables, context: any) => {
        if (error) {
          queryClient.setQueryData(
            [QueryKeys.Tiltaksvarianter, context.updatedTiltaksvariant.id],
            context.prevTiltaksvariant
          );
          toast.error('Endring feilet.');
        } else {
          updatedTiltaksvariant &&
            queryClient.invalidateQueries([QueryKeys.Tiltaksvarianter, updatedTiltaksvariant.id]);
          toast.success('Endring vellykket!');
        }
      },
    }
  );
}
