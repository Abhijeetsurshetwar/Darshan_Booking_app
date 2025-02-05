package com.example.demo.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import com.example.demo.entities.User;

@Repository
public interface UserRepositories extends JpaRepository<User, Integer> {
	
	 @Query("SELECT u FROM User u WHERE u.uname = :uname")
	 Optional<User> findByUname(@Param("uname") String uname);
}
