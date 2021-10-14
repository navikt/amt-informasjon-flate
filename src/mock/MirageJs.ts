import { createServer, Response } from 'miragejs';
import { tiltaksgjennomforingerMock } from './data/TiltaksgjennomforingerMock';
import { tiltakstyperMock } from './data/TiltakstyperMock';

const mockServer = () =>
  createServer({
    seeds(server) {
      server.db.loadData({
        tiltakstyper: tiltakstyperMock,
        tiltaksgjennomforinger: tiltaksgjennomforingerMock,
      });
    },
    routes() {
      // TODO: Lag en bedre struktur her. Kommer til å bli litt kaos i fremtiden.
      this.namespace = '/api';
      this.get('/tiltakstyper', schema => {
        return schema.db.tiltakstyper;
      });
      this.get('/tiltakstyper/:id', (schema, request) => {
        const id = request.params.id;
        return schema.db.tiltakstyper.find(id);
      });
      this.get('/tiltakstyper/:id/tiltaksgjennomforinger', (schema, request) => {
        const id = request.params.id;
        return schema.db.tiltaksgjennomforinger.where({ tiltakstypeId: id });
      });
      this.post('/tiltakstyper', (schema, request) => {
        const tiltakstyper = JSON.parse(request.requestBody);
        return schema.db.tiltakstyper.insert(tiltakstyper);
      });
      this.put('/tiltakstyper/:id', (schema, request) => {
        const id = request.params.id;
        const tiltakstyper = JSON.parse(request.requestBody);
        return schema.db.tiltakstyper.update(id, {
          tittel: tiltakstyper.tittel,
          ingress: tiltakstyper.ingress,
          beskrivelse: tiltakstyper.beskrivelse,
        });
      });
      this.delete('/tiltakstyper/:id', (schema, request) => {
        const id = request.params.id;
        const tiltakstype = schema.db.tiltak.find(id);
        if (tiltakstype) {
          schema.db.tiltakstyper.remove(id);
          return new Response(200);
        }
        return new Response(404);
      });
      this.get('/tiltaksgjennomforinger', schema => {
        return schema.db.tiltasgjennomforinger;
      });
      this.get('/tiltaksgjennomforinger/:id', (schema, request) => {
        const id = request.params.id;
        return schema.db.tiltaksgjennomforinger.find(id);
      });
    },
  });

export default mockServer;
