# Section 9: 동적 라으트 및 고급 모델

### 115. 모듈 소개
- url을 통해 데이터를 제출하거나 전송하여 요청 본문에 대신 넣어보기
- 라우트 매개변수 입력하기 & 쿼리 매개변수 사용
- 모델 강화

### 124. 쿼리 매개변수 사용

```js
// router
router.get("/edit-product/:productId", adminController.getEditProduct);

// controllers
exports.getEditProduct = (req, res, next) => {
  const editMode = req.query.edit;
  if (!editMode) {
    return res.redirect('/')
  }
  res.render("admin/edit-product", {
    pageTitle: "Edit Product",
    path: "/admin/edit-product",
    editing: editMode,
  });
};

```
url에 쿼리 매개변수를 사용하여 페이지 정보를 url에 저장하고 가져올 수 있다.
- `https://www.w.com/page?name=eunji` 처럼 ?뒤에 객체형태의 정보를 입력한다.
- 입력할 정보가 두개 이상이라면 `name=eunji&sex=w` &을 표기해 사용할 수 있다.