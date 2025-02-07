package com.microservice.bookingservice.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.microservice.bookingservice.entities.DevoteeBooking;

public interface DevoteeBookingRepository extends JpaRepository<DevoteeBooking, Long> {

	List<DevoteeBooking> findByUserName(String userName);
}
