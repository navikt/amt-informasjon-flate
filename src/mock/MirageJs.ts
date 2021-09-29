import { createServer } from 'miragejs';
import { tiltakstypelisteMock } from './MockUtil';

const mockServer = () =>
  createServer({
    seeds(server) {
      server.db.loadData({
        tiltak: tiltakstypelisteMock,
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
      this.patch('/:id', (schema, request) => {
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
        return schema.db.tiltak.find(id).destroy;
      });
    },
  });

export default mockServer;
