import { createServer } from 'miragejs';
import { createRandomTiltak, getKategorier, getTiltaksTyper } from './mock-util';

const mockServer = () =>
  createServer({
    seeds(server) {
      server.db.loadData({
        tiltak: createRandomTiltak(),
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
        return getKategorier;
      });
      this.get('/tiltak/typer', (schema, request) => {
        return getTiltaksTyper;
      });
    },
  });

export default mockServer;
