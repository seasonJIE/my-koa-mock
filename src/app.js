const Koa = require('koa');
const app = new Koa();
const data = require("./index.js");
const ip = "0.0.0.0";
const port = 3000

console.info("正在启动 mock server");


app.use(async (ctx, next) => {
  if (ctx.request.path) {
    try{
      const newData = data.filter(function (obj) {
        return obj.url === ctx.request.path;
      });
      await delayer(Math.ceil(Math.random() * 2000))
      ctx.response.body = newData[0].template;
    }
    catch (e) {
      console.log(e)
      await next();
    }
  } else {
    await next();
  }
});

app.listen(port, ip, (err) => {
  if (err) {
    console.log(err)
  } else {
    console.log(`在${ip}:${port}运行`)
  }
});

async function delayer(time = 2000) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, time);
  });
}
