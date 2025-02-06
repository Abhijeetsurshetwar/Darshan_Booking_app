package com.microservice.authservice.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.microservice.authservice.entities.RefreshToken;

import java.util.Optional;

public interface RefreshTokenRepository extends JpaRepository<RefreshToken, Integer> {

    Optional<RefreshToken> findByToken(String token);

}
