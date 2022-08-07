const Visitor = require('../model/Visitor.js');


exports.get_visitors = (req, res) => {
    Visitor.get_visitors(function(result){
        // result는 Visitor.js의 cb(rows)의 값이 호출되어 가져온다.
        console.log('result :', result);

        // 화면에 랜더링하여 보여지며 키 : 값으로 정의 하여 index.ejs로 보낸다.
        res.render('index.ejs', {data : result});
    })
}




exports.post_comment = (req, res) => {
    console.log(req.body);

    Visitor.insert(req.body.name, req.body.comment, function(result2){
        res.send({id : result2});
    })
}