package com.microservice.bookingservice.repository;

import com.microservice.bookingservice.model.Schedule;
import org.springframework.data.jpa.repository.JpaRepository;


public interface ScheduleRepository extends JpaRepository<Schedule, Long> {
}
