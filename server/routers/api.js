const router = require('koa-router')();
const validateUser = require('../common/validate').validateUser;

router.post('/login', ctx => {
  const loginName = ctx.request.body.name;
  const loginPassword = ctx.request.body.password;
  ctx.type = 'json';
  if (validateUser(loginName, loginPassword)) {
    ctx.session.user = loginName;
    ctx.session.isLogined = true;

    ctx.body = { code: 1, msg: '登录成功' };
  } else {
    ctx.body = { code: -1, msg: '账户或密码错误'};
  }
});

module.exports = router;