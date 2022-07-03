const fastify = require("fastify")({ logger: true });
const items = require("./items");

function itemRoutes(fastify, options, done) {
  fastify.get("/items", async (request, reply) => {
    reply.send(items);
  });
  fastify.get("/items/:id", async (request, reply) => {
    const { id } = request.params;
    const item = items.find(item => item.id === Number(id));
    if (!item) {
      reply.code(404).send({ error: "Item not found" });
    }
    reply.send(item);
  });

  done();
}

module.exports = itemRoutes;
