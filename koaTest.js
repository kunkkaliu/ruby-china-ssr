/**
 * Created by liudonghui on 2017/10/26.
 */

const Koa = require('koa');
const app = new Koa();

// x-response-time

app.use(async (ctx, next) => {
    console.log(`start set x-response ${ctx.url}`);
    const start = Date.now();
    await next();
    const ms = Date.now() - start;
    ctx.set('X-Response-Time', `${ms}ms`);
    console.log(`end set x-response ${ctx.url}`);
});

// logger

app.use(async (ctx, next) => {
    console.log(`start log ${ctx.url}`);
    const start = Date.now();
    await next();
    const ms = Date.now() - start;
    console.log(`${ctx.method} ${ctx.url} - ${ms}`);
    console.log(`end log ${ctx.url}`);
});

// response

app.use(async ctx => {
    ctx.body = 'Hello World';
});

app.listen(3000);
