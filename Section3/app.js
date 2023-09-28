// 서버 생성
// http 모듈 불러오기
const http = require("http");
const routes = require("./routes");

// createsever callback 함수
// 서버에 요청이 들어볼 때마다 nodeJS가 호출하게 됨
// EDA 표현 기법
// http.createServer(function (req, res) {});
// http.createServer((req, res) => {});
const server = http.createServer(routes.handler);

// 포트 지정
server.listen(3000);
