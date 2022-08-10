// const Visitor = require("../model/Visitor");
const models = require('../model');
// models => model/index.js 에서의 db

exports.get_visitors = (req,res) => {

    // models.Visitor == db.Visitor == Visitor(함수를 실행시킨 결과 값인 model)
    // models.Visitor은 model.Visitor.js 에서의 model

    // models.Visitor.findAll() 함수가 실행하면 알아서 처리한다.
    // sequlize 문법, Select % FROM visitor;
    models.Visitor.findAll()
    .then((result) => {
        console.log('result : ', result);
        console.log('index');
        res.render('index', {data : result});
    });

    // Visitor.get_visitors(function( result ){
    //     console.log( "result : ", result );
    //     console.log( "index" );
    //     res.render("index", { data: result });
    // });
}




exports.post_comment = (req,res) => {
    // 어떤 객체를 만들지에 대한 정보가 필요하다.    
    let object = {
        name : req.body.name,
        comment : req.body.comment
    }


    // create() => insert into visitor
    // create(object) => {name : 값 , comment : 값}
    // INSERT INTO visitor(name, comment) VALUES ('값1', '값2');
    models.Visitor.create(object)
    .then((result) => {
        console.log(result);
        
        // 기존의 mysql은 insert하면 insert된 결과를 알려준다. 
        // (insert를 했고 insert 된 id는 무엇이고, 바뀐게 있는지 없는지)
        // sequlize는 들어간 모든 데이터들을 다 보여준다.
        res.send({id : result.id});
    })

    // console.log( req.body );

    // Visitor.insert( req.body.name, req.body.comment, function( result ){
    //     res.send({ id: result });
    // } );
}




exports.get_visitor = (req,res) => {

    //  한 개의 데이터가 그대로 넘어온다.
    models.Visitor.findOne({
        // SELECT * FROM visitor where id = req.body.id limit 1;
        where : {id : req.query.id}
        // where : {id : req.query.id, name : '홍길동'}
    }).then((result) => {
        console.log(result);
        res.send({result : result});
    })


    // Visitor.get_visitor( req.query.id, function(result) {
    //     console.log( "result : ", result );
    //     res.send( { result : result[0] } );
    // })
}



/* 수정 */
exports.patch_comment = (req,res) => {
    let newObj = {
        name : req.body.name,
        comment : req.body.comment
    }

    // UPDATE visitor SET name = req.body.name, comment : req.body.comment where id = req.body.id
    // 수정할 객체와 조건을 보낸다.
    models.Visitor.update(newObj, {where : {id : req.body.id}})
    .then((result) => {
        console.log(result);
        res.send('수정 성공');
    })


    // Visitor.update( req.body, function(result){
    //     console.log( result );
    //     res.send( "수정 성공" );
    // });
}



/* 삭제 */
exports.delete_comment = (req,res) => {

    models.Visitor.destroy({
        where : {id : req.body.id}
    }).then((result) => {
        console.log(result);
        res.send('삭제 성공');
    })


    // Visitor.delete( req.body.id, function(result){
    //     console.log( result );
    //     res.send( "삭제 성공" );
    // });
}