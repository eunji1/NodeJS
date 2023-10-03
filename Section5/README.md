# Section 5: Express.js 작업

### 59. express.js 설치

```bash
npm install --save express
```

`--save-dev`와 `--save`의 차이
프로덕션 의존성
dev는 개발자 컴퓨터에만 사용하고 싶을 때
우리가 애플리케이션을 배포하면 실행하게 될 모든 서버와 컴퓨터에 설치가 돼야한다.
그런 이유로 프로덕션 의존성을 설치

## 72. 힌트!

다음 강의에서는 다음과 같은 코드를 작성합니다.

```bash
module.exports = path.dirname(process.mainModule.filename);
```
(다음 강의를 진행하면서 왜 이 코드를 사용하는지 설명할게요!)

deprecation warning이 나타나는 것을 유의해야 합니다. 해당 오류가 나타나면, 다음과 같은 코드로 바꾸면 됩니다.

```bash
module.exports = path.dirname(require.main.filename);
```
아주 간단하죠 :)

## 77. 링크

[express.js 공식 사이트](https://expressjs.com/en/starter/installing.html)