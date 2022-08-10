/* Router 란?
- 클라이언트 요청 경로(Path)를 보고 요청을 처리할 수 있는 곳으로 기능을 전달해주는 역할 
*/

const express = require('express');
const router = express.Router();
const user = require('../controller/MemberController.js');




// (1) 회원 가입

// localhost:8080/sign 경로로 접속 시 sign 함수를 실행
router.get('/sign', user.sign);

// localhost:8080/sign 경로로 접속 시 post_sign 함수를 실행
router.post('/sign', user.post_sign);



// (2) 로그인

// localhost:8080/login 경로로 접속 시 login 함수를 실행
router.get('/login', user.login);

// localhost:8080/login 경로로 접속 시 post_login 함수를 실행
router.post('/login', user.post_login);



// (3) 회원 정보 수정

router.post('/profile', user.profile);
router.post('/profile/edit', user.profile_edit);



// (4) 회원 탈퇴
router.post('/profile/delete', user.profile_delete);



module.exports = router;