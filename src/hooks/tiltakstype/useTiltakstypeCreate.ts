import { useMutation, useQueryClient } from "react-query";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { QueryKeys } from "../../core/api/QueryKeys";
import TiltakstypeService from "../../core/api/TiltakstypeService";
import { Tiltakstype } from "../../core/domain/Tiltakstype";


export default function useTiltakstypeCreate() {
    const history = useHistory()
    const queryClient = useQueryClient()
  return useMutation(
    QueryKeys.Tiltakstyper,
    (tiltakstype: Tiltakstype) => TiltakstypeService.postTiltakstype(tiltakstype),
    {
      onMutate: async newTiltakstype => {
        await queryClient.cancelQueries(QueryKeys.Tiltakstyper)
        const prevTiltakstyper = queryClient.getQueryData(QueryKeys.Tiltakstyper)
        queryClient.setQueryData(QueryKeys.Tiltakstyper, (old: any) => [...old, newTiltakstype])
        return { prevTiltakstyper }
      },
      onSettled: (newTiltakstype, error, variables, context: any) => {
        if (error) {
            queryClient.setQueryData(
                QueryKeys.Tiltakstyper,
                context.prevTiltakstyper
            )
            toast.error('Oops! Oppretting feilet.')
        } else {
            newTiltakstype && queryClient.invalidateQueries(QueryKeys.Tiltakstyper)
            toast.success("Oppretting vellykket!")
            history.replace(`/tiltakstyper/${newTiltakstype?.id}`)
        }
      }
    }
  )
}