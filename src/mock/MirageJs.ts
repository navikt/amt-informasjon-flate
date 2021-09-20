import { createServer } from 'miragejs';
import { Tiltakstype } from '../domain/Domain';
import { tiltakslisteMock } from './MockUtil';

const mockServer = () =>
  createServer({
    seeds(server) {
      server.db.loadData({
        tiltak: tiltakslisteMock,
      });
    },
    routes() {
      this.namespace = '/api';
      this.timing = 500;
      this.get('/tiltak', schema => {
        return schema.db.tiltak;
      });
      this.get('/tiltak/:id', (schema, request) => {
        const id = request.params.id;
        return schema.db.tiltak.find(id);
      });
      this.get('/tiltak/typer', () => {
        return Object.keys(Tiltakstype);
      });
      this.post('/tiltak', (schema, request) => {
        const tiltak = JSON.parse(request.requestBody);
        return schema.db.tiltak.insert(tiltak);
      });
    },
  });

export default mockServer;
