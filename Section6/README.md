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