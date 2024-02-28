# Section 12: NoSQL 작업 밒 MongoDB 사용

### 199. 장바구니 항목 표시하기

```js
const db = getDb();
const productIds = this.cart.items.map((i) => {
  return i.productId;
});
return db.collection("products").find({ _id: { $in: productIds } });
```

- `$in` : db의 "products" 테이블에서 productIds ID 중 하나를 가진 모든 요소를 가져옴

### 206. 마무리

- NoSQL / MongoDB
  - SQL 데이터 베이스의 대안으로, 전혀 다른 철학을 가짐
  - 엄격한 스키마 없고, 관계도 적어서 수많은 테이블에 데이터를 저장하지 않아도 된다.
  - 대신 데이터를 내장하거나 참조를 사용
  - 더 유연하고 데이터를 가져오는 형식대로 저장해서 데이터가 이미 필요한 형식을 가지고 있으므로 비교적 간단한 쿼리 사용
- MongoDB 사용
  - 공식 MongoDB 드라이버를 사용해야함
  - `insertOne()`, `find()`, `updateOned()`, `deleteOne()` 과 같은 유용한 명령어로 CRUD 연산을 만들 수 있다.

### 207. 참고 자료

- [MongoDB 공식 참고자료](https://docs.mongodb.com/manual/core/security-encryption-at-rest/https://docs.mongodb.com/manual/)

- [SQL vs NoSQL](https://academind.com/learn/web-dev/sql-vs-nosql/)

- [MongoDB에 대해 더 알아보기](https://academind.com/learn/mongodb)
