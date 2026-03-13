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

// 기존 테이블 삭제 쿼리
const dropTableQuery = "DROP TABLE IF EXISTS goods";

// 새 테이블 생성 쿼리
const createTableQuery = `
  CREATE TABLE goods (
    id INT AUTO_INCREMENT PRIMARY KEY,
    barcode VARCHAR(50),
    name VARCHAR(255),
    price VARCHAR(50),
    img VARCHAR(255),
    cdc VARCHAR(50),
    sdcs VARCHAR(50),
    fdcs VARCHAR(50),
    url TEXT,
    co VARCHAR(50),
    cdcs VARCHAR(50)
  )
`;

// 테이블 삭제
connection.query(dropTableQuery, (err, results) => {
  if (err) {
    console.error('테이블 삭제 실패:', err.message);
    return;
  }
  console.log('기존 테이블이 삭제되었습니다.');

  // 새 테이블 생성
  connection.query(createTableQuery, (err, results) => {
    if (err) {
      console.error('테이블 생성 실패:', err.message);
      return;
    }
    console.log('새 테이블이 성공적으로 생성되었습니다.');
    connection.end(); // 작업 완료 후 데이터베이스 연결 종료
  });
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
