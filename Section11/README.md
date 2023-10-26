# Section 10: SQL 소개

### 135. 모듈 소개

- SQL NoSQL 알아보기

### 136. 데이터 베이스 선택하기

- 우리의 목표: 데이터를 저장하고 쉽게 접근가능하게 하기
  - 데이터 베이스 사용

|                    |                                                                 |                                   |
| ------------------ | --------------------------------------------------------------- | --------------------------------- |
|                    | SQL                                                             | NoSQL                             |
| SQL과 NoSQL의 차이 | e.g. MySQL                                                      | e.g. MongoDB                      |
|                    | Data uses Schemas                                               | Schema-less                       |
|                    | Relations                                                       | No relations                      |
|                    | Data is disreibuted across multiple tables                      | 중첩된 문서작성 -> nesty          |
|                    | Horizontal scaling이 어렵다.<br> Vertical scaling is possible   | Both Horizontal Vertical possible |
|                    | 매초 다수 혹은 수천건의 쿼리를 읽고 쓰면 문제가 발생할 수 있다. | 읽고 쓰기에 좋은 성능             |

### 140. 앱을 SQL 데이터베이스에 연결하기

```bash
npm install --save mysql2
```

`/util/datebase`

```js
const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "node-complete",
  password: "0000",
});

module.exports = pool.promise();
```

- pool에 유저 정보를 저장한다.
- - createPool:

execute method

```js
// products query 가져오기
db.execute("SELECT * FROM products");

// (WHERE) product.id가 id 와 같은 products query 가져오기
db.execute("SELECT * PROM products WHERE products.id = ?, [id]");

// 데이터 삽입 method
db.execute(
  "INSERT INTO products (title, price, imageUrl, description) VALUES (?, ?, ?, ?)",
  [this.title, this.price, this.imageUrl, this.description]
);
```

### 참고

- [MySQL/SQL에 대해 전반적으로 알아보기](https://www.w3schools.com/sql/)
- [Node MySQL 패키지에 대해 알아보기](https://github.com/sidorares/node-mysql2)

# Section 11: Sequelize의 이해

### 150. Sequelize란?

- An Object-Relational Mapping Library
- User라는 객체를 작성하면 users 테이블을 자동으로 mapping
  - X `INSERT INTO users VALUE(,,,)`
  - O `const user = User.create({,,,})`

### 151. 데이터베이스에 연결

```bash
npm install --save sequelize
```

- [x] : _MySQL 데이터베이스에 저장된 product 테이블을 삭제해야한다._

### 152. 모델 정의

```js
const Sequelize = require("sequelize");

const sequelize = require("../util/database");

const Product = sequelize.define("product", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  // ...
});

modules.exports = Product;
```

### 155. 필독 Sequelize 5의 findById()

유의사항.

- Sequelize v5 이용 시, 강의에서 사용할 `findById()` 대신 `findByPk()`를 사용합니다.
- 둘은 같은 방식으로 사용하기 때문에, 단순히 모든 `findById()` 를 `findByPk()`로 대체하기만 하면 되죠.

### 162. 일대다 관계 추가하기

- Associations
  - 장바구니(Cart)
    - product 여러 장바구니를 가짐
    - user 하나의 장바구니를 가짐
  - 물건(Order)
    - product 하나의 물건을 가짐
    - user 여러 물건을 가짐

### 172. 장바구니 상품을 주문 상품으로 저장하기

```js
// controllers/shop

req.user.createOrder();
```

- order model을 불러올 필요없이 `user.createOder` 면 자동으로 불러와진다.

### 174. 마무리

SQL

- 엄격한 데이터 스키마와 데이터베이스 관계
  Sequelize
- SQL 쿼리 메뉴얼 대신에 node.js 코드에 맞추어 js 객체 형식으로 사용

### 175. 참고자료

- [Sequelize 공식 참고자료](http://docs.sequelizejs.com/)
