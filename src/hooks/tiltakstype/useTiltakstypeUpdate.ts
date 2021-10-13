import { useMutation, useQueryClient } from "react-query";
import { toast } from "react-toastify";
import { QueryKeys } from "../../core/api/QueryKeys";
import TiltakstypeService from "../../core/api/TiltakstypeService";
import { Id } from "../../core/domain/Generic";
import { Tiltakstype } from "../../core/domain/Tiltakstype";


export default function useTiltakstypeUpdate(id: Id) {
    const queryClient = useQueryClient()
  return useMutation(
    [QueryKeys.Tiltakstyper, id],
    (tiltakstype: Tiltakstype) => TiltakstypeService.putTiltakstype(tiltakstype),
    {
      onMutate: async updatedTiltakstype => {
        await queryClient.cancelQueries([QueryKeys.Tiltakstyper, id])
        const prevTiltakstype = queryClient.getQueryData([QueryKeys.Tiltakstyper, id])
        queryClient.setQueryData([QueryKeys.Tiltakstyper, id], updatedTiltakstype)
        return { prevTiltakstype, updatedTiltakstype }
      },
      onSettled: (updatedTiltakstype, error, variables, context: any) => {
        if (error) {
            queryClient.setQueryData(
                [QueryKeys.Tiltakstyper, context.updatedTiltakstype.id],
                context.prevTiltakstype
            )
            toast.error('Oops! Endring feilet.')
        } else {
            updatedTiltakstype && queryClient.invalidateQueries([QueryKeys.Tiltakstyper, updatedTiltakstype.id])
            toast.success("Endring vellykket!")
        }
      }
    }
  )
}