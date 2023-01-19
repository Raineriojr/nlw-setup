import Fastify from "fastify";
import cors from '@fastify/cors';
import { appRooutes } from "./routes";

const app = Fastify();
const url = 'http://localhost:3333/'

app.register(cors);
app.register(appRooutes);

app.listen({
  port: 3333
}, () => console.log(`Server running in: ${url}`))