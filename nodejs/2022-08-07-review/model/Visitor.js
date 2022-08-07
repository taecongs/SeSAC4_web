const mysql = require('mysql');
const cnn = mysql.createConnection({
    host : 'localhost',
    user : 'user',
    password : 'taecongs',
    database : 'sesac'
});



// cb는 함수자체를 받은 상황이다.    
// Visitor.get_visitors(function(result){
//     console.log('result : ', result);
//     console.log('index');
//     res.render('index.ejs', {data : result});
// });


exports.get_visitors = (cb) => {
    cnn.query('SELECT * FROM visitor', (err, rows) => {

        if(err) throw err;

        // 실행을 하고 난 결과가 rows로 들어온다.
        // [RowDataPacket {id : 1, name : '홍길동', comment : '내가 왔다' }]
        console.log(rows);

        // rows의 값이 result의 값으로 호출된다.
        cb(rows);
    });
}


exports.insert = (name, comment, cb2) => {
    let sql = "INSERT INTO visitor (name, comment) VALUES ('" + name + "', '" + comment + "')";

    cnn.query(sql, (err, rows) => {

        if(err) throw err;

        console.log(rows);

        cb2(rows.insertId);
    })
}


