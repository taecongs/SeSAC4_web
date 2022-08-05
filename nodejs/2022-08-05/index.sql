CREATE TABLE visitor (
     id INT not null primary key auto_increment,
     name VARCHAR(10) not null,
     comment MEDIUMTEXT
);


DESC visitor;

INSERT INTO visitor (id, name, comment) VALUES (1, '홍길동', '내가 왔다');
INSERT INTO visitor (id, name, comment) VALUES (2, '이몽룡', '안녕 하시오');


SELECT * FROM visitor;