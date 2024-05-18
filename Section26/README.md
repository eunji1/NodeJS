# Section 26: Node.js내 Async/Await 이해

### 399. 모듈 소개

### 400. Async/Await란

- Asynchronous Requests in a Synchronous Way

### 401. Async/Await 변환

```js
// feed.js

exports.getPosts = async (req, res, next) => {
  const currentPage = req.query.page || 1;
  const perPage = 2;
  let totalItems;
  try {
    const totalItems = await Post.find().countDocuments();
    const posts = await Post.find()
      .skip((currentPage - 1) * perPage)
      .limit(perPage);

    res.status(200).json({
      message: "Fetched posts successfully.",
      posts: posts,
      totalItems: totalItems,
    });
  } catch (error) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};
```

### 403. 사용자 이름이 없다면

사용자 이름이 없다면!
프론트엔드에 사용자명이 없다는 걸 눈치채셨나요?

다음 모듈에 함께 고칠 예정이지만, 지금 바로 고치고 싶은 분들을 위해 설명드리겠습니다.

사용자명이 없는 이유는 컨트롤러 액션에서 게시물 데이터를 가져올 때 실수로 populate('creator') 단계를 제거했기 때문이에요.

예시: 게시물을 가져올 때, 원래 사용한 스니펫은 다음과 같습니다.

```js
Post.find()
  .countDocuments()
  .then((count) => {
    totalItems = count;
    return Post.find()
      .skip((currentPage - 1) * perPage)
      .limit(perPage);
  });
```

이걸 다음과 같이 변경하세요.

```js
Post.find()
  .countDocuments()
  .then((count) => {
    totalItems = count;
    return Post.find()
      .populate("creator")
      .skip((currentPage - 1) * perPage)
      .limit(perPage);
  });
```

### 403. 참고자료

- [Async-await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)
