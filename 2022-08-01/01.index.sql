CREATE DATABASE sesac;
USE sesac;

CREATE TABLE user (
    ID varchar(10) not null primary key,
    name varchar(5) not null default '',
    birthday date not null
);

ALTER TABLE user drop column birthday;

ALTER TABLE user add column birthday date not null;

DESC user;


CREATE TABLE member (
    id varchar(20) not null primary key,
    name varchar(5) not null,
    age int(2),
    gender varchar(2) not null,
    email varchar(50),
    promotion varchar(2) default 'x'
);

ALTER TABLE member modify id varchar(10);
ALTER TABLE member drop column age;
ALTER TABLE member add column interest varchar(100);
ALTER TABLE member modify gender varchar(2) default '여';
ALTER TABLE member modify gender varchar(2) not null default '여';


INSERT INTO user (ID, name, birthday) VALUES ('id4', '홍길동', '2022-08-01');
INSERT INTO user (ID, birthday) VALUES ('id3', '2022-08-01');
INSERT INTO user VALUES ('PARK', '박현수', '2022-08-01');

SELECT * FROM user;
SELECT * FROM user WHERE name='홍길동';
SELECT * FROM user WHERE name='홍길동' ORDER BY ID DESC;
SELECT * FROM user ORDER BY ID DESC LIMIT 2;
SELECT * FROM user LIMIT 2;

SELECT name, birthday FROM user;

/* BETWEEN a AND b */
SELECT * FROM player WHERE height BETWEEN 160 AND 180;

/* IN */
SELECT * FROM player WHERE position IN ('striker', 'goalkeeper');
SELECT * FROM player WHERE position = 'striker' OR  position = 'goalkeeper';

/* LIKE _  % */
SELECT * FROM user WHERE name LIKE '_현수';
SELECT * FROM user WHERE name LIKE '__수';
SELECT * FROM user WHERE name LIKE '이%';

/* 현재 데이터를 모두 바꾸겠다. */
UPDATE user SET name = '홍길동', birthday = '2022-07-31' WHERE ID != '';
SELECT * FROM user;


/* */
DELETE FROM user WHERE name = '홍길동';