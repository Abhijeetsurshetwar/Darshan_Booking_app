package com.microservice.bookingservice.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.microservice.bookingservice.entities.Schedule;


public interface ScheduleRepository extends JpaRepository<Schedule, Integer> {
}
