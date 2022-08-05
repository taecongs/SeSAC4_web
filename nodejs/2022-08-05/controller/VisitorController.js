const Visitor = require('../model/Visitor.js');

exports.register = (req, res) => {
    Visitor.register(function(result){
        // result 는 cb(rows)의 값이 호출되어 가져온다.
        console.log('result : ', result);
        console.log('index');
        res.render('index.ejs', {data : result});
    });
}





exports.post_comment = (req, res) => {
    console.log(req.body);

    // req.body.name, req.body.comment를 insert를 보낸다.
    Visitor.insert(req.body.name, req.body.comment, function(result2){
        // result2 는 cb(rows.insertId)의 값이 호출되어 가져온다.
        res.send({id : result2});
    });

}