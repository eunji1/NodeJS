# Section 13: Mongoose 작업

### 209. 모듈 소개

- Mongoose

  - SQL에 Sequelize가 있었던 것처럼 MongoDB에는 Mongoose가 있다.
  - 쿼리 대신 데이터를 다룰 수 있도록 만든다.

- Mongoose가 무엇인지
- Node.js Apps에서 이용하는 방법

### 210. Mongoose란?

![](./imgs/Mongoose_1.png)

- Mongoose는 ODM(Object-Document Mappong Library) 이다.
  - Sequelize는 ORM(Object Relational Mapping Library)
- 단순히 관계형 데이터 베이스가 아니라 문서 관점인 문서 데이터 베이스
- Sequelize처럼 Mongoose는 모델을 정의해서 모든 쿼리가 배후에서 작성되도록 돕는다.

![](./imgs/Mongoose_2.png)

- Mongoose의 핵심 개념은 스키마와 모델을 다뤄 데이터가 어떻게 보일지 정의한다.
- 또 인스턴스로 모델에 예시를 제시해서 계획에 따라 JavaScript 객체를 생성할 수 있도록 한다.
- 설정을 마치면 User 객체 및 모델을 통해 데이터베이스에 쿼리를 실행한다.

### 211. Mongoose로 MongoDB 서버에 연결하기

```bash
npm install --save mongoose
```

### 219. Mongoose 에서 관계 사용하기

!! 1. ref

```ts
// user.js
const userSchema = new Schema({
  // 각자 documents들의 _id는 자동 생성된다.
  // ..
  cart: {
    items: [
      {
        productId: {
          type: Schema.Types.ObjectId,
          ref: "Product", // 관계 정의하기
          required: true,
        },
        quantity: { type: Number, required: true },
      },
    ],
  },
});

// product.js
const productSchema = new Schema({
  // ..
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User", // 관계 정의하기
    required: true,
  },
});
```

- mongoose는 다른 관계형 데이터 베이스들과는 다르게 모델끼리의 관계를 직접 설정할 수 없다.
- 하지만 다른 documents들이 서로를 참조하게 설정할 수 있다.
- ref를 주어 참조할 모델명을 입력하면 해당 모델의 documents를 가져올 수 있다.

### 221. 장바구니 작업하기

```ts
// controllers/shop.js
exports.getCart = (req, res, next) => {
  req.user
    .populate("cart.items.productId")
    .execPopulate()
    .then((user) => {
      const products = user.cart.items;
      res.render("shop/cart", {
        path: "/cart",
        pageTitle: "Your Cart",
        products: products,
      });
    })
    .catch((err) => console.log(err));
};
```

- `populate()`를 사용하여 모델의 정보를 불러올 수 있다.

### 255. 모든 주문 관련 데이터 저장하기

```ts
// controllers/shop.js
.then(user => {
      const products = user.cart.items.map(i => {
        return { quantity: i.quantity, product: { ...i.productId._doc } };
      });
      // ...
    })
```

- `_doc` : 그 안에 있는 데이터에만 접근해서 가져온 document의 모든 문서를 뽑아온다.

### 228. 마무리

### 229. 참고자료

- [Mongoose 공식 참고자료](https://mongoosejs.com/docs/)
