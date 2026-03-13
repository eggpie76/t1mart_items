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

// 삽입할 데이터 배열
const data = [
  ['8803733376983', '락앤락 프리저핏 2.2L', '7100', 'mc_gc_foodcontainer', 'mc_gc_foodcontainer', 'N', 'ONEADD|SINGLE|SCALED|N,0|0,0|1+1,1+1,1+1', 'N#N', '락앤락', 'N#N'],
  ['8803733362320', '락앤락 프리저핏 3.2L', '8800', 'mc_gc_foodcontainer', 'mc_gc_foodcontainer', 'N', 'ONEADD|SINGLE|SCALED|N,0|0,0|1+1,1+1,1+1', 'N#N', '락앤락', 'N#N'],
  ['8801094000349', '제주감귤 1.5L', '6500', 'mc_fd_', 'mc_fd_juice', 'N', 'ONEADD|SINGLE|SCALED|N,0|0,0|1+1,1+1,1+1', 'N#N', '미닛메이드', 'N#N']
];

// SQL 쿼리 작성
const sqlquery = `
  INSERT INTO goods (barcode, name, price, img, cdc, sdcs, fdcs, url, co, cdcs)
  VALUES ?
`;

// 여러 개의 데이터 삽입
connection.query(sqlquery, [data], (err, results) => {
  if (err) {
    console.error('쿼리 실행 실패:', err.message);
    return;
  }
  console.log('데이터가 성공적으로 삽입되었습니다.');
  console.log('삽입된 행 수:', results.affectedRows);
});

// 연결 종료
connection.end();

// HTTP 서버 생성
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
  res.end("데이터가 성공적으로 삽입되었습니다.");
});

const PORT = process.env.PORT || 8001; // Cafe24에서 제공하는 포트 사용
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
