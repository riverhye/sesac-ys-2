package com.sesac.sesacspring.mapper;

import com.sesac.sesacspring.domain.User;
import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Update;

import java.util.List;

@Mapper
public interface UserMapper {
    // 둘중 한 작업 진행 : SQL 문 정의 or xml 파일 읽기

    // xml 파일을 읽어서 실행 (properties 에서 xml 위치 설정)
    List<User> retreiveAll();

    // sql 정의
    @Insert("insert into User(name, nickname) values(#{name}, #{nickname})")
    void createUser(String name, String nickname);
    // String name, String nickname 으로 각각 필드를 보내도 되고, User user 전체를 보내도 알아서 매핑해줌

    @Update("UPDATE User SET nickname = #{nickname} WHERE id=#{id}")
    void updateUser(int id, String nickname);

    @Delete("delete from User where id=#{id}")
    void deleteUser(int id);
}