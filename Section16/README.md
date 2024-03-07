# Section 16: 이메일 전송

### 250. 모듈 소개

- 이메일 전송 기능 구현

### 273. Nodemailer 사용해 이메일 보내기

```ts
// controller/auth
const nodemailer = require("nodemailer");
const sendgridTransport = require("nodemailer-sendgrid-transport");

const transporter = nodemailer.createTransport(
  sendgridTransport({
    auth: {
      api_key: USER_KEY,
    },
  })
);

// ... postSignup transporter 실행하기
        .then(result => {
          res.redirect('/login');
          return transporter.sendMail({
            to: email,
            from: 'shop@node-complete.com',
            subject: 'Signup succeeded!',
            html: '<h1>You successfully signed up!</h1>'
          });
        })
```

### 275. 대형 앱의 잠재적인 한계

- 이메일 발송과 리다이렉트 위치의 적합
- 요청이 많은 애플리케이션의 경우에는 리다이렉트되기 전에 이메일 발송을 기다리게 되므로 동시에 메일을 보내는 것이 좋다.
- 다른 방식으로는 서버에서 시간을 x분 x초로 구성하여 새로 가입하는 사용자를 찾아서 이메일을 발송할 수 있다.

### 276. 참고자료

- [Nodemailer 공식 참고자료](https://nodemailer.com/about/)

- [SendGrid 공식 참고자료](https://sendgrid.com/docs/)
