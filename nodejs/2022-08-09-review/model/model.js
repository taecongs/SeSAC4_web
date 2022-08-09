/* Model 이란?
- 데이터를 처리하는 부분
- 어떤 데이터가 들어가는 정의
*/

const mysql = require('mysql');
const cnn = mysql.createConnection({     
    host : 'localhost',      
    user : 'user',  
    password : 'taecongs',
    database : 'sesac'   
});



// (1)회원 가입
exports.post_sign = (data, cb) => {
    // data = req.body
    let sql = `INSERT INTO membership VALUES('${data.id}', '${data.pw}', '${data.name}', '${data.email}');`;

    // (1)sql을 실행한다. => (2)오류가 발생하면 err => (3)정상적으로 실행한다면 rows에 입력한 정보가 담긴다.
    cnn.query(sql, function(err, rows){

        if(err) throw err;

        cb(rows);

        // (4)rows = OkPacket {} 형태로 정의
        console.log(rows);
    });
}



// (2) 로그인
exports.post_login = (id, pw, cb) => {
    // let sql = `SELECT * FROM membership WHERE id = '${id}' AND pw = '${pw}' limit 1;`;
    let sql = `SELECT * FROM membership WHERE id = '${id}' AND pw = '${pw}'`;
    // console.log(sql);

    // (1)sql을 실행한다. => (2)오류가 발생하면 err => (3)정상적으로 실행한다면 rows에 입력한 정보가 담긴다.
    cnn.query(sql, function(err, rows){

        if(err) throw err;

        cb(rows);

        // rows = OkPacket {} 형태로 정의
        // console.log(rows);
    });
}






// (3) 회원 정보 수정
exports.get_user = (id, cb) => {
    // let sql = `SELECT * FROM membership WHERE id = ${'id'} limit 1;`;
    let sql = `SELECT * FROM membership WHERE id = '${id}'`;
    // console.log(sql);

    cnn.query(sql, function(err, rows){

        if(err) throw err;

        cb(rows);
    });
}


exports.update_profile = (data, cb) => {
    let sql = `UPDATE membership SET pw = '${data.pw}', name = '${data.name}', email = '${data.email}' WHERE id = '${data.id}'`;
    
    cnn.query(sql, (err, rows) => {
        console.log(sql);

        if(err) throw err;

        cb(rows);
    })
}



// (4) 회원 탈퇴 
exports.delete_user = (id, cb) => {
    cnn.query(`DELETE FROM membership WHERE id = '${id}'`, (err, rows) => {
        if (err) throw err;
        cb(rows);
    });
}

