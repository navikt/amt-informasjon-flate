import { useQuery } from "react-query";
import { QueryKeys } from "../../core/api/QueryKeys";
import TiltakstypeService from "../../core/api/TiltakstypeService";
import { Id } from "../../core/domain/Generic";
import { Tiltakstype } from "../../core/domain/Tiltakstype";

export default function useTiltakstype(id: Id) {
  return useQuery<Tiltakstype>([QueryKeys.Tiltakstyper, id], () => TiltakstypeService.getTiltakstypeById(id));
}