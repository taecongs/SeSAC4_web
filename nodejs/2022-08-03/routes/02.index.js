// Router란? 네트워크에서 통신 데이터를 보낼 경로를 의미
const express = require('express');
const router = express.Router();
const user = require('../controller/03.UserController.js');




router.get('/', function(req, res) {
        res.send('index');
});


// router.get('/a', function(req, res) {
//     res.send('index');
// });

// get_user는 정의한 함수명 바뀌어도 상관없다.
router.get('/register', user.get_user);

router.get('/receive', user.get_receive);


module.exports = router;