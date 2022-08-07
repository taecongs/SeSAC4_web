const express = require('express');
const userRouter = express.Router();
const user = require('../controller/VisitorController');



// localhost:8080/visitor/ 경로로 접속 시 register 함수를 실행한다.
userRouter.get('/', user.register);


// localhost:8080/visitor/write 경로로 접속 시 post_comment 함수를 실행한다.
userRouter.post('/write', user.post_comment);



module.exports = userRouter;