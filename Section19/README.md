# Section 19: 오류 처리

### 306. 모듈 소개

- 다양한 오류 유형 살펴보기
- 오류 처리

### 307. 오류의 유형과 처리

- 오류가 났다고 해서 앱이 고장나는 것은 아니다!
- -> 오류를 알맞게 처리해야함

- 오류의 유형
  - Technical/ Network Errors
    - e.g. MongoDB server is down
    - Show error page to user
  - Expected Errors
    - e.g. File can't be read, database operation fails
    - inform user, possibly retry
  - Bugs/ Logical Errors
    - e.g. User object used when it doesn't exist
    - Fix during development

### 310. 오류 만들기

```js
// controllers/error
exports.get500 = (req, res, next) => {
  res.status(500).render("500", {
    pageTitle: "Error!",
    path: "/500",
    isAuthenticated: req.session.isLoggedIn,
  });
};
```

### 311. 오류 페이지 반환

```js
// app
app.get("/500", errorController.get500);
```

### 315. 상태코드

- Errors & Http Response Codes

- 2xx(Success)
  - 200 : Operation succeeded
  - 201 : Success, resource created
- 3xx(Redirect)
  - 301 : Moved permanently
- 4xx(Client-side error)
  - 401 : Not authenticated
  - 403 : Not authorized
  - 404 : Not found
  - 422 : Invalid input
- 5xx(Server-side error)
  - 500 : Server-side error

### 316. 사용가능한 상태 코드

사용 가능한 상태 코드
상태 코드는 어떤 것들이 있을까요?

MDN에 참고할 만한 리스트가 있습니다. https://developer.mozilla.org/en-US/docs/Web/HTTP/Status

짧게 소개하자면

1×× 정보전달

100 Continue

101 Switching Protocols

102 Processing

2×× 성공

200 OK

201 Created

202 Accepted

203 Non-authoritative Information

204 No Content

205 Reset Content

206 Partial Content

207 Multi-Status

208 Already Reported

226 IM Used

3×× 리디렉션

300 Multiple Choices

301 Moved Permanently

302 Found

303 See Other

304 Not Modified

305 Use Proxy

307 Temporary Redirect

308 Permanent Redirect

4×× 클라이언트 오류

400 Bad Request

401 Unauthorized

402 Payment Required

403 Forbidden

404 Not Found

405 Method Not Allowed

406 Not Acceptable

407 Proxy Authentication Required

408 Request Timeout

409 Conflict

410 Gone

411 Length Required

412 Precondition Failed

413 Payload Too Large

414 Request-URI Too Long

415 Unsupported Media Type

416 Requested Range Not Satisfiable

417 Expectation Failed

418 I'm a teapot

421 Misdirected Request

422 Unprocessable Entity

423 Locked

424 Failed Dependency

426 Upgrade Required

428 Precondition Required

429 Too Many Requests

431 Request Header Fields Too Large

444 Connection Closed Without Response

451 Unavailable For Legal Reasons

499 Client Closed Request

5×× 서버 오류

500 Internal Server Error

501 Not Implemented

502 Bad Gateway

503 Service Unavailable

504 Gateway Timeout

505 HTTP Version Not Supported

506 Variant Also Negotiates

507 Insufficient Storage

508 Loop Detected

510 Not Extended

511 Network Authentication Required

599 Network Connect Timeout Error

출처: https://httpstatuses.com/

### 317. 마무리

- Types or Erros & Handling Errors
  - 기술적 에러 : throw 키워드로 오류 출력
  - 에러 핸들링 : if-checks, try-catch, then()-catch()

### 318. 참고자료

- [Express.js의 오류 처리법 - 공식 참고자료: Docs](https://expressjs.com/en/guide/error-handling.html)

```js
// catching errors
app.get("/", (req, res) => {
  throw new Error("BROKEN"); // Express will catch this on its own.
});

// writing error handlers
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});
```
