const router = require('koa-router')();
const site = require('./site');
const api = require('./api');

router.use(site.routes());
router.use('/api', api.routes());

module.exports = router;