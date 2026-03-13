const mysql = require('mysql2');
const http = require("http");

// 데이터베이스 연결 설정
const connection = mysql.createConnection({
  host: '10.0.0.1', // Cafe24에서 제공하는 DB 호스트
  user: 'test1mart', // DB 사용자 이름
  password: 'backery12!', // DB 비밀번호
  database: 'test1mart' // DB 이름
});

// 데이터베이스 연결
connection.connect((err) => {
  if (err) {
    console.error('데이터베이스 연결 실패: ' + err.stack);
    return;
  }
  console.log('데이터베이스에 연결되었습니다.');
});


// HTTP 서버 생성
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
  res.end("테이블 삭제 및 생성 작업이 완료되었습니다.");
});


const PORT = process.env.PORT || 8001; // Cafe24에서 제공하는 포트 사용
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
