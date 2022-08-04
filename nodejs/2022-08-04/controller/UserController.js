const User = require('../model/User.js');



/* ----------------------------------------------   실습 1   ----------------------------------------------*/
exports.register = (req, res) => {
    res.render('register.ejs');
}



exports.post_register = (req, res) => {
    User.post_user(req.body);
    res.send(req.body);
}



exports.login = (req, res) => {
    res.render('login.ejs');
}


// 실습 42. n명이 회원가입 했을 때 n명의 정보가 모두 저장되고, 각각 로그인 모두 가능하게 하기
exports.post_login = async (req, res) => {
    let userData = await User.get_user();

    // console.log(userData);

    let info = userData.split(/[\-\|\n]/);

    let firstInfo = info[0].split('/');
    let secondInfo = info[1].split('/');
    let thirdInfo = info[2].split('/');

    // taecongs/123/이제동/33
    console.log(firstInfo);
    console.log(secondInfo);
    console.log(thirdInfo);


    if (firstInfo[0] == req.body.username && firstInfo[1] == req.body.password) {
        res.send('로그인 성공');
    } else if (secondInfo[0] == req.body.username && secondInfo[1] == req.body.password) {
        res.send('로그인 성공');
    } else if (thirdInfo[0] == req.body.username && thirdInfo[1] == req.body.password) {
        res.send('로그인 성공');
    } else {
        res.send('아이디 또는 비밀번호를 확인해주세요');
    }
}





/* ----------------------------------------------   실습 2  ----------------------------------------------*/
exports.register2 = (req, res) => {
    res.render('register2.ejs');
}


exports.post_register2 = (req, res) => {
    User.post_user2(req.body, req.file);
    res.send(req.body);
}


exports.login2 = (req, res) => {
    res.render('login2.ejs');
}



// 실습 43. 회원가입 시 파일 업로드를 추가해 id로 파일 저장하기 (로그인 후 회원가입한 정보와 프로필 이미지 보이게 만들기)
exports.post_login2 = async (req, res) => {
    let userData2 = await User.get_user2();

    // console.log(userData);

    let info2 = userData2.split(/[\-\|\n]/);

    let firstInfo2 = info2[0].split('/');
    let secondInfo2 = info2[1].split('/');
    // let thirdInfo = info[2].split('/');


    let $one = firstInfo2[0];
    let $two = firstInfo2[1];
    let $three = firstInfo2[2];

    let $$one = secondInfo2[0];
    let $$two = secondInfo2[1];
    let $$three = secondInfo2[2];    


    

    if (firstInfo2[0] == req.body.username && firstInfo2[1] == req.body.password) {
        res.render('profile.ejs', {one: $one, two: $two, three: $three});
    } else if (secondInfo2[0] == req.body.username && secondInfo2[1] == req.body.password) {
        res.render('profile.ejs', {one: $$one, two: $$two, three: $$three});
    } else {
        res.send('아이디 또는 비밀번호를 확인해주세요');
    }
}

