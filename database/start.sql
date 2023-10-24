-- CREATE new database
CREATE DATABASE sesac_test DEFAULT CHARACTER SET utf8mb4 DEFAULT COLLATE utf8m
b4_unicode_ci;

-- choose the database
use sesac_test;

-- see all databases
show databases;
-- cf) another way
select * from user;

-- CREATE new table
CREATE TABLE user (
	id varchar(10) PRIMARY KEY not null,
    password varchar(20) not null,
    age int unsigned
);

-- operate column
-- 1) ADD column in the table
ALTER TABLE user ADD gender enum('여자', '남자') not null;
-- 2) delete(DROP COLUMN) column in the table
ALTER TABLE user DROP COLUMN age;
-- 3) MODIFY column in the table
ALTER TABLE user MODIFY gender varchar(3) not null;

-- operate table
-- 1) delete(DROP) table
DROP TABLE user;



-- CREATE a table
use sesac_test;
create table member (
	id varchar(20) primary key not null,
    name varchar(5) not null,
    age int,
    gender varchar(2) not null,
    email varchar(50),
    promotion varchar(2) default 'x'
);

desc member;

-- Alter the table
alter table member add interest varchar(100);
alter table member modify id varchar(10);
alter table member drop column age;

-- Insert : 데이터 추가 (2 ways)
insert into user (id, password) values ('une', '1234');
insert into user values ('une2', '1234', 44);

-- Select : 데이터 조회
select * from user;
select age, id from user;

-- Update : Where 조건 넣어서
-- 반드시 PK로 where 검색
update customer set custname = '강해랑' where custid = 'bunny';

-- delete
-- 이 데이터를 참조하는 데이터가 있을 경우(orders table FK) 삭제 ERROR !
-- orders에서 해당 데이터 먼저 삭제 후 다시
-- orders table FK가 customer table PK여서 삭제 가능
delete from orders where custid = 'wow123';
delete from customer where custid = 'wow123';



-- prac
-- 1.
select * from user order by birthday asc;

-- 2.
select * from user where gender = 'M' order by name desc;

-- 3.
select id, name from user where birthday between '1990-01-01' and '1999-12-31';

-- 4.
select * from user where birthday like '%06%';

-- 5.
select * from user where gender = 'M' and birthday like '1970%';

-- 6.
select * from user order by age desc limit 3;

-- 7.
select * from user where age between 25 and 50;

-- 8.
update user set pw = '12345678' where id = 'hong1234';

select * from user where pw = '12345678';

-- 9.
delete from user where id = 'jungkrat';



-- 집계함수
-- 전체 tuple의 개수 count (& as '')
select count(*) as 'total_orders' from orders;
-- 만약 속성을 기입하면 null 값은 포함하지 않고 count

-- select에서 group by 사용 시, 상관 없는 속성은 select 하지 않기로
-- 고객별 주문 횟수 : 집계함수와 group by
select custid, count(*) as 'order_count' from orders group by custid;

-- 고객별 전체 상품 주문 개수 합
select custid, sum(amount) as 'total_amount' from orders group by custid;

-- 고객별 구매한 상품 개수가 5 이상
select custid, sum(amount) as 'total_amount' from orders group by custid having total_amount >= 5;
-- 고객별 구매한 상품 개수가 5이상 & custid가 bunny 아닌
select custid, sum(amount) as 'total_amount' from orders where custid!='bunny' group by custid having total_amount >= 5;

-- 고객별 전체 결제 금액
select custid, sum(price*amount) as 'total_price' from orders group by custid;

-- inner join : 테이블 합치기
-- 주문별 배송지
select customer.addr, orders.* from customer inner join orders on customer.custid = orders.custid;
