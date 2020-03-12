const Fastify = require('fastify')

const server = Fastify({ logger: 'info' })
server.get('/', (_request, reply) => {
  reply.send({
    hello: 'guys',
    timestamp: Date.now(),
    dbPass: process.env.DB_PASSWORD,
    gameProperties: process.env['game.properties']
  })
})

server.get('/throw', (_request, reply) => {
  throw new Error('Shutup!!')
  reply.send({ hello: 'guys', timestamp: Date.now() })
})

server.listen(3000, '0.0.0.0', err => {
  if (err) throw err
})
