import Koa from 'koa'
const server = new Koa()
server.listen(9999, () => {
    console.log(`9999`)
})