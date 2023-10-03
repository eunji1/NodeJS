const http = require("http");

const express = require("express");

const app = express();
// 미들웨어 사용
app.use((req, res, next) => {
  console.log("In the middleware!");
  next();
});

app.use((req, res, next) => {
  console.log("In another middleware!");
  // 기본 응답헤더는 text/html
  res.send("<h1>Hello, from Express</h1>");
});

const server = http.createServer(app);

server.listen(3000);
