USE sesac;

/* 실습 39. CREATE 문 */
CREATE TABLE user2 (
     id varchar(10) not null primary key,
     pw varchar(20) not null,
     name varchar(5) not null,
     gender ENUM('F', 'M', '') default '',
     birthday DATE not null,
     age int(3) not null default 0
);



/* 실습 40. INSERT 문 */
INSERT INTO user2 (id, pw, name, gender, birthday, age) VALUES ('hong1234', '8o4bkg', '홍길동', 'M', '1990-01-31', 33);
INSERT INTO user2 VALUES ('sexysung', '87awjkdf', '성춘향', 'F', '1992-03-31', 31);
INSERT INTO user2 VALUES ('power70', 'qxur8sda', '변사또', 'M', '1970-05-02', 53);
INSERT INTO user2 VALUES ('hanjo', 'jk48fn4', '한조', 'M', '1984-10-18', 39);
INSERT INTO user2 VALUES ('widowmaker', '38ewifh3', '위도우', 'F', '1976-06-27', 47);
INSERT INTO user2 VALUES ('dvadva', 'k3f3ah', '송하나', 'F', '2001-06-03', 22);
INSERT INTO user2 VALUES ('jungkrat', '4ifha7f', '정크랫', 'M', '1999-11-11', 24);


/* 전체 테이블 목록 확인 */
SELECT * FROM user2;


/* 실습 41-1. 모든 회원목록을 가져오는데, 이때 birtday 컬럼의 값을 기준으로 오름차순(ASC) 정렬하여 가져오시오. */
SELECT * FROM user2 ORDER BY birthday ASC;


/* 실습 41-2. 회원 목록 중 gender 컬럼의 값이 “M” 인 회원목록을 가져오는데, 이때 name 컬럼의 값을 기준으로 내림차순(DESC) 정렬하여 가져오시오. */
SELECT name FROM user2 WHERE gender = 'M' ORDER BY name DESC;




/* 실습 41-3. 1990 년대에 태어난 회원의 id, name 컬럼을 가져와 목록으로 보여주시오. */
SELECT name, birthday FROM user2 WHERE birthday LIKE '199%';


/* 실습 41-4. 6월 생 회원의 목록을 birthday 기준으로 오름차순 정렬하여 가져오시오. */
SELECT * FROM user2 WHERE birthday LIKE '%-06-%' ORDER BY birthday ASC;



/* 실습 41-5. 5. gender 컬럼의 값이 “M” 이고, 1970 년대에 태어난 회원의 목록을 가져오시오. */
SELECT * FROM user2 WHERE gender = 'M' AND birthday  LIKE '197%';


/* 실습 41-6. 6. 모든 회원목록 중 age를 기준으로 내림차순 정렬하여 가져오는데, 그때 처음 3개의 레코드만 가져오시오. */
SELECT * FROM user2 ORDER BY age DESC LIMIT 3;


/* 실습 41-7. 7. 모든 회원 목록 중 나이가 25이상 50이하인 회원의 목록을 출력하시오. */
SELECT * FROM user2 WHERE age BETWEEN 25 AND 50;
SELECT * FROM user2 WHERE age > 25;


/* 실습 41-8. 8. id 컬럼의 값이 hong1234 인 레코드의 pw 컬럼의 값을 12345678 로 변경하시오. */
SELECT * FROM user2 WHERE id = 'hong1234';


/* SET 바꿀 거 WHERE은 SET을 진행하기 위한 조건이다. */
UPDATE user2 SET pw = '12345678' WHERE id = 'hong1234';


/* 실습 41-9. 9. id 컬럼의 값이 jungkrat 인 레코드를 삭제하시오. */
DELETE FROM user2 WHERE id = 'jungkrat';
