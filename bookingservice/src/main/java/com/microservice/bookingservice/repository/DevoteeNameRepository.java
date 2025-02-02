package com.microservice.bookingservice.repository;

import com.microservice.bookingservice.model.DevoteeName;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DevoteeNameRepository extends JpaRepository<DevoteeName, Integer> {
}
