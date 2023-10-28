use sesac_test;

create table visitor(
	id int not null primary key auto_increment,
    username varchar(10) not null,
    comment mediumtext
) ;

select * from visitor;

insert into visitor (username, comment) values('홍길동', '내가 왔다');
insert into visitor (username, comment) values('이찬혁', '엥');

create user 'user'@'%' identified by 'name123$';
grant all privileges on *.* to 'user'@'%' with grant option;
-- 이전 캐시 지우고 설정 반영
flush privileges;

-- mysql db에서 user 관리 중
select host, user from mysql.user;
-- db 보면 진짜 mysql 있다
show databases;

alter user 'user'@'%' identified with mysql_native_password by 'name123$';