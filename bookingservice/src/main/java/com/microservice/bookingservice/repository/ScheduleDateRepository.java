package com.microservice.bookingservice.repository;


import org.springframework.data.jpa.repository.JpaRepository;

import com.microservice.bookingservice.entities.ScheduleDate;

public interface ScheduleDateRepository extends JpaRepository<ScheduleDate, Long> {
    ScheduleDate findByDate(String date);
}
