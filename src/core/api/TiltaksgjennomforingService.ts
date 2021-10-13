import { Id } from '../domain/Generic';
import { api } from './ApiUtils';

const getAllTiltaksgjennomforinger = () => api<[]>('/tiltaksgjennomforinger', { method: 'GET' });

const getTiltaksgjennomforingById = (id: Id) => api<>(`/tiltaksgjennomforinger/${id}`, { method: 'GET' });

const TiltaksgjennomforingService = {
  getAllTiltaksgjennomforinger,
  getTiltaksgjennomforingById,
};

export default TiltaksgjennomforingService;
