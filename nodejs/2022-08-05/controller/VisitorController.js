const Visitor = require('../model/Visitor.js');

exports.register = (req, res) => {
    Visitor.register(function(result){
        // result는 Visitor.js의 cb(rows)의 값이 호출되어 가져온다.
        console.log('result : ', result);
        console.log('index');
        // 화면에 랜더링하여 보여지며 키 : 값으로 정의 하여 index.ejs로 정보를 보낸다.
        res.render('index.ejs', {data : result});
    });
}





exports.post_comment = (req, res) => {
    console.log(req.body);

    // req.body.name, req.body.comment를 Visitor.js의 insert로 정보를 보낸다.
    Visitor.insert(req.body.name, req.body.comment, function(result2){

        // result2는 cb2(rows.insertId)의 값이 호출되어 가져온다.
        res.send({id : result2});
    });

}