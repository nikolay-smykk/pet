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
  },
  handler: async (request, reply) => {
    reply.send(items);
  }
};

const getItemOpts = {
  schema: {
    response: {
      200: {
        ...Item
      }
    }
  },
  handler: async (request, reply) => {
    const { id } = request.params;
    const item = items.find(item => item.id === Number(id));
    if (!item) {
      reply.code(404).send({ error: "Item not found" });
    }
    reply.send(item);
  }
};

function itemRoutes(fastify, options, done) {
  // GET ALL ITEMS
  fastify.get("/items", getItemsOptions);

  // GET SINGLE ITEM
  fastify.get("/items/:id", getItemOpts);

  done();
}

module.exports = itemRoutes;
