package com.microservice.bookingservice.repository;

import com.microservice.bookingservice.model.DevoteeBooking;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DevoteeBookingRepository extends JpaRepository<DevoteeBooking, Long> {

}
