### 26. Node 서버 생성

NodeJS에서는 기본으로 탑재된 몇개의 모듈이 있다.

코어 모듈 - http, https, fs, path, os
- https: 서버 출시
- https: 암호화 ssl

### 27. Node의 라이프사이클 및 이벤트 루프
<img src="./imgs/nodejs_eventloop.PNG"></img>

**이벤트 루프**는 이벤트 리스너가 남아있는 한 계속해서 작동한다.<br>
createServer로 만든 이벤트 리스너는 서버가 계속 운영되기위해 제거되지 않아야한다.<br>
코어 노드 애플리케이션은 이 이벤트 루프에 의해 관리된다.<br>
이 이벤트 루프는 싱글 스레드 자바스크립트 특징을 가진다.<br>
제거해야한다면  proseed.exit를 사용

### 31. 요청과 응답 헤더
요청, 응답 데이터를 A에서 B로 이동하기위해 Http 헤더를 추가해야한다.<br>
사용가능한 헤더와 각각의 역할을 간략하게 알아보려면 다음을 참고<br>
[mdn web docs 보러가기](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers)