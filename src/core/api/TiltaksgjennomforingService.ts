import { Id } from '../domain/Generic';
import { Tiltaksgjennomforing } from '../domain/Tiltaksgjennomforing';
import { api } from './ApiUtils';

const getAllTiltaksgjennomforinger = () => api<Tiltaksgjennomforing[]>('/tiltaksgjennomforinger', { method: 'GET' });

const getTiltaksgjennomforingById = (id: Id) =>
  api<Tiltaksgjennomforing>(`/tiltaksgjennomforinger/${id}`, { method: 'GET' });

const getTiltaksgjennomforingerByTiltakstypeId = (id: Id) =>
  api<Tiltaksgjennomforing[]>(`/tiltakstyper/${id}/tiltaksgjennomforinger`, { method: 'GET' });

const TiltaksgjennomforingService = {
  getAllTiltaksgjennomforinger,
  getTiltaksgjennomforingById,
  getTiltaksgjennomforingerByTiltakstypeId,
};

export default TiltaksgjennomforingService;
