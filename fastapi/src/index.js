
const PORT = 5000;




const start = async () => {
  try {
    await fastify.listen(PORT);
    fastify.log.info(`server listening on ${fastify.server.address().port}`);
  } catch {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();
