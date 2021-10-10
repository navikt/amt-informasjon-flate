import { useQuery } from "react-query";
import { QueryKeys } from "../../core/api/QueryKeys";
import TiltakstypeService from "../../core/api/TiltakstypeService";
import { Tiltakstype } from "../../core/domain/Tiltakstype";

export default function useTiltakstyper() {
  return useQuery<Tiltakstype[]>(QueryKeys.Tiltakstyper, TiltakstypeService.getAllTiltakstyper);
}