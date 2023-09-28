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

### 46. 전역 및 지역 npm 패키지
지난 강의에서 프로젝트에 `nodemon`을 local dependency로 설정했습니다.

local dependency의 장점은 프로젝트를 저장하는 *node_modules 폴더가 없어도* 공유가 가능하다는 거예요. 그 후에 프로젝트에 `npm install`을 실행해서 node_modules 폴더를 재생성합니다. 이렇게 하면 소스 코드만 공유할 수 있어, 공유 프로젝트의 크기가 엄청나게 줄어듭니다.

첨부된 코드 스니펫 역시 같은 방법으로 공유했기 때문에, 추출된 패키지에 `npm install`을 실행해야 코드를 실행할 수 있어요!

Terminal이나 명령줄에는 local dependency가 아니라 글로벌 패키지를 사용하기 때문에, `nodemon app.js`가 작동하지 않을 거라고 알려드렸죠.

지역 레벨에서 실행해도 되니 굳이 필요하지는 않지만, 전역 레벨에 `nodemon`을 설치할 수 있어요. 바로 `npm install -g nodemon`을 이용해서요. 그중 `-g` 플래그는 패키지가 전역 패키지로 추가되게끔 해서, Terminal이나 명령 프롬프트를 포함해 머신 어디에서나 사용할 수 있게 됩니다.