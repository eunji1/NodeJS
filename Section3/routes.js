const fs = require("fs");

const requestHandler = (req, res) => {
  // process.exit();
  // 라우터 요청 보내기
  const url = req.url;
  const method = req.method;

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
};

// export 두가지 방법
module.exports = {
  handler: requestHandler,
};

// exports.handler = requestHandler;
