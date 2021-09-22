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
      this.namespace = '/api';
      this.timing = 500;
      this.get('/tiltakstyper', schema => {
        return schema.db.tiltak;
      });
      this.get('/tiltakstyper/:id', (schema, request) => {
        const id = request.params.id;
        return schema.db.tiltak.find(id);
      });
      this.post('/tiltakstyper', (schema, request) => {
        const tiltak = JSON.parse(request.requestBody);
        return schema.db.tiltak.insert(tiltak);
      });
    },
  });

export default mockServer;
