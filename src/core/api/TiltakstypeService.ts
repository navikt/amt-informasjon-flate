import { Id } from '../domain/Generic';
import { Tiltakstype } from '../domain/Tiltakstype';
import { api } from './ApiUtils';

const getAllTiltakstyper = () => api<Tiltakstype[]>('/tiltakstyper', { method: 'GET' });

const getTiltakstypeById = (id: Id) => api<Tiltakstype>(`/tiltakstyper/${id}`, { method: 'GET' });

const postTiltakstype = (tiltakstype: Tiltakstype) =>
  api<Tiltakstype>('/tiltakstyper', { method: 'POST', body: JSON.stringify(tiltakstype) });

const putTiltakstype = (tiltakstype: Tiltakstype) =>
  api<Tiltakstype>(`/tiltakstyper/${tiltakstype.id}`, { method: 'PUT', body: JSON.stringify(tiltakstype) });

const TiltakstypeService = {
  getAllTiltakstyper,
  getTiltakstypeById,
  postTiltakstype,
  putTiltakstype,
};

export default TiltakstypeService;
