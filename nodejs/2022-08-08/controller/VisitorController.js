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




// 2022-08-08 3번째 순서로 정의
exports.get_visitor = (req, res) => {
    // 검색을 하고자 하는 id 값(req.query.id)을 보내면서 그 결과를 어떻게 처리할지 함수를 정의
    Visitor.get_visitor(req.query.id, function(result3){
        // result3 은 row3의 결과값을 그대로 받는다.
        
        // result : [RowDataPacket {id : 5, name : '이제동', comment : '프로게이머 이제동입니다.'}]
        console.log('result : ', result3);
        
        //필요한 데이터만 보내기 위해 0번째 인덱스 즉, {id : 5, name : '이제동', comment : '프로게이머 이제동입니다.'} 만 보내겠다.
        res.send({result : result3[0]});
    });
}




exports.patch_comment = (req, res) => {
    // 전체 데이터(req.body)를 받고 있고 콜백함수로 넘어온 결과를 그대로 콘솔로그를 찍은 뒤 true를 보낸다.
    Visitor.update(req.body, function(result4){

        console.log(result4);

        // res.send(true);
        res.send('수정 성공');
    });
}





exports.delete_comment = (req, res) => {
    Visitor.delete(req.body.id, function(result5){

        console.log(result5);
        
        res.send('삭제 성공');
    })
}