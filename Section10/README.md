# Section 10: SQL 소개

### 135. 모듈 소개
- SQL NoSQL 알아보기

### 136. 데이터 베이스 선택하기
- 우리의 목표: 데이터를 저장하고 쉽게 접근가능하게 하기
  - 데이터 베이스 사용

||||
|---|---|---|
||SQL|NoSQL|
|SQL과 NoSQL의 차이|e.g. MySQL|e.g. MongoDB|
||Data uses Schemas|Schema-less|
||Relations|No relations|
||Data is disreibuted across multiple tables|중첩된 문서작성 -> nesty|
||Horizontal scaling이 어렵다.<br> Vertical scaling is possible|Both Horizontal Vertical possible|
||매초 다수 혹은 수천건의 쿼리를 읽고 쓰면 문제가 발생할 수 있다.|읽고 쓰기에 좋은 성능|

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