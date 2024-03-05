# Section 14: 세션 및 쿠키

### 230. 모듈 소개

- 메모리나 클라이언트(브라우저)에 데이터 저장하는 메커니즘
- 세션과 쿠키는 웹 개발에서 중요한 구조체 혹은 기술로 Node.js에서도 작동한다.

- 쿠키는?
- 세션은?
- 쿠키돠 세션의 사용

### 231. 쿠키란?

![cookie](/Section14/imgs/[14]what_is_cookie.png)

- 유저(Browser)와 서버(Node.js) 간에 정보를 저장하는 수단?
- User가 Request를 보내면 서버에서는 Response Header에 쿠키 데이터를 담아 보낼 수 있다.
- 주로 로그인, 인증 토큰을 보내어 클라이언트 측에 저장된다.

### 237. 쿠키 구성하기

```ts
// controllers/auth.js
exports.postLogin = (req, res, next) => {
  res.setHeader("Set-Cookie", "loggedIn=true;");
};
```

- 쿠키는 Header의 Set-Cookie에 담아져서 보내진다.
- key와 value 쌍으로 보내며, expires를 설정할 수 있다.

### 238. 세션이란?

![](/Section14/imgs/[14]what_is_session.png)

- 세션은 서버에서 데이터 베이스와 연관되어 저장하는 수단이다.
- 쿠키에 암호화된 id를 저장하여 세션에 찾아올 수 있다.
- 즉, 저장된 쿠키 값이 데이터베이스의 특정 ID 와 관련되어 있다는 것을 서버 측에서만 확인 할 수 있도록 암호화된 방식을 사용
- 쿠키와는 달리 브라우저 내부에서는 변경 할 수 없다.

### 239. 세션 미들웨어 초기화

```bash
npm install --save express-session
```

```ts
// 미들웨어 등록
app.use(
  session({ secret: "my secret", resave: false, saveUninitialized: false })
);
```

- ID를 비밀리에 쿠키에 저장하는 해시를 등록할 때 사용
- `resave:false` 세션이 변경 되었을 때만 저장
- `saveUninitialized:false` 저장할 필요가 없는 요청의 경우 아무 세션도 저장되지 않도록 함

### 241. MongoDB를 이용하여 세션 저장하기

```bash
npm install --save connect-mongodb-session
```

- 데이터 베이스에 저장되게 설정

```ts
const store = new MongoDBStore({
  uri: MONGODB_URI,
  collection: "sessions",
});
```

- 스토어 설정

### 247. 마무리

- Cookies
  - 클라이언트(브라우저)에 데이터를 저장하는 용도이다.
  - 하지만 사용자가 볼 수 있으므로 중요한 데이터는 저장하면 안된다.
  - Session쿠키와 Permanent쿠키
    - Session 쿠키: 브라우저가 닫히면 없어짐
    - Permanent 쿠키: expire을 설정할 수 있음
- Session
  - 서버에 데이터 저장
  - 세션에는 어떤 것도 저장 할 수 있는데, 주로 사용자 데이터나 인증 여부를 저장한다.
  - 세션을 식별하는데 사용하는 쿠키가 있다.(세션쿠키와는 다름)

### 249. 참고자료

- [세션에 대한 자세한 정보](https://www.quora.com/What-is-a-session-in-a-Web-Application)

- [쿠키에 대한 자세한 정보](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies)

- [Express-session 공식 참고자료](https://github.com/expressjs/session)
