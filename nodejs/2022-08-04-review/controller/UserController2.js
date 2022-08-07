// Controller란?
// 사용자의 요청을 받고 응답하는 곳이다. (View와 Model을 연결해주는 부분)

const User = require('../model/User2.js');


exports.register = (req, res) => {
    res.render('register3.ejs');
}


exports.post_register = (req, res) => {
    User.post_user(req.body);
    res.send(req.body);
}



exports.login = (req, res) => {
    res.render('login3.ejs');
}



exports.post_login = async (req, res) => {
    let data = await User.get_user();

    let infos = data.split('\n');
    // console.log(infos);
    // console.log(infos.length);

    /*
    for(let i = 0; i < infos.length; i++){
        // i = 0, infos[i] = '1/2/3/4';
        let info = infos[i].split('/');
        console.log(info[0]);
        console.log(info[1]);
        if(info[0] == req.body.username && info[1] == req.body.password){
            res.send('성공');
            return false;
        } 
    }
    */

    var flag = false;
    for ( let i = 0; i < infos.length; i++ ){
        // i = 0, infos[i] = "1//1//1//1";
        var info = infos[i].split("/");
        if ( info[0] == req.body.username && info[1] == req.body.password ) flag  = true;
        console.log(info[0]);
    }
    
    if ( flag ) res.send("성공");
    else res.send("실패");
}