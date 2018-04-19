var koa = require('koa')
var serve = require('koa-static');
const app = new koa();
const PORT = 8000;
app.use(serve("./static",{maxage:3153600000}))
app.listen(PORT);
console.log('listener on ',PORT)
