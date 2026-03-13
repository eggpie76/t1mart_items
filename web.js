const express = require("express");
const http = require("http");

var text = "express test 03: ";
const app = express();

// 바코드로 제품 정보 검색 API
app.get("/good/:barcode", (req, res) => {
    const barcode = req.params.barcode;
    text += barcode
});

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  text += ", ok";
  res.end(JSON.stringify(text));
});

const PORT = process.env.PORT || 8001; // Cafe24에서 제공하는 포트 사용
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});