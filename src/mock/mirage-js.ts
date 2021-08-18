import { createServer } from 'miragejs';
import { Kategori, Tiltakstype } from '../domain/domain';
import { tiltakslisteMock, regionlisteMock} from './mock-util';

const mockServer = () =>
  createServer({
    seeds(server) {
      server.db.loadData({
        tiltak: tiltakslisteMock,
      });
    },
    routes() {
      this.namespace = 'api';
      this.timing = 500;
      this.get('/tiltak', (schema, request) => {
        return schema.db.tiltak;
      });
      this.get('/tiltak/:id', (schema, request) => {
        const id = request.params.id;
        return schema.db.tiltak.find(id);
      });
      this.get('/tiltak/kategorier', (schema, request) => {
        return Object.keys(Kategori);
      });
      this.get('/tiltak/typer', (schema, request) => {
        return Object.keys(Tiltakstype);
      });
      this.get('/regioner', (schema, request) => {
        return regionlisteMock;
      });
    },
  });

export default mockServer;
