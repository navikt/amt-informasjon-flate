import { createServer } from 'miragejs';
import { Kategori, Tiltakstype } from '../domain/Domain';
import { tiltakslisteMock, regionlisteMock } from './MockUtil';

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
      this.get('/tiltak/kategorier', () => {
        return Object.keys(Kategori);
      });
      this.get('/tiltak/typer', () => {
        return Object.keys(Tiltakstype);
      });
      this.get('/regioner', () => {
        return regionlisteMock;
      });
      this.post('/tiltak', (schema, request) => {
        const tiltak = JSON.parse(request.requestBody);
        return schema.db.tiltak.insert(tiltak);
      });
    },
  });

export default mockServer;
