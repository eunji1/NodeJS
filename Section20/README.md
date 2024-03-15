# Section 20: 파일 업로드 및 다운로드

### 319. 모듈 소개

- 파일 업로드 방법
- 파일 다운로드 (변환 방법)

### 321. 폼 데이터 다루기

```js
// app
app.use(bodyParser.urlencoded({ extended: false }));
```

- bodyParser의 urlencoded를 사용하여 url 형식을 판별
- multipart/form-data로 서버측에 form 데이터로 제출 요청

### 322. multer로 파일 업로드 다루기

```js
// app
const multer = require("multer");

// image 저장소 옵션
const fileStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, new Date().toISOString() + "-" + file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/jpeg"
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

app.use(
  multer({ storage: fileStorage, fileFilter: fileFilter }).single("image")
);
```

### 331. 스트리밍 데이터 vs 프리로드 데이터

```js
// controllers/shop
// getInvoices

// 1. 프리로드 데이터
fs.readFile(invoicePath, (err, data) => {
  if (err) {
    return next(err);
  }
  res.setHeader("Content-Type", "application/pdf");
  res.setHeader(
    "Content-Disposition",
    'inline; filename="' + invoiceName + '"'
  );
  res.send(data);
});
const file = fs.createReadStream(invoicePath);

file.pipe(res);

// 2. 스트림 데이터
const file = fs.createReadStream(invoicePath);
res.setHeader("Content-Type", "application/pdf");
res.setHeader("Content-Disposition", 'inline; filename="' + invoiceName + '"');
file.pipe(res);
```

- 프리로드 데이터
  - 파일 데이터를 메모리로 읽어 들인 후, 응답과 함께 반환
  - 파일이 크다면 서버의 메모리가 오버플로우 될 수 있다.
- 스트림 데이터
  - 노드가 모든 데이터를 메모리로 읽어 들이지 않고 그때그때 클라이언트로 스트리밍해서 한 청크의 데이터만 저장
  - 메모리가 클 경우에 권장되는 방법

### 334. 파일 삭제하기

```js
const deleteFile = (filePath) => {
  fs.unlink(filePath, (err) => {
    if (err) {
      throw err;
    }
  });
};
```

### 337. 참고자료

- [MMulter 공식 참고자료](https://github.com/expressjs/multer)

- [스트리밍 파일](https://medium.freecodecamp.org/node-js-streams-everything-you-need-to-know-c9141306be93)

- [PDFKit으로 PDF 생성하는 법](http://pdfkit.org/docs/getting_started.html)
