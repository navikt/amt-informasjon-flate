import { toast } from 'react-toastify';

export const postTiltakstype = (tittel: string, ingress: string, beskrivelse: string) => {
  return fetch(process.env.REACT_APP_BACKEND_API_ROOT + '/api/tiltakstyper', {
    method: 'POST',
    body: JSON.stringify({
      tittel,
      ingress,
      beskrivelse,
    }),
  }).then(res => {
    if (!res.ok) {
      toast.error('Kunne ikke opprette tiltakstype. Det har oppstått en feil.');
      throw new Error(res.statusText);
    }
    toast.success('Tiltakstype opprettet.');
    window.location.assign('/');
    return res.json();
  });
};

export const putTiltakstype = (tittel: string, ingress: string, beskrivelse: string, id: string) => {
  return fetch(process.env.REACT_APP_BACKEND_API_ROOT + '/api/tiltakstyper/' + id, {
    method: 'PATCH',
    body: JSON.stringify({
      tittel,
      ingress,
      beskrivelse,
      id,
    }),
  }).then(res => {
    if (!res.ok) {
      toast.error('Kunne ikke redigere tiltakstype. Det har oppstått en feil.');
      throw new Error(res.statusText);
    }
    toast.success('Tiltakstype redigert.');
    window.location.assign('/tiltakstype/' + id);
    return res.json();
  });
};

export const deleteTiltakstype = (tittel: string, ingress: string, beskrivelse: string, id: string) => {
  return fetch(process.env.REACT_APP_BACKEND_API_ROOT + '/api/tiltakstyper/' + id, {
    method: 'DELETE',
    body: JSON.stringify({
      tittel,
      ingress,
      beskrivelse,
      id,
    }),
  }).then(res => {
    if (!res.ok) {
      toast.error('Kunne ikke slette tiltakstype. Det har oppstått en feil.');
      throw new Error(res.statusText);
    }
    toast.success('Tiltakstype slettet.');
    window.location.assign('/');
    return res.json();
  });
};
