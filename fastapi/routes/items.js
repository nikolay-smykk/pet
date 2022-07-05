const items = require("../src/items");
const uuidv4 = require("uuid").v4;
// OPTIONS
const uuid = uuidv4();

const Item = {
  type: "object",
  properties: {
    id: { type: "string" },
    name: { type: "string" },
    price: { type: "string" },
    key: { type: "string", default: uuidv4() }
  }
};
const getItemsOptions = {
  schema: {
    response: {
      200: {
        type: "array",
        items: { ...Item }
      }
    }
  }
};

const getItemOpts = {
  schema: {
    response: {
      200: {
        ...Item
      }
    }
  }
};

function itemRoutes(fastify, options, done) {
  // GET ALL ITEMS
  fastify.get("/items", getItemsOptions, async (request, reply) => {
    reply.send(items);
  });

  // GET SINGLE ITEM
  fastify.get("/items/:id", getItemOpts, async (request, reply) => {
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
