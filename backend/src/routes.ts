import { FastifyInstance } from 'fastify';

export async function appRooutes(app: FastifyInstance) {
  app.get('/', (req, res) => {
    res.send('Hello fastify')
  })
}

