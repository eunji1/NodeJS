const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
  // 기본 응답헤더는 text/html
  res.send("<h1>Hello, from Express</h1>");
});

module.exports = router;
