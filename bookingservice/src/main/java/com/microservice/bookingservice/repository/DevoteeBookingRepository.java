package com.microservice.bookingservice.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.microservice.bookingservice.entities.DevoteeBooking;

public interface DevoteeBookingRepository extends JpaRepository<DevoteeBooking, Long> {

}
