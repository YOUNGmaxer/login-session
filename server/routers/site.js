const router = require('koa-router')();
const fs = require('fs');
const path = require('path');

const loginPath = path.join(__dirname, '../../client/login.html');

router.get('/', ctx => {
  let sess = ctx.session;
  let user = sess.user;
  let isLogined = sess.isLogined;

  if (isLogined) {
    ctx.body = user;
  } else {
    ctx.response.redirect('/login');
  }
});

router.get('/login', ctx => {
  ctx.type = 'text/html';
  ctx.body = fs.createReadStream(loginPath);
});

module.exports = router;