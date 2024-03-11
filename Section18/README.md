# Section 18: 검증 이해

### 289. 모듈 소개

- 사용자 입력 유효성 검사

- 유효성 검사의 중요성
- 구현 방법

### 290. 검증 사용 이유

- 예를들어 회원가입, 로그인, 상품 폼이 있으면 애플리케이션이 커질 수록 더 많은 사용자 데이터가 필요하게 된다.
- => 사용자 또는 웹 사이트 방문자가 상호작용할 폼이 더 필요하게 된다.
- DB에 저장하기 이전에 유효성 검사 단계
-

### 292. 설정 및 검증

```bash
npm install --save express-validator
```

```js
// routes/auth
const { check, body } = require("express-validator/check");

router.post(
  "/signup",
  [
    check("email")
      .isEmail()
      .withMessage("Please enter a valid email.")
      .custom((value, { req }) => {
        return User.findOne({ email: value }).then((userDoc) => {
          if (userDoc) {
            return Promise.reject(
              "E-Mail exists already, please pick a different one."
            );
          }
        });
      })
      .normalizeEmail(),
    body(
      "password",
      "Please enter a password with only numbers and text and at least 5 characters."
    )
      .isLength({ min: 5 })
      .isAlphanumeric()
      .trim(),
    body("confirmPassword")
      .trim()
      .custom((value, { req }) => {
        if (value !== req.body.password) {
          throw new Error("Passwords have to match!");
        }
        return true;
      }),
  ],
  authController.postSignup
);
```

### 305. 참고자료

- [Express-Validator 참고자료](https://express-validator.github.io/docs/)

- [Validator.js(백그라운드에서 사용됨) 참고자료](https://github.com/chriso/validator.js)
