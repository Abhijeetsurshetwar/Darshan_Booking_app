package com.microservice.bookingservice.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.NativeQuery;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.microservice.bookingservice.entities.ScheduleDate;

public interface ScheduleDateRepository extends JpaRepository<ScheduleDate, Long> {
    ScheduleDate findByDate(String date);
    
    @NativeQuery("SELECT * FROM schedule_date WHERE DATE = :date AND SCHEDULE_ID = :scheduleId")
    ScheduleDate findByDateAndSchedule_Id(@Param("date") String date, @Param("scheduleId") Long scheduleId);
}
