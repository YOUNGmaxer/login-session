/*
 * @Description: In User Settings Edit
 * @Author: YOUNGmaxer
 * @Date: 2019-08-18 23:28:26
 * @LastEditTime: 2019-08-18 23:45:05
 * @LastEditors: Please set LastEditors
 */
const Koa = require('koa');
const app = new Koa();

app.use(async ctx => {
  ctx.body = 'Hello World!';
});

app.listen(3000);