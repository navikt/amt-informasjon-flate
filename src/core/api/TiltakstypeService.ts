import { Id } from '../domain/Generic';
import { Tiltakstype } from '../domain/Tiltakstype';
import { api } from './ApiUtils';

const getAllTiltakstyper = () => api<Tiltakstype[]>('/tiltakstyper', { method: 'GET' });

const getTiltakstypeById = (id: Id) => api<Tiltakstype>(`/tiltakstyper/${id}`, { method: 'GET' });

const postTiltakstype = (tiltakstype: Tiltakstype) =>
  api<Tiltakstype>('/tiltakstyper', { method: 'POST', body: JSON.stringify(tiltakstype) });

const putTiltakstype = (tiltakstype: Tiltakstype) => {
  console.log('tiltakst', tiltakstype);
  return api<Tiltakstype>(`/tiltakstyper/${tiltakstype.id}`, { method: 'PUT', body: JSON.stringify(tiltakstype) });
};

const deleteTiltakstype = (id: Id) => api<Tiltakstype>(`/tiltakstyper/${id}`, { method: 'DELETE' });

const TiltakstypeService = {
  getAllTiltakstyper,
  getTiltakstypeById,
  postTiltakstype,
  putTiltakstype,
  deleteTiltakstype,
};

export default TiltakstypeService;
