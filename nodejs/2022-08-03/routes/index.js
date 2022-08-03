// Router는 엔드포인트를 나누어 각 요청에 대한 처리를 한다.
const express = require("express");
const userRouter = express.Router();
const user = require("../controller/UserController");


// ~~/ 로 접속 시 UserController.js의 index 함수를 실행한다.
userRouter.get("/", user.index); 



// ~~/register 로 접속 시 UserController.js의 register 함수를 실행한다.
userRouter.get("/register", user.register); 



// ~~/register 로 접속 시 UserController.js의 post_register 함수를 실행한다.
userRouter.post('/register', user.post_register);



// ~~/login 로 접속 시 UserController.js의 login 함수를 실행한다.
userRouter.get('/login', user.login);



// ~~/login 로 접속 시 UserController.js의 post_login함수를 실행한다.
userRouter.post('/login', user.post_login);


// 경로와 컨트롤러 내의 함수를 연결시켜놓은 내용을 module로 내보낸다.
// 실행되는 최상위 파일에서  const router = require("./routes/index.js"); 로 모듈을 불러온다.
module.exports = userRouter; 
