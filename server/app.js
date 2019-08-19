/*
 * @Description: In User Settings Edit
 * @Author: YOUNGmaxer
 * @Date: 2019-08-18 23:28:26
 * @LastEditTime: 2019-08-18 23:45:05
 * @LastEditors: Please set LastEditors
 */
const Koa = require('koa');
const router = require('./routers');
const bodyParser = require('koa-bodyparser');
const session = require('koa-session');
const app = new Koa();

app.keys = ['some secret hurr'];

const CONFIG = {
  key: 'koa:sess',
  maxAge: 86400000,
  autoCommit: true,
  overwrite: true,
  httpOnly: true,
  signed: true,
  rolling: false,
  renew: false
};

app.use(session(CONFIG, app));

app.use(bodyParser());

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3000);