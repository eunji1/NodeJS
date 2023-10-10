# Section 7: 모델 뷰 컨트롤러(MVC)

### 96. 모듈 소개
- 웹 애플리케이션과 백엔드 애플리케이션 구축
- 코드 구조화 패턴(MVC패턴)

### 97. MVC란?
- Separation od Concerns: 코드가 각 기능을 가져 어떤 부분이 어떤 작업을 책임지고 있는지 아는 것
- MVC: Model View Controller
  - Model: 데이터를 나타내는 코드의 한 부분, 데이터 관련 작업(save, fetch)
  - View: 사용자가 보는 화면, 애플리케이션과 별개된 템플릿
  - Controller: Model과 View의 연결점, contain "in between" logic

### 105. 참고자료
[MVC 더 알아보기](https://developer.mozilla.org/en-US/docs/Glossary/MVC)

#### 요약

1. Model: Manages data and business logic.
2. View: Handles layout and display.
3. Controller: Routes commands to the model and view parts.

쇼핑몰을 예로 들면, 우리가 원하는 건 상품의 이름, 가격 퀄리티일 것이다. 또 다른 요소일 수도 있지만,. 이와 같을 때 MVC를 사용하면 우리는 이 기능을 어떤 식으로 강화할 수 있을 지 묘사할 것이다.
![](https://developer.mozilla.org/en-US/docs/Glossary/MVC/model-view-controller-light-blue.png)
