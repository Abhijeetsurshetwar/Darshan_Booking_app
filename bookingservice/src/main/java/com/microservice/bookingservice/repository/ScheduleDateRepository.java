package com.microservice.bookingservice.repository;


import com.microservice.bookingservice.model.ScheduleDate;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ScheduleDateRepository extends JpaRepository<ScheduleDate, Long> {
    ScheduleDate findByDate(String date);
}
