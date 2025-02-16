package com.microservice.authservice.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.microservice.authservice.entities.User;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Integer> {

    Optional<User> findByUsername(String username);

    Boolean existsByUsername(String username);

    Boolean existsByEmail(String email);

    User findById(int userId);
}
