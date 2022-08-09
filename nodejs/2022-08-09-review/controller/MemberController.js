/* Controller 란?
- 사용자 요청을 받고 응답
- Model을 호출하여 Model의 상태 변경 가능 
- View에 명령을 내려 데이터를 보여준다.
*/

const User = require('../model/model.js');



// (1) 회원 가입
exports.sign = (req, res) => {
    // 화면에 랜더링 하여 sign.ejs 파일을 보여준다.
    res.render('sign.ejs');
}


exports.post_sign = (req, res) => {
    User.post_sign(req.body, function(result){

        // {id : '', pw : '', name : '', email: ''} 
        console.log(req.body);

        res.send(true);
    });
}



// (2) 로그인
exports.login = (req, res) => {
    res.render('login.ejs');
}


exports.post_login = (req, res) => {
    User.post_login(req.body.id, req.body.pw, function(result){
        if(result.length > 0){
            res.send(true);
        } else{
            res.send(false);
        }
    });
}





// (3-1) 회원 정보 수정
exports.profile = (req, res) => {
    User.get_user(req.body.id, function(result){
        if(result.length > 0){
            // console.log(result.length);
            res.render('profile.ejs', {data : result[0]});
        } else{
            res.redirect('/login');
        }
    });
}



exports.profile_edit = (req, res) => {
    User.update_profile(req.body, function(result){
        res.send('회원정보 수정 성공');
    });
}



// (4) 회원 탈퇴 
exports.profile_delete = (req,res) => {
    User.delete_user(req.body.id, function(result){
        res.redirect("/sign");
    })
}