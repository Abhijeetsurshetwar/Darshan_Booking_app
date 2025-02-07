package com.microservice.authservice.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.microservice.authservice.entities.ERole;
import com.microservice.authservice.entities.Role;

import java.util.Optional;

public interface RoleRepository extends JpaRepository<Role, Integer> {

    Optional<Role> findByName(ERole name);
}
