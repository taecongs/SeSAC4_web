/* Controller 란?
- 사용자 요청을 받고 응답
- Model을 호출하여 Model의 상태 변경 가능 
- View에 명령을 내려 데이터를 보여준다.
*/

// const User = require('../model/model.js');

const models = require('../model/model.js');



// (1) 회원 가입
exports.sign = (req, res) => {
    // 화면에 랜더링 하여 sign.ejs 파일을 보여준다.
    res.render('sign.ejs');
}


exports.post_sign = (req, res) => {
    let user = {
        id : req.body.id,
        pw : req.body.pw,
        name : req.body.name,
        email : req.body.email
    }

    models.Members.create(user)
    .then((result) => {
        console.log(result);
        res.send(true);
    })


    // User.post_sign(req.body, function(result){

    //     // {id : '', pw : '', name : '', email: ''} 
    //     console.log(req.body);

    //     res.send(true);
    // });
}



// (2) 로그인
exports.login = (req, res) => {
    res.render('login.ejs');
}


exports.post_login = (req, res) => {
    models.Members.findOne({
        where : {id : req.body.id, pw : req.body.pw}
    }).then((result) => {
        if(result){
            res.send(true);
        } else{
            res.send(false);
        }
    })

    // User.post_login(req.body.id, req.body.pw, function(result){
    //     if(result.length > 0){
    //         res.send(true);
    //     } else{
    //         res.send(false);
    //     }
    // });
}





// (3-1) 회원 정보 수정
exports.profile = (req, res) => {
    models.Members.findAll({
        where : {id : req.body.id}
    }).then((result) => {
        if(result){
            res.render('profile.ejs', {data : result[0]});
        } else{
            res.redirect('/login');
        }
    })

    // User.get_user(req.body.id, function(result){
    //     if(result.length > 0){
    //         // console.log(result.length);
    //         res.render('profile.ejs', {data : result[0]});
    //     } else{
    //         res.redirect('/login');
    //     }
    // });
}



exports.profile_edit = (req, res) => {
    let newObj = {
        pw : req.body.pw,
        name : req.body.name,
        email : req.body.email
    }

    models.Members.update(newObj, {where : {id : req.body.id}})
    .then((result) => {
        console.log(result);
        res.send('수정 성공');
    })

    // User.update_profile(req.body, function(result){
    //     res.send('회원정보 수정 성공');
    // });
}



// (4) 회원 탈퇴 
exports.profile_delete = (req,res) => {
    models.Members.destroy({
        where : {id : req.body.id}
    }).then((result) => {
        console.log(result);
        res.send('삭제 성공');
    })

    // User.delete_user(req.body.id, function(result){
    //     res.redirect("/sign");
    // })
}