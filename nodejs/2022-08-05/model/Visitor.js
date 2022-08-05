const mysql = require('mysql');
const cnn = mysql.createConnection({     // 하나의 DB만 연결 가능하다.    
    host : 'localhost',      // 로컬호스트 또는 아이피 주소
    user : 'user',           // user, password, databse는 mysql에 관련된 정보 작성
    password : 'taecongs',
    database : 'sesac'   
});


/*
cb는 함수자체를 받은 상황이다.    
Visitor.register(function(result){
        console.log('result : ', result);
        console.log('index');
        res.render('index.ejs', {data : result});
    });
*/


exports.register = (cb) => {

    // ''는 sql문을 가져온다.
    cnn.query('SELECT * FROM visitor', (err, rows) => {

        // 실행을 하고 난 결과 {} 부분에 들어온다.
        if(err) throw err;

        // rows => [RowDataPacket {id : 1, name : '홍길동', comment : '내가 왔다' }]
        console.log(rows);

        // rows의 값이 result의 값으로 호출된다.
        cb(rows);
    });
}




// controller Visitor.insert(req.body.name, req.body.comment)의 값을 name, comment가 받는다.
exports.insert = (name, comment, cb2) => {
    let sql = "INSERT INTO visitor (name, comment) VALUES ('" + name + "', '" + comment + "')"; 
    // sql을 실행하고 err 발생하면 err 출력 정상적으로 작성되면 console.log 출력
    cnn.query(sql, (err, rows) => {
        if(err) throw err;

        // OkPacket{}으로 나온다.
        console.log(rows);

        // rows.inserId 값이 result2의 값으로 호출된다.
        cb2(rows.insertId);
    })
}