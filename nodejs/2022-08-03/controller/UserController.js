const User = require('../model/User.js');

exports.index = (req,res) => {
    res.render("index.ejs");
}

exports.register = (req,res) => {
    res.render('register.ejs');
}


exports.post_register = (req,res) => {
    // controller에서 post_register가 실행되면 그 안에 있는 post_user라는 함수가 실행되고 
    // Model에 있는 post_user의 매개변수인 Data에 값이 할당되어 해당 코드가 진행되며 그 후 실행된 코드를 가져온다.
    User.post_user(req.body);
    res.send(req.body);
}


exports.login = (req,res) => {
    // 로그인 화면을 랜더링하여 보여준다.
    res.render('login.ejs');
}



exports.post_login = async (req,res) => {
    // controller에서 post_login가 실행되면 그 안에 있는 Model에 있는 get_user 코드가 실행가 실행한다. 
    // 그 후 실행된 코드의 결과 값을 가져온다. 결국 userData에는 asdlqw12345/123/이제동/34 가 담긴다.
    let userData = await User.get_user();

    let info = userData.split('/');

    if (info[0] != req.body.username){
        res.send('아이디 다름');
    } else if (info[1] != req.body.password){
        res.send('비밀번호 다름')
    } else{
        res.send('로그인 성공');
    }

    console.log(userData);
}