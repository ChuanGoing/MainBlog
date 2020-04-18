const config = require('config')
const consola = require('consola')
const Router = require('koa-router')
const axios = require('axios')

const router = new Router()

// // 登录路由
// router.post('/login', async (ctx) => {
//     const param = { client_id: 'Grant.Common', client_secret: 'ClientSecret' }

//     console.log('ctx.data=', ctx)

//     Object.assign(param, ctx.request.body)

//     const url = config.get('login_url')

//     const paramStr = []
//     for (const key in param) {
//         paramStr.push(
//             `${encodeURIComponent(key)}=${encodeURIComponent(param[key])}`
//         )
//     }
//     let result
//     try {
//         console.log('参数:'+paramStr)
//         result = await axios.post(url, paramStr.join('&'))
//     } catch (err) {
//         consola.error(err)
//         ctx.status = 400
//         if (err.response) {
//             ctx.body = err.response.data
//         }
//         return
//     }
//     // eslint-disable-next-line camelcase
//     const { access_token, expires_in } = result.data
//     // eslint-disable-next-line camelcase
//     if (access_token) {
//         ctx.cookies.set('access_token', access_token, {
//             // eslint-disable-next-line camelcase
//             maxAge: expires_in * 1000,
//             httpOnly: false
//         })
//         ctx.status = 200
//         ctx.body = result.data
//     } else {
//         ctx.status = 400
//     }
// })

router.get('/login', async (ctx) => {
    console.log('get ctx.data=', ctx)
   console.log('querystring=',ctx.querystring)
    ctx.status = 200
    ctx.body = 'This is a result'

})

// 登录路由
router.post('/login', async (ctx) => {
    const param = { client_id: 'Grant.Common', client_secret: 'ClientSecret' }
    console.log('post ctx.data=', ctx)
    Object.assign(param, ctx.request.body)
    const url = config.get('login_url')
    const paramStr = []
    for (const key in param) {
        paramStr.push(
            `${encodeURIComponent(key)}=${encodeURIComponent(param[key])}`
        )
    }
    let result
    try {
        console.log('url=', url)
        console.log('paramStr=', paramStr)
        result = await axios.post(url, paramStr.join('&'))
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