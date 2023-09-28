# Section 4: 개선된 개발 워크플로우 및 디버깅

### 42. NPM 스크립트의 이해
이제까지는 node app.js 를 실행해야 파일을 실행시킬 수 있었다.

npm start
```bash
npm init
```

### 44. 전역 기능 vs 코어모듈 vs 제 3자 모듈
- 전역기능: const나 founction 같은 키워드 및 process 등의 전역객체
- 코어 Node.js 모듈: 파일 시스템 모듈('fs'), 경로 모듈('path'), HTTP 모듈 ('http) 등
- 제 3자 모듈: npm install을 통해 어떤 종류의 기능도 설치 가능

