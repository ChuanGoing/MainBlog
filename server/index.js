const http = require('http')
const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const config = require('config')
const { Nuxt, Builder } = require('nuxt')
const consola = require('consola')
const nuxtConfig = require('../nuxt.config.js')
const { router } = require('./routers.js')

const app = new Koa()

async function start() {
    const host = config.get('host') || '0.0.0.0'
    const port = config.get('port') || 3000
    const server = http.Server(app.callback())


    // app.use(async (ctx, next) => {
    //     ctx.set('Access-Control-Allow-Origin', '*')
    //     ctx.set(
    //       'Access-Control-Allow-Headers',
    //       'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild'
    //     )
    //     ctx.set('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS')

    //     if (ctx.method == 'OPTIONS') {
    //       ctx.body = 200
    //     } else {
    //       await next()
    //     }
    //   })

    app.use(bodyParser())
    app.use(router.routes())



    // Instantiate nuxt.js
    nuxtConfig.dev = config.util.getEnv('NODE_ENV') === 'development'
    // 非开发环境移除dev-modules
    if (!nuxtConfig.dev) {
        nuxtConfig.buildModules = []
    }
    const nuxt = new Nuxt(nuxtConfig)
    Object.assign(nuxt.options.server, {
        host,
        port
    })
    // Build in development
    if (nuxtConfig.dev) {
        const builder = new Builder(nuxt)
        await builder.build()
    } else {
        await nuxt.ready()
    }

    app.use((ctx) => {
        ctx.status = 200
        ctx.respond = false // Bypass Koa's built-in response handling
        ctx.req.ctx = ctx // This might be useful later on, e.g. in nuxtServerInit or with nuxt-stash
        nuxt.render(ctx.req, ctx.res)
    })

    server.listen(port, host)

    consola.ready({
        message: `Server listening on http://${host}:${port}`,
        badge: true
    })
}

start()