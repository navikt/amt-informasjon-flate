import { createServer, Response } from 'miragejs';
import { tiltakstyperMock } from './data/TiltakstyperMock';

const mockServer = () =>
  createServer({
    seeds(server) {
      server.db.loadData({
        tiltak: tiltakstyperMock,
      });
    },
    routes() {
      this.namespace = '/api/tiltakstyper';
      this.get('/', schema => {
        return schema.db.tiltak;
      });
      this.get('/:id', (schema, request) => {
        const id = request.params.id;
        return schema.db.tiltak.find(id);
      });
      this.post('/', (schema, request) => {
        const tiltakstyper = JSON.parse(request.requestBody);
        return schema.db.tiltak.insert(tiltakstyper);
      });
      this.put('/:id', (schema, request) => {
        const id = request.params.id;
        const tiltakstyper = JSON.parse(request.requestBody);
        return schema.db.tiltak.update(id, {
          tittel: tiltakstyper.tittel,
          ingress: tiltakstyper.ingress,
          beskrivelse: tiltakstyper.beskrivelse,
        });
      });
      this.delete('/:id', (schema, request) => {
        const id = request.params.id;
        const tiltakstype = schema.db.tiltak.find(id);
        if (tiltakstype) {
          schema.db.tiltak.remove(id);
          return new Response(200);
        }
        return new Response(404);
      });
    },
  });

export default mockServer;
