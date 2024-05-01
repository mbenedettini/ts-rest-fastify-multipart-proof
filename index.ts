import Fastify from 'fastify';
import { initServer } from '@ts-rest/fastify';
import { initContract } from '@ts-rest/core';
import FastifyMultipart from "@fastify/multipart";

const c = initContract();

const BodySchema = c.type<{
  requiredField: string,
}>();

const contract = c.router({
  testMultipart: {
    method: 'POST',
    path: '/test-multipart',
    responses: {
      201: c.type<{
        status: string,
      }>(),
    },
    body: BodySchema,
    contentType: 'multipart/form-data',
  },
});

const app = Fastify();
app.register(FastifyMultipart);

const s = initServer();

const router = s.router(contract, {
  testMultipart: async ({ body }) => {
    return {
      status: 201,
      body: {
        status: "OK"
      },
    };
  },
});

app.register(s.plugin(router));

const start = async () => {
  try {
    await app.listen({ port: 3000 });
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

start();