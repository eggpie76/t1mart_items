// const express = require("express");
//const mysql = require("mysql2");

// const app = express();

// // MySQL 연결 설정
// const db = mysql.createConnection({
//   host: '10.0.0.1', // Cafe24에서 제공하는 DB 호스트
//   user: 'test1mart', // DB 사용자 이름
//   password: 'backery12!', // DB 비밀번호
//   database: 'test1mart' // DB 이름
// });

// db.connect((err) => {
//     if (err) {
//         console.error("Database connection failed:", err);
//         return;
//     }
//     console.log("Connected to the database.");
// });

// 바코드로 제품 정보 검색 API
// app.get("/good/:barcode", (req, res) => {
//     const barcode = req.params.barcode;
    /*
    const query = "SELECT * FROM goods";
    db.query(query, [barcode], (err, results) => {
        if (err) {
            console.error("Error executing query:", err);
            res.status(500).json({ error: "Internal Server Error" });
            return;
        }

        if (results.length === 0) {
            res.status(404).json({ error: "Product not found" });
            return;
        }

        res.json(results[0]);
    });
*/
    
// });

const http = require("http");
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
  res.json("hi");
});
const PORT = process.env.PORT || 8001; // Cafe24에서 제공하는 포트 사용
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// const PORT = process.env.PORT || 8001; // Cafe24에서 제공하는 포트 사용
// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });
