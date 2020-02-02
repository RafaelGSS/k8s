const Fastify = require('fastify')

const server = Fastify({ logger: 'info' })
server.get('/', (_request, reply) => {
  reply.send({ hello: 'world', timestamp: Date.now() })
})

server.listen(3000, '0.0.0.0', err => {
  if (err) throw err
})
