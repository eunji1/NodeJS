# Section 21: Pagination

### 338. 모듈 소개

- fetching Data in Chunk

### 340. 데이터 청크 검색하기

```js
Product.find()
  .countDocuments()
  .then((numProducts) => {
    totalItems = numProducts;
    return Product.find()
      .skip((page - 1) * ITEMS_PER_PAGE)
      .limit(ITEMS_PER_PAGE);
  });
```

### 341. SQL에서 건너뛰기 및 제한

MongoDB 사용 시, 지난 강의에서 본 것처럼 skip()과 limit()을 사용할 수 있습니다.

그럼 SQL에서는 어떻게 작동할까요?

다음 페이지에 SQL 코드에 페이지화(pagination)를 구현할 수 있는 방법이 나와 있어요. https://stackoverflow.com/questions/3799193/mysql-data-best-way-to-implement-paging

간단히 정리하자면 LIMIT 명령어를 사용해 가져오는 데이터의 양을 제한합니다. limit() 과 같은 역할을 하죠. OFFSET 명령어(skip() 대체)와 함께 사용하면, 가져오는 항목의 개수와 생략하는 항목의 개수를 정할 수 있어요.

Sequelize 사용 시, 다음 공식 참고자료를 참고해서 페이지화를 추가하세요.https://sequelize.org/master/manual/model-querying-basics.html
