# Section 25: REST API 작업 - 실용적인 애플리케이션 생성

### 370. 모듈 소개

- Complete Project

- REST API 기획
- CRUD 연산 도입 & REST API endpoints 정의
- 서버측 유효성 검사
- 이미지 업로드 기능
- **인증**

### 371. REST API와 나머지 과정

- 뷰기반의 애플리케이션이 아닌 REST API 구축
- 뷰 대신 JSON 데이터(views 폴더, ejs X)
- 세션과 쿠키 사용 X
- 다른 인증 접근법

### 372. 프론트엔드 설정 이해하기

React.js 프로젝트 시작하기 - SPA

```bach
npm install
```

- 브라우저 측 프로젝트의 경우에도 JS 프로젝트의 디펜던시를 npm 으로 관리
- package.json

### 381. 이미지 이름 및 Windows

다음 강의에서는 REST에서 이미지를 업로드하는 방법을 배울 겁니다.

그전에 Windows 사용자만을 위한 유의사항이 있습니다.

Windows에서 파일 이름에 날짜 문자열을 포함하면 CORS 오류가 나타날 거예요. 이런 오류를 방지하기 위해 코드를 수정해야 합니다.

원래 버전

```js
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "images");
  },
  filename: function (req, file, cb) {
    cb(null, new Date().toISOString() + file.originalname);
  },
});
```

다음 강의에서 위 코드 대신, 아래와 같이 수정합니다.

```js
const { v4: uuidv4 } = require("uuid");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "images");
  },
  filename: function (req, file, cb) {
    cb(null, uuidv4());
  },
});
```

- 이를 위해 uuid 패키지를 설치하도록 다음을 실행하세요.

```bash
npm install --save uuid
```

- 또, 이미지가 프론트엔드에 올바르게 로드되는지 확인하기 위해, feed.js 컨트롤러에 있는 논리도 수정해야 합니다.

createPosts에서, imageUrl 상수를 다음과 같이 바꾸세요.

```js
exports.createPost = (req, res, next) => {
    ...
    const imageUrl = req.file.path.replace("\\" ,"/");
    ...
}
```

- 그 외에도, 추후 추가하는 updatePost 는 다음과 같이 수정합니다.

```js
exports.updatePost = (req, res, next) => {
    ...
    imageUrl = req.file.path.replace("\\","/");
}
```

- MacOS과 Linux의 경우, 본 유의사항을 무시하고 강의 중에 보여드리는 코드를 사용하시면 됩니다.

### 389. 인증 작동 방법

1. 클라이언트에서 서버로 인증데이터(이메일, 비밀번호)를 보낸다.
2. Rest Api는 세션을 사용하지 않고 클라이언트에게 토큰을 반환한다.
3. 토큰: JWT(JSON Web Token)

### 391. 로그인 및 JSON 웹 토큰 (JWT) 생성

```js
const jwt = require("jsonwebtoken");

const token = jwt.sign(
  {
    email: loadedUser.email,
    userId: loadedUser._id.toString(),
  },
  "somesupersecretsecret",
  { expiresIn: "1h" }
);
```
