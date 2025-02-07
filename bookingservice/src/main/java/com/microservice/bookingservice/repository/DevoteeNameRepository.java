package com.microservice.bookingservice.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.microservice.bookingservice.entities.DevoteeName;

public interface DevoteeNameRepository extends JpaRepository<DevoteeName, Integer> {
}
