// 서버 생성
// http 모듈 불러오기

const http = require("http");
const fs = require("fs");

// createsever callback 함수
// 서버에 요청이 들어볼 때마다 nodeJS가 호출하게 됨
// EDA 표현 기법
// http.createServer(function (req, res) {});
// http.createServer((req, res) => {});

const server = http.createServer((req, res) => {
  //   console.log(req.url, req.method, req.header);
  //   process.exit();
  const url = req.url;
  const method = req.method;
  // 라우터 요청 보내기
  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>Enter Message</title></head>");
    res.write(
      `<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></input></form></body>`
    );
    res.write("</html>");
    return res.end();
  }
  if (url === "/message" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      // message는 key-value 값으로 저장된다.
      const message = parsedBody.split("=")[1];
      fs.writeFileSync("message.txt", message, (err) => {
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
      });
    });
  }
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>My First Page</title></head>");
  res.write("<body><h1>Hello World!</h1></body>");
  res.write("</html>");
  res.end();
});

// 포트 지정
server.listen(3000);
