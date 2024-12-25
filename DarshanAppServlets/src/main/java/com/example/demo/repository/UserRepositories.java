package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import com.example.demo.entities.User;

@Repository
public interface UserRepositories extends JpaRepository<User, Integer> {
	
	@Query("select u.uid from User u where u.uname= :uname")
	Integer getuid(@Param("name") String uname);
	
	 User findByUnameAndPassword(String uname, String password);

}