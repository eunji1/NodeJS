# Section 6: 동적 콘텐츠 작업 및 템플릿 엔진 추가

### 78. 모듈 소개

- 데이터 관리하기(데이터베이스 없이)
- 동적 콘텐츠 렌더링
- 템플릿 엔진 사용

### 80. 템플릿 엔진 - 개요
이번 파트는 동적 콘텐츠 활용을 위해 템플릿 엔진을 사용할 것이다.
- HTMLish Template 어떤것..??
- 사용가능한 템플릿 엔진
  - EJS
    - `<p><%= name %></p>`
    - use normal HTML and plain JavaScript your templates
  - Pug(Jade)
    - `p #{ name }`
    - use minimal HTML and custom templates language
  - handlebars
    - `<p>{{ name }}</p>`
    - use normal HTML and custom templates language

### 81. Pug 설치 및 구현

```bash
npm install --save ejs pug express-handlebars
```

```js
// 1. pug (내장된 엔진)
app.set('view engine', 'pug');
app.set('views', 'views');
```

### 82. 동적 콘텐츠 출력

**Q. res.render의 의미**
1. res.render
   - view화면을 랜더링하고 랜더링된 html을 클라이언트에 보내주는 역할
   - `res.render(view, [, locals] [, callback])`
2. res.send
   - send에 전해진 argument에 따라서 Content-type이 자동적으로 만들어짐
3. res.json
   - json이 아니어도 json 형식으로 바꾸어 보냄 .Content-type 헤더를 application/JSON으로 고정. 마지막에 res.send() 호출함

### 88. 핸들바 작업

Handlerbars 설치
```bash
npm install --save express-handlebars@3.0
```

```js
// 2. handlebars 내장x, 불러와야함
const expressHbs = require("express-handlebars");

// custom
app.engine(
  "hbs",
  expressHbs({
    layoutsDir: "views/layouts/",
    defaultLayout: "main-layout",
    extname: "hbs",
  })
);
app.set("view engine", "hbs");
app.set("views", "views");
```

### 91. EJS로 작업하기

```js
// ejs
app.set("view engine", "ejs");
app.set("views", "views");
```

### 95. 참고 자료
- [Pug 참고자료](https://pugjs.org/api/getting-started.html)

- [Handlebars 참고자료](https://handlebarsjs.com/)

- [EJS 참고자료](http://ejs.co/#docs)