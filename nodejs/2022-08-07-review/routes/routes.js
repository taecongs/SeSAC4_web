const express = require('express');
const router = express.Router();
const visitor = require('../controller/VisitorController.js');



// localhost:8081/visitor/ 경로로 접속 시 get_visitors 함수를 실행한다.
router.get('/', visitor.get_visitors);


// localhost:8081/visitor/write 경로로 접속 시 post_comment 함수를 실행한다.
router.post('/write', visitor.post_comment);



module.exports = router;