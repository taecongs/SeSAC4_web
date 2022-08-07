const express = require('express');
const userRouter = express.Router();
const user = require('../controller/UserController.js');

const path = require('path');
const multer = require('multer');

const upload = multer({
    storage : multer.diskStorage({
        destination(req, file, done){
            done(null, 'uploads/');
        },

        filename(req, file, done){
            const ext = path.extname(file.originalname);
            done(null, req.body.id + ext);
        }
    })
});



/* ----------------------------------------------   실습 1   ----------------------------------------------*/

/* register 경로로 접속 시 Controller 에서 register 함수 실행 */
userRouter.get('/register', user.register);



/* register 경로로 접속 시 Controller 에서 post_register 함수 실행 */
userRouter.post('/register', user.post_register);



/* login 경로로 접속 시 Controller 에서 login 함수 실행 */ 
userRouter.get('/login', user.login);



/* login 경로로 접속 시 Controller 에서 post_login 함수 실행 */
userRouter.post('/login', user.post_login);





/* ----------------------------------------------   실습 2   ----------------------------------------------*/

/* register2 경로로 접속 시 Controller 에서 register2 함수 실행 */
userRouter.get('/register2', user.register2);



/* register2 경로로 접속 시 Controller 에서 post_register2 함수 실행 */
userRouter.post('/register2', upload.single('uploadfile'),  user.post_register2);



/* login 경로로 접속 시 Controller 에서 login 함수 실행 */ 
userRouter.get('/login2', user.login2);



/* login 경로로 접속 시 Controller 에서 post_login 함수 실행 */
userRouter.post('/login2', upload.single('uploadfile'),  user.post_login2);


module.exports = userRouter;
