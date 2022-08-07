// Router란?
// 클라이언트의 요청 경로(path)를 보고 이 요청을 처리할 수 있는 곳으로 기능을 전달해주는 역할

const express = require('express');
const userRouter = express.Router();
const user = require('../controller/UserController2.js');




// localhost:8081/user/register로 접속시 register 함수 실행
userRouter.get('/register', user.register);


userRouter.post('/register', user.post_register);


userRouter.get('/login', user.login);


userRouter.post('/login', user.post_login);




// 경로와 컨트롤러 내의 함수를 연결시켜놓은 내용을 모듈로 내보낸다.
module.exports = userRouter;