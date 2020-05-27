const config = require('config')
const consola = require('consola')
const Router = require('koa-router')
const axios = require('axios')
const https = require("https")


const router = new Router()

const agent = new https.Agent({
    rejectUnauthorized: false
});

// 登录路由
router.post('/login', async (ctx) => {
    const param = { client_id: 'Grant.Common', client_secret: 'ClientSecret' }
    Object.assign(param, ctx.request.body)
    const url = config.get('login_url')
    consola.info(url)
    const paramStr = []
    for (const key in param) {
        paramStr.push(
            `${encodeURIComponent(key)}=${encodeURIComponent(param[key])}`
        )
    }
    let result
    try {
        result = await axios.post(url, paramStr.join('&'), { httpsAgent: agent })
    } catch (err) {
        consola.error(err.response)
        ctx.status = 400
        if (err.response) {
            ctx.body = err.response.data
        }
        return
    }
    // eslint-disable-next-line camelcase
    const { access_token, expires_in } = result.data
    // eslint-disable-next-line camelcase
    if (access_token) {
        ctx.cookies.set('access_token', access_token, {
            // eslint-disable-next-line camelcase
            maxAge: expires_in * 1000,
            httpOnly: false
        })
        ctx.status = 200
        ctx.body = result.data
    } else {
        ctx.status = 400
    }
})

// 注销路由
router.post('/logout', (ctx) => {
    ctx.cookies.set('access_token', '', {
        maxAge: -1
    })
    ctx.status = 200
})

module.exports = { router }