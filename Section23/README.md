# Section 23: 결제 기능 추가

### 354. 모듈 소개

- 간단한 체크아웃 페이지 (사용자의 신용카드 정보를 수집해 가상으로 청구하는 단계)
- 애플리케이션과 결제를 통합하는 과정

### 355. 지불 방식

- Collect Payment Method : 카드 데이터 수집
- Verify Payment Method : 신뢰성
- Charge Payment Method
- Manage Payments : 사기결제, 분쟁 등 관리
- Process Order in App : 서버측에서 주문 처리

- 결제시스템은 법적, 기술적 측면으로 까다로워서 Stripe라는 결제 서비스 아웃소싱을 이용

### 357. 앱에서 stripe 사용하기

```js
exports.getCheckout = (req, res, next) => {
  let products;
  let total = 0;
  req.user
    .populate("cart.items.productId")
    .execPopulate()
    .then((user) => {
      products = user.cart.items;
      total = 0;
      products.forEach((p) => {
        total += p.quantity * p.productId.price;
      });

      return stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: products.map((p) => {
          return {
            name: p.productId.title,
            description: p.productId.description,
            amount: p.productId.price * 100,
            currency: "usd",
            quantity: p.quantity,
          };
        }),
        success_url:
          req.protocol + "://" + req.get("host") + "/checkout/success", // => http://localhost:3000
        cancel_url: req.protocol + "://" + req.get("host") + "/checkout/cancel",
      });
    })
    .then((session) => {
      res.render("shop/checkout", {
        path: "/checkout",
        pageTitle: "Checkout",
        products: products,
        totalSum: total,
        sessionId: session.id,
      });
    });
};
```

- `stripe.checkout.sessions.create` 결제 정보 입력

### 358. 참고자료

- [예시, RESTful API 만들기 참고자료](https://stripe.com/docs)
