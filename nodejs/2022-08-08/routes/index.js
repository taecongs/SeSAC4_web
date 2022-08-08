const express = require('express');
const userRouter = express.Router();
const user = require('../controller/VisitorController');



// localhost:8080/visitor/ 경로로 접속 시 register 함수를 실행한다.
userRouter.get('/', user.register);


// localhost:8080/visitor/write 경로로 접속 시 post_comment 함수를 실행한다.
userRouter.post('/write', user.post_comment);



// 2022-08-08 2번째 순서로 정의
userRouter.get('/get', user.get_visitor);



userRouter.patch('/edit', user.patch_comment);



userRouter.delete('/delete', user.delete_comment);



module.exports = userRouter;